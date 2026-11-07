'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

const PROJECTS_PER_PAGE = 3;

const ProjectRow = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article 
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: (index % PROJECTS_PER_PAGE) * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-teal/50 transition-all p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group relative mb-8 md:mb-12 shadow-2xl"
    >
      {/* Shimmer Overlay */}
      <div className="shimmer-overlay"></div>

      {/* Image Column - Full Height and Full Width on showcase side */}
      <div className={`lg:col-span-7 w-full min-h-[320px] md:min-h-[400px] h-full rounded-2xl overflow-hidden relative bg-brand-darker border border-none flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
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
              Featured Project {projectNumber}
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
                className="flex-1 text-center py-3 px-4 bg-brand-teal/10 text-brand-teal rounded-xl font-bold hover:bg-brand-teal hover:text-white transition-all duration-300 text-sm border border-brand-teal/30" 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            )}
            {project.demo && (
              <a 
                className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] rounded-xl font-bold hover:opacity-90 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(115,28,178,0.4)]" 
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
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = showAll 
    ? projects 
    : projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);

    // Smooth scroll back to top of projects section with fixed navbar offset
    const section = document.getElementById('projects');
    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    const section = document.getElementById('projects');
    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-dark relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span className="text-brand-teal font-medium text-xs tracking-widest uppercase">
              Full-Stack Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-base">
            Full-stack production web applications featuring role-based dashboards, authentication, payments, and real-time features.
          </p>

          {/* View Mode Toggle Pill */}
          <div className="mt-6 flex justify-center items-center">
            <div className="inline-flex p-1 rounded-2xl bg-brand-darker/80 border border-gray-800">
              <button
                onClick={() => { if (showAll) toggleShowAll(); }}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  !showAll
                    ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Paginated (3/page)
              </button>
              <button
                onClick={() => { if (!showAll) toggleShowAll(); }}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  showAll
                    ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                View All ({projects.length})
              </button>
            </div>
          </div>
        </div>

        {/* Project List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? 'all' : `page-${currentPage}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="space-y-4"
          >
            {currentProjects.map((project, idx) => {
              const globalIndex = showAll ? idx : startIndex + idx;
              return (
                <ProjectRow 
                  key={project.id} 
                  project={project} 
                  index={globalIndex} 
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls (shown when not in show-all mode) */}
        {!showAll && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-800/80">
            {/* Range info */}
            <div className="text-sm text-gray-400 font-medium">
              Showing <span className="text-white font-semibold">{startIndex + 1}</span>–<span className="text-white font-semibold">{Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)}</span> of <span className="text-brand-teal font-bold">{projects.length}</span> Projects (Page {currentPage} of {totalPages})
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 transition-all ${
                  currentPage === 1
                    ? 'opacity-30 cursor-not-allowed text-gray-500 bg-white/5 border border-white/5'
                    : 'glass-card text-white hover:border-[#731cb2] hover:bg-[#731cb2]/10 active:scale-95 shadow-md'
                }`}
                aria-label="Previous Page"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              {/* Numbered Buttons */}
              <div className="flex items-center space-x-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'bg-gradient-to-r from-[#731cb2] to-[#5a2aac] text-[#F8FAFC] shadow-[0_0_20px_rgba(115,28,178,0.5)] border border-[#a17de0]/40 scale-105'
                          : 'glass-card text-gray-300 hover:text-white hover:border-[#731cb2]/50 hover:bg-white/10 active:scale-95'
                      }`}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 transition-all ${
                  currentPage === totalPages
                    ? 'opacity-30 cursor-not-allowed text-gray-500 bg-white/5 border border-white/5'
                    : 'glass-card text-white hover:border-[#731cb2] hover:bg-[#731cb2]/10 active:scale-95 shadow-md'
                }`}
                aria-label="Next Page"
              >
                <span>Next</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
