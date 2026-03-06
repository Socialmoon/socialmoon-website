import { FirebaseDB } from '@/lib/firebase/database';
import { orderBy } from 'firebase/firestore';

export class ServicesService {
  static async getServices() {
    try {
      // Get services document from Firebase
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      
      if (servicesDoc && servicesDoc.services) {
        return {
          title: servicesDoc.title || 'Our Services',
          services: servicesDoc.services
        };
      }
      
      // Return empty services if none exist
      return {
        title: 'Our Services',
        services: []
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      // Return default data on error
      return {
        title: 'Our Services',
        services: []
      };
    }
  }

  static async updateServices(data: { title: string; services: any[] }) {
    try {
      // Update services document in Firebase
      await FirebaseDB.setDocument('services', 'main', {
        title: data.title,
        services: data.services,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Services updated successfully' };
    } catch (error) {
      console.error('Error updating services:', error);
      throw new Error('Failed to update services');
    }
  }

  static async getServiceById(id: number) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      if (servicesDoc && servicesDoc.services) {
        return servicesDoc.services.find((s: any) => s.id === id);
      }
      return null;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw new Error('Failed to fetch service');
    }
  }

  static async createService(serviceData: any) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      services.push(serviceData);
      
      await FirebaseDB.setDocument('services', 'main', {
        title: servicesDoc?.title || 'Our Services',
        services,
        updatedAt: new Date().toISOString()
      });
      
      return serviceData;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Failed to create service');
    }
  }

  static async updateService(id: number, serviceData: any) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      const index = services.findIndex((s: any) => s.id === id);
      
      if (index !== -1) {
        services[index] = { ...services[index], ...serviceData };
        await FirebaseDB.setDocument('services', 'main', {
          title: servicesDoc?.title || 'Our Services',
          services,
          updatedAt: new Date().toISOString()
        });
        return services[index];
      }
      return null;
    } catch (error) {
      console.error('Error updating service:', error);
      throw new Error('Failed to update service');
    }
  }

  static async deleteService(id: number) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      const filtered = services.filter((s: any) => s.id !== id);
      
      await FirebaseDB.setDocument('services', 'main', {
        title: servicesDoc?.title || 'Our Services',
        services: filtered,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'Service deleted successfully' };
    } catch (error) {
      console.error('Error deleting service:', error);
      throw new Error('Failed to delete service');
    }
  }
}
