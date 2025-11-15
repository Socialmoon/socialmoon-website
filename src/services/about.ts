import { connectToDatabase } from '@/database';
import About, { IAbout } from '@/models/About';

export class AboutService {
  static async getAbout() {
    try {
      await connectToDatabase();
      const about = await About.findOne().sort({ createdAt: -1 });
      if (!about) {
        // Return default data if none exists
        return {
          title: 'About Us',
          companyDescription: 'SocialMoon is a leading social media agency...',
          team: [
            {
              id: 1,
              name: 'John Doe',
              role: 'CEO',
              bio: 'John is a visionary leader with a passion for social media.',
              imageUrl: 'https://via.placeholder.com/150'
            },
            {
              id: 2,
              name: 'Jane Smith',
              role: 'COO',
              bio: 'Jane is an experienced operations executive with a focus on efficiency.',
              imageUrl: 'https://via.placeholder.com/150'
            }
          ]
        };
      }
      return {
        title: about.title,
        companyDescription: about.companyDescription,
        team: about.team,
      };
    } catch (error) {
      console.error('Error fetching about:', error);
      throw new Error('Failed to fetch about');
    }
  }

  static async updateAbout(data: IAbout) {
    try {
      await connectToDatabase();

      // Update or create about document
      const about = await About.findOneAndUpdate(
        {},
        {
          title: data.title,
          companyDescription: data.companyDescription,
          team: data.team,
        },
        { upsert: true, new: true }
      );

      return { message: 'About updated successfully' };
    } catch (error) {
      console.error('Error updating about:', error);
      throw new Error('Failed to update about');
    }
  }
}
