import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass p-10 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-6">
                        About Me
                    </h2>

                    <div className="space-y-4">
                        {portfolioData.about.description.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-slate-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <p className="text-lg">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {portfolioData.competencies.slice(0, 4).map((comp, idx) => (
                            <div key={idx} className="p-4 bg-white/5 rounded-2xl text-center border border-white/5">
                                <p className="text-secondary font-bold">{comp}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
