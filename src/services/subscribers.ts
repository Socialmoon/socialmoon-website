import { FirebaseDB } from '@/lib/firebase/database';

export class SubscribersService {
  static async getSubscribers() {
    try {
      const subscribers = await FirebaseDB.getCollection('subscribers');
      return subscribers;
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      return [];
    }
  }

  static async addSubscriber(email: string) {
    try {
      const subscribers = await FirebaseDB.getCollection('subscribers');
      const exists = subscribers.some((sub: any) => sub.email === email);
      
      if (exists) {
        return { message: 'Email already subscribed', alreadyExists: true };
      }
      
      await FirebaseDB.addDocument('subscribers', {
        email,
        subscribedAt: new Date().toISOString()
      });
      
      return { message: 'Successfully subscribed!' };
    } catch (error) {
      console.error('Error adding subscriber:', error);
      throw new Error('Failed to add subscriber');
    }
  }

  static async deleteSubscriber(id: string) {
    try {
      await FirebaseDB.deleteDocument('subscribers', id);
      return { message: 'Subscriber deleted successfully' };
    } catch (error) {
      console.error('Error deleting subscriber:', error);
      throw new Error('Failed to delete subscriber');
    }
  }
}
