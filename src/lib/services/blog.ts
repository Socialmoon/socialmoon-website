import { connectToDatabase } from '@/lib/database';
import Blog, { IBlog } from '@/models/Blog';

export class BlogService {
  static async getBlog() {
    try {
      await connectToDatabase();
      const blog = await Blog.findOne().sort({ createdAt: -1 });
      if (!blog) {
        // Return default data if none exists
        return {
          title: 'Our Blog',
          posts: [
            {
              id: 1,
              title: 'The Future of Social Media',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
              author: 'John Doe',
              date: '2025-10-20',
              imageUrl: 'https://via.placeholder.com/300'
            },
            {
              id: 2,
              title: 'How to Create Engaging Content',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
              author: 'Jane Smith',
              date: '2025-10-15',
              imageUrl: 'https://via.placeholder.com/300'
            }
          ]
        };
      }
      return {
        title: blog.title,
        posts: blog.posts,
      };
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw new Error('Failed to fetch blog');
    }
  }

  static async updateBlog(data: IBlog) {
    try {
      await connectToDatabase();

      // Update or create blog document
      const blog = await Blog.findOneAndUpdate(
        {},
        {
          title: data.title,
          posts: data.posts,
        },
        { upsert: true, new: true }
      );

      return { message: 'Blog updated successfully' };
    } catch (error) {
      console.error('Error updating blog:', error);
      throw new Error('Failed to update blog');
    }
  }
}
