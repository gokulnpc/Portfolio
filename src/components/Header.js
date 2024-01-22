import React, { useState, useEffect } from 'react';
import './Header.css'; // make sure to create this CSS file

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'header scrolled' : 'header'}>
            Hello world
        </header>
    );
};

export default Header;
