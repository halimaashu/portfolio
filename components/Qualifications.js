'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    qualification: 'Diploma in Computer Science & Technology',
    institution: 'Dhaka Polytechnic Institute',
    department: 'Department of Computer Science & Technology (CST)',
    date: '2024 – Present (Expected 2028)',
    status: 'Currently Enrolled',
    badge: 'Diploma Engineering',
    side: 'right'
  },
  {
    qualification: 'Secondary School Certificate (SSC)',
    institution: 'Khamar Miniram High School',
    department: 'Science Division',
    date: 'Completed 2024',
    status: 'Completed',
    badge: 'Secondary Education',
    side: 'left'
  }
];

const Qualifications = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-darker relative overflow-hidden" id="qualifications">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#731cb2]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-[#731cb2]/10 border border-[#731cb2]/30 px-3.5 py-1.5 rounded-full mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#a17de0]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a17de0] font-mono">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-2.5">
            Qualifications
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            My educational journey and technical credentials
          </p>
        </motion.div>

        {/* Education Category Tab Indicator */}
        <div className="flex justify-center items-center mb-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-card border border-[#731cb2]/40 text-[#a17de0] shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="font-bold text-sm sm:text-base font-display tracking-wide text-white">Education</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#731cb2] via-[#5a2aac] to-transparent h-full origin-top"></div>

          <div className="space-y-10 md:space-y-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex items-center w-full ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${isEven ? 'pr-8 sm:pr-12 text-right' : 'pl-8 sm:pl-12 text-left'} relative`}>
                    
                    {/* Qualification Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 font-display tracking-tight">
                      {edu.qualification}
                    </h3>

                    {/* Institution */}
                    <div className={`flex items-center space-x-1.5 text-base sm:text-lg font-bold text-[#a17de0] mb-1.5 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <span>{edu.institution}</span>
                    </div>

                    {/* Department / Group */}
                    <p className="text-gray-300 text-xs sm:text-sm font-medium mb-3">
                      {edu.department}
                    </p>

                    {/* Date / Period Badge */}
                    <div className={`flex items-center space-x-2 text-gray-400 text-xs font-mono ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <svg className="w-4 h-4 text-[#a17de0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">{edu.date}</span>
                    </div>

                    {/* Interactive Node Dot on Center Line */}
                    <div className={`absolute top-6 ${isEven ? '-right-[9px]' : '-left-[9px]'} w-4 h-4 bg-brand-darker border-2 border-[#731cb2] rounded-full z-10 shadow-[0_0_15px_rgba(115,28,178,0.8)]`}>
                      <div className="w-1.5 h-1.5 bg-[#a17de0] rounded-full m-auto mt-0.5"></div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
