import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.section 
            id="education" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title" data-text="< Academic_Log />">&lt; Academic_Log /&gt;</h2>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>B.E. Computer Science and Engineering</h3>
                        <h4>Present</h4>
                        <p>Currently pursuing degree with a focus on core computer science principles and security.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>HSC</h3>
                        <h4>[Completed]</h4>
                        <p>Higher Secondary Certificate with a strong foundation in Mathematics and Sciences.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>SSLC</h3>
                        <h4>[Completed]</h4>
                        <p>Secondary School Leaving Certificate.</p>
                    </div>
                </div>
            </div>

            <h3 className="subsection-title">Certifications</h3>
            <ul className="cert-list">
                <li className="clickable"><span className="cert-icon">📜</span> Ethical Hacking – SWAYAM platform</li>
                <li className="clickable"><span className="cert-icon">📜</span> Build a Free Website with WordPress – Coursera (Grade: 100%)</li>
                <li className="clickable"><span className="cert-icon">⏳</span> Wireshark (TOOL) & Packet Analysis - Udemy (Pursuing)</li>
                <li className="clickable"><span className="cert-icon">⏳</span> Digital Forensics : Computer Forensics DFMC + DFIR - Udemy (Pursuing)</li>
                <li className="clickable"><span className="cert-icon">⏳</span> Network Security : Defending Against Cyber Threats - Udemy (Pursuing)</li>
                <li className="clickable"><span className="cert-icon">⏳</span> Network Hacking Course 20025 : Beginner to Advanced - Udemy (Pursuing)</li>
            </ul>
        </motion.section>
    );
};

export default Education;
