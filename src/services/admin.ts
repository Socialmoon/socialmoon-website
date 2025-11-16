import { connectToDatabase } from '@/database';
import Admin, { IAdmin } from '@/models/Admin';

export class AdminService {
  static async createAdmin(username: string, password: string, role: 'admin' | 'superadmin' = 'admin'): Promise<IAdmin> {
    try {
      await connectToDatabase();
      const admin = new Admin({ username, password, role });
      await admin.save();
      return admin;
    } catch (error) {
      console.error('Error creating admin:', error);
      throw new Error('Failed to create admin');
    }
  }

  static async findAdminByUsername(username: string): Promise<IAdmin | null> {
    try {
      await connectToDatabase();
      return await Admin.findOne({ username });
    } catch (error) {
      console.error('Error finding admin:', error);
      throw new Error('Failed to find admin');
    }
  }

  static async authenticateAdmin(username: string, password: string): Promise<boolean> {
    try {
      await connectToDatabase();
      const admin = await Admin.findOne({ username });
      if (!admin) return false;

      return await admin.comparePassword(password);
    } catch (error) {
      console.error('Error authenticating admin:', error);
      return false;
    }
  }

  static async getAllAdmins(): Promise<IAdmin[]> {
    try {
      await connectToDatabase();
      return await Admin.find().select('-password');
    } catch (error) {
      console.error('Error getting admins:', error);
      throw new Error('Failed to get admins');
    }
  }

  static async updatePassword(username: string, newPassword: string): Promise<boolean> {
    try {
      await connectToDatabase();
      const admin = await Admin.findOne({ username });
      if (!admin) return false;

      admin.password = newPassword; // Will be hashed by pre-save hook
      await admin.save();
      return true;
    } catch (error) {
      console.error('Error updating password:', error);
      throw new Error('Failed to update password');
    }
  }

  static async updateRole(username: string, role: 'admin' | 'superadmin'): Promise<boolean> {
    try {
      await connectToDatabase();
      const result = await Admin.findOneAndUpdate({ username }, { role }, { new: true });
      return !!result;
    } catch (error) {
      console.error('Error updating role:', error);
      throw new Error('Failed to update role');
    }
  }

  static async getAdminRole(username: string): Promise<'admin' | 'superadmin' | null> {
    try {
      await connectToDatabase();
      const admin = await Admin.findOne({ username }).select('role');
      return admin ? admin.role : null;
    } catch (error) {
      console.error('Error getting admin role:', error);
      return null;
    }
  }

  static async deleteAdmin(username: string): Promise<boolean> {
    try {
      await connectToDatabase();
      const result = await Admin.findOneAndDelete({ username });
      return !!result;
    } catch (error) {
      console.error('Error deleting admin:', error);
      throw new Error('Failed to delete admin');
    }
  }
}