'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If user has already visited in this session, skip instantly
    const hasLoaded = sessionStorage.getItem('portfolio-preloader-loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Fast, smooth loading progression (~550ms total)
    const startTime = performance.now();
    const duration = 550; // smooth 550ms loading duration

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('portfolio-preloader-loaded', 'true');
        }, 150);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -40,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#0a0f1a] flex flex-col items-center justify-center p-6 text-white select-none overflow-hidden"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute w-72 h-72 rounded-full bg-[#731cb2]/25 blur-[100px] pointer-events-none"></div>
          <div className="absolute w-60 h-60 rounded-full bg-[#5a2aac]/20 blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full text-center">
            {/* Logo with Smooth Glowing Ring */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-20 h-20 mb-6 flex items-center justify-center"
            >
              {/* Expanding subtle ring */}
              <div className="absolute inset-0 rounded-full border border-[#731cb2]/50 animate-ping opacity-30"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#731cb2]/80 shadow-[0_0_20px_rgba(115,28,178,0.5)]"></div>
              
              <img 
                src="/logo.png" 
                alt="Ashikur Rahman" 
                className="w-11 h-11 object-contain brightness-0 invert" 
              />
            </motion.div>

            {/* Name / Brand Title */}
            <h2 className="text-base font-bold tracking-tight text-white font-display mb-1">
              Ashikur Rahman
            </h2>
            <p className="text-[11px] font-mono tracking-widest text-[#a17de0] uppercase mb-5">
              MERN Stack Developer
            </p>

            {/* Progress Bar Track */}
            <div className="w-full h-1 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50 mb-3 relative">
              <div 
                className="h-full bg-gradient-to-r from-[#731cb2] via-[#5a2aac] to-[#a17de0] rounded-full transition-all duration-75 shadow-[0_0_12px_#731cb2]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Display */}
            <div className="flex items-center justify-between w-full text-[11px] font-mono text-gray-400">
              <span>Loading</span>
              <span className="text-[#a17de0] font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
