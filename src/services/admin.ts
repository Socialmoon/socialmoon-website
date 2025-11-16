import { connectToDatabase } from '@/database';
import Admin, { IAdmin } from '@/models/Admin';

export class AdminService {
  static async createAdmin(username: string, password: string): Promise<IAdmin> {
    try {
      await connectToDatabase();
      const admin = new Admin({ username, password });
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