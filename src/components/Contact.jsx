import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Youtube, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');

        const formData = new FormData(e.target);
        // Integrated specific access key
        formData.append("access_key", "d78cae31-8765-4cce-8874-663abf0b616c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                console.log("Error", data);
                setFormStatus('error');
            }
        } catch (error) {
            console.log("Error", error);
            setFormStatus('error');
        }
    };

    const contactItems = [
        { icon: <Mail />, label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}`, color: 'text-blue-400' },
        { icon: <Phone />, label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`, color: 'text-green-400' },
        { icon: <Linkedin />, label: 'LinkedIn', value: 'LinkedIn', href: portfolioData.contact.linkedin, color: 'text-blue-600' },
        { icon: <Github />, label: 'GitHub', value: 'GitHub', href: portfolioData.contact.github, color: 'text-white' },
        { icon: <Youtube />, label: 'YouTube', value: 'YouTube', href: portfolioData.contact.youtube, color: 'text-red-500' },
    ];

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-slate-400">Let's collaborate on your next data-driven project.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {contactItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.label !== 'Phone' && item.label !== 'Email' ? "_blank" : undefined}
                                rel={item.label !== 'Phone' && item.label !== 'Email' ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="glass p-6 rounded-3xl flex flex-col items-center text-center transition-all bg-white/[0.03]"
                            >
                                <div className={`mb-4 ${item.color} p-3 bg-white/5 rounded-2xl`}>
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</h4>
                                <p className="text-white font-medium break-all">{item.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-white/5 to-transparent"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Protection against SPAM */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 ml-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 ml-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 ml-2">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
                                    placeholder="Your Message..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={formStatus === 'loading'}
                                className={`w-full py-5 ${formStatus === 'success' ? 'bg-green-500' : formStatus === 'error' ? 'bg-red-500' : 'bg-primary'} text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg transition-all disabled:opacity-50`}
                            >
                                {formStatus === 'idle' && <><Send size={20} /> Send Message</>}
                                {formStatus === 'loading' && <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />}
                                {formStatus === 'success' && <>Sent Directly!</>}
                                {formStatus === 'error' && <>Submission Failed</>}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
