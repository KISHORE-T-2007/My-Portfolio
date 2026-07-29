import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../TiltCard';
import { Shield, Terminal, Cpu } from 'lucide-react';

const About = () => {
    return (
        <motion.section 
            id="about" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title" data-text="< About_Me />">&lt; About_Me /&gt;</h2>
            <div className="about-grid">
                <TiltCard className="about-text">
                    <p>Hello! I am <span className="highlight">Kishore T</span>, an ambitious Computer Science Engineering student (19 years old) with a core focus on Cyber Security and software development.</p>
                    <p>My technical background spans a wide range of disciplines, including hands-on penetration testing, database management, and the development of intelligent, locally-hosted AI systems.</p>
                    <p>I am a continuous learner who enjoys tackling complex technical problems.</p>

                    <div className="stats-container" style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <div className="stat-box clickable" style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(0, 243, 255, 0.2)', flex: 1, minWidth: '120px', transition: 'all 0.3s' }}>
                            <Shield size={32} color="#00f3ff" style={{ marginBottom: '10px' }} />
                            <h3 style={{ fontSize: '1.2rem', color: '#00f3ff' }}>SecOps</h3>
                            <p style={{ fontSize: '0.9rem', color: '#b0b0c0' }}>Network Analysis & Pentesting</p>
                        </div>
                        <div className="stat-box clickable" style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(0, 243, 255, 0.2)', flex: 1, minWidth: '120px', transition: 'all 0.3s' }}>
                            <Cpu size={32} color="#00f3ff" style={{ marginBottom: '10px' }} />
                            <h3 style={{ fontSize: '1.2rem', color: '#00f3ff' }}>Local AI</h3>
                            <p style={{ fontSize: '0.9rem', color: '#b0b0c0' }}>LLM Deployment & Research</p>
                        </div>
                        <div className="stat-box clickable" style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(0, 243, 255, 0.2)', flex: 1, minWidth: '120px', transition: 'all 0.3s' }}>
                            <Terminal size={32} color="#00f3ff" style={{ marginBottom: '10px' }} />
                            <h3 style={{ fontSize: '1.2rem', color: '#00f3ff' }}>Dev</h3>
                            <p style={{ fontSize: '0.9rem', color: '#b0b0c0' }}>Full-Stack & Scripts</p>
                        </div>
                    </div>
                </TiltCard>

                <TiltCard className="about-visual">
                    <div className="scanner-box">
                        <div className="scanner-line"></div>
                        <div className="wireframe-cube">
                            <div className="cube-face front"></div>
                            <div className="cube-face back"></div>
                            <div className="cube-face left"></div>
                            <div className="cube-face right"></div>
                            <div className="cube-face top"></div>
                            <div className="cube-face bottom"></div>
                        </div>
                        <div className="data-stream">
                            01001011 01001001 01010011 01001000 01001111 01010010 01000101<br />
                            INITIATING SECURE CONNECTION...<br />
                            ACCESS GRANTED.
                        </div>
                    </div>
                </TiltCard>
            </div>
        </motion.section>
    );
};

export default About;
