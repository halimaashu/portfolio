'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const textRef = useRef(null);
  const principlesRef = useRef(null);

  const principles = [
    {
      title: "Fast",
      desc: "Optimized for speed and rapid interaction.",
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: "Responsive",
      desc: "Layouts that work on any device size.",
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: "Intuitive",
      desc: "Easy to use and navigate user interfaces.",
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: "Dynamic",
      desc: "Websites don't have to be static objects.",
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile reveal
      gsap.from(profileRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Text reveal
      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Principles reveal
      gsap.from(".principle-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-brand-dark overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={profileRef} className="relative flex-shrink-0">
            <div className="w-64 h-64 rounded-full border-4 border-brand-teal p-1 overflow-hidden shadow-[0_0_30px_rgba(0,210,180,0.3)]">
              <img 
                alt="Ashikur Rahman Profile" 
                className="w-full h-full object-cover rounded-full scale-110" 
                src="/profile.jpg"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
          <div ref={textRef} className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              I am <span className="text-white font-semibold">Ashikur Rahman</span>, a dedicated <span className="text-brand-teal font-semibold">MERN Stack Developer</span> currently pursuing my Diploma in <span className="text-brand-teal font-semibold">Computer Science & Technology (CST)</span> at <span className="text-white font-semibold">Dhaka Polytechnic Institute</span>. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mt-4">
              I specialize in building full-stack web applications using <span className="text-brand-teal font-semibold">React, Next.js, Node.js, Express.js, and MongoDB</span>. From designing responsive front-end user interfaces to engineering robust RESTful APIs, database schemas, and authentication systems, I focus on delivering clean, accessible, and high-performance solutions.
            </p>
            <div className="mt-8">
              <a 
                className="inline-flex items-center px-6 py-3 border-2 border-brand-teal text-brand-teal font-bold rounded-lg hover:bg-brand-teal hover:text-brand-darker transition-all duration-300 shadow-[0_0_15px_rgba(0,210,180,0.2)]" 
                href="https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download my resume (PDF)
              </a>
            </div>
          </div>
        </div>
        
        <div ref={principlesRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-teal/20 rounded-xl flex items-center justify-center mb-4 border border-brand-teal/30 group hover:border-brand-teal transition-colors">
                {principle.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{principle.title}</h4>
              <p className="text-sm text-gray-400">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
