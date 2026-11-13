'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = ["MERN Stack Developer", "Full Stack Developer", "Problem Solver"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-[#1a1c2e] to-brand-darker overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 md:pt-28 pb-16 md:pb-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Content (lg:col-span-7) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start z-10 text-left"
        >
          {/* Animated Greeting Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2.5 mb-5 bg-[#731cb2]/10 border border-[#731cb2]/30 px-3.5 py-1.5 rounded-full"
          >
            <span className="text-sm font-semibold text-[#a17de0] hero-badge-text">Hi There!</span>
            <motion.span 
              animate={{ rotate: [0, 20, 0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-base origin-bottom-right inline-block"
            >
              👋
            </motion.span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight font-display">
            I'm <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#731cb2] via-[#5a2aac] to-[#a17de0] font-extrabold inline-block"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Ashikur Rahman
            </span>
          </h1>

          <div className="h-12 sm:h-14 mb-4 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p 
                key={titles[index]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-gray-200 text-2xl sm:text-3xl md:text-4xl font-bold font-display"
              >
                {titles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            A passionate MERN Stack Developer building scalable, full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] font-semibold text-sm sm:text-base rounded-xl hover:shadow-[0_0_25px_rgba(115,28,178,0.6)] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(115,28,178,0.35)]"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#731cb2] text-[#a17de0] hover:text-[#F8FAFC] font-semibold text-sm sm:text-base rounded-xl hover:bg-[#731cb2] hover:border-[#731cb2] transition-all transform hover:-translate-y-0.5 shadow-sm group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Resume
            </a>
            <a 
              href="#projects" 
              className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-700 hover:border-[#731cb2]/60 text-gray-200 hover:text-white font-semibold text-sm sm:text-base rounded-xl hover:bg-white/5 transition-all transform hover:-translate-y-0.5 hero-btn-secondary"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Content (lg:col-span-5) - Prominent Banner/Avatar Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 relative flex items-center justify-center order-first lg:order-last"
        >
          {/* Decorative Ambient Glows */}
          <div className="absolute inset-0 bg-[#731cb2]/20 rounded-full blur-[110px] pointer-events-none animate-pulse"></div>
          <div className="absolute -top-6 -right-6 w-60 h-60 bg-[#5a2aac]/25 rounded-full blur-[90px] pointer-events-none"></div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] xl:w-[440px] xl:h-[440px] rounded-full border-4 border-[#731cb2] p-2 sm:p-2.5 overflow-hidden shadow-[0_0_45px_rgba(115,28,178,0.45)] bg-brand-dark/40"
          >
            <img 
              alt="Ashikur Rahman Profile" 
              className="w-full h-full object-cover rounded-full" 
              src="/profile1.jpg"
              style={{ objectPosition: 'center 20%' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
