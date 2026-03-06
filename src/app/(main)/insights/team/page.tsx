'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import {
  Users,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image';

type TeamMember = {
  id?: number;
  name: string;
  role?: string;
  position?: string;
  bio: string;
  imageUrl?: string;
  image?: string;
};

type AboutData = {
  team: TeamMember[];
};

const TeamPage = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutRes = await fetch('/api/about');
        const about = await aboutRes.json();
        setAboutData(about);
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

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-8 border border-green-200/50 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 bg-clip-text text-transparent leading-tight">
              The Minds Behind SocialMoon
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get to know the creative minds and strategic thinkers driving your digital success.
            </p>
          </div>
        </Container>
      </Hero>

      {/* Enhanced Team Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {aboutData?.team?.map((member, index) => {
              const memberImage = member.imageUrl || member.image;
              const memberRole = member.role || member.position;

              return (
                <div key={member.id || index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-600 via-purple-600 to-pink-600' :
                    index % 3 === 1 ? 'from-green-600 via-teal-600 to-blue-600' :
                    'from-purple-600 via-pink-600 to-red-600'
                  } rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                    {/* Color accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                      index % 3 === 1 ? 'from-green-500 to-teal-500' :
                      'from-purple-500 to-pink-500'
                    }`}></div>

                    <div className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {memberImage && memberImage !== '' ? (
                            <Image
                              src={memberImage}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200">
                              <span className="text-3xl font-bold text-white">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                        <p className={`text-base font-semibold mb-4 ${
                          index % 3 === 0 ? 'text-blue-600' :
                          index % 3 === 1 ? 'text-green-600' :
                          'text-purple-600'
                        }`}>{memberRole}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>

                      {/* Social/Expertise badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Strategy</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Analytics</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Creative</span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Design</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Marketing</span>
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Growth</span>
                          </>
                        )}
                        {index > 2 && (
                          <>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Expert</span>
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Leader</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }) || (
              <>
                {/* Enhanced fallback team members */}
                {[
                  {
                    name: "John Doe",
                    role: "CEO & Founder",
                    bio: "Visionary leader with a passion for social media innovation and digital transformation. 10+ years in digital marketing.",
                    color: "from-blue-500 to-purple-500",
                    badges: ["Strategy", "Analytics"]
                  },
                  {
                    name: "Jane Smith",
                    role: "Head of Strategy",
                    bio: "Strategic thinker specializing in data-driven marketing and campaign optimization. Expert in ROI maximization.",
                    color: "from-green-500 to-teal-500",
                    badges: ["Creative", "Design"]
                  },
                  {
                    name: "Mike Johnson",
                    role: "Creative Director",
                    bio: "Award-winning creative director bringing brands to life through compelling visual storytelling and content creation.",
                    color: "from-purple-500 to-pink-500",
                    badges: ["Marketing", "Growth"]
                  }
                ].map((member, index) => (
                  <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                      <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>

                      <div className="p-8">
                        <div className="text-center mb-6">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Users className="w-12 h-12 text-gray-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                          <p className={`text-base font-semibold mb-4 ${member.color.replace('from-', 'text-').replace('to-', 'to-').split('-')[1]}-600`}>{member.role}</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>

                        <div className="flex flex-wrap justify-center gap-2">
                          {member.badges.map((badge, badgeIndex) => (
                            <span key={badgeIndex} className={`px-3 py-1 bg-gradient-to-r ${member.color} text-white rounded-full text-xs font-medium shadow-sm`}>
                              {badge}
                            </span>
                          ))}
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

export default TeamPage;