import { NextRequest, NextResponse } from 'next/server';
import { ServicesService } from '@/services/services';

export async function GET() {
  try {
    const data = await ServicesService.getServices();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/services:', error);
    // Return a valid structure even on error
    return NextResponse.json(
      { 
        title: 'Our Services',
        services: [],
        error: 'Failed to fetch services' 
      },
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
