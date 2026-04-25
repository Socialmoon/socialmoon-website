'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import JOBS from '@/data/careers';

const DEPT_COLORS: Record<string, string> = {
  Growth: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Engineering: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Sales: 'bg-orange-50 text-orange-700 border-orange-200',
  Design: 'bg-pink-50 text-pink-700 border-pink-200',
  Operations: 'bg-blue-50 text-blue-700 border-blue-200',
};

const TYPE_COLORS: Record<string, string> = {
  'Full-time': 'bg-green-100 text-green-700',
  'Part-time': 'bg-yellow-100 text-yellow-700',
  'Contract': 'bg-purple-100 text-purple-700',
  'Internship': 'bg-blue-100 text-blue-700',
};

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = JOBS.find(j => j.slug === id);

  if (!job) notFound();

  const deptColor = DEPT_COLORS[job.department] || 'bg-gray-50 text-gray-700 border-gray-200';
  const typeColor = TYPE_COLORS[job.type] || 'bg-gray-100 text-gray-700';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gray-950 pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-end justify-end pr-8 pb-4">
          <span className="text-[14vw] font-black text-white/[0.03] tracking-tighter whitespace-nowrap">{job.department}</span>
        </div>
        <Container className="relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Careers
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${deptColor}`}>{job.department}</span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${typeColor}`}>{job.type}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-3xl">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-gray-400 text-sm">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" />{job.location}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-400" />{job.type}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-orange-400" />{job.department}</span>
          </div>
        </Container>
      </div>

      {/* Content */}
      <div className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </div>

              {job.requirements.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-5">What We're Looking For</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Why SocialMoon?</h2>
                <ul className="space-y-3">
                  {[
                    'Work directly with founders — no bureaucracy',
                    'AI-first workflows that actually save time',
                    'Remote-friendly with flexible hours',
                    'Real ownership and impact from day one',
                    'Fast-growing team with big ambitions',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
              <div className="bg-gray-950 rounded-2xl p-7 text-center">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Ready to apply?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {job.formLink ? 'Fill out the application form — takes less than 2 minutes.' : 'Send us your resume and a short note about why you\'re a great fit.'}
                </p>
                {job.formLink ? (
                  <>
                    <a
                      href={job.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 transition-all text-sm"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:socialmoon.in@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="flex items-center justify-center gap-2 w-full mt-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-all text-sm"
                    >
                      Email Directly
                    </a>
                  </>
                ) : (
                  <a
                    href={`mailto:socialmoon.in@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 transition-all text-sm"
                  >
                    Apply via Email <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Job Summary</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Department', value: job.department },
                    { label: 'Type', value: job.type },
                    { label: 'Location', value: job.location },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{label}</span>
                      <span className="text-gray-800 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
