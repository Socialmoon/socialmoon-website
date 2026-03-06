import { FirebaseDB } from '@/lib/firebase/database';

export class HomeService {
  static async getHome() {
    try {
      // Try to get home document from Firebase
      const home = await FirebaseDB.getDocument('home', 'main');
      
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
      
      // If we have the new structure with hero, map it to the expected format
      if (home.hero) {
        return {
          title: home.hero.title || 'Welcome to SocialMoon',
          description: home.hero.subtitle || home.description || 'Your one-stop solution for social media management.',
          features: home.features || [],
          hero: home.hero,
          services: home.services,
          testimonials: home.testimonials,
          cta: home.cta
        };
      }
      
      // Otherwise return the document as-is (backward compatible)
      return home;
    } catch (error) {
      console.error('Error fetching home:', error);
      // Return default data on error
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
  }

  static async updateHome(data: any) {
    try {
      // Update or create home document in Firebase
      await FirebaseDB.setDocument('home', 'main', {
        title: data.title,
        description: data.description,
        features: data.features,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Home updated successfully' };
    } catch (error) {
      console.error('Error updating home:', error);
      throw new Error('Failed to update home');
    }
  }
}
