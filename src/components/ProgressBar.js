import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Ensure to create this CSS file

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (currentScrollY / maxScrollY) * 100;
        setScroll(scrollProgress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
        </div>
    );
};

export default ProgressBar;
