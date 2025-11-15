import { connectToDatabase } from '@/lib/database';
import Contact, { IContact } from '@/models/Contact';

export class ContactService {
  static async getContact() {
    try {
      await connectToDatabase();
      const contact = await Contact.findOne().sort({ createdAt: -1 });
      if (!contact) {
        // Return default data if none exists
        return {
          title: 'Contact Us',
          contactInfo: {
            email: 'contact@socialmoon.com',
            phone: '+1 234 567 890',
            address: '123 Social Moon Street, Moon City, 12345'
          }
        };
      }
      return {
        title: contact.title,
        contactInfo: contact.contactInfo,
      };
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw new Error('Failed to fetch contact');
    }
  }

  static async updateContact(data: IContact) {
    try {
      await connectToDatabase();

      // Update or create contact document
      const contact = await Contact.findOneAndUpdate(
        {},
        {
          title: data.title,
          contactInfo: data.contactInfo,
        },
        { upsert: true, new: true }
      );

      return { message: 'Contact updated successfully' };
    } catch (error) {
      console.error('Error updating contact:', error);
      throw new Error('Failed to update contact');
    }
  }
}
