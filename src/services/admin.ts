import { FirebaseDB } from '@/lib/firebase/database';
import bcrypt from 'bcryptjs';

export class AdminService {
  static async getAdmins() {
    try {
      const admins = await FirebaseDB.getCollection('admins');
      return admins;
    } catch (error) {
      console.error('Error fetching admins:', error);
      return [];
    }
  }

  static async getAdminByUsername(username: string) {
    try {
      const admins = await FirebaseDB.getCollection('admins');
      return admins.find((admin: any) => admin.username === username);
    } catch (error) {
      console.error('Error fetching admin:', error);
      return null;
    }
  }

  static async createAdmin(data: any) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const adminData = {
        ...data,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      };
      
      return await FirebaseDB.addDocument('admins', adminData);
    } catch (error) {
      console.error('Error creating admin:', error);
      throw new Error('Failed to create admin');
    }
  }

  static async updateAdmin(id: string, data: any) {
    try {
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }
      
      return await FirebaseDB.updateDocument('admins', id, data);
    } catch (error) {
      console.error('Error updating admin:', error);
      throw new Error('Failed to update admin');
    }
  }

  static async deleteAdmin(id: string) {
    try {
      await FirebaseDB.deleteDocument('admins', id);
      return { message: 'Admin deleted successfully' };
    } catch (error) {
      console.error('Error deleting admin:', error);
      throw new Error('Failed to delete admin');
    }
  }

  static async authenticateAdmin(username: string, password: string) {
    try {
      const admin = await this.getAdminByUsername(username);
      
      if (!admin) {
        return false;
      }

      // Compare password with hashed password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      return isPasswordValid;
    } catch (error) {
      console.error('Error authenticating admin:', error);
      return false;
    }
  }

  static async getAdminRole(username: string) {
    try {
      const admin = await this.getAdminByUsername(username);
      return admin ? admin.role || 'admin' : null;
    } catch (error) {
      console.error('Error fetching admin role:', error);
      return null;
    }
  }
}
