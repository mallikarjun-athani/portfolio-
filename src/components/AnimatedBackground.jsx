import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Floating particles drawn on canvas
const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;
        let particles = [];
        let mouse = { x: -999, y: -999 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.hue = Math.random() > 0.5 ? 160 : 45; // emerald or gold
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.02 + 0.005;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;

                // Mouse interaction — subtle repel
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                const currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${currentOpacity})`;
                ctx.fill();

                // Glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${currentOpacity * 0.15})`;
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Draw connecting lines
        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const opacity = (1 - dist / 150) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

// Floating gradient orbs
const FloatingOrb = ({ color, size, x, y, duration, delay }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
        }}
        animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -15, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.3, 0.5, 0.25, 0.45, 0.3],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay,
        }}
    />
);

// Subtle grid pattern
const GridPattern = () => (
    <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
            backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
        }}
    />
);

// Scanline / noise texture overlay
const NoiseOverlay = () => (
    <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
    />
);

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden z-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#0d1321]" />

            {/* Animated gradient mesh */}
            <FloatingOrb color="rgba(16, 185, 129, 0.15)" size="500px" x="10%" y="20%" duration={20} delay={0} />
            <FloatingOrb color="rgba(6, 182, 212, 0.12)" size="400px" x="70%" y="10%" duration={25} delay={2} />
            <FloatingOrb color="rgba(245, 158, 11, 0.08)" size="350px" x="50%" y="60%" duration={22} delay={4} />
            <FloatingOrb color="rgba(16, 185, 129, 0.1)" size="300px" x="80%" y="70%" duration={18} delay={1} />
            <FloatingOrb color="rgba(6, 182, 212, 0.08)" size="250px" x="20%" y="80%" duration={24} delay={3} />

            {/* Grid pattern */}
            <GridPattern />

            {/* Noise texture */}
            <NoiseOverlay />

            {/* Particle canvas */}
            <ParticleCanvas />

            {/* Top & bottom radial fades */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0f1e] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
        </div>
    );
};

export default AnimatedBackground;
