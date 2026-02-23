import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/my photo.jpg';
import resumeFile from '../assets/data analyst updated resume.pdf';

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
                        className="font-semibold tracking-widest uppercase mb-4"
                        style={{ color: '#10b981' }}
                    >
                        Welcome to my portfolio
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        I'm <span style={{
                            background: 'linear-gradient(135deg, #10b981, #06b6d4, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>{portfolioData.hero.name}</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg">
                        {portfolioData.hero.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                        {portfolioData.hero.skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="px-3 py-1 rounded-full text-sm text-slate-300"
                                style={{
                                    background: 'rgba(16, 185, 129, 0.08)',
                                    border: '1px solid rgba(16, 185, 129, 0.15)',
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

                {/* Right Photo — Creative design with rotating border & floating badges */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center items-center mt-6 md:mt-0"
                >
                    {/* Outer rotating gradient ring */}
                    <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full"
                        style={{
                            background: 'conic-gradient(from 0deg, #10b981, #06b6d4, #f59e0b, #10b981)',
                            animation: 'rotate-border 8s linear infinite',
                            opacity: 0.6,
                            filter: 'blur(2px)',
                        }}
                    />

                    {/* Second counter-rotating ring */}
                    <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[430px] md:h-[430px] rounded-full"
                        style={{
                            border: '1px dashed rgba(16, 185, 129, 0.2)',
                            animation: 'rotate-border 15s linear infinite reverse',
                        }}
                    />

                    {/* Inner glow ring */}
                    <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, transparent 60%, rgba(16, 185, 129, 0.08) 100%)',
                        }}
                    />

                    {/* Photo container */}
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden z-10"
                        style={{
                            border: '4px solid rgba(10, 15, 30, 0.9)',
                            boxShadow: '0 0 40px rgba(16, 185, 129, 0.15), inset 0 0 30px rgba(0,0,0,0.3)',
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
                                background: 'linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.5) 100%)',
                            }}
                        />
                        {/* Top shine */}
                        <div className="absolute top-0 left-0 w-full h-1/3 pointer-events-none"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
                            }}
                        />
                    </motion.div>

                    {/* Floating tech badges around the photo */}
                    <motion.div
                        className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                            top: '5%',
                            right: '5%',
                            background: 'rgba(10, 15, 30, 0.85)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            color: '#10b981',
                            backdropFilter: 'blur(10px)',
                            animation: 'float-badge 3s ease-in-out infinite',
                            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.15)',
                        }}
                    >
                        ⚡ SQL
                    </motion.div>

                    <motion.div
                        className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                            bottom: '10%',
                            right: '0%',
                            background: 'rgba(10, 15, 30, 0.85)',
                            border: '1px solid rgba(6, 182, 212, 0.3)',
                            color: '#06b6d4',
                            backdropFilter: 'blur(10px)',
                            animation: 'float-badge 3.5s ease-in-out infinite 0.5s',
                            boxShadow: '0 4px 15px rgba(6, 182, 212, 0.15)',
                        }}
                    >
                        📊 Power BI
                    </motion.div>

                    <motion.div
                        className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                            top: '15%',
                            left: '-2%',
                            background: 'rgba(10, 15, 30, 0.85)',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            color: '#f59e0b',
                            backdropFilter: 'blur(10px)',
                            animation: 'float-badge 4s ease-in-out infinite 1s',
                            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.15)',
                        }}
                    >
                        🐍 Python
                    </motion.div>

                    <motion.div
                        className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                            bottom: '5%',
                            left: '5%',
                            background: 'rgba(10, 15, 30, 0.85)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            color: '#10b981',
                            backdropFilter: 'blur(10px)',
                            animation: 'float-badge 3.2s ease-in-out infinite 1.5s',
                            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.15)',
                        }}
                    >
                        ☁️ AWS
                    </motion.div>

                    {/* Decorative dots */}
                    <div className="absolute -top-2 left-1/2 w-2 h-2 rounded-full"
                        style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}
                    />
                    <div className="absolute -bottom-2 left-1/2 w-2 h-2 rounded-full"
                        style={{ background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}
                    />
                    <div className="absolute top-1/2 -left-2 w-2 h-2 rounded-full"
                        style={{ background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }}
                    />
                    <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full"
                        style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
