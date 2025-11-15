import { connectToDatabase } from '@/lib/database';
import Service, { IService } from '@/models/Service';

export class ServicesService {
  static async getServices() {
    try {
      await connectToDatabase();
      const services = await Service.find().sort({ id: 1 });
      return {
        title: 'Our Services',
        services: services.map(service => ({
          id: service.id,
          title: service.title,
          description: service.description,
          price: service.price,
        }))
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      throw new Error('Failed to fetch services');
    }
  }

  static async updateServices(data: { title: string; services: IService[] }) {
    try {
      await connectToDatabase();

      // Clear existing services
      await Service.deleteMany({});

      // Insert new services
      const servicesToInsert = data.services.map(service => ({
        id: service.id,
        title: service.title,
        description: service.description,
        price: service.price,
      }));

      await Service.insertMany(servicesToInsert);

      return { message: 'Services updated successfully' };
    } catch (error) {
      console.error('Error updating services:', error);
      throw new Error('Failed to update services');
    }
  }

  static async getServiceById(id: number) {
    try {
      await connectToDatabase();
      const service = await Service.findOne({ id });
      return service;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw new Error('Failed to fetch service');
    }
  }

  static async createService(serviceData: Partial<IService>) {
    try {
      await connectToDatabase();
      const service = new Service(serviceData);
      await service.save();
      return service;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Failed to create service');
    }
  }

  static async updateService(id: number, serviceData: Partial<IService>) {
    try {
      await connectToDatabase();
      const service = await Service.findOneAndUpdate({ id }, serviceData, { new: true });
      return service;
    } catch (error) {
      console.error('Error updating service:', error);
      throw new Error('Failed to update service');
    }
  }

  static async deleteService(id: number) {
    try {
      await connectToDatabase();
      await Service.findOneAndDelete({ id });
      return { message: 'Service deleted successfully' };
    } catch (error) {
      console.error('Error deleting service:', error);
      throw new Error('Failed to delete service');
    }
  }
}
