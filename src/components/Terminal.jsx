import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'KISHORE-OS v1.0.42 initialized.' },
        { type: 'output', text: 'Type "help" to view available commands.' }
    ]);
    const [input, setInput] = useState('');
    const endOfTerminalRef = useRef(null);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output = [];

        switch (trimmedCmd) {
            case 'help':
                output = [
                    'Available commands:',
                    '  whoami     - Display user information',
                    '  skills     - Display core competencies',
                    '  projects   - Initialize project sequence',
                    '  contact    - Establish secure comms',
                    '  clear      - Clear terminal output',
                    '  matrix     - ???'
                ];
                break;
            case 'whoami':
                output = ['Kishore T.', 'Security Analyst & Malware Dev.', 'Status: Access Granted.'];
                break;
            case 'skills':
                output = [
                    '[+] Security Tools (Nmap, BurpSuite, Wireshark...)', 
                    '[+] Programming (C, C++, Python, Java...)', 
                    '[+] Networking & Firewalls', 
                    '[+] Soft Skills (Leadership, Critical Thinking...)'
                ];
                break;
            case 'projects':
                output = [
                    '[+] Front-End For a Web', 
                    '[+] Custom Keylogger', 
                    '[+] Network Penetration Testing',
                    '[+] JARVIS - Local AI System',
                    '[+] Incident Response Simulation'
                ];
                break;
            case 'contact':
                output = ['Establishing secure connection to itzkish29@gmail.com...'];
                setTimeout(() => window.location.href = "mailto:itzkish29@gmail.com", 1500);
                break;
            case 'matrix':
                output = ['Waking up...'];
                ['h', 'a', 'c', 'k'].forEach(key => {
                    window.dispatchEvent(new KeyboardEvent('keydown', { key }));
                });
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                output = [`Command not found: ${trimmedCmd}`];
        }

        const newHistory = [
            ...history,
            { type: 'input', text: `root@kishore:~$ ${cmd}` }
        ];

        output.forEach(line => {
            newHistory.push({ type: 'output', text: line });
        });

        setHistory(newHistory);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        if (endOfTerminalRef.current) {
            endOfTerminalRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    return (
        <motion.div 
            className="terminal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
                background: 'rgba(5, 5, 15, 0.8)',
                border: '1px solid var(--neon-blue)',
                borderRadius: '5px',
                padding: '20px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)',
                height: '250px',
                overflowY: 'auto',
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)',
                marginTop: '40px',
                backdropFilter: 'blur(10px)',
                width: '100%',
                maxWidth: '650px',
                textAlign: 'left'
            }}
            onClick={() => document.getElementById('terminal-input').focus()}
        >
            <div className="terminal-header" style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            
            <div className="terminal-content" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                {history.map((line, i) => (
                    <div key={i} style={{ color: line.type === 'input' ? 'var(--neon-pink)' : '#00f3ff', marginBottom: '5px' }}>
                        {line.text}
                    </div>
                ))}
                
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ color: 'var(--neon-pink)', marginRight: '10px', whiteSpace: 'nowrap' }}>root@kishore:~$</span>
                    <input 
                        id="terminal-input"
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        spellCheck="false"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            outline: 'none',
                            width: '100%'
                        }}
                    />
                </div>
                <div ref={endOfTerminalRef}></div>
            </div>
        </motion.div>
    );
};

export default Terminal;
