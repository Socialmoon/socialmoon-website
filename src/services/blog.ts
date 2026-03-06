import { FirebaseDB } from '@/lib/firebase/database';

export class BlogService {
  static async getBlog() {
    try {
      const blog = await FirebaseDB.getDocument('blog', 'main');
      
      if (!blog) {
        // Return default data if none exists
        return {
          title: 'Our Blog',
          posts: []
        };
      }
      return {
        title: blog.title,
        posts: blog.posts || [],
      };
    } catch (error) {
      console.error('Error fetching blog:', error);
     // Return default data on error
      return {
        title: 'Our Blog',
        posts: []
      };
    }
  }

  static async updateBlog(data: any) {
    try {
      // Update or create blog document in Firebase
      await FirebaseDB.setDocument('blog', 'main', {
        title: data.title,
        posts: data.posts,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Blog updated successfully' };
    } catch (error) {
      console.error('Error updating blog:', error);
      throw new Error('Failed to update blog');
    }
  }
}
