'use client';

import { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { Target, Play, ArrowRight } from 'lucide-react';

interface Project {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  category: string;
  client: string;
  duration: string;
  results: string | string[];
  image?: string;
  videoUrl?: string;
}

interface CategoryProjectsSectionProps {
  projects: Project[];
}

export const CategoryProjectsSection: React.FC<CategoryProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set((projects || []).map(p => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? (projects || [])
    : (projects || []).filter(p => p.category === activeCategory);

  return (
    <Section id="portfolio-grid" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-5 border border-blue-200/50">
            <Target className="w-4 h-4 mr-2" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Explore Our Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our work by category — real campaigns, real results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <div className="group cursor-pointer h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Thumbnail */}
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  {project.videoUrl ? (
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" muted loop playsInline autoPlay>
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  ) : project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                      <Target className="w-10 h-10 text-blue-300" />
                    </div>
                  )}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-700 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-xs text-blue-600 font-semibold mb-1">{project.client}</p>
                  <h4 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">{project.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 text-xs font-semibold">
                      {Array.isArray(project.results) ? project.results[0] : project.results}
                    </span>
                    <span className="text-gray-400 text-xs">{project.duration}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">No projects in this category yet.</p>
          </div>
        )}
      </Container>
    </Section>
  );
};