import { NextRequest, NextResponse } from 'next/server';
import { AdminService } from '@/services/admin';

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();
    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }
    const role = await AdminService.getAdminRole(username);
    if (role === null) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }
    return NextResponse.json({ role });
  } catch (error) {
    console.error('Error getting admin role:', error);
    return NextResponse.json({ error: 'Failed to get role' }, { status: 500 });
  }
}