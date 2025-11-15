import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/services/contact';

export async function GET() {
  try {
    const data = await ContactService.getContact();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/contact:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await ContactService.updateContact(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/contact:', error);
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}
