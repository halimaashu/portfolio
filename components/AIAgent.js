'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_MESSAGE = {
  id: 'init-1',
  sender: 'ai',
  text: "Hello! 👋 How can I help you today?\n\nI'm Ashikur's Agentic AI Assistant. You can ask me anything to get to know Ashikur, explore his full-stack projects, ask why you should hire Ashikur, or we can discuss starting a new project together if you have a unique idea!",
  timestamp: 'LIVE // 00:01',
  tokens: 42,
  actions: [
    { label: "🌟 Why Ashik? (Why hire him?)", query: "Why should I hire Ashikur? What makes him stand out?" },
    { label: "💡 I have a unique idea", query: "I have a unique idea for a project" },
    { label: "🚀 Start a new project", query: "We can start a new project together" },
    { label: "👨‍💻 Tell me about Ashikur", query: "Tell me about Ashikur's background and education" },
    { label: "⚡ Tech Stack & Skills", query: "What technologies and skills do you specialize in?" },
    { label: "🏆 Featured Projects", query: "Show me your top full-stack projects" },
    { label: "📬 How to contact or hire?", query: "How can I contact or hire Ashikur?" }
  ]
};

// Comprehensive Resume/CV & Persona Knowledge Engine for Ashikur Rahman
function generateNaturalChatbotResponse(userText) {
  const q = userText.toLowerCase().trim();

  // 1. "Why Ashik?" / "Why should I hire you?" / "What makes him unique?"
  if (
    q.includes('why ashik') ||
    q.includes('why hire') ||
    q.includes('why should') ||
    q.includes('why choose') ||
    q.includes('what makes him') ||
    q.includes('what makes you') ||
    q.includes('stand out') ||
    q.includes('why you') ||
    q.includes('benefit') ||
    q.includes('reason to hire')
  ) {
    return {
      text: "🌟 **Why Choose Ashikur Rahman?**\n\nHere are 5 core reasons why Ashikur is an exceptional hire for your engineering team or freelance project:\n\n1. **True End-to-End MERN Mastery**: Not just a UI designer; he architects complete, production-ready full-stack applications from React 19/Next.js frontends to Node.js/Express REST APIs and optimized MongoDB database schemas.\n\n2. **Proven Full-Stack Track Record**: Built real-world platforms like **YoungMan** (role-based dashboards & booking), **Hire_Loop** (applicant tracking system), and **Game Boy** (Stripe checkout & order management).\n\n3. **Obsession with Motion & Performance**: Masters 60FPS fluid animations using GSAP, Framer Motion, and Lenis smooth scrolling, ensuring high user retention and award-winning aesthetics.\n\n4. **Rapid Learner & Dedicated Problem Solver**: Currently pursuing his Diploma in CST at Dhaka Polytechnic Institute (Expected 2028), continuously building and deploying production SaaS applications.\n\n5. **Seamless Collaboration**: Proactive communication, clean Git commit workflows, and fast turnaround times on milestones.",
      tokens: 184,
      links: [
        { label: "💬 Discuss Your Role/Project on WhatsApp", url: "https://wa.me/8801975665249", primary: true },
        { label: "📄 Download Official Resume (PDF)", url: "https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link" },
        { label: "📧 Email Ashikur", url: "mailto:halima520ashu@gmail.com" }
      ]
    };
  }

  // 2. Unique Idea / Brainstorming
  if (
    q.includes('unique idea') ||
    q.includes('unique ide') ||
    q.includes('my idea') ||
    q.includes('have an idea') ||
    q.includes('new idea') ||
    q.includes('brainstorm') ||
    q.includes('concept') ||
    q.includes('startup')
  ) {
    return {
      text: "That's fantastic! 💡 Ashikur loves working on unique and innovative ideas. He specializes in turning creative concepts into scalable, production-ready MERN & Next.js applications.\n\n**How Ashikur brings your unique idea to life:**\n• **Step 1 - Conceptualization**: Clarifying requirements, user journeys, and database modeling.\n• **Step 2 - UI/UX Design**: Sleek, high-contrast, interactive interfaces with smooth animations (Tailwind CSS, Framer Motion, GSAP).\n• **Step 3 - Full-Stack Architecture**: Next.js/React frontend + Node/Express backend + MongoDB database.\n• **Step 4 - Security & Transactions**: Role-based access (JWT) & Stripe payment gateways.\n• **Step 5 - Vercel Cloud Launch**: Blazing-fast performance and global CDN distribution.\n\nTell me a little more about your idea, or reach out to Ashikur directly to discuss it under full confidentiality!",
      tokens: 196,
      links: [
        { label: "💬 Chat on WhatsApp (+8801975665249)", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Email Your Concept", url: "mailto:halima520ashu@gmail.com" },
        { label: "💼 Connect on LinkedIn", url: "https://www.linkedin.com/in/ashkrahman/" }
      ]
    };
  }

  // 3. Start a New Project / Work Together / Hire
  if (
    q.includes('start a new project') ||
    q.includes('start project') ||
    q.includes('new project') ||
    q.includes('hire') ||
    q.includes('work together') ||
    q.includes('collaborate') ||
    q.includes('freelance') ||
    q.includes('build me') ||
    q.includes('build an app') ||
    q.includes('build a website') ||
    q.includes('contract')
  ) {
    return {
      text: "Let's build something extraordinary together! 🚀\n\nAshikur is available for full-stack web development projects, freelance contracts, and full-time remote developer opportunities.\n\n**Standard Project Journey:**\n• **Discovery & Planning**: We discuss your goals, features, and target launch date.\n• **Interactive Prototyping**: Responsive UI/UX wireframes with modern aesthetics.\n• **Full-Stack Sprint**: Clean component architecture, database modeling, and secure REST APIs.\n• **Deployment**: High-speed hosting on Vercel with zero downtime.\n\nReady to get started? Reach out directly via WhatsApp or email for a quick turnaround!",
      tokens: 162,
      links: [
        { label: "💬 Quick WhatsApp Chat", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Send Project Email", url: "mailto:halima520ashu@gmail.com" }
      ]
    };
  }

  // 4. Pricing / Cost / Rates
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('rate') ||
    q.includes('how much') ||
    q.includes('budget') ||
    q.includes('fee') ||
    q.includes('charge')
  ) {
    return {
      text: "💰 **Pricing & Rates**:\n\nAshikur offers transparent, flexible pricing tailored to your project scope:\n\n• **Fixed-Price Projects**: Ideal for well-defined MVPs, landing pages, or full-stack web applications with clear deliverables.\n• **Milestone-Based**: For larger multi-phase SaaS platforms and custom portals.\n• **Hourly / Contract**: For ongoing frontend or backend maintenance and feature additions.\n\nEvery project is unique! Tell Ashikur your requirements, and he will provide a transparent timeline and cost estimate with zero obligation.",
      tokens: 148,
      links: [
        { label: "💬 Get a Quick Quote on WhatsApp", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Email Project Details", url: "mailto:halima520ashu@gmail.com" }
      ]
    };
  }

  // 5. Timeline / Turnaround
  if (
    q.includes('timeline') ||
    q.includes('how long') ||
    q.includes('turnaround') ||
    q.includes('deadline') ||
    q.includes('time')
  ) {
    return {
      text: "⏱️ **Project Turnaround Estimates**:\n\n• **High-Impact Landing Pages & Portfolios**: 3 – 5 days.\n• **Core MVPs & Feature Additions**: 1 – 2 weeks.\n• **Full-Stack MERN Platforms** (Auth, Dashboards, Payments, Database): 2 – 4 weeks.\n\nAshikur delivers clean, tested code on schedule with frequent progress updates.",
      tokens: 110,
      links: [
        { label: "💬 Discuss Your Deadline on WhatsApp", url: "https://wa.me/8801975665249", primary: true }
      ]
    };
  }

  // 6. Tell me about Ashikur / Bio / Background / Education
  if (
    q.includes('about') ||
    q.includes('who is') ||
    q.includes('who are you') ||
    q.includes('tell me about') ||
    q.includes('yourself') ||
    q.includes('ashik') ||
    q.includes('ashikur') ||
    q.includes('education') ||
    q.includes('polytechnic') ||
    q.includes('diploma') ||
    q.includes('school') ||
    q.includes('college') ||
    q.includes('cst')
  ) {
    return {
      text: "👨‍💻 **About Ashikur Rahman (Ashik)**:\n\n• **Professional Role**: MERN Stack & Full-Stack Web Developer.\n• **Location**: Dhaka, Bangladesh (Open for global remote work).\n• **Education**:\n  - Currently pursuing a **Diploma in Computer Science & Technology (CST)** at **Dhaka Polytechnic Institute** (2024 - Present, Expected 2028).\n  - Completed SSC from **Khamar Miniram High School** (2024).\n• **Core Passion**: Building high-performance, accessible, and visually captivating web applications that solve real-world problems.\n• **Key Strengths**: Full-stack MERN development, dynamic UI animations (GSAP/Framer Motion), database modeling, and clean API design.",
      tokens: 175,
      links: [
        { label: "📄 Download Resume (PDF)", url: "https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link", primary: true },
        { label: "💼 View LinkedIn Profile", url: "https://www.linkedin.com/in/ashkrahman/" }
      ]
    };
  }

  // 7. Skills / Tech Stack
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('language') ||
    q.includes('mern') ||
    q.includes('react') ||
    q.includes('next') ||
    q.includes('node') ||
    q.includes('express') ||
    q.includes('mongo') ||
    q.includes('database') ||
    q.includes('typescript') ||
    q.includes('tailwind')
  ) {
    return {
      text: "⚡ **Ashikur's Core Tech Stack**:\n\n• **Frontend**: React.js, Next.js (App Router, Turbopack), TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, GSAP animations, HTML5 & CSS3.\n• **Backend**: Node.js, Express.js, RESTful APIs, JWT Authentication, Server Actions.\n• **Database**: MongoDB, Mongoose.\n• **Tools & Platforms**: Git, GitHub, Vercel, Netlify, Stripe Payments, Postman, VS Code.\n• **Specialties**: High 60fps animations, responsive layouts, role-based dashboards, and secure full-stack workflows.",
      tokens: 165,
      links: [
        { label: "🛠️ Check Skills Section", url: "#skills" },
        { label: "📂 Browse GitHub Repos", url: "https://github.com/halimaashu" }
      ]
    };
  }

  // 8. Projects (YoungMan, Hire_Loop, Game Boy, FriendVibe, Ai Hub, etc.)
  if (
    q.includes('project') ||
    q.includes('youngman') ||
    q.includes('hire_loop') ||
    q.includes('hireloop') ||
    q.includes('gameboy') ||
    q.includes('game boy') ||
    q.includes('friendvibe') ||
    q.includes('ai hub') ||
    q.includes('tea house') ||
    q.includes('portfolio')
  ) {
    return {
      text: "🏆 **Featured Full-Stack Projects by Ashikur**:\n\n1. **YoungMan** (Fitness & Fight Camp Platform)\n• Role-based Admin & User Dashboards, Class Booking, Community Forum, JWT Authentication.\n• Live: https://young-man.vercel.app/\n\n2. **Hire_Loop** (Tech Recruitment Platform)\n• Real-time candidate tracking, recruiter alerts, and applicant management.\n• Live: https://hire-loop-beta.vercel.app/\n\n3. **Game Boy** (Gaming E-Commerce & Marketplace)\n• Stripe payments, shopping cart, real-time order tracking, and reviews.\n• Live: https://game-boy.vercel.app/\n\n4. **FriendVibe** (Relationship Management App)\n• Interaction logs, relationship health tracking, and dashboards.\n• Live: https://friend-vibe.vercel.app/\n\n5. **Ai Hub** (Frontier AI Platform)\n• Unified AI model subscription platform with neon aesthetic.\n• Live: https://ai-hub-all-reserved.netlify.app/",
      tokens: 195,
      links: [
        { label: "🥊 View YoungMan Live", url: "https://young-man.vercel.app/", primary: true },
        { label: "💼 View Hire_Loop Live", url: "https://hire-loop-beta.vercel.app/" },
        { label: "🎮 View Game Boy Live", url: "https://game-boy.vercel.app/" }
      ]
    };
  }

  // 9. Contact / Email / Phone / WhatsApp / Socials
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('number') ||
    q.includes('whatsapp') ||
    q.includes('linkedin') ||
    q.includes('facebook') ||
    q.includes('github') ||
    q.includes('message') ||
    q.includes('talk') ||
    q.includes('call')
  ) {
    return {
      text: "📬 **Connect Directly with Ashikur Rahman**:\n\n• **WhatsApp**: +880 1975-665249\n• **Email**: halima520ashu@gmail.com\n• **LinkedIn**: https://www.linkedin.com/in/ashkrahman/\n• **GitHub**: https://github.com/halimaashu\n• **Facebook**: https://www.facebook.com/ashik.rahman.322962\n\nAshikur responds quickly to all client and recruitment messages!",
      tokens: 135,
      links: [
        { label: "💬 Chat on WhatsApp (+8801975665249)", url: "https://wa.me/8801975665249", primary: true },
        { label: "📧 Send Direct Email", url: "mailto:halima520ashu@gmail.com" }
      ]
    };
  }

  // 10. Resume / CV Download
  if (
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('pdf') ||
    q.includes('download')
  ) {
    return {
      text: "📄 **Ashikur Rahman's Official Resume** is available for download!\n\nIt features complete details on his technical skills, MERN stack full-stack projects, education at Dhaka Polytechnic Institute, and verified contact channels.",
      tokens: 95,
      links: [
        { label: "📥 Download Official Resume (PDF)", url: "https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link", primary: true }
      ]
    };
  }

  // 11. Greetings & Small Talk
  if (
    q.includes('hi') ||
    q.includes('hello') ||
    q.includes('hey') ||
    q.includes('good morning') ||
    q.includes('good evening') ||
    q.includes('salam') ||
    q.includes('assalamu') ||
    q.includes('yo') ||
    q.includes('wassup')
  ) {
    return {
      text: "Hello there! 😊 It's a pleasure to connect with you. How can I assist you today?\n\nI can answer anything about Ashikur's experience, why you should hire him, his full-stack projects, or we can discuss starting a new project together if you have an idea!",
      tokens: 78,
      links: [
        { label: "🌟 Why Ashik? (Why hire him?)", isQuery: "Why should I hire Ashikur? What makes him stand out?" },
        { label: "💡 I have a unique idea", isQuery: "I have a unique idea for a project" },
        { label: "🚀 Start a new project", isQuery: "We can start a new project together" }
      ]
    };
  }

  // 12. General Conversational Fallback with context awareness
  return {
    text: `That's an insightful question! Regarding **"${userText}"**:\n\nAshikur approaches all software challenges with a problem-solving mindset. Whether it's crafting high-performance MERN architecture, implementing complex business logic, or collaborating on unique startup ideas, he is always eager to build robust solutions.\n\nWould you like to explore his featured projects, view his resume, or get in touch with Ashikur directly?`,
    tokens: 115,
    links: [
      { label: "🌟 Why Ashik? (Why hire him?)", isQuery: "Why should I hire Ashikur? What makes him stand out?" },
      { label: "💡 Discuss this idea with Ashikur", isQuery: "I have a unique idea for a project" },
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
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

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      });

      const data = await res.json();

      if (data && data.reply) {
        const aiMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: data.reply,
          tokens: 140,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
        return;
      }
    } catch {
      // Graceful fallback to rich local engine
    }

    setTimeout(() => {
      const response = generateNaturalChatbotResponse(text);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        tokens: response.tokens || 110,
        links: response.links,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      {/* Floating Trigger Button & Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        {/* Welcome Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 mr-1 max-w-xs bg-[#280d69] border border-[#5a2aac] text-[#F8FAFC] rounded-2xl p-3.5 shadow-[0_0_25px_rgba(115,28,178,0.4)] backdrop-blur-xl text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#731cb2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#731cb2]"></span>
                  </span>
                  <span className="text-xs font-bold text-[#a17de0] font-agent-display tracking-wider uppercase">Ashikur's Agentic AI</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                  }}
                  className="text-[#a17de0] hover:text-[#F8FAFC] text-xs p-0.5"
                  aria-label="Dismiss greeting"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-[#F8FAFC] mt-2 leading-relaxed">
                👋 Have a <span className="text-[#a17de0] font-semibold">unique idea</span>, want to <span className="text-[#a17de0] font-semibold">start a project</span>, or asking <span className="text-brand-teal font-semibold">why Ashik</span>? Let's chat!
              </p>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowTooltip(false);
                }}
                className="mt-2 text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 font-agent-mono"
              >
                Launch AI Agentic Engine →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating AI Button with Deep Multi-Layered Velvet Accent */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group p-4 rounded-full bg-gradient-to-tr from-[#280d69] via-[#45106c] to-[#731cb2] text-[#F8FAFC] shadow-[0_0_25px_rgba(115,28,178,0.55)] hover:shadow-[0_0_35px_rgba(115,28,178,0.85)] transition-all duration-300 flex items-center justify-center border border-[#5a2aac]"
          aria-label="Open AI Assistant"
        >
          {/* Active Agent Node Glow */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a17de0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#731cb2] border-2 border-[#280d69]"></span>
          </span>

          {isOpen ? (
            <svg className="w-6 h-6 text-[#F8FAFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex items-center space-x-1.5 text-[#F8FAFC]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
          )}

          {!isOpen && hasUnread && (
            <span className="absolute -bottom-2 bg-[#280d69] border border-[#5a2aac] text-[10px] font-bold text-[#a17de0] px-2 py-0.5 rounded-full shadow-md whitespace-nowrap font-agent-mono">
              AGENT ACTIVE
            </span>
          )}
        </motion.button>
      </div>

      {/* Cutting-Edge Agentic AI Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] max-h-[82vh] h-[650px] flex flex-col rounded-3xl bg-[#280d69]/98 border border-[#5a2aac] shadow-[0_0_50px_rgba(90,42,172,0.45)] backdrop-blur-2xl overflow-hidden pointer-events-auto"
            style={{ cursor: 'auto' }}
          >
            {/* Elevated Deep Velvet-Plum Header Surface */}
            <div className="px-5 py-4 bg-[#45106c]/90 border-b border-[#5a2aac] flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#731cb2] to-[#a17de0] flex items-center justify-center text-[#F8FAFC] shadow-[0_0_15px_rgba(115,28,178,0.5)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-teal border-2 border-[#280d69] rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F8FAFC] font-agent-display flex items-center gap-2">
                    Ashikur's Agentic AI
                    <span className="text-[10px] font-medium bg-[#731cb2]/30 text-[#a17de0] px-2 py-0.5 rounded-full border border-[#5a2aac] font-agent-mono">
                      NODE • 01
                    </span>
                  </h3>
                  <div className="flex items-center space-x-2 text-[11px] text-[#a17de0] font-agent-mono">
                    <span>MERN Consultant</span>
                    <span>•</span>
                    <span className="text-brand-teal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  className="p-1.5 text-[#a17de0] hover:text-[#F8FAFC] rounded-lg hover:bg-[#731cb2]/30 transition-colors text-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close dashboard"
                  className="p-1.5 text-[#a17de0] hover:text-[#F8FAFC] rounded-lg hover:bg-[#731cb2]/30 transition-colors text-xs"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Body (Void Midnight-Purple Background) */}
            <div
              data-lenis-prevent="true"
              className="flex-1 p-4 overflow-y-auto space-y-4 text-sm scroll-smooth custom-scrollbar bg-[#280d69]"
              style={{ overscrollBehavior: 'contain' }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed shadow-lg ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] border border-[#a17de0]/40 rounded-br-none shadow-[0_0_15px_rgba(115,28,178,0.35)]'
                        : 'bg-[#45106c] text-[#F8FAFC] border border-[#5a2aac] rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line text-xs sm:text-sm font-normal">
                      {msg.text}
                    </div>

                    {/* Interactive Action Points */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3.5 pt-2.5 border-t border-[#5a2aac]/80 flex flex-col gap-2">
                        {msg.links.map((link, idx) => (
                          link.isQuery ? (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(link.isQuery)}
                              className="text-left py-2 px-3 rounded-xl text-xs font-semibold bg-[#280d69] text-brand-teal hover:bg-[#731cb2] hover:text-[#F8FAFC] transition-all border border-[#5a2aac] shadow-sm font-agent-mono"
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith('#') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className={`text-left py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all font-agent-display ${
                                link.primary
                                  ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-white hover:opacity-95 shadow-[0_0_15px_rgba(115,28,178,0.4)]'
                                  : 'bg-[#280d69] text-[#F8FAFC] hover:bg-[#731cb2] border border-[#5a2aac]'
                              }`}
                            >
                              <span>{link.label}</span>
                              <span className="text-xs">↗</span>
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Metadata: Timestamp & Token Count */}
                  <div className="flex items-center space-x-2 text-[10px] text-[#a17de0] font-agent-mono mt-1 px-1">
                    <span>{msg.timestamp}</span>
                    {msg.tokens && (
                      <>
                        <span>•</span>
                        <span>{msg.tokens} tokens</span>
                      </>
                    )}
                  </div>

                  {/* Initial Action Chips */}
                  {msg.actions && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 w-full">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(act.query)}
                          className="text-xs bg-[#45106c] hover:bg-[#731cb2] text-[#F8FAFC] hover:text-[#F8FAFC] border border-[#5a2aac] hover:border-[#a17de0] py-1.5 px-3 rounded-full transition-all duration-200 text-left shadow-sm active:scale-95 font-agent-display"
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Live Streaming Execution Step Indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 text-[#a17de0] bg-[#45106c] border border-[#5a2aac] px-3.5 py-2.5 rounded-2xl rounded-bl-none w-28 font-agent-mono text-xs shadow-md">
                  <span className="w-1.5 h-1.5 bg-[#a17de0] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#a17de0] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#a17de0] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-[#F8FAFC] ml-1">REASONING</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Elevated Deep Velvet-Plum Prompt Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#45106c] border-t border-[#5a2aac] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask 'Why Ashik?', project ideas, or stack..."
                className="flex-1 bg-[#280d69] text-[#F8FAFC] placeholder-[#a17de0]/70 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-[#5a2aac] focus:border-[#a17de0] focus:outline-none focus:ring-1 focus:ring-[#731cb2] transition-all font-agent-mono"
                style={{ cursor: 'text' }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#731cb2] to-[#a17de0] text-[#F8FAFC] font-bold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(115,28,178,0.4)] flex items-center justify-center border border-[#5a2aac]"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 transform rotate-90 text-[#F8FAFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
