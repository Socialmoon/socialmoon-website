import { connectToDatabase } from '@/database';
import Project, { IProject } from '@/models/Project';

export class PortfolioService {
  static async getPortfolio() {
    try {
      await connectToDatabase();
      let projects = await Project.find().sort({ id: 1 });

      // If no projects in database, return default projects
      if (projects.length === 0) {
        projects = [
          {
            id: 1,
            slug: 'techcorp-social-media-transformation',
            title: 'TechCorp Social Media Transformation',
            description: 'Complete social media overhaul for a leading technology company, resulting in significant engagement growth and brand visibility.',
            imageUrl: '/images/portfolio/techcorp.jpg',
            videoUrl: '/videos/project-1.mp4',
            link: 'https://techcorp.com',
            category: 'Social Media Marketing',
            client: 'TechCorp',
            duration: '6 months',
            technologies: ['Instagram', 'LinkedIn', 'Content Strategy', 'Analytics'],
            results: '300% engagement increase',
            challenge: 'TechCorp struggled with inconsistent social media presence and low engagement rates in a competitive tech market.',
            solution: 'Implemented a comprehensive LinkedIn-first strategy with targeted content and thought leadership positioning.',
            process: [
              'Audited existing social media presence and identified key opportunities',
              'Developed a content calendar with industry-specific topics',
              'Created engaging video content and thought leadership articles',
              'Implemented advanced analytics tracking and optimization'
            ],
            images: ['/images/portfolio/techcorp-1.jpg', '/images/portfolio/techcorp-2.jpg', '/images/portfolio/techcorp-3.jpg']
          },
          {
            id: 2,
            slug: 'fashion-forward-content-creation',
            title: 'FashionForward Content Creation',
            description: 'Viral content strategy that positioned FashionForward as a trendsetter in the fashion industry.',
            imageUrl: '/images/portfolio/fashionforward.jpg',
            videoUrl: '/videos/project-2.mp4',
            link: 'https://fashionforward.com',
            category: 'Content Creation',
            client: 'FashionForward',
            duration: '4 months',
            technologies: ['TikTok', 'Instagram', 'Video Production', 'Influencer Marketing'],
            results: '200% follower growth',
            challenge: 'FashionForward needed to break through in a saturated fashion market with limited marketing budget.',
            solution: 'Created viral TikTok challenges and influencer collaborations focusing on user-generated content.',
            process: [
              'Conducted market research and identified trending challenges',
              'Partnered with micro-influencers for authentic content',
              'Created branded hashtag campaigns',
              'Monitored engagement and optimized content strategy'
            ],
            images: ['/images/portfolio/fashionforward-1.jpg', '/images/portfolio/fashionforward-2.jpg']
          },
          {
            id: 3,
            slug: 'startup-xyz-advertising-campaign',
            title: 'StartupXYZ Advertising Campaign',
            description: 'Strategic advertising campaign that drove lead generation and user acquisition for a growing startup.',
            imageUrl: '/images/portfolio/startupxyz.jpg',
            videoUrl: '/videos/project-3.mp4',
            link: 'https://startupxyz.com',
            category: 'Brand Strategy',
            client: 'StartupXYZ',
            duration: '3 months',
            technologies: ['Google Ads', 'Facebook Ads', 'A/B Testing', 'CRM Integration'],
            results: '150% lead generation',
            challenge: 'StartupXYZ needed to establish market presence quickly with limited resources.',
            solution: 'Developed targeted advertising campaigns across multiple platforms with precise audience segmentation.',
            process: [
              'Defined target audience personas and pain points',
              'Created compelling ad copy and visual assets',
              'Set up conversion tracking and analytics',
              'Optimized campaigns based on performance data'
            ],
            images: ['/images/portfolio/startupxyz-1.jpg', '/images/portfolio/startupxyz-2.jpg']
          },
          {
            id: 4,
            slug: 'ecommerce-web-development',
            title: 'ECommerce Web Development',
            description: 'Custom e-commerce platform development with seamless user experience and high conversion rates.',
            imageUrl: '/images/portfolio/ecommerce.jpg',
            videoUrl: '/videos/project-4.mp4',
            link: 'https://ecommerceplus.com',
            category: 'Web Development',
            client: 'ECommerce Plus',
            duration: '8 months',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'SEO'],
            results: '400% website traffic boost',
            challenge: 'ECommerce Plus needed a modern, scalable platform to handle growing customer demands.',
            solution: 'Built a custom e-commerce solution with advanced features and mobile-first design.',
            process: [
              'Conducted user research and competitor analysis',
              'Designed wireframes and user flow diagrams',
              'Developed responsive frontend and backend systems',
              'Implemented payment processing and security measures'
            ],
            images: ['/images/portfolio/ecommerce-1.jpg', '/images/portfolio/ecommerce-2.jpg', '/images/portfolio/ecommerce-3.jpg']
          },
          {
            id: 5,
            slug: 'fitness-app-development',
            title: 'Fitness App Development',
            description: 'Comprehensive fitness tracking app with personalized workout plans and community features.',
            imageUrl: '/images/portfolio/fitness.jpg',
            videoUrl: '/videos/project-5.mp4',
            link: 'https://fitlifeapp.com',
            category: 'App Development',
            client: 'FitLife App',
            duration: '12 months',
            technologies: ['React Native', 'Firebase', 'Machine Learning', 'Health APIs'],
            results: '100,000+ app downloads',
            challenge: 'FitLife needed to create an engaging app that stands out in a crowded fitness market.',
            solution: 'Developed an AI-powered fitness app with personalized recommendations and social features.',
            process: [
              'Researched user needs and competitor apps',
              'Designed intuitive UI/UX with gamification elements',
              'Implemented machine learning for workout personalization',
              'Built community features and social integration'
            ],
            images: ['/images/portfolio/fitness-1.jpg', '/images/portfolio/fitness-2.jpg']
          },
          {
            id: 6,
            slug: 'restaurant-brand-strategy',
            title: 'Restaurant Brand Strategy',
            description: 'Complete brand transformation for a local restaurant chain, increasing customer loyalty and revenue.',
            imageUrl: '/images/portfolio/restaurant.jpg',
            videoUrl: '/videos/project-6.mp4',
            link: 'https://restaurantchain.com',
            category: 'Social Media Marketing',
            client: 'Restaurant Chain',
            duration: '5 months',
            technologies: ['Brand Identity', 'Social Media', 'Local SEO', 'Email Marketing'],
            results: '250% brand awareness',
            challenge: 'Restaurant Chain lacked brand recognition and struggled with customer retention.',
            solution: 'Created a cohesive brand identity and implemented multi-channel marketing strategies.',
            process: [
              'Developed brand guidelines and visual identity',
              'Created social media content calendar',
              'Implemented local SEO and Google My Business optimization',
              'Launched loyalty program and email marketing campaigns'
            ],
            images: ['/images/portfolio/restaurant-1.jpg', '/images/portfolio/restaurant-2.jpg']
          }
        ];
      }

      // Ensure all projects have proper slugs
      const defaultSlugs = [
        'techcorp-social-media-transformation',
        'fashion-forward-content-creation',
        'startup-xyz-advertising-campaign',
        'ecommerce-web-development',
        'fitness-app-development',
        'restaurant-brand-strategy'
      ];

      return {
        title: 'Our Portfolio',
        projects: projects.map((project, index) => ({
          id: project.id,
          slug: project.slug || defaultSlugs[index % defaultSlugs.length],
          title: project.title,
          description: project.description,
          imageUrl: project.imageUrl,
          videoUrl: project.videoUrl,
          link: project.link,
          category: project.category,
          client: project.client,
          duration: project.duration,
          technologies: project.technologies,
          results: project.results,
          challenge: project.challenge,
          solution: project.solution,
          process: project.process,
          images: project.images,
        }))
      };
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      throw new Error('Failed to fetch portfolio');
    }
  }

  static async updatePortfolio(data: { title: string; projects: IProject[] }) {
    try {
      await connectToDatabase();

      // Clear existing projects
      await Project.deleteMany({});

      // Ensure slugs are present
      const defaultSlugs = [
        'techcorp-social-media-transformation',
        'fashion-forward-content-creation',
        'startup-xyz-advertising-campaign',
        'ecommerce-web-development',
        'fitness-app-development',
        'restaurant-brand-strategy'
      ];

      // Insert new projects
      const projectsToInsert = data.projects.map((project, index) => ({
        id: project.id,
        slug: project.slug || defaultSlugs[index % defaultSlugs.length],
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        videoUrl: project.videoUrl,
        link: project.link,
        category: project.category,
        client: project.client,
        duration: project.duration,
        technologies: project.technologies,
        results: project.results,
        challenge: project.challenge,
        solution: project.solution,
        process: project.process,
        images: project.images,
      }));

      await Project.insertMany(projectsToInsert);

      return { message: 'Portfolio updated successfully' };
    } catch (error) {
      console.error('Error updating portfolio:', error);
      throw new Error('Failed to update portfolio');
    }
  }

  static async getProjectBySlug(slug: string) {
    try {
      await connectToDatabase();
      const project = await Project.findOne({ slug });
      return project;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw new Error('Failed to fetch project');
    }
  }

  static async createProject(projectData: Partial<IProject>) {
    try {
      await connectToDatabase();
      const project = new Project(projectData);
      await project.save();
      return project;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }
  }

  static async updateProject(id: number, projectData: Partial<IProject>) {
    try {
      await connectToDatabase();
      const project = await Project.findOneAndUpdate({ id }, projectData, { new: true });
      return project;
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Failed to update project');
    }
  }

  static async deleteProject(id: number) {
    try {
      await connectToDatabase();
      await Project.findOneAndDelete({ id });
      return { message: 'Project deleted successfully' };
    } catch (error) {
      console.error('Error deleting project:', error);
      throw new Error('Failed to delete project');
    }
  }
}
