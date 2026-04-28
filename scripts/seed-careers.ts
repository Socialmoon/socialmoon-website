import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const JobSchema = new mongoose.Schema({
  title: String,
  type: String,
  location: String,
  department: String,
  description: String,
  requirements: [String],
  active: Boolean,
}, { timestamps: true });

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);

const JOBS = [
  {
    title: 'Senior Social Media Strategist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Lead strategic social media campaigns for clients and mentor junior team members.',
    requirements: ['5+ years experience', 'Strategy expertise', 'Team leadership'],
    active: true,
  },
  {
    title: 'AI Automation Engineer',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Engineering',
    description: 'Build AI-powered workflows and automation systems that reduce operational drag for clients.',
    requirements: ['Python / Node.js', 'LLM integration experience', 'Workflow automation tools'],
    active: true,
  },
  {
    title: 'Content Marketing Specialist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Create compelling content strategies and manage production across multiple platforms.',
    requirements: ['3+ years experience', 'Content creation', 'SEO knowledge'],
    active: true,
  },
  {
    title: 'Cloud Infrastructure Engineer',
    type: 'Contract',
    location: 'Remote',
    department: 'Engineering',
    description: 'Optimize cloud architecture and reduce infrastructure costs for our clients.',
    requirements: ['AWS / GCP experience', 'Cost optimization', 'Infrastructure as code'],
    active: true,
  },
  {
    title: 'Business Development Manager',
    type: 'Full-time',
    location: 'Lucknow / Remote',
    department: 'Sales',
    description: 'Drive new client acquisition and manage relationships with key accounts.',
    requirements: ['B2B sales experience', 'Strong communication', 'CRM proficiency'],
    active: true,
  },
  {
    title: 'Marketing Coordinator',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Growth',
    description: 'Support marketing initiatives, coordinate campaigns, and assist with project management.',
    requirements: ['1+ years experience', 'Organization skills', 'Marketing tools'],
    active: true,
  },
];

async function seedCareers() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const existing = await Job.countDocuments();
    if (existing > 0) {
      console.log(`⚠️  Found ${existing} existing job(s). Clearing and re-seeding...`);
      await Job.deleteMany({});
    }

    const inserted = await Job.insertMany(JOBS);
    console.log(`✅ Seeded ${inserted.length} job postings:\n`);
    inserted.forEach(j => console.log(`  - [${(j as any).department}] ${(j as any).title}`));

  } catch (error) {
    console.error('❌ Error seeding careers:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✨ Done.');
    process.exit(0);
  }
}

seedCareers();
