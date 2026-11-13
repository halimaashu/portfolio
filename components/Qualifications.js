'use client';

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    qualification: 'Diploma in Computer Science & Technology (CST)',
    institution: 'Dhaka Polytechnic Institute',
    shortInstitution: 'DPI, Tejgaon, Dhaka',
    department: 'Computer Science & Technology',
    period: '2024 – Present',
    expected: 'Expected Graduation: 2028',
    status: 'Currently Enrolled',
    statusType: 'active',
    degreeLevel: 'Diploma in Engineering',
    description: 'Pursuing a 4-year government diploma engineering curriculum focused on computer science fundamentals, software engineering principles, and hands-on system development.',
    coursework: [
      'Data Structures & Algorithms',
      'Full-Stack Web Development',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems'
    ],
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
      </svg>
    )
  },
  {
    qualification: 'Secondary School Certificate (SSC)',
    institution: 'Khamar Miniram High School',
    shortInstitution: 'Science Division',
    department: 'Science Group',
    period: 'Passing Year: 2024',
    expected: 'Completed with Distinction',
    status: 'Completed',
    statusType: 'completed',
    degreeLevel: 'Secondary Education',
    description: 'Completed secondary education with rigorous coursework in physical sciences, higher mathematics, and information technology, building the analytical foundation for computer engineering.',
    coursework: [
      'Higher Mathematics',
      'Physics',
      'Chemistry',
      'Information & Communication Technology (ICT)',
      'General Science'
    ],
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const Qualifications = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-darker relative overflow-hidden" id="qualifications">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#731cb2]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#731cb2]/10 border border-[#731cb2]/30 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-[#a17de0]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a17de0] font-mono">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            Education & Qualifications
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Formal technical foundation in Computer Science & Technology, supporting hands-on engineering practices.
          </p>
        </div>

        {/* Prominent Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-[#5a2aac]/30 hover:border-[#731cb2] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_30px_rgba(115,28,178,0.25)] relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="shimmer-overlay"></div>

              <div>
                {/* Top Row: Icon + Status Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#731cb2]/25 to-[#5a2aac]/20 border border-[#731cb2]/40 text-[#a17de0] flex items-center justify-center group-hover:scale-105 group-hover:border-[#731cb2] transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span 
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        item.statusType === 'active'
                          ? 'bg-[#731cb2]/15 text-[#a17de0] border-[#731cb2]/40'
                          : 'bg-white/5 text-gray-300 border-white/10'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Qualification Title */}
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display mb-3 group-hover:text-[#a17de0] transition-colors">
                  {item.qualification}
                </h3>

                {/* Institution & Department Info */}
                <div className="space-y-2 mb-6">
                  {/* Institution */}
                  <div className="flex items-center space-x-2 text-base sm:text-lg font-bold text-gray-200">
                    <svg className="w-5 h-5 text-[#a17de0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{item.institution}</span>
                  </div>

                  {/* Department */}
                  <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-300">
                    <svg className="w-5 h-5 text-[#731cb2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold text-white">Department:</span>
                    <span>{item.department}</span>
                  </div>

                  {/* Timeline Badge */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm font-mono text-gray-400">
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-4 h-4 text-[#a17de0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.period}</span>
                    </div>
                    <span>•</span>
                    <span className="text-gray-400">{item.expected}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Coursework & Key Focus Tags */}
              <div className="pt-5 border-t border-gray-800">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                  Key Subjects & Core Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-brand-dark/90 text-gray-300 border border-[#5a2aac]/30 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
