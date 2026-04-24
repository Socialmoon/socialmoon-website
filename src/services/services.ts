import { FirebaseDB } from '@/lib/firebase/database';
import { orderBy } from 'firebase/firestore';

const NEW_SERVICE_CATALOG = [
  {
    id: 1,
    title: 'Content & Social Growth System',
    description: 'A consistent content engine that builds your audience and keeps your brand visible without manual chaos.',
    price: 'Custom',
    features: [
      'Consistent multi-platform presence without burning team time',
      'Content designed for the right audience, not vanity followers',
      'A repeatable process your team can run or fully outsource',
    ],
    popular: true,
  },
  {
    id: 2,
    title: 'Lead Generation System',
    description: 'A targeted outreach and nurture flow that creates a predictable pipeline without relying on ads alone.',
    price: 'Custom',
    features: [
      'Steady flow of warm and qualified leads each month',
      'Shorter sales cycles with better-prepared prospects',
      'Clear attribution so you know exactly where leads come from',
    ],
    popular: true,
  },
  {
    id: 3,
    title: 'Personal Brand System',
    description: 'A LinkedIn-first system that turns founder visibility into trust, inbound demand, and deals.',
    price: 'Custom',
    features: [
      'Founder profile becomes a sales asset that works daily',
      'Category authority that shortens sales conversations',
      'Inbound opportunities from the right people in your market',
    ],
  },
  {
    id: 4,
    title: 'OpsFlow AI',
    description: 'We audit expensive manual workflows and automate high-impact operations so teams focus on meaningful work.',
    price: 'Custom',
    features: [
      'Reduce repetitive manual work by 40-70%',
      'Lower operational cost without abrupt team disruption',
      'Faster execution across sales, support, onboarding, and ops',
    ],
  },
  {
    id: 5,
    title: 'WorkflowOS',
    description: 'We replace scattered docs, sheets, and handoffs with one structured operating system your team can trust.',
    price: 'Custom',
    features: [
      'Replace 5-10 fragmented workflows with one clean system',
      'Less coordination overhead and more execution time',
      'Reduced handoff errors and stronger process accountability',
    ],
  },
  {
    id: 6,
    title: 'CloudTrim',
    description: 'We optimize cloud spending and architecture so you pay for what you use and scale without infrastructure panic.',
    price: 'Custom',
    features: [
      'Cut cloud cost by 40-60% with low migration risk',
      'Infrastructure prepared for 5x scale growth',
      'Clear documented setup that is not person-dependent',
    ],
  },
  {
    id: 7,
    title: 'QueryBoost',
    description: 'We remove data-layer bottlenecks and improve database performance to speed up app and API response times.',
    price: 'Custom',
    features: [
      '5-10x faster load time and API performance',
      'Database readiness for 3-5x current traffic',
      'Fewer production slowdowns and firefighting cycles',
    ],
  },
  {
    id: 8,
    title: 'SmartLayer AI',
    description: 'We identify high-impact AI opportunities, build testable prototypes, and deliver a fast shipping roadmap.',
    price: 'Custom',
    features: [
      'Clarity on AI features that actually move product metrics',
      'Working proofs you can test with real users quickly',
      'Cut AI feature timeline from months to weeks',
    ],
  },
];

const LEGACY_SERVICE_TITLES = new Set([
  'Social Media Strategy & Consulting',
  'Content Creation & Management',
  'Instagram Growth & Management',
  'Influencer Marketing Campaigns',
  'Paid Social Advertising',
  'TikTok Marketing & Viral Growth',
  'LinkedIn B2B Marketing',
  'Community Management',
  'Analytics & Reporting',
  'Social Media Management',
  'Web Development',
  'App Development',
]);

const REQUIRED_NEW_SERVICE_TITLES = new Set([
  'Content & Social Growth System',
  'Lead Generation System',
  'Personal Brand System',
  'OpsFlow AI',
  'WorkflowOS',
  'CloudTrim',
  'QueryBoost',
  'SmartLayer AI',
]);

const isLegacyCatalog = (services: any[]) =>
  services.some((service: any) => LEGACY_SERVICE_TITLES.has((service?.title || '').trim()));

const isNewCatalog = (services: any[]) => {
  if (!Array.isArray(services) || services.length !== REQUIRED_NEW_SERVICE_TITLES.size) {
    return false;
  }

  const titles = new Set(services.map((service: any) => (service?.title || '').trim()));
  for (const requiredTitle of REQUIRED_NEW_SERVICE_TITLES) {
    if (!titles.has(requiredTitle)) {
      return false;
    }
  }
  return true;
};

export class ServicesService {
  static async getServices() {
    try {
      // Get services document from Firebase
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');

      if (servicesDoc && Array.isArray(servicesDoc.services) && servicesDoc.services.length > 0) {
        if (isNewCatalog(servicesDoc.services)) {
          return {
            title: servicesDoc.title || 'Growth & Efficiency Systems',
            services: servicesDoc.services,
          };
        }

        // Auto-migrate legacy or stale catalog to the new systems catalog.
        await FirebaseDB.setDocument('services', 'main', {
          title: 'Growth & Efficiency Systems',
          services: NEW_SERVICE_CATALOG,
          updatedAt: new Date().toISOString(),
        });

        return {
          title: 'Growth & Efficiency Systems',
          services: NEW_SERVICE_CATALOG,
        };
      }

      // Seed new catalog if none exists.
      await FirebaseDB.setDocument('services', 'main', {
        title: 'Growth & Efficiency Systems',
        services: NEW_SERVICE_CATALOG,
        updatedAt: new Date().toISOString(),
      });

      return {
        title: 'Growth & Efficiency Systems',
        services: NEW_SERVICE_CATALOG,
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      return {
        title: 'Growth & Efficiency Systems',
        services: NEW_SERVICE_CATALOG,
      };
    }
  }

  static async updateServices(data: { title: string; services: any[] }) {
    try {
      // Update services document in Firebase
      await FirebaseDB.setDocument('services', 'main', {
        title: data.title,
        services: data.services,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Services updated successfully' };
    } catch (error) {
      console.error('Error updating services:', error);
      throw new Error('Failed to update services');
    }
  }

  static async getServiceById(id: number) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      if (servicesDoc && servicesDoc.services) {
        return servicesDoc.services.find((s: any) => s.id === id);
      }
      return null;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw new Error('Failed to fetch service');
    }
  }

  static async createService(serviceData: any) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      services.push(serviceData);
      
      await FirebaseDB.setDocument('services', 'main', {
        title: servicesDoc?.title || 'Growth & Efficiency Systems',
        services,
        updatedAt: new Date().toISOString()
      });
      
      return serviceData;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Failed to create service');
    }
  }

  static async updateService(id: number, serviceData: any) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      const index = services.findIndex((s: any) => s.id === id);
      
      if (index !== -1) {
        services[index] = { ...services[index], ...serviceData };
        await FirebaseDB.setDocument('services', 'main', {
          title: servicesDoc?.title || 'Growth & Efficiency Systems',
          services,
          updatedAt: new Date().toISOString()
        });
        return services[index];
      }
      return null;
    } catch (error) {
      console.error('Error updating service:', error);
      throw new Error('Failed to update service');
    }
  }

  static async deleteService(id: number) {
    try {
      const servicesDoc = await FirebaseDB.getDocument('services', 'main');
      const services = servicesDoc?.services || [];
      const filtered = services.filter((s: any) => s.id !== id);
      
      await FirebaseDB.setDocument('services', 'main', {
        title: servicesDoc?.title || 'Growth & Efficiency Systems',
        services: filtered,
        updatedAt: new Date().toISOString()
      });
      
      return { message: 'Service deleted successfully' };
    } catch (error) {
      console.error('Error deleting service:', error);
      throw new Error('Failed to delete service');
    }
  }
}
