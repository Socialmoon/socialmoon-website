import mongoose, { Schema, Document } from 'mongoose';

export interface IContactInfo extends Document {
  email: string;
  phone: string;
  address: string;
}

export interface IContact extends Document {
  title: string;
  contactInfo: IContactInfo;
}

const ContactInfoSchema: Schema = new Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const ContactSchema: Schema = new Schema({
  title: { type: String, required: true },
  contactInfo: ContactInfoSchema,
}, {
  timestamps: true,
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
