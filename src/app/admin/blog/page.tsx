'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Post = {
  id: number;
  title: string;
  slug?: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
};

type BlogPageContent = {
  title: string;
  posts: Post[];
};

const BlogAdminPage = () => {
  const [content, setContent] = useState<BlogPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const res = await fetch('/api/blog');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
    setLoading(false);
  };

  const deletePost = async (postId: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    setDeleting(postId);
    try {
      // Get current blog data
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to fetch blog data');
      const blogData = await res.json();

      // Remove the post
      blogData.posts = blogData.posts.filter((post: Post) => post.id !== postId);

      // Update blog
      const updateRes = await fetch('/api/blog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      if (updateRes.ok) {
        fetchBlogData(); // Refresh data
      } else {
        alert('Error deleting blog post');
      }
    } catch (error) {
      alert('Error deleting blog post');
    }
    setDeleting(null);
  };

  if (loading) return <div className="p-8 text-center">Loading blog posts...</div>;

  if (!content) return <div className="p-8 text-center">Error loading blog content</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600">Manage your blog posts</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => router.push('/admin/blog/add')}
              variant="default"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Post
            </Button>
            <Button
              onClick={() => router.push('/admin/dashboard')}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {content.posts.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No blog posts yet.</p>
            <Button
              onClick={() => router.push('/admin/blog/add')}
              className="mt-4"
            >
              Add Your First Post
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.posts?.map((post, index) => (
              <Card key={post.slug || index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <div className="text-sm text-gray-600">
                    <p>By {post.author}</p>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{post.content}</p>
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-md mb-4"
                    />
                  )}
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => router.push(`/admin/blog/add?id=${post.id}`)}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deletePost(post.id)}
                      disabled={deleting === post.id}
                      variant="destructive"
                      size="sm"
                    >
                      {deleting === post.id ? 'Deleting...' : 'Delete'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdminPage;
