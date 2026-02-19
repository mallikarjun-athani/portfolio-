import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, CreditCard } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Award': return <Award className="w-8 h-8 text-primary" />;
            case 'Cloud': return <Cloud className="w-8 h-8 text-secondary" />;
            default: return <CreditCard className="w-8 h-8 text-accent" />;
        }
    };

    return (
        <section id="certifications" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
                        Certifications
                    </h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px -20px rgba(168, 85, 247, 0.4)",
                            }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group border-white/5 hover:border-secondary/40 transition-all duration-500"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                    {getIcon(cert.icon)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6">{cert.issuer}</p>

                                    {cert.link ? (
                                        <motion.a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded-full text-secondary text-sm font-medium transition-all inline-block"
                                        >
                                            View Certificate
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded-full text-secondary text-sm font-medium transition-all opacity-50 cursor-not-allowed"
                                        >
                                            View Certificate
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
