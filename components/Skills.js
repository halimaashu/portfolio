'use client';

import React from 'react';

const row1Skills = [
  { 
    name: 'React.js', 
    category: 'Frontend Library',
    icon: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10" fill="#61DAFB"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> 
  },
  { 
    name: 'Next.js', 
    category: 'Full-Stack Framework',
    icon: <svg viewBox="0 0 128 128" className="w-10 h-10" fill="currentColor"><path d="M64 0a64 64 0 1064 64A64 64 0 0064 0zM51 43.1h6v41.8h-6V43.1zm44.2 34L85.5 63.8V85h-6V43h5.9l13.1 19V43h6v41.9h-4.3z"/></svg> 
  },
  { 
    name: 'TypeScript', 
    category: 'Typed JavaScript',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#3178C6"><path d="M0 0h24v24H0V0zm22.034 18.254c.028-.435-.112-.76-.411-.975-.3-.21-.73-.34-1.29-.39l-.65-.05c-.32-.03-.54-.08-.66-.15-.12-.07-.18-.17-.18-.3 0-.12.04-.21.14-.28.1-.07.25-.1.45-.1.21 0 .39.05.54.14.15.09.24.23.28.43h1.83c-.04-.56-.22-1.02-.55-1.39-.33-.37-.86-.55-1.58-.55-.71 0-1.28.17-1.7.53-.42.36-.63.81-.63 1.34 0 .43.14.77.42 1.02.28.25.75.43 1.41.53l.63.09c.33.04.56.1.7.18.14.08.21.19.21.32 0 .14-.07.24-.2.32-.13.08-.34.12-.62.12-.35 0-.61-.09-.78-.28-.17-.19-.26-.45-.26-.78h-1.88c0 .59.18 1.09.53 1.5.35.41.91.62 1.69.62.72 0 1.28-.17 1.69-.51.41-.34.62-.8.62-1.38v-.03zm-7.643-1.03c0-.57-.22-1.04-.66-1.41-.44-.37-1.05-.56-1.82-.56-.78 0-1.37.17-1.78.51-.41.34-.63.81-.66 1.42h1.83c.03-.26.11-.47.24-.62.13-.15.34-.23.64-.23.27 0 .47.07.6.21.13.14.2.32.2.55v4.21c0 .24-.07.43-.2.57-.13.14-.33.21-.6.21-.29 0-.5-.07-.63-.21-.13-.14-.2-.33-.2-.57V18h-1.83v2.85c0 .67.2 1.2.62 1.58.42.38 1 .57 1.74.57 1.5 0 2.25-.72 2.25-2.15v-4.63z"/></svg> 
  },
  { 
    name: 'JavaScript (ES6+)', 
    category: 'Core Language',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.254c.028-.435-.112-.76-.411-.975-.3-.21-.73-.34-1.29-.39l-.65-.05c-.32-.03-.54-.08-.66-.15-.12-.07-.18-.17-.18-.3 0-.12.04-.21.14-.28.1-.07.25-.1.45-.1.21 0 .39.05.54.14.15.09.24.23.28.43h1.83c-.04-.56-.22-1.02-.55-1.39-.33-.37-.86-.55-1.58-.55-.71 0-1.28.17-1.7.53-.42.36-.63.81-.63 1.34 0 .43.14.77.42 1.02.28.25.75.43 1.41.53l.63.09c.33.04.56.1.7.18.14.08.21.19.21.32 0 .14-.07.24-.2.32-.13.08-.34.12-.62.12-.35 0-.61-.09-.78-.28-.17-.19-.26-.45-.26-.78h-1.88c0 .59.18 1.09.53 1.5.35.41.91.62 1.69.62.72 0 1.28-.17 1.69-.51.41-.34.62-.8.62-1.38v-.03zm-7.643-1.03c0-.57-.22-1.04-.66-1.41-.44-.37-1.05-.56-1.82-.56-.78 0-1.37.17-1.78.51-.41.34-.63.81-.66 1.42h1.83c.03-.26.11-.47.24-.62.13-.15.34-.23.64-.23.27 0 .47.07.6.21.13.14.2.32.2.55v4.21c0 .24-.07.43-.2.57-.13.14-.33.21-.6.21-.29 0-.5-.07-.63-.21-.13-.14-.2-.33-.2-.57V18h-1.83v2.85c0 .67.2 1.2.62 1.58.42.38 1 .57 1.74.57 1.5 0 2.25-.72 2.25-2.15v-4.63z"/></svg> 
  },
  { 
    name: 'Tailwind CSS', 
    category: 'Utility-first Styling',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> 
  },
  { 
    name: 'HTML5', 
    category: 'Semantic Markup',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#E34F26"><path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM10.5 16.1l-3.9-.1L6.3 12h3.9L10 9H6l-.2-3h12.4l-.2 3h-6l.2 3h6l-.3 5.4L12 18.9l-5.6-1.5-.1-1.3h3.2v.1z"/></svg> 
  },
  { 
    name: 'CSS3', 
    category: 'Modern Layouts',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#1572B6"><path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM18 6H6.2l.2 3H17l-.2 3.4L12 14l-4.8-1.6-.1-1.4H4.3l.2 3.8L12 18l7.5-3.3.5-8.7z"/></svg> 
  },
  { 
    name: 'Framer Motion', 
    category: 'Motion & Physics',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#F01878"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg> 
  }
];

const row2Skills = [
  { 
    name: 'Node.js', 
    category: 'Backend Runtime',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#339933"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 15.5l-6-3.3v-6.4l6 3.3v6.4zm2 0v-6.4l6-3.3v6.4l-6 3.3z"/></svg> 
  },
  { 
    name: 'Express.js', 
    category: 'REST API Framework',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 15.9h-1.9l-2.4-3.8-2.4 3.8H9l3.4-5.2L9.2 5.5h1.9l2.2 3.5 2.2-3.5h1.9l-3.2 5.2 3.4 5.2z"/></svg> 
  },
  { 
    name: 'MongoDB', 
    category: 'NoSQL Database',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#47A248"><path d="M12 0s-6.2 6.8-6.2 12.8c0 3.8 2.6 7 6.2 7.9 3.6-.9 6.2-4.1 6.2-7.9C18.2 6.8 12 0 12 0zm.8 19.8v-7.2c.4-.3.7-.8.7-1.4 0-.9-.7-1.7-1.6-1.7s-1.6.8-1.6 1.7c0 .6.3 1.1.7 1.4v7.2c-2.7-.8-4.6-3.3-4.6-6.3 0-4.8 4.3-10 4.8-10.6.5.6 4.8 5.8 4.8 10.6 0 3-1.9 5.5-4.6 6.3z"/></svg> 
  },
  { 
    name: 'JWT & Auth', 
    category: 'Security & Sessions',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#D63AF9"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg> 
  },
  { 
    name: 'RESTful APIs', 
    category: 'Endpoints & Microservices',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#731cb2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg> 
  },
  { 
    name: 'Stripe Payments', 
    category: 'Payment Gateway',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#6772E5"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.968.5 13.064.5 7.643.5 3.736 3.42 3.736 8.358c0 5.253 4.846 6.559 8.243 7.747 2.213.774 3.036 1.488 3.036 2.449 0 .983-.872 1.488-2.316 1.488-2.28 0-5.176-1.107-7.146-2.233l-.933 5.556c2.096 1.054 4.846 1.635 7.75 1.635 5.688 0 9.882-2.827 9.882-8.082 0-5.467-5.02-6.726-8.276-7.768z"/></svg> 
  },
  { 
    name: 'Git & GitHub', 
    category: 'Version Control',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#F05032"><path d="M23.546 10.93L13.067.45a1.495 1.495 0 00-2.115 0L8.83 2.57l2.13 2.13a1.493 1.493 0 012.115 0l2.13 2.13a1.494 1.494 0 010 2.115l-2.13 2.13a1.494 1.494 0 01-2.115 0l-2.13-2.13a1.494 1.494 0 010-2.115L11.11 8.92 8.98 6.79l-4.14 4.14a1.495 1.495 0 000 2.115l10.48 10.48a1.495 1.495 0 002.115 0l10.48-10.48a1.495 1.495 0 000-2.115zM7.22 13.91a1.494 1.494 0 110-2.988 1.494 1.494 0 010 2.988z"/></svg> 
  },
  { 
    name: 'Vercel & Netlify', 
    category: 'Cloud Deployment',
    icon: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> 
  }
];

const SkillCard = ({ skill }) => (
  <div className="mx-3 w-56 sm:w-64 glass-card rounded-2xl p-5 flex items-center space-x-4 border border-[#5a2aac]/40 hover:border-[#731cb2] transition-all duration-300 group hover:scale-105 select-none shrink-0 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(115,28,178,0.35)]">
    <div className="w-12 h-12 rounded-xl bg-brand-dark/80 border border-[#5a2aac]/40 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
      {skill.icon}
    </div>
    <div className="flex flex-col text-left overflow-hidden">
      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#a17de0] transition-colors truncate font-display">
        {skill.name}
      </h4>
      <span className="text-xs text-gray-400 truncate font-mono">
        {skill.category}
      </span>
    </div>
    <div className="absolute inset-0 rounded-2xl bg-[#731cb2]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-lg pointer-events-none"></div>
  </div>
);

const Skills = () => {
  // Duplicate arrays to ensure seamless infinite looping
  const duplicatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills];
  const duplicatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills];

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#731cb2]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#5a2aac]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-[#a17de0] font-medium mb-2 tracking-widest uppercase font-mono text-xs">Expertise & Technologies</h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display">MERN & Full-Stack Arsenal</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Modern technologies I use to architect, design, build, and deploy production-grade web applications.
        </p>

        {/* GitHub Link CTA Button */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://github.com/halimaashu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-brand-darker border border-[#731cb2]/50 hover:border-[#a17de0] text-white hover:text-[#a17de0] shadow-[0_0_20px_rgba(115,28,178,0.3)] hover:shadow-[0_0_30px_rgba(115,28,178,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 group font-display"
          >
            <svg className="w-5 h-5 fill-current text-white group-hover:text-[#a17de0] transition-colors" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <span className="text-sm font-semibold tracking-wide">Explore My Repositories on GitHub: github.com/halimaashu</span>
            <span className="text-[#a17de0] text-sm group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Infinite Dual-Row Marquee Container */}
      <div className="relative w-full overflow-hidden space-y-6">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-dark via-brand-dark/80 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Marquee Scrolling Left (Frontend & Core) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left py-2 flex items-center">
            {duplicatedRow1.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Marquee Scrolling Right (Backend, DB & Tools) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right py-2 flex items-center">
            {duplicatedRow2.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
