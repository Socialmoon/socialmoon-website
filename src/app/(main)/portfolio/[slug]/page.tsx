'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  CheckCircle,
  ExternalLink,
  Award,
  Clock
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string;
  challenge: string;
  solution: string;
  process: string[];
  images: string[];
  videoUrl?: string;
}

const PortfolioDetailPage = () => {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug;
    if (slug) {
      const fetchProject = async () => {
        try {
          const response = await fetch('/api/portfolio');
          const data = await response.json();
          const foundProject = data.projects.find((p: Project) => p.slug === slug);
          setProject(foundProject || null);
        } catch (error) {
          console.error('Error fetching project:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProject();
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/portfolio">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2" />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Hero>

      {/* Video Showcase Section */}
      {project.videoUrl && (
        <Section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Project Showcase
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See the project in action with our detailed walkthrough video
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  controls
                  className="w-full h-auto"
                  poster={project.imageUrl}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Results Section */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Results
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Measurable impact and success metrics achieved
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <Target className="w-16 h-16 text-blue-200 mx-auto mb-6" />
              <div className="text-xl md:text-2xl font-semibold leading-relaxed">
                {Array.isArray(project.results) ? (
                  <ul className="space-y-2 text-left max-w-2xl mx-auto">
                    {project.results.map((result: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.results}</p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt="Project Challenge and Solution"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Target className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  The Challenge
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Navigating the specific obstacles
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Our Solution
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Strategic implementation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors rounded-2xl flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Visual showcase of the project deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with proven strategies and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                  Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PortfolioDetailPage;
