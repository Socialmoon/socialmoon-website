import { NextRequest, NextResponse } from 'next/server';
import { AdminService } from '@/services/admin';
import { AuthUtils } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const auth = await AuthUtils.getAuthFromRequest(request);
    AuthUtils.requireSuperAdmin(auth);

    const admins = await AdminService.getAllAdmins();
    return NextResponse.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    if (error instanceof Error && error.message === 'Superadmin access required') {
      return NextResponse.json({ error: 'Superadmin access required' }, { status: 403 });
    }
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to fetch admins' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const auth = await AuthUtils.getAuthFromRequest(request);
    AuthUtils.requireSuperAdmin(auth);

    const { username, password, role } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }
    const admin = await AdminService.createAdmin(username, password, role || 'admin');
    return NextResponse.json({ message: 'Admin created successfully', admin: { username: admin.username, role: admin.role, createdAt: admin.createdAt } }, { status: 201 });
  } catch (error) {
    console.error('Error creating admin:', error);
    if (error instanceof Error && error.message === 'Superadmin access required') {
      return NextResponse.json({ error: 'Superadmin access required' }, { status: 403 });
    }
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const auth = await AuthUtils.getAuthFromRequest(request);
    AuthUtils.requireSuperAdmin(auth);

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
    if (error instanceof Error && error.message === 'Superadmin access required') {
      return NextResponse.json({ error: 'Superadmin access required' }, { status: 403 });
    }
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to update password' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Check authentication
    const auth = await AuthUtils.getAuthFromRequest(request);
    AuthUtils.requireSuperAdmin(auth);

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
    if (error instanceof Error && error.message === 'Superadmin access required') {
      return NextResponse.json({ error: 'Superadmin access required' }, { status: 403 });
    }
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const auth = await AuthUtils.getAuthFromRequest(request);
    AuthUtils.requireSuperAdmin(auth);

    const { username } = await request.json();
    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    // Prevent superadmin from deleting themselves
    if (auth!.username === username) {
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 });
    }

    const success = await AdminService.deleteAdmin(username);
    if (!success) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    if (error instanceof Error && error.message === 'Superadmin access required') {
      return NextResponse.json({ error: 'Superadmin access required' }, { status: 403 });
    }
    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to delete admin' }, { status: 500 });
  }
}