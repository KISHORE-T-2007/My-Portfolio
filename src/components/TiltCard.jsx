import React, { useRef } from 'react';

const TiltCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const el = cardRef.current;
        if (!el) return;
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        el.style.transition = 'transform 0.5s ease';
    };

    const handleMouseEnter = () => {
        const el = cardRef.current;
        if (!el) return;
        el.style.transition = 'none';
    };

    return (
        <div 
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
};

export default TiltCard;
