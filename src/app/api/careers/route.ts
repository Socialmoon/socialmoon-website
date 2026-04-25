import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/connect';
import Job from '@/models/Job';

export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find({ active: true }).sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const job = await Job.create(body);
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}
