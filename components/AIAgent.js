'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_MESSAGE = {
  id: 'init-1',
  sender: 'ai',
  text: "Hello! 👋 How can I help you? I'm Ashikur's AI Assistant. You can ask me anything to get to know Ashikur, explore his full-stack projects, or we can discuss starting a new project together if you have a unique idea!",
  timestamp: 'Just now',
  actions: [
    { label: "💡 I have a unique idea", query: "I have a unique idea for a project" },
    { label: "🚀 Start a new project", query: "We can start a new project" },
    { label: "👨‍💻 Tell me about Ashikur", query: "Tell me about yourself and your background" },
    { label: "⚡ Tech Stack & Skills", query: "What technologies and skills do you specialize in?" },
    { label: "🏆 Featured Projects", query: "Show me your best full-stack projects" },
    { label: "📬 How to contact or hire?", query: "How can I contact or hire Ashikur?" }
  ]
};

// Knowledge base and intelligent response generator for Ashikur Rahman
function generateAIResponse(userText) {
  const query = userText.toLowerCase().trim();

  // 1. Unique Idea / Start a New Project
  if (
    query.includes('unique idea') ||
    query.includes('unique ide') ||
    query.includes('idea') ||
    query.includes('concept')
  ) {
    return {
      text: "That's fantastic! 💡 Ashikur loves working on unique and innovative ideas. He specializes in turning creative concepts into scalable, production-ready MERN & Next.js applications.\n\nHere is how Ashikur can bring your unique idea to life:\n• **Rapid MVP & Prototyping**: Fast turnaround to validate your concept.\n• **Modern UI/UX**: Sleek, high-contrast, interactive interfaces with smooth animations (Tailwind CSS, Framer Motion, GSAP).\n• **Robust Full-Stack Architecture**: Next.js/React frontend + Node/Express backend + MongoDB database.\n• **Security & Payments**: Role-based access (JWT) & Stripe payment gateways.\n\nTell me a little more about your idea, or reach out to Ashikur directly to discuss it under full confidentiality!",
      links: [
        { label: "💬 Chat on WhatsApp", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Email Ashikur", url: "mailto:halima520ashu@gmail.com" },
        { label: "💼 Connect on LinkedIn", url: "https://www.linkedin.com/in/ashkrahman/" }
      ]
    };
  }

  if (
    query.includes('start a new project') ||
    query.includes('new project') ||
    query.includes('start project') ||
    query.includes('build a website') ||
    query.includes('build an app') ||
    query.includes('create a project')
  ) {
    return {
      text: "Awesome! Let's start a new project together! 🚀\n\nAshikur is ready to help you plan, design, and develop your project from scratch. Whether you need a full-stack SaaS platform, custom dashboard, e-commerce store, or an interactive web application, here's his workflow:\n\n1. **Discovery & Planning**: Understanding your goals, features, and timeline.\n2. **UI/UX Design**: Crafting clean, responsive user journeys.\n3. **MERN/Next.js Development**: Writing clean, maintainable, modular code.\n4. **Testing & Deployment**: High-speed hosting on Vercel with zero downtime.\n\nLet's connect right away to discuss your timeline and requirements!",
      links: [
        { label: "💬 Quick WhatsApp Chat", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Send Project Email", url: "mailto:halima520ashu@gmail.com" }
      ]
    };
  }

  // 2. Who is Ashikur / Background / About
  if (
    query.includes('about') ||
    query.includes('who are you') ||
    query.includes('who is ashik') ||
    query.includes('tell me about') ||
    query.includes('yourself') ||
    query.includes('myself') ||
    query.includes('background') ||
    query.includes('bio')
  ) {
    return {
      text: "👋 Meet **Ashikur Rahman** (Ashik):\n\n• **Role**: MERN Stack & Full-Stack Web Developer from Bangladesh.\n• **Education**: Currently pursuing a Diploma in **Computer Science & Technology (CST)** at **Dhaka Polytechnic Institute** (2024 - Present, Expected 2028).\n• **Previous Education**: Completed SSC from **Khamar Miniram High School** (2024).\n• **Core Passion**: Building high-performance, accessible, and visually captivating web applications that solve real-world problems.\n• **Key Strengths**: Full-stack MERN development, dynamic UI animations (GSAP/Framer Motion), database modeling, and clean API design.",
      links: [
        { label: "📄 Download Resume (PDF)", url: "https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link", primary: true },
        { label: "🌐 View LinkedIn Profile", url: "https://www.linkedin.com/in/ashkrahman/" }
      ]
    };
  }

  // 3. Skills / Tech Stack
  if (
    query.includes('skill') ||
    query.includes('tech') ||
    query.includes('stack') ||
    query.includes('language') ||
    query.includes('tool') ||
    query.includes('framework')
  ) {
    return {
      text: "⚡ **Ashikur's Core Tech Stack & Skills**:\n\n• **Frontend**: React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, GSAP animations, HTML5/CSS3.\n• **Backend & APIs**: Node.js, Express.js, RESTful APIs, JWT Authentication, Server Actions.\n• **Database**: MongoDB, Mongoose.\n• **Tools & Platforms**: Git, GitHub, Vercel, Netlify, Stripe Payments, Postman, VS Code.\n• **Architecture**: Responsive design, performance optimization, modular component structure.",
      links: [
        { label: "🛠️ Check Skills Section", url: "#skills" },
        { label: "📂 Browse GitHub Repos", url: "https://github.com/halimaashu" }
      ]
    };
  }

  // 4. Projects
  if (
    query.includes('project') ||
    query.includes('work') ||
    query.includes('portfolio') ||
    query.includes('youngman') ||
    query.includes('hire_loop') ||
    query.includes('hireloop') ||
    query.includes('gameboy') ||
    query.includes('game boy') ||
    query.includes('friendvibe') ||
    query.includes('ai hub')
  ) {
    return {
      text: "🏆 **Ashikur's Top Full-Stack Projects**:\n\n1. **YoungMan** (Fitness & Fight Camp Platform)\n• Admin & User role-based dashboards, class bookings, community discussion forum, JWT auth.\n• Live: https://young-man.vercel.app/\n\n2. **Hire_Loop** (Tech Recruitment Portal)\n• Real-time candidate tracking, recruiter alerts, resume management.\n• Live: https://hire-loop-beta.vercel.app/\n\n3. **Game Boy** (Gaming E-Commerce & Marketplace)\n• Stripe payments, cart checkout, order tracking & review system.\n• Live: https://game-boy.vercel.app/\n\n4. **FriendVibe** (Relationship Management App)\n• Analytics, relationship health status, friend tags.\n• Live: https://friend-vibe.vercel.app/\n\n5. **Ai Hub** (Frontier AI Platform)\n• Unified AI subscription interface with neon aesthetic.\n• Live: https://ai-hub-all-reserved.netlify.app/",
      links: [
        { label: "🥊 View YoungMan Live", url: "https://young-man.vercel.app/", primary: true },
        { label: "💼 View Hire_Loop Live", url: "https://hire-loop-beta.vercel.app/" },
        { label: "🎮 View Game Boy Live", url: "https://game-boy.vercel.app/" }
      ]
    };
  }

  // 5. Contact / Hire / Availability
  if (
    query.includes('contact') ||
    query.includes('hire') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('whatsapp') ||
    query.includes('message') ||
    query.includes('reach') ||
    query.includes('available') ||
    query.includes('rate')
  ) {
    return {
      text: "📬 **Get in touch with Ashikur Rahman**:\n\n• **Email**: halima520ashu@gmail.com\n• **WhatsApp**: +880 1975-665249\n• **Location**: Dhaka, Bangladesh (Available for remote global opportunities)\n• **Availability**: Open for full-stack MERN roles, contracts, and new project collaborations.\n\nFeel free to send a message directly using the links below!",
      links: [
        { label: "💬 WhatsApp (+8801975665249)", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Direct Email", url: "mailto:halima520ashu@gmail.com" },
        { label: "🔗 LinkedIn", url: "https://www.linkedin.com/in/ashkrahman/" }
      ]
    };
  }

  // 6. Resume / CV
  if (
    query.includes('resume') ||
    query.includes('cv') ||
    query.includes('document') ||
    query.includes('pdf')
  ) {
    return {
      text: "📄 You can view and download Ashikur Rahman's official full-stack developer CV right here:\n\nIncludes complete details on his technical skills, MERN stack full-stack projects, education at Dhaka Polytechnic Institute, and verified contact channels.",
      links: [
        { label: "📥 Download Resume (PDF)", url: "https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link", primary: true }
      ]
    };
  }

  // 7. Greeting
  if (
    query.includes('hi') ||
    query.includes('hello') ||
    query.includes('hey') ||
    query.includes('assalamu alaikum') ||
    query.includes('salam')
  ) {
    return {
      text: "Hello! 😊 It's great to have you here. I can answer any questions about Ashikur's experience, his MERN stack skills, his full-stack projects, or how to start a new project together. What would you like to explore?",
      links: [
        { label: "💡 I have a unique idea", url: "#contact", isQuery: "I have a unique idea for a project" },
        { label: "🚀 Start a new project", url: "#contact", isQuery: "We can start a new project" }
      ]
    };
  }

  // Default intelligent fallback
  return {
    text: "Thanks for asking! As Ashikur's AI Assistant, I can help you with:\n\n• **Starting a new project** or discussing a **unique idea**\n• Exploring his **MERN Stack skills** (React, Next.js, Node.js, Express, MongoDB)\n• Reviewing his **featured projects** (YoungMan, Hire_Loop, Game Boy, etc.)\n• Getting his **Resume** or **contacting him directly**\n\nWhat would you like to know more about?",
    links: [
      { label: "💡 I have a unique idea", url: "#contact", isQuery: "I have a unique idea for a project" },
      { label: "🚀 Start a new project", url: "#contact", isQuery: "We can start a new project" },
      { label: "💬 Message on WhatsApp", url: "https://wa.me/8801975665249", primary: true }
    ]
  };
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Show a welcoming popover tooltip shortly after initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto-scroll messages to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Realistic typing delay simulation (500ms - 900ms)
    setTimeout(() => {
      const response = generateAIResponse(text);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        links: response.links,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      {/* Floating Widget Trigger Button & Notification Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        {/* Welcome Tooltip Bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 mr-1 max-w-xs bg-brand-darker/95 border border-brand-teal/40 rounded-2xl p-3.5 shadow-[0_0_25px_rgba(0,210,180,0.25)] backdrop-blur-xl text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                  </span>
                  <span className="text-xs font-bold text-brand-teal tracking-wider uppercase">Ashikur's AI Agent</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                  }}
                  className="text-gray-400 hover:text-white text-xs p-0.5"
                  aria-label="Dismiss greeting"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                👋 Have a <span className="text-brand-teal font-semibold">unique idea</span> or want to <span className="text-brand-teal font-semibold">start a new project</span>? Let's chat!
              </p>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowTooltip(false);
                }}
                className="mt-2 text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
              >
                Chat with AI Assistant →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating AI Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group p-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple text-brand-darker shadow-[0_0_25px_rgba(0,210,180,0.45)] hover:shadow-[0_0_35px_rgba(0,210,180,0.7)] transition-all duration-300 flex items-center justify-center border border-white/20"
          aria-label="Open AI Assistant"
        >
          {/* Online Pulsing Ring */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-teal border-2 border-brand-darker"></span>
          </span>

          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex items-center space-x-1.5 text-white">
              {/* AI Sparkle / Robot Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
          )}

          {/* Unread indicator text */}
          {!isOpen && hasUnread && (
            <span className="absolute -bottom-2 bg-brand-darker border border-brand-teal/60 text-[10px] font-bold text-brand-teal px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
              AI Online
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[82vh] h-[620px] flex flex-col rounded-3xl bg-brand-darker/95 border border-brand-teal/40 shadow-[0_0_50px_rgba(0,210,180,0.25)] backdrop-blur-2xl overflow-hidden pointer-events-auto"
            style={{ cursor: 'auto' }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-brand-card/70 border-b border-gray-800/80 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-teal to-brand-purple flex items-center justify-center text-white shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-teal border-2 border-brand-darker rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Ashikur's AI Agent
                    <span className="text-[10px] font-normal bg-brand-teal/15 text-brand-teal px-1.5 py-0.5 rounded border border-brand-teal/30">
                      Active
                    </span>
                  </h3>
                  <p className="text-[11px] text-gray-400">MERN Stack & Project Consultant</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  className="p-1.5 text-gray-400 hover:text-brand-teal rounded-lg hover:bg-white/5 transition-colors text-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors text-xs"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              data-lenis-prevent="true"
              className="flex-1 p-4 overflow-y-auto space-y-4 text-sm scroll-smooth custom-scrollbar"
              style={{ overscrollBehavior: 'contain' }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-teal/90 to-brand-teal text-brand-darker font-medium rounded-br-none shadow-[0_0_15px_rgba(0,210,180,0.3)]'
                        : 'bg-brand-card/80 text-gray-200 border border-gray-800 rounded-bl-none shadow-md'
                    }`}
                  >
                    <div className="whitespace-pre-line text-xs sm:text-sm">
                      {msg.text}
                    </div>

                    {/* Interactive Action Buttons & Links inside messages */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-gray-700/60 flex flex-col gap-1.5">
                        {msg.links.map((link, idx) => (
                          link.isQuery ? (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(link.isQuery)}
                              className="text-left py-1.5 px-3 rounded-lg text-xs font-semibold bg-brand-teal/15 text-brand-teal hover:bg-brand-teal hover:text-brand-darker transition-all border border-brand-teal/30"
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith('#') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className={`text-left py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                                link.primary
                                  ? 'bg-brand-teal text-brand-darker hover:bg-brand-teal/90 shadow-[0_0_10px_rgba(0,210,180,0.4)]'
                                  : 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10'
                              }`}
                            >
                              <span>{link.label}</span>
                              <span className="text-[10px]">↗</span>
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Initial Suggested Action Chips */}
                  {msg.actions && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 w-full">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(act.query)}
                          className="text-xs bg-brand-dark/90 hover:bg-brand-teal/20 text-gray-300 hover:text-brand-teal border border-gray-700/70 hover:border-brand-teal/40 py-1.5 px-3 rounded-full transition-all duration-200 text-left shadow-sm active:scale-95"
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 text-brand-teal bg-brand-card/70 border border-gray-800 px-3.5 py-2.5 rounded-2xl rounded-bl-none w-20">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-brand-card/90 border-t border-gray-800/80 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ashikur, unique ideas, or projects..."
                className="flex-1 bg-brand-darker/90 text-white placeholder-gray-500 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-gray-700/80 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal transition-all"
                style={{ cursor: 'text' }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-brand-teal text-brand-darker font-bold hover:bg-brand-teal/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,210,180,0.3)] flex items-center justify-center"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
