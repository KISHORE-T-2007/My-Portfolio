import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../TiltCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const curatedProjects = [
        {
            name: 'Front-End For a Web',
            description: 'Created a simple summer package website using HTML and CSS.',
            topics: ['HTML', 'CSS', 'Web Design'],
            language: 'Web Dev',
            html_url: '#'
        },
        {
            name: 'Keylogger',
            description: 'As a successful malware it will record the keypress events and sends that to the attacker.',
            topics: ['Python', 'Stealth', 'Data Exfiltration'],
            language: 'Malware Dev',
            html_url: '#'
        },
        {
            name: 'Network Penetration Testing',
            description: 'Network scanning and penetration testing simulations using Nmap, Zenmap and Burpsuit.',
            topics: ['Nmap', 'Zenmap', 'BurpSuite'],
            language: 'Security',
            html_url: '#'
        },
        {
            name: 'JARVIS - Local AI System',
            description: 'Successfully created a Local AI system (Based on scify AI called JARVIS from Marvel\'s IRONMAN movies) that works purely on local system with the help of multiple AI models and systems.',
            topics: ['AI Agents', 'Python', 'Local Hosting'],
            language: 'Local AI',
            html_url: '#'
        },
        {
            name: 'Incident Response Mini project',
            description: 'Incident Response Mini project at Intern ran in a secluded environment using docker.',
            topics: ['Docker', 'Incident Response'],
            language: '',
            html_url: '#'
        }
    ];

    useEffect(() => {
        // Using the static curated list as requested, repo links will be provided later.
        setProjects(curatedProjects);
        setLoading(false);
    }, []);

    return (
        <motion.section 
            id="projects" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title" data-text="< Executed_Projects />">&lt; Executed_Projects /&gt;</h2>
            
            {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--neon-blue)', padding: '50px 0' }}>
                    <p className="blink">Fetching live data from GitHub...</p>
                </div>
            ) : (
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <TiltCard key={index} className={`project-card clickable ${index < 3 ? 'highlight-card' : ''}`}>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="project-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div className="project-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="folder-icon">📁</span>
                                        {project.language && (
                                            <div className="project-links">
                                                <span>[{project.language.toUpperCase()}]</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
                                    <p className="project-desc">{project.description || 'A proprietary or undocumented system protocol.'}</p>
                                    <div className="project-tech">
                                        {/* Display topics if available, else language */}
                                        {project.topics && project.topics.length > 0 
                                            ? project.topics.map((tag, i) => <span key={i}>{tag}</span>)
                                            : project.language && <span>{project.language}</span>
                                        }
                                        {project.stargazers_count > 0 && (
                                            <span style={{ color: '#ffb86c' }}>★ {project.stargazers_count}</span>
                                        )}
                                    </div>
                                </div>
                            </a>
                        </TiltCard>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default Projects;
