'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Service = {
  id: number;
  title: string;
  description: string;
  price: number | string;
};

type ServicesPageContent = {
  title: string;
  services: Service[];
};

const ServicesAdminPage = () => {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchServicesData();
  }, []);

  const fetchServicesData = async () => {
    try {
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
    setLoading(false);
  };

  const deleteService = async (serviceId: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    setDeleting(serviceId);
    try {
      // Get current services data
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error('Failed to fetch services data');
      const servicesData = await res.json();

      // Remove the service
      servicesData.services = servicesData.services.filter((service: Service) => service.id !== serviceId);

      // Update services
      const updateRes = await fetch('/api/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(servicesData),
      });

      if (updateRes.ok) {
        fetchServicesData(); // Refresh data
      } else {
        alert('Error deleting service');
      }
    } catch (error) {
      alert('Error deleting service');
    }
    setDeleting(null);
  };

  if (loading) return <div className="p-8 text-center">Loading services...</div>;

  if (!content) return <div className="p-8 text-center">Error loading services content</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services</h1>
            <p className="text-gray-600">Manage your service offerings</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => router.push('/admin/services/add')}
              variant="default"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Service
            </Button>
            <Button
              onClick={() => router.push('/admin/dashboard')}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {content.services.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No services yet.</p>
            <Button
              onClick={() => router.push('/admin/services/add')}
              className="mt-4"
            >
              Add Your First Service
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services?.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    {typeof service.price === 'number' 
                      ? `$${service.price.toFixed(2)}`
                      : typeof service.price === 'string' && !isNaN(Number(service.price))
                      ? `$${Number(service.price).toFixed(2)}`
                      : service.price || 'Price not set'}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => router.push(`/admin/services/add?id=${service.id}`)}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteService(service.id)}
                      disabled={deleting === service.id}
                      variant="destructive"
                      size="sm"
                    >
                      {deleting === service.id ? 'Deleting...' : 'Delete'}
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

export default ServicesAdminPage;
