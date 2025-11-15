import { connectToDatabase } from '@/lib/database';
import CaseStudy, { ICaseStudy } from '@/models/CaseStudy';

export class CaseStudiesService {
  static async getCaseStudies() {
    try {
      await connectToDatabase();
      const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
      return {
        title: 'Case Studies',
        caseStudies: caseStudies.map(study => ({
          id: study.id,
          slug: study.slug,
          title: study.title,
          company: study.company,
          industry: study.industry,
          service: study.service,
          duration: study.duration,
          results: study.results,
          challenge: study.challenge,
          solution: study.solution,
          approach: study.approach,
          metrics: study.metrics,
          testimonial: study.testimonial,
          clientName: study.clientName,
          clientPosition: study.clientPosition,
          images: study.images,
        }))
      };
    } catch (error) {
      console.error('Error fetching case studies:', error);
      throw new Error('Failed to fetch case studies');
    }
  }

  static async updateCaseStudies(data: { title: string; caseStudies: ICaseStudy[] }) {
    try {
      await connectToDatabase();

      // Clear existing case studies
      await CaseStudy.deleteMany({});

      // Insert new case studies
      const caseStudiesToInsert = data.caseStudies.map(study => ({
        id: study.id,
        slug: study.slug,
        title: study.title,
        company: study.company,
        industry: study.industry,
        service: study.service,
        duration: study.duration,
        results: study.results,
        challenge: study.challenge,
        solution: study.solution,
        approach: study.approach,
        metrics: study.metrics,
        testimonial: study.testimonial,
        clientName: study.clientName,
        clientPosition: study.clientPosition,
        images: study.images,
      }));

      await CaseStudy.insertMany(caseStudiesToInsert);

      return { message: 'Case studies updated successfully' };
    } catch (error) {
      console.error('Error updating case studies:', error);
      throw new Error('Failed to update case studies');
    }
  }

  static async getCaseStudyBySlug(slug: string) {
    try {
      await connectToDatabase();
      const caseStudy = await CaseStudy.findOne({ slug });
      return caseStudy;
    } catch (error) {
      console.error('Error fetching case study:', error);
      throw new Error('Failed to fetch case study');
    }
  }

  static async createCaseStudy(caseStudyData: Partial<ICaseStudy>) {
    try {
      await connectToDatabase();
      const caseStudy = new CaseStudy(caseStudyData);
      await caseStudy.save();
      return caseStudy;
    } catch (error) {
      console.error('Error creating case study:', error);
      throw new Error('Failed to create case study');
    }
  }

  static async updateCaseStudy(id: string, caseStudyData: Partial<ICaseStudy>) {
    try {
      await connectToDatabase();
      const caseStudy = await CaseStudy.findOneAndUpdate({ id }, caseStudyData, { new: true });
      return caseStudy;
    } catch (error) {
      console.error('Error updating case study:', error);
      throw new Error('Failed to update case study');
    }
  }

  static async deleteCaseStudy(id: string) {
    try {
      await connectToDatabase();
      await CaseStudy.findOneAndDelete({ id });
      return { message: 'Case study deleted successfully' };
    } catch (error) {
      console.error('Error deleting case study:', error);
      throw new Error('Failed to delete case study');
    }
  }
}
