import mongoose, { Schema, Document } from 'mongoose';

export interface IFeature extends Document {
  title: string;
  description: string;
}

export interface IHome extends Document {
  title: string;
  description: string;
  features: IFeature[];
}

const FeatureSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const HomeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [FeatureSchema],
}, {
  timestamps: true,
});

export default mongoose.models.Home || mongoose.model<IHome>('Home', HomeSchema);
