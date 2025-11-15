'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt?: string;
};

type BlogData = {
  title: string;
  posts: BlogPost[];
};

const BlogPage = () => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogRes = await fetch('/api/blog');
        const blog = await blogRes.json();
        setBlogData(blog);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24 pb-16">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-200/50 shadow-lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Insights
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Knowledge & Innovation
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest thoughts on digital marketing, social media trends, and business growth strategies.
            </p>
          </div>
        </Container>
      </Hero>

      {/* Enhanced Blog Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {blogData?.posts?.map((post, index) => (
              <div key={post.id} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className={`relative h-48 ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                      'bg-gradient-to-br from-purple-100 to-purple-200'
                    } flex items-center justify-center`}>
                      <BookOpen className={`w-16 h-16 ${
                        index % 3 === 0 ? 'text-blue-600' :
                        index % 3 === 1 ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`bg-gradient-to-r ${
                        index % 3 === 0 ? 'from-blue-600 to-purple-600' :
                        index % 3 === 1 ? 'from-green-600 to-teal-600' :
                        'from-purple-600 to-pink-600'
                      } text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        Article
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt || post.content.substring(0, 120) + '...'}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                      <Link href={`/insights/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="group/btn border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )) || (
              <>
                {/* Enhanced fallback blog posts */}
                {[
                  {
                    title: "The Future of Social Media Marketing",
                    excerpt: "Explore emerging trends and technologies shaping the future of social media marketing and digital engagement.",
                    author: "SocialMoon Team",
                    date: "2025-11-15",
                    color: "from-blue-500 to-purple-500"
                  },
                  {
                    title: "Content Creation Strategies That Convert",
                    excerpt: "Learn proven content creation strategies that drive engagement and convert followers into customers.",
                    author: "SocialMoon Team",
                    date: "2025-11-10",
                    color: "from-green-500 to-teal-500"
                  },
                  {
                    title: "ROI Measurement in Social Media Campaigns",
                    excerpt: "Discover how to effectively measure and optimize ROI in your social media marketing campaigns.",
                    author: "SocialMoon Team",
                    date: "2025-11-05",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((post, index) => (
                  <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`absolute -inset-1 bg-gradient-to-r ${post.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                      <div className={`relative h-48 bg-gradient-to-br ${
                        index === 0 ? 'from-blue-100 to-blue-200' :
                        index === 1 ? 'from-green-100 to-green-200' :
                        'from-purple-100 to-purple-200'
                      } flex items-center justify-center`}>
                        <BookOpen className={`w-16 h-16 ${
                          index === 0 ? 'text-blue-600' :
                          index === 1 ? 'text-green-600' :
                          'text-purple-600'
                        }`} />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                          <Link href={`/insights/blog/${index + 1}`}>
                            <Button variant="outline" size="sm" className="group/btn border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default BlogPage;