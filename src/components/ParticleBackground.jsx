import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const updateMousePosition = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            mouseRef.current.x = (e.clientX - centerX) * -0.05; 
            mouseRef.current.y = (e.clientY - centerY) * -0.05;
        };

        class Particle {
            constructor(x, y, directionX, directionY, size, color, depth) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.depth = depth;
            }
            
            draw() {
                ctx.beginPath();
                const drawX = this.x + (mouseRef.current.x * this.depth);
                const drawY = this.y + (mouseRef.current.y * this.depth);
                
                ctx.arc(drawX, drawY, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
                
                this.draw();
            }
        }

        const init = () => {
            particlesArray = [];
            const calculatedParticles = (canvas.height * canvas.width) / 15000;
            const numberOfParticles = Math.min(calculatedParticles, 80);
            
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 2) - 1.5;
                let directionY = (Math.random() * 2) - 1.5;
                
                let color = Math.random() > 0.5 ? 'rgba(0, 243, 255, 0.5)' : 'rgba(157, 0, 255, 0.5)';
                let depth = Math.random() * 2 + 0.5; 
                
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color, depth));
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let ax = particlesArray[a].x + (mouseRef.current.x * particlesArray[a].depth);
                    let ay = particlesArray[a].y + (mouseRef.current.y * particlesArray[a].depth);
                    let bx = particlesArray[b].x + (mouseRef.current.x * particlesArray[b].depth);
                    let by = particlesArray[b].y + (mouseRef.current.y * particlesArray[b].depth);
                    
                    let distance = ((ax - bx) * (ax - bx)) + ((ay - by) * (ay - by));
                                   
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(0, 243, 255, ${opacityValue * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(ax, ay);
                        ctx.lineTo(bx, by);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            
            connect();
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', updateMousePosition);
        
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', updateMousePosition);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="cyber-bg" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, background: 'radial-gradient(circle at center, #0a0a1a 0%, #030308 100%)' }} />;
};

export default ParticleBackground;
