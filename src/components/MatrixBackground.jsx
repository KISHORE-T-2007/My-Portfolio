import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let interval;

        const initMatrix = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
            const fontSize = 16;
            const columns = canvas.width / fontSize;

            const drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1; 
            }

            const draw = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#0F0';
                ctx.font = fontSize + 'px monospace';

                for (let i = 0; i < drops.length; i++) {
                    const text = letters.charAt(Math.floor(Math.random() * letters.length));
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    
                    drops[i]++;
                }
            };

            if (interval) clearInterval(interval);
            interval = setInterval(draw, 33);
        };

        initMatrix();

        window.addEventListener('resize', initMatrix);

        return () => {
            if (interval) clearInterval(interval);
            window.removeEventListener('resize', initMatrix);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100vw', 
                height: '100vh', 
                zIndex: -2, 
                background: '#000' 
            }} 
        />
    );
};

export default MatrixBackground;
