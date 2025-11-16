'use client';

import { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, ArrowRight, Play, CheckCircle } from 'lucide-react';

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

interface InstagramProjectsSectionProps {
  projects: Project[];
}

export const InstagramProjectsSection: React.FC<InstagramProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const instagramProjects = projects.filter(project =>
    project.category === 'Social Media Marketing' || project.category === 'Content Creation'
  );

  const filteredProjects = activeFilter === 'All'
    ? instagramProjects
    : instagramProjects.filter(project => project.category === activeFilter);

  const filterOptions = ['All', 'Social Media Marketing', 'Content Creation'];

  return (
    <Section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold mb-6 border border-pink-200/50">
            <span className="text-lg mr-2">📸</span>
            Instagram Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Instagram Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed Instagram accounts across various industries with proven strategies and creative content.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-gray-600 hover:text-pink-600 hover:bg-pink-50 hover:scale-105 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Instagram Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80">
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
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold mb-3 w-fit`}>
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-200 mb-2 line-clamp-2">{project.description}</p>
                    <div className="text-pink-400 font-semibold text-sm mb-2">{project.client}</div>
                    <div className="text-green-400 font-semibold text-sm">{project.results}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-pink-600">{project.category}</p>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{project.client}</p>
                  <p className="text-gray-600 text-sm">{project.results} • {project.duration}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No Instagram projects found for this category.</p>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Instagram?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our successful clients and see what expert Instagram marketing can do for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=instagram">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  Start Instagram Growth
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};