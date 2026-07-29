import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">KT<span className="blink">_</span></div>
            <ul className="nav-links">
                <li><a href="#about" data-text="01. About">01. About</a></li>
                <li><a href="#skills" data-text="02. Skills">02. Skills</a></li>
                {/* Redirects to Github as requested */}
                <li><a href="https://github.com/Itzkishore" target="_blank" rel="noopener noreferrer" data-text="03. Projects" className="clickable">03. Projects</a></li>
                <li><a href="#education" data-text="04. Education">04. Education</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
