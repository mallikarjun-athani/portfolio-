import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-primary/30">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Education />
                <Contact />
            </main>
            <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Mallikarjun Athani. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
