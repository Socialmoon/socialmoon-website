import mongoose, { Schema, Document } from 'mongoose';

export interface IMetric extends Document {
  before: string;
  after: string;
  improvement: string;
}

export interface ICaseStudy extends Document {
  id: string;
  slug: string;
  title: string;
  company: string;
  industry: string;
  service: string;
  duration: string;
  results: string;
  challenge: string;
  solution: string;
  approach: string[];
  metrics: IMetric[];
  testimonial: string;
  clientName: string;
  clientPosition: string;
  images: string[];
}

const MetricSchema: Schema = new Schema({
  before: { type: String, required: true },
  after: { type: String, required: true },
  improvement: { type: String, required: true },
});

const CaseStudySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  industry: { type: String, required: true },
  service: { type: String, required: true },
  duration: { type: String, required: true },
  results: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  approach: [{ type: String, required: true }],
  metrics: [MetricSchema],
  testimonial: { type: String, required: true },
  clientName: { type: String, required: true },
  clientPosition: { type: String, required: true },
  images: [{ type: String }],
}, {
  timestamps: true,
});

export default mongoose.models.CaseStudy || mongoose.model<ICaseStudy>('CaseStudy', CaseStudySchema);
