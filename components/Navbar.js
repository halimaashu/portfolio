'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Qualifications', href: '#qualifications', id: 'qualifications' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Detect active section on scroll
      const sectionIds = ['home', 'about', 'qualifications', 'skills', 'projects', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'nav-scrolled bg-[#0a0f1a]/85 backdrop-blur-xl border-b border-[#5a2aac]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'nav-unscrolled bg-[#0a0f1a]/40 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-8 max-w-7xl mx-auto" aria-label="Main Navigation">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className="flex items-center space-x-3 group"
        >
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="Ashikur Rahman Logo" 
              className="nav-logo w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full border border-brand-teal/50 shadow-[0_0_20px_rgba(115,28,178,0.4)] brightness-0 invert transition-all duration-300 group-hover:scale-105 group-hover:border-brand-teal" 
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-brand-darker animate-pulse" title="Available for hire"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-brand-teal transition-colors font-display">
              Ashikur Rahman
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider">
              MERN STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#731cb2]/35 to-[#5a2aac]/35 border border-[#731cb2]/60 shadow-[0_0_15px_rgba(115,28,178,0.35)] font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Controls & Socials */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />

          <div className="hidden sm:flex items-center space-x-2">
            <a 
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#731cb2]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#731cb2]/40 transition-all flex items-center justify-center shadow-sm" 
              href="https://github.com/halimaashu" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a 
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#731cb2]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#731cb2]/40 transition-all flex items-center justify-center shadow-sm" 
              href="https://www.linkedin.com/in/ashkrahman/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#731cb2]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#731cb2]/40 transition-all flex items-center justify-center shadow-sm" 
              href="https://www.facebook.com/ashik.rahman.322962" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Facebook Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden max-w-7xl mx-auto px-6 pt-3 pb-6"
          >
            <div className="glass-card bg-[#0a0f1a]/95 backdrop-blur-2xl border border-[#5a2aac]/30 rounded-2xl p-5 shadow-2xl space-y-3">
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.id)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-white shadow-md'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Social Links on Mobile */}
              <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">Connect:</span>
                <div className="flex items-center space-x-2">
                  <a 
                    className="w-9 h-9 rounded-xl bg-white/5 text-gray-300 hover:text-white flex items-center justify-center border border-white/10" 
                    href="https://github.com/halimaashu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                  <a 
                    className="w-9 h-9 rounded-xl bg-white/5 text-gray-300 hover:text-white flex items-center justify-center border border-white/10" 
                    href="https://www.linkedin.com/in/ashkrahman/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a 
                    className="w-9 h-9 rounded-xl bg-white/5 text-gray-300 hover:text-white flex items-center justify-center border border-white/10" 
                    href="https://www.facebook.com/ashik.rahman.322962" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
