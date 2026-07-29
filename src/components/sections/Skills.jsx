import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../TiltCard';

const Skills = () => {
    const tools = [
        "Strom-Breaker", "XSS & SQLi", "IPGhost", "Keylogger (Secreak)", "Nmap", 
        "Zenmap", "Wireshark", "BurpSuite", "SELinux", "Steganography", 
        "John the Ripper", "DVMA", "Docker", "Python", "Hydra", 
        "CISCO Packet Tracer", "Cryptography", "Linux",
        "Networking & Protocols", "Subnetting", "Routing & Switching", 
        "Firewalls & ACLs", "Nikto", "MSFVENOM", "HashCat"
    ];

    const languages = [
        "C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "SQL"
    ];

    const softSkills = [
        "Creativity", "Never give up mindset", "Critical Thinking", 
        "Effective Communication", "Leadership", "Hunger for improvement"
    ];

    return (
        <motion.section 
            id="skills" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title" data-text="< Core_Skills />">&lt; Core_Skills /&gt;</h2>
            <div className="skills-container">
                <TiltCard className="skill-category">
                    <h3 className="category-title">01. Tools & Techniques</h3>
                    <div className="skill-tags">
                        {tools.map((skill, i) => (
                            <span key={i} className="clickable">{skill}</span>
                        ))}
                    </div>
                </TiltCard>

                <TiltCard className="skill-category">
                    <h3 className="category-title">02. Programming Languages</h3>
                    <div className="skill-tags alt-tags">
                        {languages.map((skill, i) => (
                            <span key={i} className="clickable">{skill}</span>
                        ))}
                    </div>
                </TiltCard>

                <TiltCard className="skill-category">
                    <h3 className="category-title">03. Soft Skills</h3>
                    <div className="skill-tags">
                        {softSkills.map((skill, i) => (
                            <span key={i} className="clickable">{skill}</span>
                        ))}
                    </div>
                </TiltCard>
            </div>
        </motion.section>
    );
};

export default Skills;
