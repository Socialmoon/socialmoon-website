'use client';

import { useState } from 'react';
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

const AddCaseStudyPage = () => {
  const [formData, setFormData] = useState<CaseStudy>({
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
  });
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApproachChange = (index: number, value: string) => {
    const newApproach = [...formData.approach];
    newApproach[index] = value;
    setFormData(prev => ({ ...prev, approach: newApproach }));
  };

  const addApproachStep = () => {
    setFormData(prev => ({ ...prev, approach: [...prev.approach, ''] }));
  };

  const removeApproachStep = (index: number) => {
    setFormData(prev => ({
      ...prev,
      approach: prev.approach.filter((_, i) => i !== index)
    }));
  };

  const handleMetricChange = (index: number, field: keyof CaseStudy['metrics'][0], value: string) => {
    const newMetrics = [...formData.metrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setFormData(prev => ({ ...prev, metrics: newMetrics }));
  };

  const addMetric = () => {
    setFormData(prev => ({
      ...prev,
      metrics: [...prev.metrics, { before: '', after: '', improvement: '' }]
    }));
  };

  const removeMetric = (index: number) => {
    setFormData(prev => ({
      ...prev,
      metrics: prev.metrics.filter((_, i) => i !== index)
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImageUrl = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Get current case studies data
      const res = await fetch('/api/case-studies');
      if (!res.ok) throw new Error('Failed to fetch case studies data');
      const caseStudiesData = await res.json();

      // Add new case study
      caseStudiesData.caseStudies.push(formData);

      // Update case studies
      const updateRes = await fetch('/api/case-studies', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseStudiesData),
      });

      if (updateRes.ok) {
        setNotification({ type: 'success', message: 'Case study added successfully!' });
        setTimeout(() => router.push('/admin/case-studies'), 2000);
      } else {
        setNotification({ type: 'error', message: 'Error adding case study. Please try again.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Error adding case study. Please try again.' });
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add New Case Study</h1>
            <p className="text-gray-600">Add a new case study to showcase your work</p>
          </div>
          <Button
            onClick={() => router.push('/admin/case-studies')}
            variant="outline"
          >
            Back to Case Studies
          </Button>
        </div>

        {notification && (
          <div className={`mb-6 p-4 rounded-lg border ${
            notification.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center">
              <svg className={`w-5 h-5 mr-3 ${
                notification.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {notification.type === 'success' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
              <p className="font-medium">{notification.message}</p>
              <button
                onClick={() => setNotification(null)}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Case Study Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Slug (URL-friendly)</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="e.g., techcorp-digital-transformation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Case study title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="e.g., Technology, Healthcare"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Service</label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Social Media Management"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 6 months"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Results</label>
                <textarea
                  name="results"
                  value={formData.results}
                  onChange={handleChange}
                  placeholder="Key results achieved..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  rows={2}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Challenge</label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="What problem were you solving?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Solution</label>
                  <textarea
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    placeholder="How did you solve it?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    rows={4}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Approach & Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">Approach Steps</label>
                  <Button
                    type="button"
                    onClick={addApproachStep}
                    variant="outline"
                    size="sm"
                  >
                    Add Step
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.approach.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={step}
                        onChange={(e) => handleApproachChange(index, e.target.value)}
                        placeholder={`Step ${index + 1}...`}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      {formData.approach.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeApproachStep(index)}
                          variant="destructive"
                          size="sm"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">Performance Metrics</label>
                  <Button
                    type="button"
                    onClick={addMetric}
                    variant="outline"
                    size="sm"
                  >
                    Add Metric
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.metrics.map((metric, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        value={metric.before}
                        onChange={(e) => handleMetricChange(index, 'before', e.target.value)}
                        placeholder="Before"
                        className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      <input
                        type="text"
                        value={metric.after}
                        onChange={(e) => handleMetricChange(index, 'after', e.target.value)}
                        placeholder="After"
                        className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      <input
                        type="text"
                        value={metric.improvement}
                        onChange={(e) => handleMetricChange(index, 'improvement', e.target.value)}
                        placeholder="Improvement"
                        className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      {formData.metrics.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeMetric(index)}
                          variant="destructive"
                          size="sm"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Testimonial & Images
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    placeholder="Client's full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Client Position</label>
                  <input
                    type="text"
                    name="clientPosition"
                    value={formData.clientPosition}
                    onChange={handleChange}
                    placeholder="e.g., CEO, Marketing Director"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Testimonial</label>
                <textarea
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleChange}
                  placeholder="Client testimonial..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  rows={4}
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">Image URLs</label>
                  <Button
                    type="button"
                    onClick={addImageUrl}
                    variant="outline"
                    size="sm"
                  >
                    Add Image
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.images.map((image, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="url"
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                        placeholder={`Image ${index + 1} URL`}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      {formData.images.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeImageUrl(index)}
                          variant="destructive"
                          size="sm"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              onClick={() => router.push('/admin/case-studies')}
              variant="outline"
              size="lg"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              size="lg"
              className="min-w-[140px]"
            >
              {saving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Case Study
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCaseStudyPage;