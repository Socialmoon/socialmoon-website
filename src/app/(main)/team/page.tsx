'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowRight, Linkedin, Twitter } from 'lucide-react';

type TeamMember = {
  id?: number;
  _id?: string;
  name: string;
  role?: string;
  position?: string;
  bio: string;
  imageUrl?: string;
  image?: string;
};

const FALLBACK: TeamMember[] = [
  { name: 'Avinash Gautam', role: 'Founder & Chief Executive Officer', bio: "Visionary leader driving Social Moon's mission to transform brands through innovative social media strategies and digital excellence.", imageUrl: '/images/portfolio/avinash.jpg', id: 1 },
  { name: 'Strategy Lead', role: 'Head of Growth', bio: 'Designs repeatable lead generation and content systems that create predictable pipeline.', id: 2 },
  { name: 'Tech Lead', role: 'Head of Automation', bio: 'Builds AI-powered workflows and efficiency systems that reduce operational drag.', id: 3 },
];

const COLORS = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-violet-600',
  'from-orange-500 to-amber-600',
  'from-pink-500 to-rose-600',
  'from-cyan-500 to-blue-600',
];

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about')
      .then(r => r.json())
      .then(d => { setTeam(d?.team?.length ? d.team : FALLBACK); })
      .catch(() => setTeam(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-white border-b border-gray-100 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black text-gray-900/[0.025] tracking-tighter whitespace-nowrap">TEAM</span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-purple-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">Our Team</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-6">
              The people who<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">build your systems.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              A focused team of strategists, engineers, and operators — obsessed with building systems that actually work.
            </p>
          </div>
        </Container>
      </div>

      {/* Team Grid */}
      <Section className="py-20 bg-gray-50">
        <Container>
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="flex gap-2">
                {[0, 1, 2].map(i => <div key={i} className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => {
                const color = COLORS[i % COLORS.length];
                const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
                const role = member.role || member.position || 'Team Member';
                const img = member.imageUrl || member.image;

                return (
                  <div key={member._id || member.id || i} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${color}`} />
                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                          {img ? (
                            <Image src={img} alt={member.name} width={64} height={64} className="w-full h-full object-cover" />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg`}>
                              {initials}
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h3>
                          <p className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </Section>

      {/* Join CTA */}
      <Section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Want to join the team?</h2>
            <p className="text-gray-500 mb-6">We're always looking for sharp, driven people who want to build systems that matter.</p>
            <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all">
              View Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
