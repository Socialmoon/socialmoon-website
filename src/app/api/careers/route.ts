import { NextRequest, NextResponse } from 'next/server';
import { FirebaseDB } from '@/lib/firebase/database';

const normalizeJob = (job: any) => ({ ...job, _id: job._id || job.id });

export async function GET() {
  try {
    const jobs = await FirebaseDB.getCollection('careers');
    const activeJobs = jobs
      .map(normalizeJob)
      .filter((job) => job.active !== false)
      .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    return NextResponse.json(activeJobs);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const now = new Date().toISOString();
    const job = await FirebaseDB.addDocument('careers', {
      ...body,
      active: body.active !== false,
      createdAt: body.createdAt || now,
      updatedAt: now,
    });
    return NextResponse.json(normalizeJob(job), { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}
