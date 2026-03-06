import { FirebaseDB } from '@/lib/firebase/database';

export class CaseStudiesService {
  static async getCaseStudies() {
    try {
      const caseStudies = await FirebaseDB.getDocument('caseStudies', 'main');
      
      if (!caseStudies) {
        return {
          title: 'Case Studies',
          caseStudies: []
        };
      }
      
      return {
        title: caseStudies.title || 'Case Studies',
        caseStudies: caseStudies.caseStudies || []
      };
    } catch (error) {
      console.error('Error fetching case studies:', error);
      return {
        title: 'Case Studies',
        caseStudies: []
      };
    }
  }

  static async createCaseStudy(data: any) {
    try {
      const caseStudiesDoc = await FirebaseDB.getDocument('caseStudies', 'main');
      const caseStudies = caseStudiesDoc?.caseStudies || [];
      caseStudies.push(data);
      
      await FirebaseDB.setDocument('caseStudies', 'main', {
        title: caseStudiesDoc?.title || 'Case Studies',
        caseStudies,
        updatedAt: new Date().toISOString()
      });
      
      return data;
    } catch (error) {
      console.error('Error creating case study:', error);
      throw new Error('Failed to create case study');
    }
  }

  static async updateCaseStudies(data: any) {
    try {
      await FirebaseDB.setDocument('caseStudies', 'main', {
        title: data.title,
        caseStudies: data.caseStudies,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'Case studies updated successfully' };
    } catch (error) {
      console.error('Error updating case studies:', error);
      throw new Error('Failed to update case studies');
    }
  }

  static async getCaseStudyBySlug(slug: string) {
    try {
      const caseStudiesDoc = await FirebaseDB.getDocument('caseStudies', 'main');
      if (caseStudiesDoc && caseStudiesDoc.caseStudies) {
        return caseStudiesDoc.caseStudies.find((cs: any) => cs.slug === slug);
      }
      return null;
    } catch (error) {
      console.error('Error fetching case study:', error);
      throw new Error('Failed to fetch case study');
    }
  }

  static async updateCaseStudy(id: string, data: any) {
    try {
      const caseStudiesDoc = await FirebaseDB.getDocument('caseStudies', 'main');
      const caseStudies = caseStudiesDoc?.caseStudies || [];
      
      const index = caseStudies.findIndex((cs: any) => cs.id === id || cs.slug === id);
      if (index === -1) {
        throw new Error('Case study not found');
      }
      
      caseStudies[index] = { ...caseStudies[index], ...data };
      
      await FirebaseDB.setDocument('caseStudies', 'main', {
        title: caseStudiesDoc?.title || 'Case Studies',
        caseStudies,
        updatedAt: new Date().toISOString()
      });
      
      return caseStudies[index];
    } catch (error) {
      console.error('Error updating case study:', error);
      throw new Error('Failed to update case study');
    }
  }

  static async deleteCaseStudy(id: string) {
    try {
      const caseStudiesDoc = await FirebaseDB.getDocument('caseStudies', 'main');
      const caseStudies = caseStudiesDoc?.caseStudies || [];
      
      const filteredCaseStudies = caseStudies.filter((cs: any) => cs.id !== id && cs.slug !== id);
      
      await FirebaseDB.setDocument('caseStudies', 'main', {
        title: caseStudiesDoc?.title || 'Case Studies',
        caseStudies: filteredCaseStudies,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'Case study deleted successfully' };
    } catch (error) {
      console.error('Error deleting case study:', error);
      throw new Error('Failed to delete case study');
    }
  }
}
