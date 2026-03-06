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

  static async getAllAdmins() {
    const admins = await this.getAdmins();
    // Normalize and sanitize admin data (remove password, normalize role)
    return admins.map((admin: any) => ({
      id: admin.id,
      username: admin.username,
      role: admin.role === 'superadmin' ? 'superadmin' : 'admin',
      createdAt: admin.createdAt,
    }));
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

  static async createAdmin(username: string, password: string, role: string = 'admin') {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const adminData = {
        username,
        password: hashedPassword,
        role,
        createdAt: new Date().toISOString()
      };
      
      return await FirebaseDB.addDocument('admins', adminData);
    } catch (error) {
      console.error('Error creating admin:', error);
      throw new Error('Failed to create admin');
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

  static async updatePassword(username: string, newPassword: string) {
    try {
      const admin = await this.getAdminByUsername(username);
      if (!admin) {
        return false;
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await FirebaseDB.updateDocument('admins', admin.id, { password: hashedPassword });
      return true;
    } catch (error) {
      console.error('Error updating password:', error);
      return false;
    }
  }

  static async updateRole(username: string, role: string) {
    try {
      const admin = await this.getAdminByUsername(username);
      if (!admin) {
        return false;
      }

      await FirebaseDB.updateDocument('admins', admin.id, { role });
      return true;
    } catch (error) {
      console.error('Error updating role:', error);
      return false;
    }
  }

  static async deleteAdmin(usernameOrId: string) {
    try {
      // Try to find admin by username first
      const admin = await this.getAdminByUsername(usernameOrId);
      const id = admin ? admin.id : usernameOrId;
      
      await FirebaseDB.deleteDocument('admins', id);
      return true;
    } catch (error) {
      console.error('Error deleting admin:', error);
      return false;
    }
  }
}
