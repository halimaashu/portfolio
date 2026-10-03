'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectRow = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-teal/50 transition-all p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group relative mb-12 shadow-2xl"
    >
      {/* Shimmer Overlay */}
      <div className="shimmer-overlay"></div>

      {/* Image Column - Full Height and Full Width on showcase side */}
      <div className={`lg:col-span-7 w-full min-h-[320px] md:min-h-[400px] h-full rounded-2xl overflow-hidden relative bg-brand-darker border border-gray-800/80 flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <img 
          alt={project.title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
          src={project.image} 
          onError={(e) => {
            e.currentTarget.src = "/project_aihub.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content & Links Column */}
      <div className={`lg:col-span-5 flex flex-col justify-between py-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
              Featured Project 0{index + 1}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 group-hover:text-brand-teal transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
            <span className="text-brand-teal font-semibold">Problem Solved: </span>
            {project.problem}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Features</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-brand-teal mr-2 mt-0.5">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800/90 text-xs rounded-lg border border-gray-700/80 text-brand-teal font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4">
            {project.github && (
              <a 
                className="flex-1 text-center py-3 px-4 bg-brand-teal/10 text-brand-teal rounded-xl font-bold hover:bg-brand-teal hover:text-brand-darker transition-all duration-300 text-sm border border-brand-teal/30" 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            )}
            {project.demo && (
              <a 
                className="flex-1 text-center py-3 px-4 bg-brand-teal text-brand-darker rounded-xl font-bold hover:bg-brand-teal/80 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(0,210,180,0.3)]" 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section className="py-24 bg-brand-dark" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-brand-teal font-medium mb-2 tracking-widest uppercase">Full-Stack Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Full-stack web applications featuring role-based dashboards, authentication, payments, and real-time features.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
