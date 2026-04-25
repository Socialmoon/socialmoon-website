import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { BookOpen, Calendar, ArrowLeft, User, Clock } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/config/blog-catalog';

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16 pb-20">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-5">
              <BookOpen className="w-3.5 h-3.5" /> Article
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {Math.max(1, Math.ceil(post.content.length / 200))} min read</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <div className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">{tag}</span>
                  ))}
                </div>
              )}
              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                  <div className="text-gray-400 text-xs">SocialMoon Team</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
