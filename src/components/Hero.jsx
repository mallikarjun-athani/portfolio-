import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/my photo.jpg';
const resumeFile = "/assets/data analyst updated resume.pdf";

// Icon components for buttons
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-10 md:pt-20 overflow-hidden">
            {/* Background Blobs — updated to emerald/gold */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-warm/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />

            <div className="max-w-6xl mx-auto px-5 md:px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-semibold tracking-widest uppercase mb-4 text-sm"
                        style={{ color: '#a78bfa' }}
                    >
                        ✦ Welcome to my portfolio
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        style={{ color: '#f1f5f9' }}
                    >
                        I'm <span style={{
                            background: 'linear-gradient(135deg, #f472b6, #fb923c, #fbbf24)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>{portfolioData.hero.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-lg"
                        style={{ color: '#94a3b8' }}
                    >
                        {portfolioData.hero.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                        {portfolioData.hero.skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="px-3 py-1 rounded-full text-sm"
                                style={{
                                    color: '#c4b5fd',
                                    background: 'rgba(167, 139, 250, 0.08)',
                                    border: '1px solid rgba(167, 139, 250, 0.15)',
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                    {/* CTA Buttons — redesigned with icons & proper mobile touch targets */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-20">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 35px rgba(16, 185, 129, 0.35)' }}
                            whileTap={{ scale: 0.96 }}
                            className="hero-btn-primary group relative flex items-center justify-center gap-3 px-7 py-4 text-white rounded-2xl font-bold text-[15px] cursor-pointer overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.25)',
                                WebkitTapHighlightColor: 'transparent',
                                touchAction: 'manipulation',
                            }}
                        >
                            {/* Animated shine overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10 flex items-center gap-2.5">
                                <RocketIcon />
                                View Projects
                            </span>
                            <motion.span
                                className="relative z-10 text-lg"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>

                        <motion.a
                            href={resumeFile}
                            download="Mallikarjun_Athani_Resume.pdf"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(245, 158, 11, 0.2)' }}
                            whileTap={{ scale: 0.96 }}
                            className="hero-btn-secondary group relative flex items-center justify-center gap-3 px-7 py-4 text-white rounded-2xl font-bold text-[15px] cursor-pointer overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(245, 158, 11, 0.25)',
                                WebkitTapHighlightColor: 'transparent',
                                touchAction: 'manipulation',
                            }}
                        >
                            {/* Gradient border glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(16,185,129,0.08))',
                                }}
                            />
                            <span className="relative z-10 flex items-center gap-2.5">
                                <motion.span
                                    animate={{ y: [0, 2, 0] }}
                                    transition={{ duration: 1.2, repeat: Infinity }}
                                >
                                    <DownloadIcon />
                                </motion.span>
                                Download Resume
                            </span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Photo — Square design with rotating border & floating badges */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center items-center mt-6 md:mt-0"
                >
                    {/* Photo container — SQUARE */}
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-[1.8rem] overflow-hidden z-10"
                        style={{
                            border: '4px solid rgba(10, 15, 30, 0.9)',
                            boxShadow: '0 0 50px rgba(167, 139, 250, 0.12), 0 0 80px rgba(16, 185, 129, 0.08), inset 0 0 30px rgba(0,0,0,0.3)',
                        }}
                    >
                        <img
                            src={profilePhoto}
                            alt={portfolioData.hero.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(180deg, transparent 40%, rgba(10,15,30,0.6) 100%)',
                            }}
                        />
                        {/* Top shine */}
                        <div className="absolute top-0 left-0 w-full h-1/3 pointer-events-none"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
                            }}
                        />
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                            style={{
                                background: 'linear-gradient(225deg, rgba(244,114,182,0.15) 0%, transparent 60%)',
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
