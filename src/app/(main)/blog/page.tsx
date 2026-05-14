import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import PageHero from '@/components/common/PageHero';
import { BookOpen, Calendar, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/config/blog-catalog';

const COLORS = [
  { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-100', tag: 'bg-blue-100 text-blue-700', icon: 'text-blue-500' },
  { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-100', tag: 'bg-emerald-100 text-emerald-700', icon: 'text-emerald-500' },
  { bg: 'from-purple-50 to-violet-50', border: 'border-purple-100', tag: 'bg-purple-100 text-purple-700', icon: 'text-purple-500' },
  { bg: 'from-orange-50 to-amber-50', border: 'border-orange-100', tag: 'bg-orange-100 text-orange-700', icon: 'text-orange-500' },
  { bg: 'from-pink-50 to-rose-50', border: 'border-pink-100', tag: 'bg-pink-100 text-pink-700', icon: 'text-pink-500' },
  { bg: 'from-cyan-50 to-sky-50', border: 'border-cyan-100', tag: 'bg-cyan-100 text-cyan-700', icon: 'text-cyan-500' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="Blog & insights"
        title="Thinking notes for brands that want clearer marketing."
        description="Practical essays on campaigns, content, positioning, lead generation, and the operational side of marketing. Opinionated, but not dressed up as universal fact."
        icon={BookOpen}
      />

      {/* Posts */}
      <Section className="py-16 bg-[#fffdf8]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => {
              const c = COLORS[i % COLORS.length];
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fffdf8] px-2.5 py-1 text-xs font-semibold text-[#ff4d2e]">
                        <BookOpen className="w-3 h-3" /> Article
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" /> 5 min read
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/60">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                        Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
