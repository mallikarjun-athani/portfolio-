import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const resumeFile = "/assets/data analyst updated resume.pdf";

const navLinks = [
    { name: 'Home', href: '#', icon: '⌂', emoji: '🏠' },
    { name: 'About', href: '#about', icon: '◉', emoji: '👤' },
    { name: 'Skills', href: '#skills', icon: '◈', emoji: '⚡' },
    { name: 'Projects', href: '#projects', icon: '◧', emoji: '🚀' },
    { name: 'Certifications', href: '#certifications', icon: '◆', emoji: '🏆' },
    { name: 'Contact', href: '#contact', icon: '◎', emoji: '📬' },
];

const NavLink = ({ link, isActive, onClick, index }) => (
    <motion.a
        href={link.href}
        onClick={onClick}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        className="relative group px-3 py-2"
    >
        {/* Active pill background */}
        {isActive && (
            <motion.span
                layoutId="navPill"
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.1))',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
        )}

        <span className={`relative z-10 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${isActive
            ? 'text-emerald-300'
            : 'text-slate-400 group-hover:text-emerald-400'
            }`}>
            {link.name}
        </span>

        {/* Hover bottom glow */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-3/4 transition-all duration-300"
            style={{ background: 'linear-gradient(90deg, transparent, #10b981, transparent)' }}
        />
    </motion.a>
);

// Hamburger icon with animation
const HamburgerIcon = ({ isOpen, toggle }) => (
    <button
        onClick={toggle}
        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] z-50 rounded-xl hover:bg-white/5 transition-colors"
        aria-label="Toggle menu"
        style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
    >
        <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] rounded-full origin-center"
            style={{ background: isOpen ? '#10b981' : '#e2e8f0' }}
            transition={{ duration: 0.3 }}
        />
        <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="block w-5 h-[2px] bg-slate-200 rounded-full"
            transition={{ duration: 0.2 }}
        />
        <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] rounded-full origin-center"
            style={{ background: isOpen ? '#f59e0b' : '#e2e8f0' }}
            transition={{ duration: 0.3 }}
        />
    </button>
);

// Download icon for mobile sidebar
const DownloadIconSmall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            // Detect active section
            const sections = navLinks.map(l => l.href.replace('#', '')).filter(Boolean);
            let currentSection = 'Home';

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        currentSection = navLinks.find(l => l.href === `#${sectionId}`)?.name || 'Home';
                    }
                }
            }

            if (window.scrollY < 100) currentSection = 'Home';
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleMobileNavClick = (linkName) => {
        setMobileOpen(false);
        setActiveSection(linkName);
    };

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-2'
                    : 'py-4'
                    }`}
            >
                {/* Glass background with emerald tint */}
                <motion.div
                    className="absolute inset-0 transition-all duration-500"
                    animate={{
                        backgroundColor: scrolled ? 'rgba(8, 12, 24, 0.85)' : 'rgba(8, 12, 24, 0)',
                        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
                    }}
                    style={{
                        borderBottom: scrolled ? '1px solid rgba(16, 185, 129, 0.08)' : '1px solid transparent',
                    }}
                />

                {/* Glow line at bottom — emerald to gold */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px]"
                    animate={{
                        background: scrolled
                            ? 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.4) 25%, rgba(6,182,212,0.3) 50%, rgba(245,158,11,0.4) 75%, transparent 100%)'
                            : 'transparent',
                    }}
                    transition={{ duration: 0.5 }}
                />

                <div className="relative max-w-6xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative group flex items-center gap-3"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {/* Logo mark — emerald/gold gradient */}
                        <div className="relative">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-shadow duration-300 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #f59e0b 100%)',
                                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.25)',
                                }}
                            >
                                <span className="text-white font-black text-lg leading-none drop-shadow-md">M</span>
                            </div>
                            {/* Pulse ring */}
                            <motion.div
                                className="absolute inset-0 rounded-xl"
                                style={{ border: '1.5px solid rgba(16, 185, 129, 0.3)' }}
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="font-bold text-base leading-tight tracking-wide"
                                style={{
                                    background: 'linear-gradient(90deg, #fff, #d1fae5)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                Mallikarjun
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                                style={{ color: '#f59e0b' }}>
                                Data Analyst
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop nav links — centered in a pill container */}
                    <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={link.name}
                                link={link}
                                isActive={activeSection === link.name}
                                onClick={() => setActiveSection(link.name)}
                                index={i}
                            />
                        ))}
                    </div>

                    {/* CTA Button + Hamburger */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16,185,129,0.35)' }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden relative group"
                        >
                            {/* Button gradient bg — emerald to gold */}
                            <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity"
                                style={{ background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #f59e0b 100%)' }}
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10">Hire Me</span>
                            <motion.span
                                className="relative z-10"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>

                        <HamburgerIcon isOpen={mobileOpen} toggle={() => setMobileOpen(!mobileOpen)} />
                    </div>
                </div>
            </motion.nav>

            {/* ========== MOBILE SIDEBAR — Premium Redesign ========== */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40"
                            style={{
                                background: 'rgba(0, 0, 0, 0.65)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                            }}
                        />

                        {/* Sidebar panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 overflow-y-auto overflow-x-hidden flex flex-col"
                            style={{
                                background: 'linear-gradient(180deg, #080c18 0%, #0d1526 40%, #0f1a2e 100%)',
                                borderLeft: '1px solid rgba(16, 185, 129, 0.12)',
                                boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            {/* ---- Header with close & branding ---- */}
                            <div className="relative px-6 pt-6 pb-5">
                                {/* Close button */}
                                <div className="flex justify-end mb-4">
                                    <button
                                        onClick={() => setMobileOpen(false)}
                                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-90"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            WebkitTapHighlightColor: 'transparent',
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Branding */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                            style={{
                                                background: 'linear-gradient(135deg, #10b981, #06b6d4, #f59e0b)',
                                                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                                            }}>
                                            <span className="text-white font-black text-xl">M</span>
                                        </div>
                                        {/* Online status dot */}
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                                            style={{ background: '#080c18' }}>
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg leading-tight">Mallikarjun</div>
                                        <div className="text-xs font-semibold uppercase tracking-[0.2em] mt-0.5"
                                            style={{ color: '#f59e0b' }}>
                                            Data Analyst
                                        </div>
                                    </div>
                                </div>

                                {/* Divider with gradient */}
                                <div className="mt-6 h-px w-full"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), rgba(245, 158, 11, 0.15), transparent)',
                                    }}
                                />
                            </div>

                            {/* ---- Navigation Links ---- */}
                            <div className="flex-1 px-4 py-2">
                                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600 px-3 mb-3">
                                    Navigation
                                </div>
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => handleMobileNavClick(link.name)}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 40 }}
                                            transition={{ delay: i * 0.05, duration: 0.3 }}
                                            className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group cursor-pointer ${activeSection === link.name
                                                ? ''
                                                : 'hover:bg-white/[0.03]'
                                                }`}
                                            style={{
                                                ...(activeSection === link.name ? {
                                                    background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.06))',
                                                    border: '1px solid rgba(16, 185, 129, 0.15)',
                                                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.08)',
                                                } : {
                                                    border: '1px solid transparent',
                                                }),
                                                WebkitTapHighlightColor: 'transparent',
                                                touchAction: 'manipulation',
                                            }}
                                        >
                                            {/* Icon container */}
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-300 ${activeSection === link.name
                                                ? ''
                                                : 'group-hover:scale-110'
                                                }`}
                                                style={{
                                                    background: activeSection === link.name
                                                        ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.15))'
                                                        : 'rgba(255,255,255,0.03)',
                                                    border: `1px solid ${activeSection === link.name ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.05)'}`,
                                                }}
                                            >
                                                {link.emoji}
                                            </div>

                                            {/* Label */}
                                            <span className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${activeSection === link.name
                                                ? 'text-emerald-300'
                                                : 'text-slate-400 group-hover:text-white'
                                                }`}>
                                                {link.name}
                                            </span>

                                            {/* Active indicator */}
                                            {activeSection === link.name && (
                                                <motion.div
                                                    layoutId="mobileActiveIndicator"
                                                    className="ml-auto flex items-center gap-2"
                                                >
                                                    <div className="w-6 h-[3px] rounded-full"
                                                        style={{
                                                            background: 'linear-gradient(90deg, #10b981, #f59e0b)',
                                                            boxShadow: '0 0 10px rgba(16,185,129,0.4)',
                                                        }}
                                                    />
                                                </motion.div>
                                            )}
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            {/* ---- Bottom CTA Section ---- */}
                            <div className="px-5 pb-8 pt-4">
                                {/* Divider */}
                                <div className="h-px w-full mb-5"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
                                    }}
                                />

                                {/* Download Resume Button */}
                                <motion.a
                                    href={resumeFile}
                                    download="Mallikarjun_Athani_Resume.pdf"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                    className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl text-white font-semibold text-sm mb-3 cursor-pointer group transition-all duration-300"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(245, 158, 11, 0.2)',
                                        WebkitTapHighlightColor: 'transparent',
                                        touchAction: 'manipulation',
                                    }}
                                >
                                    <motion.span
                                        animate={{ y: [0, 2, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                    >
                                        <DownloadIconSmall />
                                    </motion.span>
                                    <span>Download Resume</span>
                                </motion.a>

                                {/* Hire Me Button */}
                                <motion.a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl text-white font-bold text-sm overflow-hidden group cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(135deg, #10b981, #06b6d4, #f59e0b)',
                                        boxShadow: '0 6px 25px rgba(16, 185, 129, 0.25)',
                                        WebkitTapHighlightColor: 'transparent',
                                        touchAction: 'manipulation',
                                    }}
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    <span className="relative z-10">Hire Me</span>
                                    <motion.span
                                        className="relative z-10"
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </motion.a>

                                {/* Social / Status text */}
                                <div className="mt-5 text-center">
                                    <p className="text-[11px] text-slate-600 tracking-wider">
                                        ✦ Available for opportunities ✦
                                    </p>
                                </div>
                            </div>

                            {/* Decorative bottom gradient */}
                            <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to top, rgba(16,185,129,0.03), transparent)',
                                }}
                            />

                            {/* Side accent line */}
                            <div className="absolute top-20 left-0 w-[2px] h-24"
                                style={{
                                    background: 'linear-gradient(180deg, transparent, rgba(16,185,129,0.3), rgba(245,158,11,0.2), transparent)',
                                }}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
