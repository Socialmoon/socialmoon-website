import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  link: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string;
  challenge: string;
  solution: string;
  process: string[];
  images: string[];
}

const ProjectSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  videoUrl: { type: String },
  link: { type: String, required: true },
  category: { type: String, required: true },
  client: { type: String, required: true },
  duration: { type: String, required: true },
  technologies: [{ type: String }],
  results: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  process: [{ type: String }],
  images: [{ type: String }],
}, {
  timestamps: true,
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
