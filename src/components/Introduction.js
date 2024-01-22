import React, { useState, useEffect } from 'react';
import './Introduction.css';
import profileImage from '../assets/img/gokul.JPEG'; // Update the path to your image
import { FaDownload } from 'react-icons/fa'; // Ensure you have react-icons installed
import { Linkedin, Github, Mailbox } from 'react-bootstrap-icons';
import resumeFile from './Resume_Gokuleshwaran.pdf'; // Update the path to your resume file

const name = "Gokuleshwaran";
const nameSpans = [...name].map((letter, index) => (
    <span key={index} style={{ '--i': index }}>{letter}</span>
));

const phrases = [
    "Blockchain Developer",
    "Machine Learning Enthusiast",
    "Full-Stack Web Developer"
];

const emojis = ["😁", "😊", "😃", "😄", "😆", "😊", "😅", "🙂", "😌"];


const Introduction = () => {

    const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
    const [emojiIndex, setEmojiIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 250); // change emoji every 500ms

        setCurrentEmoji(emojis[emojiIndex]);

        return () => clearTimeout(timer);
    }, [emojiIndex]);

    const [tagline, setTagline] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        // Typing Effect
        if (!isDeleting && tagline.length < phrases[phraseIndex].length) {
            timeout = setTimeout(() => {
                setTagline(phrases[phraseIndex].substring(0, tagline.length + 1));
            }, 100);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setTagline(phrases[phraseIndex].substring(0, tagline.length - 1));
            }, 50);
        }

        // Phrase Change Effect
        if (!isDeleting && tagline === phrases[phraseIndex]) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && tagline === "") {
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [tagline, phraseIndex, isDeleting]);

    return (
        <div className="introduction-container">
            <div className="text-container">
                <p className="greeting">Hello World!!! {currentEmoji}</p>
                <h1 className="name"><span>I</span> <span>a</span><span>m</span> {nameSpans}</h1>
                <p className="tagline">{tagline}<span className="cursor">|</span></p>
                <br />
                {/* <button className="resume-button">
                    <FaDownload /> Download Resume
                </button> */}
                <a href={resumeFile} download="Resume_Gokuleshwaran.pdf" className="resume-link">
                    <button className="resume-button">
                        <FaDownload /> Download Resume
                    </button>
                </a>




                <p className="email"></p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/gokulnpc/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={30} style={{ paddingLeft: '0px' }} />
                    </a>
                    <a href="https://github.com/gokulnpc" target="_blank" rel="noopener noreferrer"><Github size={30} style={{ paddingLeft: '0px' }} /></a>
                    <a href="mailto:gokulnpc@gmail.com" target="_blank" rel="noopener noreferrer"><Mailbox size={30} style={{ paddingLeft: '0px' }} /></a>
                </div>
            </div>
            <div className="profile-picture">
                <img src={profileImage} alt="Profile" />
            </div>
        </div >
    );
};

export default Introduction;
