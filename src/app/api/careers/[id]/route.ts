import { NextRequest, NextResponse } from 'next/server';
import { FirebaseDB } from '@/lib/firebase/database';

const normalizeJob = (job: any) => (job ? { ...job, _id: job._id || job.id } : null);

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const job = normalizeJob(await FirebaseDB.getDocument('careers', id));
    if (!job) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(job);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    await FirebaseDB.setDocument('careers', id, {
      ...body,
      updatedAt: new Date().toISOString(),
    });
    const updated = normalizeJob(await FirebaseDB.getDocument('careers', id));
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await FirebaseDB.deleteDocument('careers', id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
