import { FirebaseDB } from '@/lib/firebase/database';

export class PortfolioService {
  static async getPortfolio() {
    try {
      const portfolio = await FirebaseDB.getDocument('portfolio', 'main');
      
      if (!portfolio) {
        return {
          title: 'Our Portfolio',
          projects: []
        };
      }
      
      return {
        title: portfolio.title || 'Our Portfolio',
        projects: portfolio.projects || [],
      };
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      return {
        title: 'Our Portfolio',
        projects: []
      };
    }
  }

  static async updatePortfolio(data: any) {
    try {
      await FirebaseDB.setDocument('portfolio', 'main', {
        title: data.title,
        projects: data.projects,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Portfolio updated successfully' };
    } catch (error) {
      console.error('Error updating portfolio:', error);
      throw new Error('Failed to update portfolio');
    }
  }

  static async getProjectBySlug(slug: string) {
    try {
      const portfolio = await FirebaseDB.getDocument('portfolio', 'main');
      if (portfolio && portfolio.projects) {
        return portfolio.projects.find((p: any) => p.slug === slug);
      }
      return null;
    } catch (error) {
      console.error('Error fetching project by slug:', error);
      throw new Error('Failed to fetch project');
    }
  }

  static async createProject(projectData: any) {
    try {
      const portfolio = await FirebaseDB.getDocument('portfolio', 'main');
      const projects = portfolio?.projects || [];
      projects.push(projectData);
      
      await FirebaseDB.setDocument('portfolio', 'main', {
        title: portfolio?.title || 'Our Portfolio',
        projects,
        updatedAt: new Date().toISOString()
      });
      
      return projectData;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }
  }

  static async updateProject(id: number, projectData: any) {
    try {
      const portfolio = await FirebaseDB.getDocument('portfolio', 'main');
      const projects = portfolio?.projects || [];
      const index = projects.findIndex((p: any) => p.id === id);
      
      if (index !== -1) {
        projects[index] = { ...projects[index], ...projectData };
        await FirebaseDB.setDocument('portfolio', 'main', {
          title: portfolio?.title || 'Our Portfolio',
          projects,
          updatedAt: new Date().toISOString()
        });
        return projects[index];
      }
      return null;
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Failed to update project');
    }
  }

  static async deleteProject(id: number) {
    try {
      const portfolio = await FirebaseDB.getDocument('portfolio', 'main');
      const projects = portfolio?.projects || [];
      const filtered = projects.filter((p: any) => p.id !== id);
      
      await FirebaseDB.setDocument('portfolio', 'main', {
        title: portfolio?.title || 'Our Portfolio',
        projects: filtered,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'Project deleted successfully' };
    } catch (error) {
      console.error('Error deleting project:', error);
      throw new Error('Failed to delete project');
    }
  }
}
