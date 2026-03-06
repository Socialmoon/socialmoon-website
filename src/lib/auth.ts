import * as jwt from 'jsonwebtoken';
import { AdminService } from '@/services/admin';

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) throw new Error('JWT_SECRET environment variable is not set');
const JWT_EXPIRES_IN = '24h';

export interface JWTPayload {
  username: string;
  role: 'admin' | 'superadmin';
}

export class AuthUtils {
  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  static verifyToken(token: string): JWTPayload | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  }

  static async getAuthFromRequest(request: Request): Promise<JWTPayload | null> {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const payload = this.verifyToken(token);

    if (!payload) {
      return null;
    }

    // Verify the admin still exists and has the correct role
    const role = await AdminService.getAdminRole(payload.username);
    if (role !== payload.role) {
      return null;
    }

    return payload;
  }

  static requireSuperAdmin(auth: JWTPayload | null): void {
    if (!auth || auth.role !== 'superadmin') {
      throw new Error('Superadmin access required');
    }
  }

  static requireAdmin(auth: JWTPayload | null): void {
    if (!auth) {
      throw new Error('Authentication required');
    }
  }
}