import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white">Experience</h2>
                </motion.div>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-[50%]'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"
                                style={index % 2 !== 0 ? { left: '-9px', right: 'auto' } : {}}
                            />

                            <div className="glass p-6 rounded-2xl relative">
                                <div className={`p-3 bg-primary/10 rounded-xl inline-flex mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''
                                    }`}>
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                <p className="text-primary font-medium mb-2">{exp.company}</p>
                                <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
