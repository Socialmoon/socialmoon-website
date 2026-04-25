import { FirebaseDB } from '@/lib/firebase/database';

export class ContactService {
  static async getContact() {
    try {
      const contact = await FirebaseDB.getDocument('contact', 'main');
      
      if (!contact) {
        // Return default data if none exists
        return {
          title: 'Contact Us',
          contactInfo: {
            email: 'contact@socialmoon.in',
            phone: '+91 9118439107',
            address: 'Lucknow, Uttar Pradesh, India'
          }
        };
      }
      
      // Return the entire contact document
      return contact;
    } catch (error) {
      console.error('Error fetching contact:', error);
      // Return default data on error
      return {
        title: 'Contact Us',
        contactInfo: {
          email: 'contact@socialmoon.in',
          phone: '+91 9118439107',
          address: 'Lucknow, Uttar Pradesh, India'
        }
      };
    }
  }

  static async updateContact(data: any) {
    try {
      // Update or create contact document in Firebase
      await FirebaseDB.setDocument('contact', 'main', {
        title: data.title,
        contactInfo: data.contactInfo,
        updatedAt: new Date().toISOString()
      });

      return { message: 'Contact updated successfully' };
    } catch (error) {
      console.error('Error updating contact:', error);
      throw new Error('Failed to update contact');
    }
  }
}
