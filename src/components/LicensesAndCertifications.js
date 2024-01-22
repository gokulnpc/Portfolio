import React from 'react';
import './LicensesAndCertifications.css';
// Import images for the certificates preview if available
import aiml from "../assets/certs/aiml.png";
import ibm from "../assets/certs/ibm.png";
import web from "../assets/certs/web.png";
const licensesAndCertifications = [
    {
        title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
        certificatePreview: aiml, // Replace with the imported image if available
    },
    {
        title: "Artificial Intelligence Analyst",
        certificatePreview: ibm, // Replace with the imported image if available
    },
    {
        title: "The Complete 2022 Web Development Bootcamp",
        certificatePreview: web, // Replace with the imported image if available
    },
    {
        title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
        certificatePreview: aiml, // Replace with the imported image if available
    },
    // Add other certification objects here
];

const LicensesAndCertifications = () => {
    return (
        <div className="cert-container">
            <h1 className="about-heading title"><span>Licenses & Certifications🏆</span></h1>
            <div className="cert-cards-container">
                {licensesAndCertifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                        {cert.certificatePreview && (
                            <div className="cert-preview">
                                <img src={cert.certificatePreview} alt="Certificate Preview" />
                            </div>
                        )}
                        <div className="cert-info">
                            <h3 className="cert-name">{cert.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LicensesAndCertifications;

