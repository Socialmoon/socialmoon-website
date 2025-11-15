'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type PortfolioPageContent = {
  title: string;
  projects: Project[];
};

const PortfolioAdminPage = () => {
  const [content, setContent] = useState<PortfolioPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetch('/api/portfolio')
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

  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    setContent((prev) =>
      prev ? {
        ...prev,
        projects: prev.projects.map((project, i) => (i === index ? { ...project, [field]: value } : project))
      } : null
    );
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: '',
      description: '',
      imageUrl: '',
      link: '',
    };
    setContent((prev) => prev ? { ...prev, projects: [...prev.projects, newProject] } : null);
  };

  const deleteProject = (index: number) => {
    setContent((prev) => prev ? { ...prev, projects: prev.projects.filter((_, i) => i !== index) } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    setSaving(true);
    try {
      const res = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        alert('Portfolio updated successfully');
      } else {
        alert('Error updating portfolio');
      }
    } catch (error) {
      alert('Error updating portfolio');
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;

  if (!content) return <div className="p-8">Error loading content</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Portfolio</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-6">
          <label className="block mb-2 font-bold">Portfolio Title</label>
          <input
            type="text"
            value={content.title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          {content.projects.map((project, index) => (
            <div key={project.id} className="border p-4 mb-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={project.imageUrl}
                  onChange={(e) => handleProjectChange(index, 'imageUrl', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="url"
                  placeholder="Link"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                  className="p-2 border rounded"
                />
              </div>
              <textarea
                placeholder="Description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                className="w-full p-2 border rounded mb-4"
                rows={3}
              />
              <button
                type="button"
                onClick={() => deleteProject(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Project
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addProject}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Project
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

export default PortfolioAdminPage;
