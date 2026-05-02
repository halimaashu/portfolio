'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:halima520ashu@gmail.com?subject=${subject}&body=${body}`;
    
    // Open the user's mail client
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="py-24 bg-brand-darker border-t border-gray-800" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's talk?</h2>
            <p className="text-gray-400 mb-10 max-w-md">I am currently available for freelance projects or full-time roles. If you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="space-y-6">
              <a href="mailto:halima520ashu@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-brand-card rounded-full flex items-center justify-center group-hover:bg-brand-teal transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-gray-300">halima520ashu@gmail.com</span>
              </a>
              <a href="https://wa.me/01975665249" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-brand-card rounded-full flex items-center justify-center group-hover:bg-brand-teal transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-gray-300">01975665249</span>
              </a>
              <a href="https://www.facebook.com/ashik.rahman.322962" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-brand-card rounded-full flex items-center justify-center group-hover:bg-brand-teal transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-gray-300">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-brand-card rounded-full flex items-center justify-center group-hover:bg-brand-teal transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-gray-300">LinkedIn</span>
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border-gray-700 rounded-lg focus:ring-brand-teal focus:border-brand-teal text-white placeholder-gray-500 p-3" 
                  placeholder="John Doe" 
                  type="text" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border-gray-700 rounded-lg focus:ring-brand-teal focus:border-brand-teal text-white placeholder-gray-500 p-3" 
                  placeholder="john@example.com" 
                  type="email" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border-gray-700 rounded-lg focus:ring-brand-teal focus:border-brand-teal text-white placeholder-gray-500 p-3" 
                  placeholder="Hi Ashik, let's work together!" 
                  rows="4"
                  required
                ></textarea>
              </div>
              <button className="w-full py-4 bg-brand-teal text-brand-darker font-bold rounded-lg hover:bg-brand-teal/90 transition shadow-[0_0_20px_rgba(0,210,180,0.4)]" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2023 MD. Ashikur Rahman Ashik. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
