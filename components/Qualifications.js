'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    title: 'Diploma in CST',
    subtitle: 'Dhaka Polytechnic Institute',
    date: '2024 - Present (Expected 2028)',
    side: 'right'
  },
  {
    title: 'SSC',
    subtitle: 'Khamar Miniram High School',
    date: 'Completed 2024',
    side: 'left'
  }
];

const Qualifications = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      // Staggered items reveal
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-brand-darker relative overflow-hidden" id="qualifications" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Qualification</h2>
          <p className="text-gray-400">My personal journey</p>
        </div>

        <div className="flex justify-center items-center mb-12 space-x-8">
          <div className="flex items-center space-x-2 text-brand-teal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="font-semibold text-lg">Education</span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-brand-teal/30 h-full origin-top"
          ></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'} relative`}>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.subtitle}</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-xs justify-center md:justify-start">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span>{edu.date}</span>
                  </div>

                  {/* Node Dot */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-[9px]' : '-left-[9px]'} -translate-y-1/2 w-4 h-4 bg-brand-darker border-2 border-brand-teal rounded-full z-10 shadow-[0_0_10px_rgba(0,210,180,0.5)]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
