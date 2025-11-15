import { NextRequest, NextResponse } from 'next/server';
import { ServicesService } from '@/lib/services/services';

export async function GET() {
  try {
    const data = await ServicesService.getServices();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await ServicesService.updateServices(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/services:', error);
    return NextResponse.json(
      { error: 'Failed to update services' },
      { status: 500 }
    );
  }
}
