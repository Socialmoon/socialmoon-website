import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  id: number;
  title: string;
  description: string;
  price: number;
}

const ServiceSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
