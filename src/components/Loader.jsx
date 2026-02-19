import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-dark"
        >
            <div className="relative">
                {/* Main Pulsing Ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 -m-4 rounded-full border-2 border-primary/30 blur-sm"
                />

                {/* Second Rotating Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-24 h-24 rounded-full border-t-2 border-r-2 border-transparent border-t-secondary border-r-accent"
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [0.85, 1, 0.85],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                        <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            MA
                        </span>
                    </motion.div>
                </div>

                {/* Progress bar line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute -bottom-10 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 text-slate-500 font-medium tracking-[0.2em] text-xs uppercase"
            >
                Loading Portfolio
            </motion.div>
        </motion.div>
    );
};

export default Loader;
