import { NextRequest, NextResponse } from 'next/server';
import { HomeService } from '@/lib/services/home';

export async function GET() {
  try {
    const data = await HomeService.getHome();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/home:', error);
    return NextResponse.json(
      { error: 'Failed to fetch home' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await HomeService.updateHome(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/home:', error);
    return NextResponse.json(
      { error: 'Failed to update home' },
      { status: 500 }
    );
  }
}
