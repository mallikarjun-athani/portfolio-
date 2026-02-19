import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-primary italic font-light">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-full w-full bg-primary"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-3xl overflow-hidden group flex flex-col h-full"
                        >
                            <div className="p-8 flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <Folder className="w-10 h-10 text-primary" />
                                    <div className="flex gap-4">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-primary/5 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                                            <div className="w-1 h-1 bg-slate-600 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
