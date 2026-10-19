'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  "Initializing Antigravity Engine...",
  "Loading Full-Stack Modules...",
  "Configuring Interactive AI Assistant...",
  "Welcome to Ashikur's Portfolio!"
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Check if preloader already ran in this session
    const hasLoaded = sessionStorage.getItem('portfolio-preloader-loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('portfolio-preloader-loaded', 'true');
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);
        
        // Update status text based on progress brackets
        if (next < 30) setStepIndex(0);
        else if (next < 65) setStepIndex(1);
        else if (next < 90) setStepIndex(2);
        else setStepIndex(3);

        return next;
      });
    }, 45);

    // Hard fallback after 2.5s maximum
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolio-preloader-loaded', 'true');
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -80,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#0a0f1a] flex flex-col items-center justify-center p-6 text-white select-none overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <div className="absolute w-96 h-96 rounded-full bg-[#731cb2]/20 blur-[140px] pointer-events-none animate-pulse"></div>
          <div className="absolute w-80 h-80 rounded-full bg-[#5a2aac]/25 blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo / Monogram Container */}
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              {/* Outer Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#731cb2]/40 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-[#731cb2]/70 shadow-[0_0_25px_rgba(115,28,178,0.6)]"></div>
              
              {/* Central Logo */}
              <img 
                src="/logo.png" 
                alt="Ashik Logo" 
                className="w-14 h-14 object-contain brightness-0 invert" 
              />
            </motion.div>

            {/* Percentage Number Display */}
            <div className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#731cb2] via-white to-[#a17de0] mb-4 font-mono">
              {progress}%
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50 mb-5 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#731cb2] via-[#5a2aac] to-[#a17de0] rounded-full shadow-[0_0_15px_#731cb2]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Subtitle Steps */}
            <AnimatePresence mode="wait">
              <motion.p
                key={stepIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs md:text-sm font-medium text-gray-400 tracking-wider"
              >
                {LOADING_STEPS[stepIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Developer Branding */}
            <div className="mt-8 flex items-center space-x-2 text-[11px] text-gray-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              <span>Ashikur Rahman • Portfolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
