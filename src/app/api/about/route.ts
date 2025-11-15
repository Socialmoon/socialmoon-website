import { NextRequest, NextResponse } from 'next/server';
import { AboutService } from '@/lib/services/about';

export async function GET() {
  try {
    const data = await AboutService.getAbout();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/about:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await AboutService.updateAbout(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/about:', error);
    return NextResponse.json(
      { error: 'Failed to update about' },
      { status: 500 }
    );
  }
}
