'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetch('/api/case-studies')
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      });
  }, [router]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setData((prev) => prev ? { ...prev, title: value } : null);
  };

  const handleCaseStudyChange = (index: number, field: keyof CaseStudy, value: string | string[]) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === index ? { ...caseStudy, [field]: value } : caseStudy
        )
      } : null
    );
  };

  const handleMetricChange = (caseStudyIndex: number, metricIndex: number, field: keyof CaseStudy['metrics'][0], value: string) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === caseStudyIndex
            ? {
                ...caseStudy,
                metrics: caseStudy.metrics.map((metric, j) =>
                  j === metricIndex ? { ...metric, [field]: value } : metric
                )
              }
            : caseStudy
        )
      } : null
    );
  };

  const addCaseStudy = () => {
    const newCaseStudy: CaseStudy = {
      id: Date.now().toString(),
      slug: '',
      title: '',
      company: '',
      industry: '',
      service: '',
      duration: '',
      results: '',
      challenge: '',
      solution: '',
      approach: [''],
      metrics: [{
        before: '',
        after: '',
        improvement: ''
      }],
      testimonial: '',
      clientName: '',
      clientPosition: '',
      images: ['']
    };
    setData((prev) => prev ? { ...prev, caseStudies: [...prev.caseStudies, newCaseStudy] } : null);
  };

  const deleteCaseStudy = (index: number) => {
    setData((prev) => prev ? { ...prev, caseStudies: prev.caseStudies.filter((_, i) => i !== index) } : null);
  };

  const addApproachStep = (caseStudyIndex: number) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === caseStudyIndex
            ? { ...caseStudy, approach: [...caseStudy.approach, ''] }
            : caseStudy
        )
      } : null
    );
  };

  const removeApproachStep = (caseStudyIndex: number, stepIndex: number) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === caseStudyIndex
            ? { ...caseStudy, approach: caseStudy.approach.filter((_, j) => j !== stepIndex) }
            : caseStudy
        )
      } : null
    );
  };

  const addImageUrl = (caseStudyIndex: number) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === caseStudyIndex
            ? { ...caseStudy, images: [...caseStudy.images, ''] }
            : caseStudy
        )
      } : null
    );
  };

  const removeImageUrl = (caseStudyIndex: number, imageIndex: number) => {
    setData((prev) =>
      prev ? {
        ...prev,
        caseStudies: prev.caseStudies.map((caseStudy, i) =>
          i === caseStudyIndex
            ? { ...caseStudy, images: caseStudy.images.filter((_, j) => j !== imageIndex) }
            : caseStudy
        )
      } : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    try {
      const res = await fetch('/api/case-studies', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert('Case studies updated successfully');
      } else {
        alert('Error updating case studies');
      }
    } catch (error) {
      alert('Error updating case studies');
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;

  if (!data) return <div className="p-8">Error loading content</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Case Studies</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-6">
          <label className="block mb-2 font-bold">Case Studies Title</label>
          <input
            type="text"
            value={data.title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Case Studies</h2>
          {data.caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="border p-6 mb-6 rounded bg-gray-50">
              <h3 className="text-lg font-bold mb-4">Case Study {index + 1}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Slug (URL-friendly)"
                  value={caseStudy.slug}
                  onChange={(e) => handleCaseStudyChange(index, 'slug', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={caseStudy.title}
                  onChange={(e) => handleCaseStudyChange(index, 'title', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={caseStudy.company}
                  onChange={(e) => handleCaseStudyChange(index, 'company', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  value={caseStudy.industry}
                  onChange={(e) => handleCaseStudyChange(index, 'industry', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Service"
                  value={caseStudy.service}
                  onChange={(e) => handleCaseStudyChange(index, 'service', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={caseStudy.duration}
                  onChange={(e) => handleCaseStudyChange(index, 'duration', e.target.value)}
                  className="p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Results"
                  value={caseStudy.results}
                  onChange={(e) => handleCaseStudyChange(index, 'results', e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  rows={2}
                />
                <textarea
                  placeholder="Challenge"
                  value={caseStudy.challenge}
                  onChange={(e) => handleCaseStudyChange(index, 'challenge', e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  rows={3}
                />
                <textarea
                  placeholder="Solution"
                  value={caseStudy.solution}
                  onChange={(e) => handleCaseStudyChange(index, 'solution', e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  rows={3}
                />
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Approach Steps</h4>
                {caseStudy.approach.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder={`Step ${stepIndex + 1}`}
                      value={step}
                      onChange={(e) => {
                        const newApproach = [...caseStudy.approach];
                        newApproach[stepIndex] = e.target.value;
                        handleCaseStudyChange(index, 'approach', newApproach);
                      }}
                      className="flex-1 p-2 border rounded"
                    />
                    {caseStudy.approach.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeApproachStep(index, stepIndex)}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addApproachStep(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Step
                </button>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Metrics</h4>
                {caseStudy.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="grid grid-cols-3 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Before"
                      value={metric.before}
                      onChange={(e) => handleMetricChange(index, metricIndex, 'before', e.target.value)}
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="After"
                      value={metric.after}
                      onChange={(e) => handleMetricChange(index, metricIndex, 'after', e.target.value)}
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Improvement"
                      value={metric.improvement}
                      onChange={(e) => handleMetricChange(index, metricIndex, 'improvement', e.target.value)}
                      className="p-2 border rounded"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={caseStudy.clientName}
                  onChange={(e) => handleCaseStudyChange(index, 'clientName', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Client Position"
                  value={caseStudy.clientPosition}
                  onChange={(e) => handleCaseStudyChange(index, 'clientPosition', e.target.value)}
                  className="p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Testimonial"
                  value={caseStudy.testimonial}
                  onChange={(e) => handleCaseStudyChange(index, 'testimonial', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Image URLs</h4>
                {caseStudy.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      placeholder={`Image ${imageIndex + 1} URL`}
                      value={image}
                      onChange={(e) => {
                        const newImages = [...caseStudy.images];
                        newImages[imageIndex] = e.target.value;
                        handleCaseStudyChange(index, 'images', newImages);
                      }}
                      className="flex-1 p-2 border rounded"
                    />
                    {caseStudy.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeImageUrl(index, imageIndex)}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addImageUrl(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Image
                </button>
              </div>

              <button
                type="button"
                onClick={() => deleteCaseStudy(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Case Study
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addCaseStudy}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Case Study
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

export default CaseStudiesAdminPage;
