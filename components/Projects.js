'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, desc, techs, image, github, demo }) => {
  return (
    <motion.article 
      className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-teal transition-all flex flex-col h-full group"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Shimmer Overlay */}
      <div className="shimmer-overlay"></div>
      
      <div className="h-48 overflow-hidden relative">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techs.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800/80 text-[10px] rounded border border-gray-700 uppercase tracking-wider group-hover:border-brand-teal/30 transition-colors">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <a className="flex-1 text-center py-2 bg-brand-teal/10 text-brand-teal rounded-lg font-semibold hover:bg-brand-teal hover:text-white transition text-sm" href={github}>GitHub</a>
          <a className="flex-1 text-center py-2 bg-brand-teal text-white rounded-lg font-semibold hover:bg-brand-teal/80 transition text-sm" href={demo}>Live Demo</a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "The Tea House: Botanical Solutions",
      desc: "A premium supplier of tea and botanical solutions, offering optimum satisfaction to your taste buds through a curated digital experience.",
      techs: ["HTML", "Tailwind CSS", "GitHub Pages"],
      image: "/project_teahouse.png",
      github: "https://github.com/halimaashu/tea-house",
      demo: "https://halimaashu.github.io/tea-house/"
    },
    {
      title: "FriendVibe: Meaningful Connections",
      desc: "A personal relationship shelf designed to help you browse, tend, and nurture the connections that matter most in your life.",
      techs: ["React", "Vercel", "Social"],
      image: "/project_friendvibe.png",
      github: "https://github.com/halimaashu/Friend-vibes.JHOn",
      demo: "https://friend-vibe.vercel.app/"
    },
    {
      title: "DgiTools: Workflow Supercharger",
      desc: "A comprehensive hub for premium AI tools, design assets, and productivity software, designed to streamline digital creation workflows.",
      techs: ["React", "Netlify", "Productivity"],
      image: "/project_digitools.png",
      github: "https://github.com/halimaashu/AI-fair",
      demo: "https://ai-tools-fair-2026.netlify.app/"
    },
    {
      title: "Ai Hub: The Frontier AI Platform",
      desc: "A powerful unified subscription platform for frontier intelligence, featuring advanced AI models integrated into a single ecosystem.",
      techs: ["React", "Netlify", "AI"],
      image: "/project_aihub.png",
      github: "https://github.com/halimaashu/AI-HUbE.ALL",
      demo: "https://ai-hub-all-reserved.netlify.app/"
    },
    {
      title: "JobHunt: The Careers & Job-seeker Platform",
      desc: "A platform connecting developers with top tech companies, featuring real-time applications and resume building tools.",
      techs: ["React", "Node", "Tailwind"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvHrRluMYMW-_ES16GYyvUt0WV0cAqyg8croBVO-xlXqOObhUd8KCEILSMRAeyM6iubTZtY3fqev6nlUPSeGqe00bHwpaMgQkn7WH3KXGPo30B5BgWOMnOhl58L4KvZdBTKAOAL-X_Ken9JqgGAArQgQmqLbSCDio4sRshkjbWZn6GLGMsloIEOc6L12JDlxHBuQvfGCfMJyRHGAH0_5OUmOHy4UwJ1UduwZXUni3ypZS9hi1KF8JTjY18ttwdtXMJRjjHPlrR0bE",
      github: "#",
      demo: "#"
    },
    {
      title: "Google Doc Soft Solution Real-Time Collaboration",
      desc: "An enterprise-grade document editor with real-time sync, rich text formatting, and permission management.",
      techs: ["TypeScript", "Prisma", "Next.js"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKRcMi1EuPGLbeKkn5wQt1OGotUbWiPP6a1r5qIcz6HLoOW_if77ajpKCRAXr-of8I-JyRe5RZiGceQg3Qb3R4XBYSzrX7MXt1upV8t_hVDQh2cWCHicPvbHyVEv6ryWnJzpSU1rhB5QBausiX5DnYzDRY5IpCqXOSO2HwuyDcv-7tgL6N2TckXu1Ce4cwwmG9694sAQeWycvvB8svx-l2V2KEGW_BTva_UMMBls8RaaD8B5NT6Nj-kRZDTpdbxwK4SU75J9scD74",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold neon-text flicker inline-block">Projects</h2>
          <p className="text-gray-400 mt-2">Some of my recent work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
