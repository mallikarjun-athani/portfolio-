import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/my photo.jpg';
import resumeFile from '../assets/data analyst updated resume.pdf';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                        className="text-primary font-semibold tracking-widest uppercase mb-4"
                    >
                        Welcome to my portfolio
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{portfolioData.hero.name}</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg">
                        {portfolioData.hero.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {portfolioData.hero.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 inline-block"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href={resumeFile}
                            download="Mallikarjun_Athani_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all inline-block"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Photo (Square, Static, Hover effect) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                        className="relative w-full aspect-square max-w-[400px] overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl"
                    >
                        <img
                            src={profilePhoto}
                            alt={portfolioData.hero.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Decorative background elements (static) */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
