import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  slug?: string;
  excerpt?: string;
  tags?: string[];
}

export interface IBlog extends Document {
  title: string;
  posts: IBlogPost[];
}

const BlogPostSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  imageUrl: { type: String, required: true },
  slug: { type: String },
  excerpt: { type: String },
  tags: [{ type: String }],
});

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  posts: [BlogPostSchema],
}, {
  timestamps: true,
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
