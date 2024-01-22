import React from 'react';
import './About.css';

const About = () => {
    // Divide the text into paragraphs for better readability
    const paragraphs = [
        "Hey there! I'm the wizard behind the screen, turning coffee ☕ into code 👨‍💻. My journey started in the mystical lands of web development, where I conjured websites out of thin air 🌬️🌐.",
        "Then I stumbled into the blockchain realm and thought, \"Why not mix potions?\" 🤷‍♂️🔮 So, I brewed a concoction of blockchain and web dev, creating some spellbinding dapps that even I can't stop talking about 🤩📈.",
        "Next up, I flirted with machine learning, because why have static websites when they can predict what you're thinking, right? 🤔💭 (Just kidding, I haven't mastered mind-reading...yet 🙃).",
        "I'm on a never-ending quest 🛤️ to expand my arsenal of tech spells 📚✨. If you're up for an adventure in innovation and don't mind a few coding puns, give me a shout 📢. Let's make some digital magic together 🌟💫!"
    ];

    return (
        <div className="about-container">
            <h1 className="about-heading title"><span>About Me🙋</span></h1>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="about-description">{paragraph}</p>
            ))}
        </div>
    );
};

export default About;
