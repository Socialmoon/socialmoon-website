'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  industry: string;
  service: string;
  duration: string;
  results: string;
  challenge: string;
  solution: string;
  approach: string[];
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: string;
  clientName: string;
  clientPosition: string;
  images: string[];
}

interface CaseStudiesData {
  title: string;
  caseStudies: CaseStudy[];
}

const CaseStudiesAdminPage = () => {
  const [data, setData] = useState<CaseStudiesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCaseStudiesData();
  }, []);

  const fetchCaseStudiesData = async () => {
    try {
      const res = await fetch('/api/case-studies');
      if (res.ok) {
        const fetchedData = await res.json();
        setData(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching case studies data:', error);
    }
    setLoading(false);
  };

  const deleteCaseStudy = async (caseStudyId: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    setDeleting(caseStudyId);
    try {
      // Get current case studies data
      const res = await fetch('/api/case-studies');
      if (!res.ok) throw new Error('Failed to fetch case studies data');
      const caseStudiesData = await res.json();

      // Remove the case study
      caseStudiesData.caseStudies = caseStudiesData.caseStudies.filter((study: CaseStudy) => study.id !== caseStudyId);

      // Update case studies
      const updateRes = await fetch('/api/case-studies', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseStudiesData),
      });

      if (updateRes.ok) {
        fetchCaseStudiesData(); // Refresh data
      } else {
        alert('Error deleting case study');
      }
    } catch (error) {
      alert('Error deleting case study');
    }
    setDeleting(null);
  };


  if (loading) return <div className="p-8 text-center">Loading case studies...</div>;

  if (!data) return <div className="p-8 text-center">Error loading case studies content</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
            <p className="text-gray-600">Manage your case studies</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => router.push('/admin/case-studies/add')}
              variant="default"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Case Study
            </Button>
            <Button
              onClick={() => router.push('/admin/dashboard')}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {data.caseStudies.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No case studies yet.</p>
            <Button
              onClick={() => router.push('/admin/case-studies/add')}
              className="mt-4"
            >
              Add Your First Case Study
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.caseStudies?.map((caseStudy, index) => (
              <Card key={caseStudy.slug || index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  {caseStudy.images && caseStudy.images[0] && (
                    <img
                      src={caseStudy.images[0]}
                      alt={caseStudy.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <CardTitle className="text-lg line-clamp-2">{caseStudy.title}</CardTitle>
                  <div className="text-sm text-gray-600">
                    <p>Company: {caseStudy.company}</p>
                    <p>Industry: {caseStudy.industry}</p>
                    <p>Service: {caseStudy.service}</p>
                    <p>Duration: {caseStudy.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{caseStudy.results}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Client: {caseStudy.clientName}</p>
                    <p>Position: {caseStudy.clientPosition}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => router.push(`/admin/case-studies/add?id=${caseStudy.id}`)}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteCaseStudy(caseStudy.id)}
                      disabled={deleting === caseStudy.id}
                      variant="destructive"
                      size="sm"
                    >
                      {deleting === caseStudy.id ? 'Deleting...' : 'Delete'}
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

export default CaseStudiesAdminPage;
