import React from 'react';
import './MyExperience.css';
// Add import statements for any icons or images you'll use.

const MyExperience = () => {
    const experiences = [
        {
            company: 'StreamNFT',
            duration: '9 mos',
            location: 'Bangalore, India - Remote',
            role: 'Solidity Developer',
            timeFrame: 'Jun 2023 - Present',
            skills: [
                'Solidity',
                'Smart contract testing',
                'Web3',
                'API Testing',
                'API Development',
                'NodeJs',
                'Ethereum',
                'Tron',
                'Binance',
                'Postman'
            ],
        },
        {
            company: 'Aquaria Solutions',
            duration: '2 mos',
            location: 'Hyderabad, India - Remote',
            role: 'Blockchain Developer',
            timeFrame: 'Apr 2023 - May 2023',
            skills: [
                'SDK development',
                'Solidity',
                'Smart contract testing',
                'Web3',
                'API Testing',
                'API Development',
                'NodeJs',
                'Ethereum',
                'Hedera',
                'Postman'
            ],
        },

        {
            company: 'SkillVertex',
            duration: '2 mos',
            location: 'Bangalore, India - Remote',
            role: 'Cyber Security Intern',
            timeFrame: 'Oct 2022 - Nov 2022',
            skills: [
                'Kali linux',
                'Bash Scripting',
                'Network Security',
                'Information Security',
                'Wireshark',
                'Burp Suite',
            ],
        },

        {
            company: 'Corizo',
            duration: '2 mos',
            location: 'Bangalore, India - Remote',
            role: 'Cyber Security Intern',
            timeFrame: 'Oct 2022 - Nov 2022',
            skills: [
                'Kali linux',
                'Bash Scripting',
                'Network Security',
            ],
        },
    ];

    return (
        <div className="experience-container">
            <h1 className="about-heading title"><span>My Experience🌟</span></h1>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-details">
                        {exp.role} | {exp.timeFrame} | {exp.location}
                    </p>
                    <ul className="experience-skills">
                        {exp.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                        ))}
                    </ul>
                    {/* Display your certificate of completion if needed */}
                </div>
            ))}
        </div>
    );
};

export default MyExperience;
