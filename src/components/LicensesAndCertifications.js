
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './LicensesAndCertifications.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LicensesAndCertifications.css';
// Import images for the certificates preview if available
import aiml from "../assets/certs/aiml.png";
import ibm from "../assets/certs/ibm.png";
import web from "../assets/certs/web.png";
import mdpi from "../assets/certs/mdpi.png";
import iitm from "../assets/certs/iitm.png";
import postman from "../assets/certs/postman.png";
import nndp from "../assets/certs/nn&dp.png";
import dv from "../assets/certs/dv.png";
import Pandas from "../assets/certs/Pandas.png";
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';

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
        title: "Certificate of Acceptance MDPI Reseach Paper",
        certificatePreview: mdpi, // Replace with the imported image if available
    },
    {
        title: "Blockchain & Cryptocurrency: IIT Madras CCE",
        certificatePreview: iitm, // Replace with the imported image if available
    },
    {
        title: "Postman API Fundamentals Student Expert",
        certificatePreview: postman, // Replace with the imported image if available
    },
    {
        title: "Neural Networks and Deep Learning",
        certificatePreview: nndp, // Replace with the imported image if available
    },
    {
        title: "Data Visualization",
        certificatePreview: dv, // Replace with the imported image if available
    },
    {
        title: "Pandas",
        certificatePreview: Pandas, // Replace with the imported image if available
    },
    // Add other certification objects here
];
const LicensesAndCertifications = () => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleMouseEnter = () => {
        sliderRef.current.slickPlay(); // Start auto-playing the slides
    };

    const handleMouseLeave = () => {
        sliderRef.current.slickPause(); // Pause auto-playing the slides
    };
    return (
        <div className="cert-container" >
            <h1 className="about-heading title"><span>Licenses & Certifications🏆</span></h1>
            <Slider ref={sliderRef} {...settings} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {licensesAndCertifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                        {cert.certificatePreview && (
                            <div className="cert-preview">
                                <img src={cert.certificatePreview} alt="Certificate Preview" style={{ borderRadius: '0', height: '100%' }} />
                            </div>
                        )}
                        <div className="cert-info">
                            <h3 className="cert-name">{cert.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LicensesAndCertifications;