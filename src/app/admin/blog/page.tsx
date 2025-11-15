'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Post = {
  id: number;
  title: string;
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
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      });
  }, [router]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent((prev) => prev ? { ...prev, title: value } : null);
  };

  const handlePostChange = (index: number, field: keyof Post, value: string) => {
    setContent((prev) =>
      prev ? {
        ...prev,
        posts: prev.posts.map((post, i) => (i === index ? { ...post, [field]: value } : post))
      } : null
    );
  };

  const addPost = () => {
    const newPost: Post = {
      id: Date.now(),
      title: '',
      content: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      imageUrl: '',
    };
    setContent((prev) => prev ? { ...prev, posts: [...prev.posts, newPost] } : null);
  };

  const deletePost = (index: number) => {
    setContent((prev) => prev ? { ...prev, posts: prev.posts.filter((_, i) => i !== index) } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    setSaving(true);
    try {
      const res = await fetch('/api/blog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        alert('Blog updated successfully');
      } else {
        alert('Error updating blog');
      }
    } catch (error) {
      alert('Error updating blog');
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;

  if (!content) return <div className="p-8">Error loading content</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-6">
          <label className="block mb-2 font-bold">Blog Title</label>
          <input
            type="text"
            value={content.title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          {content.posts.map((post, index) => (
            <div key={post.id} className="border p-4 mb-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={post.title}
                  onChange={(e) => handlePostChange(index, 'title', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={post.author}
                  onChange={(e) => handlePostChange(index, 'author', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  value={post.date}
                  onChange={(e) => handlePostChange(index, 'date', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={post.imageUrl}
                  onChange={(e) => handlePostChange(index, 'imageUrl', e.target.value)}
                  className="p-2 border rounded"
                />
              </div>
              <textarea
                placeholder="Content"
                value={post.content}
                onChange={(e) => handlePostChange(index, 'content', e.target.value)}
                className="w-full p-2 border rounded mb-4"
                rows={4}
              />
              <button
                type="button"
                onClick={() => deletePost(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Post
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPost}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Post
          </button>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </form>
      <button
        onClick={() => router.push('/admin/dashboard')}
        className="mt-4 text-blue-500 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default BlogAdminPage;
