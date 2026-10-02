'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, problem, features, techs, image, github, demo }) => {
  return (
    <motion.article 
      className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-teal transition-all flex flex-col h-full group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Shimmer Overlay */}
      <div className="shimmer-overlay"></div>
      
      <div className="h-48 overflow-hidden relative">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={image} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/30 to-transparent"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">{title}</h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          <span className="text-brand-teal font-medium">Problem Solved: </span>{problem}
        </p>

        {features && features.length > 0 && (
          <ul className="mb-4 space-y-1 text-xs text-gray-400">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center">
                <span className="text-brand-teal mr-2">✓</span> {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {techs.map((tech, index) => (
            <span key={index} className="px-2.5 py-1 bg-gray-800/90 text-[10px] rounded border border-gray-700 uppercase tracking-wider text-brand-teal font-semibold">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            className="flex-1 text-center py-2 bg-brand-teal/10 text-brand-teal rounded-lg font-semibold hover:bg-brand-teal hover:text-brand-darker transition text-sm border border-brand-teal/30" 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Code
          </a>
          <a 
            className="flex-1 text-center py-2 bg-brand-teal text-brand-darker rounded-lg font-semibold hover:bg-brand-teal/80 transition text-sm shadow-[0_0_15px_rgba(0,210,180,0.3)]" 
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "FriendVibe - Relationship Management Platform",
      problem: "Helps users track, tend, and nurture meaningful personal relationships with proactive interaction analytics.",
      features: [
        "Relationship status tracking (on-track vs overdue)",
        "Friend tags, interaction logs & activity dashboards",
        "Responsive MERN full-stack architecture"
      ],
      techs: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      image: "/project_friendvibe.png",
      github: "https://github.com/halimaashu/Friend-vibes.JHOn",
      demo: "https://friend-vibe.vercel.app/"
    },
    {
      title: "Ai Hub - Frontier AI Platform",
      problem: "Consolidates multiple frontier AI models into a unified subscription platform for seamless access.",
      features: [
        "Unified subscription workflow & AI tool discovery",
        "Interactive frontier AI catalog & model listings",
        "Modern neon-themed responsive interface"
      ],
      techs: ["React", "Next.js", "Tailwind CSS", "REST API", "Netlify"],
      image: "/project_aihub.png",
      github: "https://github.com/halimaashu/AI-HUbE.ALL",
      demo: "https://ai-hub-all-reserved.netlify.app/"
    },
    {
      title: "DgiTools - Digital Asset & Productivity Suite",
      problem: "Provides creators with a centralized marketplace for premium AI tools, design assets, and templates.",
      features: [
        "Curated productivity software & template showcase",
        "Searchable product catalog & category filters",
        "High-performance interactive web interface"
      ],
      techs: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      image: "/project_digitools.png",
      github: "https://github.com/halimaashu/AI-fair",
      demo: "https://ai-tools-fair-2026.netlify.app/"
    },
    {
      title: "The Tea House - E-Commerce Showcase",
      problem: "Interactive showcase for botanical tea products with detailed product cards and customer ratings.",
      features: [
        "Clean, responsive product exploration layout",
        "Customer ratings, pricing cards, and tea features",
        "Optimized speed and lightweight HTML/Tailwind build"
      ],
      techs: ["HTML5", "Tailwind CSS", "JavaScript", "GitHub Pages"],
      image: "/project_teahouse.png",
      github: "https://github.com/halimaashu/tea-house",
      demo: "https://halimaashu.github.io/tea-house/"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-teal font-medium mb-2 tracking-widest uppercase">Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">Full-stack web applications and web solutions built with clean code and modern frameworks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
