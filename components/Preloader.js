'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If user already visited in this session, skip instantly
    const hasLoaded = sessionStorage.getItem('portfolio-preloader-loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Fast, smooth display of logo (~500ms) before fading out
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolio-preloader-loaded', 'true');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#0a0f1a] flex items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute w-72 h-72 rounded-full bg-[#731cb2]/25 blur-[120px] pointer-events-none animate-pulse"></div>

          {/* Logo Only */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#731cb2]/70 p-3 shadow-[0_0_35px_rgba(115,28,178,0.5)] flex items-center justify-center bg-[#0a0f1a]">
              <img 
                src="/logo.png" 
                alt="Ashikur Rahman Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain brightness-0 invert" 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
