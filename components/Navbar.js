import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Ashik Logo" 
          className="w-12 h-12 object-contain rounded-full border border-brand-teal/50 shadow-[0_0_20px_rgba(0,210,180,0.4)] brightness-0 invert" 
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
      <div className="flex space-x-4">
        <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition" href="https://www.facebook.com/ashik.rahman.322962" target="_blank" rel="noopener noreferrer">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
