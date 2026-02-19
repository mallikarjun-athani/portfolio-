import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="p-3 bg-accent/10 rounded-2xl">
                        <GraduationCap className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">Education</h2>
                </motion.div>

                <div className="space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border-l-8 border-accent group hover:bg-white/[0.07] transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {edu.degree}
                                    </h3>
                                    {edu.period && (
                                        <p className="text-accent/80 font-medium mt-1 uppercase tracking-widest text-xs">
                                            {edu.period}
                                        </p>
                                    )}
                                </div>
                                <div className="bg-accent/10 border border-accent/20 px-6 py-2 rounded-2xl text-accent font-black text-xl">
                                    {edu.score}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
