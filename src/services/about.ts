import { FirebaseDB } from '@/lib/firebase/database';

export class AboutService {
  static async getAbout() {
    try {
      const about = await FirebaseDB.getDocument('about', 'main');
      
      if (!about) {
        return {
          title: 'About Us',
          description: '',
          teamMembers: []
        };
      }
      
      // Return the entire about document
      return about;
    } catch (error) {
      console.error('Error fetching about:', error);
      return {
        title: 'About Us',
        description: '',
        teamMembers: []
      };
    }
  }

  static async updateAbout(data: any) {
    try {
      await FirebaseDB.setDocument('about', 'main', {
        title: data.title,
        description: data.description,
        teamMembers: data.teamMembers,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'About updated successfully' };
    } catch (error) {
      console.error('Error updating about:', error);
      throw new Error('Failed to update about');
    }
  }
}
