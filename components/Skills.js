'use client';

import React from 'react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'Client-Side Engineering',
    description: 'Modern component architectures, interactive animations, and responsive web interfaces.',
    skills: [
      {
        name: 'React.js',
        category: 'UI Library',
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 sm:w-9 sm:h-9" fill="#61DAFB">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        )
      },
      {
        name: 'Next.js',
        category: 'Full-Stack Framework',
        icon: (
          <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor">
            <path d="M64 0a64 64 0 1064 64A64 64 0 0064 0zM51 43.1h6v41.8h-6V43.1zm44.2 34L85.5 63.8V85h-6V43h5.9l13.1 19V43h6v41.9h-4.3z"/>
          </svg>
        )
      },
      {
        name: 'TypeScript',
        category: 'Typed JavaScript',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#3178C6">
            <path d="M0 0h24v24H0V0zm22.034 18.254c.028-.435-.112-.76-.411-.975-.3-.21-.73-.34-1.29-.39l-.65-.05c-.32-.03-.54-.08-.66-.15-.12-.07-.18-.17-.18-.3 0-.12.04-.21.14-.28.1-.07.25-.1.45-.1.21 0 .39.05.54.14.15.09.24.23.28.43h1.83c-.04-.56-.22-1.02-.55-1.39-.33-.37-.86-.55-1.58-.55-.71 0-1.28.17-1.7.53-.42.36-.63.81-.63 1.34 0 .43.14.77.42 1.02.28.25.75.43 1.41.53l.63.09c.33.04.56.1.7.18.14.08.21.19.21.32 0 .14-.07.24-.2.32-.13.08-.34.12-.62.12-.35 0-.61-.09-.78-.28-.17-.19-.26-.45-.26-.78h-1.88c0 .59.18 1.09.53 1.5.35.41.91.62 1.69.62.72 0 1.28-.17 1.69-.51.41-.34.62-.8.62-1.38v-.03zm-7.643-1.03c0-.57-.22-1.04-.66-1.41-.44-.37-1.05-.56-1.82-.56-.78 0-1.37.17-1.78.51-.41.34-.63.81-.66 1.42h1.83c.03-.26.11-.47.24-.62.13-.15.34-.23.64-.23.27 0 .47.07.6.21.13.14.2.32.2.55v4.21c0 .24-.07.43-.2.57-.13.14-.33.21-.6.21-.29 0-.5-.07-.63-.21-.13-.14-.2-.33-.2-.57V18h-1.83v2.85c0 .67.2 1.2.62 1.58.42.38 1 .57 1.74.57 1.5 0 2.25-.72 2.25-2.15v-4.63z"/>
          </svg>
        )
      },
      {
        name: 'JavaScript (ES6+)',
        category: 'Core Language',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#F7DF1E">
            <path d="M0 0h24v24H0V0zm22.034 18.254c.028-.435-.112-.76-.411-.975-.3-.21-.73-.34-1.29-.39l-.65-.05c-.32-.03-.54-.08-.66-.15-.12-.07-.18-.17-.18-.3 0-.12.04-.21.14-.28.1-.07.25-.1.45-.1.21 0 .39.05.54.14.15.09.24.23.28.43h1.83c-.04-.56-.22-1.02-.55-1.39-.33-.37-.86-.55-1.58-.55-.71 0-1.28.17-1.7.53-.42.36-.63.81-.63 1.34 0 .43.14.77.42 1.02.28.25.75.43 1.41.53l.63.09c.33.04.56.1.7.18.14.08.21.19.21.32 0 .14-.07.24-.2.32-.13.08-.34.12-.62.12-.35 0-.61-.09-.78-.28-.17-.19-.26-.45-.26-.78h-1.88c0 .59.18 1.09.53 1.5.35.41.91.62 1.69.62.72 0 1.28-.17 1.69-.51.41-.34.62-.8.62-1.38v-.03zm-7.643-1.03c0-.57-.22-1.04-.66-1.41-.44-.37-1.05-.56-1.82-.56-.78 0-1.37.17-1.78.51-.41.34-.63.81-.66 1.42h1.83c.03-.26.11-.47.24-.62.13-.15.34-.23.64-.23.27 0 .47.07.6.21.13.14.2.32.2.55v4.21c0 .24-.07.43-.2.57-.13.14-.33.21-.6.21-.29 0-.5-.07-.63-.21-.13-.14-.2-.33-.2-.57V18h-1.83v2.85c0 .67.2 1.2.62 1.58.42.38 1 .57 1.74.57 1.5 0 2.25-.72 2.25-2.15v-4.63z"/>
          </svg>
        )
      },
      {
        name: 'Tailwind CSS',
        category: 'Utility-First Styling',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#06B6D4">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
          </svg>
        )
      },
      {
        name: 'HTML5',
        category: 'Semantic Markup',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#E34F26">
            <path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM10.5 16.1l-3.9-.1L6.3 12h3.9L10 9H6l-.2-3h12.4l-.2 3h-6l.2 3h6l-.3 5.4L12 18.9l-5.6-1.5-.1-1.3h3.2v.1z"/>
          </svg>
        )
      },
      {
        name: 'CSS3',
        category: 'Modern Layouts',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#1572B6">
            <path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM18 6H6.2l.2 3H17l-.2 3.4L12 14l-4.8-1.6-.1-1.4H4.3l.2 3.8L12 18l7.5-3.3.5-8.7z"/>
          </svg>
        )
      },
      {
        name: 'Framer Motion',
        category: 'Physics & Motion',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#F01878">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    badge: 'Server-Side Architecture',
    description: 'Scalable RESTful microservices, secure authentication, database modeling, and payment integration.',
    skills: [
      {
        name: 'Node.js',
        category: 'Backend Runtime',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#339933">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 15.5l-6-3.3v-6.4l6 3.3v6.4zm2 0v-6.4l6-3.3v6.4l-6 3.3z"/>
          </svg>
        )
      },
      {
        name: 'Express.js',
        category: 'REST Framework',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 15.9h-1.9l-2.4-3.8-2.4 3.8H9l3.4-5.2L9.2 5.5h1.9l2.2 3.5 2.2-3.5h1.9l-3.2 5.2 3.4 5.2z"/>
          </svg>
        )
      },
      {
        name: 'MongoDB',
        category: 'NoSQL Database',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#47A248">
            <path d="M12 0s-6.2 6.8-6.2 12.8c0 3.8 2.6 7 6.2 7.9 3.6-.9 6.2-4.1 6.2-7.9C18.2 6.8 12 0 12 0zm.8 19.8v-7.2c.4-.3.7-.8.7-1.4 0-.9-.7-1.7-1.6-1.7s-1.6.8-1.6 1.7c0 .6.3 1.1.7 1.4v7.2c-2.7-.8-4.6-3.3-4.6-6.3 0-4.8 4.3-10 4.8-10.6.5.6 4.8 5.8 4.8 10.6 0 3-1.9 5.5-4.6 6.3z"/>
          </svg>
        )
      },
      {
        name: 'RESTful APIs',
        category: 'API Architecture',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#731cb2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        )
      },
      {
        name: 'JWT & Auth',
        category: 'Security & Access',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#D63AF9">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>
          </svg>
        )
      },
      {
        name: 'Stripe Payments',
        category: 'Payment Gateway',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#6772E5">
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.968.5 13.064.5 7.643.5 3.736 3.42 3.736 8.358c0 5.253 4.846 6.559 8.243 7.747 2.213.774 3.036 1.488 3.036 2.449 0 .983-.872 1.488-2.316 1.488-2.28 0-5.176-1.107-7.146-2.233l-.933 5.556c2.096 1.054 4.846 1.635 7.75 1.635 5.688 0 9.882-2.827 9.882-8.082 0-5.467-5.02-6.726-8.276-7.768z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    badge: 'Design & Engineering Tools',
    description: 'Design, prototyping, version control, API testing, and continuous cloud deployment.',
    skills: [
      {
        name: 'Adobe Photoshop',
        category: 'Image & Graphic Design',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
            <rect width="24" height="24" rx="4.5" fill="#001E36"/>
            <path d="M6 6.5h4.2c2.1 0 3.3 1.1 3.3 2.8 0 1.9-1.3 2.9-3.5 2.9H8v4.3H6V6.5zm2 4.1h2.1c1 0 1.5-.5 1.5-1.3 0-.8-.5-1.3-1.5-1.3H8v2.6z" fill="#31A8FF"/>
            <path d="M14.5 13.6c.7.5 1.6.8 2.5.8 1.1 0 1.7-.5 1.7-1.1 0-.7-.6-1-1.8-1.4-1.7-.5-2.6-1.3-2.6-2.5 0-1.5 1.3-2.6 3.1-2.6.9 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.3-.6-1.9-.6-.9 0-1.4.5-1.4 1 0 .6.5.9 1.7 1.3 1.8.6 2.7 1.3 2.7 2.6 0 1.6-1.2 2.7-3.3 2.7-1.1 0-2.2-.4-2.9-.9l.4-1.4z" fill="#31A8FF"/>
          </svg>
        )
      },
      {
        name: 'Adobe Illustrator',
        category: 'Vector Graphics',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
            <rect width="24" height="24" rx="4.5" fill="#330000"/>
            <path d="M5.5 16.5l3.2-10h2.4l3.2 10H12.3l-.7-2.3H8.3l-.7 2.3H5.5zm3.2-3.8h2.5L10 8.7l-1.3 4z" fill="#FF9A00"/>
            <path d="M16.5 7.2a1 1 0 112 0 1 1 0 01-2 0zm.2 2.8h1.6v6.5h-1.6V10z" fill="#FF9A00"/>
          </svg>
        )
      },
      {
        name: 'Figma',
        category: 'UI/UX Prototyping',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
            <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
            <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
            <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
            <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
            <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
          </svg>
        )
      },
      {
        name: 'Git & GitHub',
        category: 'Version Control',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#F05032">
            <path d="M23.546 10.93L13.067.45a1.495 1.495 0 00-2.115 0L8.83 2.57l2.13 2.13a1.493 1.493 0 012.115 0l2.13 2.13a1.494 1.494 0 010 2.115l-2.13 2.13a1.494 1.494 0 01-2.115 0l-2.13-2.13a1.494 1.494 0 010-2.115L11.11 8.92 8.98 6.79l-4.14 4.14a1.495 1.495 0 000 2.115l10.48 10.48a1.495 1.495 0 002.115 0l10.48-10.48a1.495 1.495 0 000-2.115zM7.22 13.91a1.494 1.494 0 110-2.988 1.494 1.494 0 010 2.988z"/>
          </svg>
        )
      },
      {
        name: 'VS Code',
        category: 'Code Editor',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#007ACC">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.27a.998.998 0 00-.005 1.42l3.473 3.31-3.473 3.31a1 1 0 00.005 1.42l1.322 1.212a.999.999 0 001.276.057l4.12-3.128 9.46 8.63c.47.43 1.15.54 1.705.29l4.94-2.377A1.5 1.5 0 0024 19.86V4.14a1.5 1.5 0 00-.85-1.553zM18 17.067l-6.75-5.067L18 6.933v10.134z"/>
          </svg>
        )
      },
      {
        name: 'Postman',
        category: 'API Testing & Docs',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#FF6C37">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.86 16.59l-2.6-1.5-1.5 2.6c-.22.38-.68.51-1.06.29l-4.5-2.6a.79.79 0 01-.29-1.06l1.5-2.6-2.6-1.5a.79.79 0 01-.29-1.06l2.6-4.5c.22-.38.68-.51 1.06-.29l4.5 2.6c.38.22.51.68.29 1.06l-1.5 2.6 2.6 1.5c.38.22.51.68.29 1.06l-2.6 4.5c-.22.38-.68.51-1.06.29z"/>
          </svg>
        )
      },
      {
        name: 'Vercel',
        category: 'Cloud Deployment',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor">
            <path d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        )
      }
    ]
  }
];

const SkillCard = ({ skill }) => (
  <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center space-x-3.5 sm:space-x-4 border border-[#5a2aac]/30 hover:border-[#731cb2] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(115,28,178,0.25)] select-none">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-dark/80 border border-[#5a2aac]/40 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
      {skill.icon}
    </div>
    <div className="flex flex-col min-w-0">
      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#a17de0] transition-colors truncate font-display">
        {skill.name}
      </h4>
      <span className="text-xs text-gray-400 truncate font-mono mt-0.5">
        {skill.category}
      </span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-dark overflow-hidden relative" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#731cb2]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#5a2aac]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#731cb2]/10 border border-[#731cb2]/30 px-3.5 py-1.5 rounded-full mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#a17de0]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a17de0] font-mono">
              Expertise & Technologies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-2.5">
            Technical Arsenal
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Organized across frontend engineering, backend architecture, and production tools that I use to deliver end-to-end web applications.
          </p>
        </div>

        {/* Categorized Skills Layout */}
        <div className="space-y-8 md:space-y-10">
          {skillCategories.map((category) => (
            <div key={category.id} className="relative">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 pb-2.5 border-b border-gray-800">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#a17de0] uppercase tracking-wider">
                      {category.badge}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs font-mono text-gray-400">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 max-w-md mt-2 sm:mt-0">
                  {category.description}
                </p>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {category.skills.map((skill, index) => (
                  <SkillCard key={`${category.id}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link Callout */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/halimaashu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-brand-darker border border-[#731cb2]/50 hover:border-[#a17de0] text-white hover:text-[#a17de0] shadow-[0_0_20px_rgba(115,28,178,0.25)] hover:shadow-[0_0_30px_rgba(115,28,178,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 group font-display text-sm sm:text-base font-semibold"
          >
            <svg className="w-5 h-5 fill-current text-white group-hover:text-[#a17de0] transition-colors" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <span>Explore Repositories on GitHub: github.com/halimaashu</span>
            <span className="text-[#a17de0] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
