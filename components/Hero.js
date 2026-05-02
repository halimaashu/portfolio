'use client';

import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#4f46e5] to-brand-dark overflow-hidden" id="home">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-10 pb-20 relative px-4">
        <motion.div 
          className="relative w-full max-w-lg aspect-square flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Neon Glow Background */}
          <div className="absolute inset-0 bg-brand-teal/20 rounded-full blur-[100px] animate-pulse"></div>
          
          <img 
            alt="Developer Illustration" 
            className="w-full h-auto drop-shadow-[0_0_25px_rgba(0,210,180,0.4)] relative z-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC98bpt-eAxlsP15eAx4x8JkVGPpZl3nU57EsglwMhK-z9FDsq6PxksLqkBPZNp7beDP3YW_lrw0uHbDXfFdiMSk-7LK16eOTnvaD3BlFMG25iO52nn4F_5V190A7ylwYPolsoNMKJtdE86X-f6pVQ1UCCn8hg9dRtlSd1tbDgO4kOl_VqBVUa0hur8mC727_AJ319ZwrsEAe3Sh0v6qgtEzVwXjE1orSPIW8ZIhp88VJRAJJOXYU0OSG5ss21nWThS3EPMvvwOYGw"
          />
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/80 text-lg neon-text flicker">Web Developer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
