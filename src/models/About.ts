import mongoose, { Schema, Document } from 'mongoose';

export interface ITeamMember extends Document {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface IAbout extends Document {
  title: string;
  companyDescription: string;
  team: ITeamMember[];
}

const TeamMemberSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const AboutSchema: Schema = new Schema({
  title: { type: String, required: true },
  companyDescription: { type: String, required: true },
  team: [TeamMemberSchema],
}, {
  timestamps: true,
});

export default mongoose.models.About || mongoose.model<IAbout>('About', AboutSchema);
