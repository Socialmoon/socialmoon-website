'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Service = {
  id: number;
  title: string;
  description: string;
  price: number;
};

type ServicesPageContent = {
  title: string;
  services: Service[];
};

const ServicesAdminPage = () => {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetch('/api/services')
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

  const handleServiceChange = (index: number, field: keyof Service, value: string | number) => {
    setContent((prev) =>
      prev ? {
        ...prev,
        services: prev.services.map((service, i) => (i === index ? { ...service, [field]: value } : service))
      } : null
    );
  };

  const addService = () => {
    const newService: Service = {
      id: Date.now(),
      title: '',
      description: '',
      price: 0,
    };
    setContent((prev) => prev ? { ...prev, services: [...prev.services, newService] } : null);
  };

  const deleteService = (index: number) => {
    setContent((prev) => prev ? { ...prev, services: prev.services.filter((_, i) => i !== index) } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    setSaving(true);
    try {
      const res = await fetch('/api/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        alert('Services updated successfully');
      } else {
        alert('Error updating services');
      }
    } catch (error) {
      alert('Error updating services');
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;

  if (!content) return <div className="p-8">Error loading content</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Services</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-6">
          <label className="block mb-2 font-bold">Services Title</label>
          <input
            type="text"
            value={content.title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Services</h2>
          {content.services.map((service, index) => (
            <div key={service.id} className="border p-4 mb-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={service.title}
                  onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={service.price}
                  onChange={(e) => handleServiceChange(index, 'price', parseFloat(e.target.value) || 0)}
                  className="p-2 border rounded"
                />
              </div>
              <textarea
                placeholder="Description"
                value={service.description}
                onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                className="w-full p-2 border rounded mb-4"
                rows={3}
              />
              <button
                type="button"
                onClick={() => deleteService(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Service
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addService}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Service
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

export default ServicesAdminPage;
