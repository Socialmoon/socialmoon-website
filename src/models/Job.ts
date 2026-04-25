import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
  formLink: string;
  active: boolean;
}

const JobSchema: Schema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true, default: 'Full-time' },
  location: { type: String, required: true, default: 'Remote' },
  department: { type: String, required: true, default: 'General' },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  formLink: { type: String, default: '' },
  active: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);
