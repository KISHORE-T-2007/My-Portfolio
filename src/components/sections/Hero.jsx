import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from '../Terminal';

const Hero = () => {
    const texts = [
        "Security Analyst.",
        "Malware Developer.",
        "Local AI Researcher.",
        "Full-Stack Web Dev."
    ];
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(120);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setCurrentText(isDeleting 
                ? fullText.substring(0, currentText.length - 1) 
                : fullText.substring(0, currentText.length + 1)
            );

            setTypingSpeed(isDeleting ? 40 : 120);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed + (Math.random() * 50));
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

    return (
        <section id="hero" className="section-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
                <p className="sys-msg">&gt; System initialized...</p>
                <h1 className="glitch" data-text="KISHORE T">KISHORE T</h1>
                <h2 className="typing-text">{currentText}</h2>
                <p className="hero-desc">
                    Computer Science Engineering student focused on Cyber Security, penetration
                    testing, and AI systems. Transforming theoretical concepts into secure, functional software.
                </p>
                <a href="#projects" className="btn primary-btn clickable" style={{ marginBottom: '20px' }}>Initialize_Protocol(Projects)</a>
                
                <Terminal />
            </motion.div>
        </section>
    );
};

export default Hero;
