import React, { useEffect, useRef } from 'react';
import { playHoverSound, playClickSound } from '../utils/sound';

const CyberCursor = () => {
    const mouseRef = useRef({ x: 0, y: 0 });
    const outlineRef = useRef({ x: 0, y: 0 });
    
    const dotRef = useRef(null);
    const outlineElRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', updateMousePosition);

        let animationFrameId;
        const animateCursor = () => {
            const dx = mouseRef.current.x - outlineRef.current.x;
            const dy = mouseRef.current.y - outlineRef.current.y;
            
            outlineRef.current.x += dx * 0.2;
            outlineRef.current.y += dy * 0.2;
            
            if (outlineElRef.current) {
                outlineElRef.current.style.left = `${outlineRef.current.x}px`;
                outlineElRef.current.style.top = `${outlineRef.current.y}px`;
            }
            
            animationFrameId = requestAnimationFrame(animateCursor);
        };
        
        animateCursor();

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .project-card, .skill-category, .clickable')) {
                document.body.classList.add('cursor-hover');
                playHoverSound();
            }
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, .project-card, .skill-category, .clickable')) {
                document.body.classList.remove('cursor-hover');
            }
        };
        const handleMouseDown = (e) => {
            if (e.target.closest('a, button, .project-card, .skill-category, .clickable')) {
                playClickSound();
            }
        };
        
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineElRef} className="cursor-outline"></div>
        </>
    );
};

export default CyberCursor;
