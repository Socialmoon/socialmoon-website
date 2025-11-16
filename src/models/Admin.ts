import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdmin extends Document {
  username: string;
  password: string;
  role: 'admin' | 'superadmin';
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' },
}, {
  timestamps: true,
});

AdminSchema.pre('save', async function(next) {
  const admin = this as any;

  if (!admin.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    admin.password = await bcrypt.hash(admin.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

AdminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);