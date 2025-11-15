import { connectToDatabase } from '@/database';
import Home, { IHome } from '@/models/Home';

export class HomeService {
  static async getHome() {
    try {
      await connectToDatabase();
      const home = await Home.findOne().sort({ createdAt: -1 });
      if (!home) {
        // Return default data if none exists
        return {
          title: 'Welcome to SocialMoon',
          description: 'Your one-stop solution for social media management.',
          features: [
            {
              title: 'Content Scheduling',
              description: 'Schedule your posts in advance and save time.'
            },
            {
              title: 'Analytics Tracking',
              description: 'Track your social media performance with our advanced analytics.'
            },
            {
              title: 'Team Collaboration',
              description: 'Collaborate with your team members in real-time.'
            }
          ]
        };
      }
      return {
        title: home.title,
        description: home.description,
        features: home.features,
      };
    } catch (error) {
      console.error('Error fetching home:', error);
      throw new Error('Failed to fetch home');
    }
  }

  static async updateHome(data: IHome) {
    try {
      await connectToDatabase();

      // Update or create home document
      const home = await Home.findOneAndUpdate(
        {},
        {
          title: data.title,
          description: data.description,
          features: data.features,
        },
        { upsert: true, new: true }
      );

      return { message: 'Home updated successfully' };
    } catch (error) {
      console.error('Error updating home:', error);
      throw new Error('Failed to update home');
    }
  }
}
