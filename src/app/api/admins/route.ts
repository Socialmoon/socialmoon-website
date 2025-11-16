import { NextRequest, NextResponse } from 'next/server';
import { AdminService } from '@/services/admin';

export async function GET() {
  try {
    const admins = await AdminService.getAllAdmins();
    return NextResponse.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    return NextResponse.json({ error: 'Failed to fetch admins' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username, password, role } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }
    const admin = await AdminService.createAdmin(username, password, role || 'admin');
    return NextResponse.json({ message: 'Admin created successfully', admin: { username: admin.username, role: admin.role, createdAt: admin.createdAt } }, { status: 201 });
  } catch (error) {
    console.error('Error creating admin:', error);
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { username, newPassword } = await request.json();
    if (!username || !newPassword) {
      return NextResponse.json({ error: 'Username and new password are required' }, { status: 400 });
    }
    const success = await AdminService.updatePassword(username, newPassword);
    if (!success) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json({ error: 'Failed to update password' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { username, role } = await request.json();
    if (!username || !role) {
      return NextResponse.json({ error: 'Username and role are required' }, { status: 400 });
    }
    const success = await AdminService.updateRole(username, role);
    if (!success) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Role updated successfully' });
  } catch (error) {
    console.error('Error updating role:', error);
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { username } = await request.json();
    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }
    const success = await AdminService.deleteAdmin(username);
    if (!success) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    return NextResponse.json({ error: 'Failed to delete admin' }, { status: 500 });
  }
}