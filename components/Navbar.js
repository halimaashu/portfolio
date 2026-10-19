import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Ashik Logo" 
          className="nav-logo w-12 h-12 object-contain rounded-full border border-brand-teal/50 shadow-[0_0_20px_rgba(115,28,178,0.4)] brightness-0 invert transition-all" 
        />
      </div>
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li><a className="hover:text-brand-teal transition" href="#home">Home</a></li>
        <li><a className="hover:text-brand-teal transition" href="#about">About</a></li>
        <li><a className="hover:text-brand-teal transition" href="#qualifications">Qualifications</a></li>
        <li><a className="hover:text-brand-teal transition" href="#skills">Skills</a></li>
        <li><a className="hover:text-brand-teal transition" href="#projects">Projects</a></li>
        <li><a className="hover:text-brand-teal transition" href="#contact">Contact</a></li>
      </ul>
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition" href="https://github.com/halimaashu" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition" href="https://www.facebook.com/ashik.rahman.322962" target="_blank" rel="noopener noreferrer" title="Facebook">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition" href="https://www.linkedin.com/in/ashkrahman/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
