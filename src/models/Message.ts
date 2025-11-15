import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: Date;
  status?: 'unread' | 'read' | 'replied';
}

const MessageSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['unread', 'read', 'replied'], default: 'unread' },
}, {
  timestamps: true,
});

export default mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);
