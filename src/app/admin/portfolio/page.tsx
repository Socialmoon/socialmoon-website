'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  slug?: string;
  description: string;
  imageUrl: string;
  link: string;
  category?: string;
  client?: string;
  duration?: string;
};

type PortfolioPageContent = {
  title: string;
  projects: Project[];
};

const PortfolioAdminPage = () => {
  const [content, setContent] = useState<PortfolioPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const res = await fetch('/api/portfolio');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
    setLoading(false);
  };

  const deleteProject = async (projectId: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    setDeleting(projectId);
    try {
      // Get current portfolio data
      const res = await fetch('/api/portfolio');
      if (!res.ok) throw new Error('Failed to fetch portfolio data');
      const portfolioData = await res.json();

      // Remove the project
      portfolioData.projects = portfolioData.projects.filter((project: Project) => project.id !== projectId);

      // Update portfolio
      const updateRes = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(portfolioData),
      });

      if (updateRes.ok) {
        fetchPortfolioData(); // Refresh data
      } else {
        alert('Error deleting project');
      }
    } catch (error) {
      alert('Error deleting project');
    }
    setDeleting(null);
  };

  if (loading) return <div className="p-8 text-center">Loading portfolio...</div>;

  if (!content) return <div className="p-8 text-center">Error loading portfolio content</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Projects</h1>
            <p className="text-gray-600">Manage your portfolio projects</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => router.push('/admin/portfolio/add')}
              variant="default"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Project
            </Button>
            <Button
              onClick={() => router.push('/admin/dashboard')}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {content.projects.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No portfolio projects yet.</p>
            <Button
              onClick={() => router.push('/admin/portfolio/add')}
              className="mt-4"
            >
              Add Your First Project
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.projects.map((project, index) => (
              <Card key={project.slug || index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <div className="text-sm text-gray-600">
                    {project.category && <p>Category: {project.category}</p>}
                    {project.client && <p>Client: {project.client}</p>}
                    {project.duration && <p>Duration: {project.duration}</p>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 block"
                    >
                      View Project →
                    </a>
                  )}
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => router.push(`/admin/portfolio/add?id=${project.id}`)}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteProject(project.id)}
                      disabled={deleting === project.id}
                      variant="destructive"
                      size="sm"
                    >
                      {deleting === project.id ? 'Deleting...' : 'Delete'}
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

export default PortfolioAdminPage;
