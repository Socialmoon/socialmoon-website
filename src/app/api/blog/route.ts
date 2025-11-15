import { NextRequest, NextResponse } from 'next/server';
import { BlogService } from '@/services/blog';

export async function GET() {
  try {
    const data = await BlogService.getBlog();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await BlogService.updateBlog(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}
