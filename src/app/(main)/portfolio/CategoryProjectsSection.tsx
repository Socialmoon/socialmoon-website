'use client';

import { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { Target, Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  client: string;
  results: string;
  duration: string;
  videoUrl?: string;
}

interface CategoryProjectsSectionProps {
  projects: Project[];
}

export const CategoryProjectsSection: React.FC<CategoryProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Social Media Marketing', 'Content Creation', 'Brand Strategy', 'Web Development', 'App Development'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
            <Target className="w-4 h-4 mr-2" />
            Projects by Category
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Explore Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our successful projects organized by service category to find inspiration for your next digital initiative.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80">
                  {/* Video Preview */}
                  {project.videoUrl && (
                    <video
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  )}

                  {/* Fallback Image */}
                  {(!project.videoUrl && project.image) && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  {/* Play Button Overlay */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-200 mb-2 line-clamp-2">{project.description}</p>
                    <div className="text-blue-400 font-semibold text-sm mb-2">{project.client}</div>
                    <div className="text-green-400 font-semibold text-sm">{project.results}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{project.category}</p>
                  <p className="text-gray-700 font-medium mb-1">{project.client}</p>
                  <p className="text-gray-600 text-sm">{project.results} • {project.duration}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Container>
    </Section>
  );
};