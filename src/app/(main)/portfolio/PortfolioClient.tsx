'use client';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

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

interface PortfolioClientProps {
  content: {
    projects: Project[];
  };
}

export const PortfolioClient: React.FC<PortfolioClientProps> = ({ content }) => {
  const projects = content.projects;

  return (
    <Section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96">
                  {/* Video Preview */}
                  {project.videoUrl && (
                    <video
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      View Project <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{project.category}</p>
                  <p className="text-gray-700 font-medium mb-3">{project.client}</p>
                  <p className="text-gray-600 text-sm">{project.results}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
