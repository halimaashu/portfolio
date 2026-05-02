'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const titles = ["Web Developer", "Problem Solver", "UI/UX Enthusiast"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1a1c2e] to-brand-darker overflow-hidden" id="home">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start z-10"
        >
          {/* Animated Greeting */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-3 mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <span className="text-lg font-medium text-brand-teal">Hi There!</span>
            <motion.span 
              animate={{ rotate: [0, 20, 0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl origin-bottom-right inline-block"
            >
              👋
            </motion.span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-purple-400">Ashik</span>
          </h1>

          <div className="h-16 mb-8">
            <AnimatePresence mode="wait">
              <motion.p 
                key={titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 text-3xl md:text-4xl font-bold"
              >
                {titles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
            A passionate Front-end Web Developer from Bangladesh. I love creating high-performance, interactive, and visually stunning web experiences that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-brand-teal text-brand-darker font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,210,180,0.5)] transition-all transform hover:-translate-y-1"
            >
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Right Content (Illustration) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Decorative Glows */}
          <div className="absolute inset-0 bg-brand-teal/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-float"></div>

          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-md"
          >
            <img 
              alt="Developer Illustration" 
              className="w-full h-auto drop-shadow-[0_0_35px_rgba(0,210,180,0.3)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC98bpt-eAxlsP15eAx4x8JkVGPpZl3nU57EsglwMhK-z9FDsq6PxksLqkBPZNp7beDP3YW_lrw0uHbDXfFdiMSk-7LK16eOTnvaD3BlFMG25iO52nn4F_5V190A7ylwYPolsoNMKJtdE86X-f6pVQ1UCCn8hg9dRtlSd1tbDgO4kOl_VqBVUa0hur8mC727_AJ319ZwrsEAe3Sh0v6qgtEzVwXjE1orSPIW8ZIhp88VJRAJJOXYU0OSG5ss21nWThS3EPMvvwOYGw"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
