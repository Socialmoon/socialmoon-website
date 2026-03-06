import { FirebaseDB } from '@/lib/firebase/database';
import { orderBy as firestoreOrderBy } from 'firebase/firestore';

export class MessagesService {
  static async getMessages() {
    try {
      const messages = await FirebaseDB.getCollection('messages', [
        firestoreOrderBy('timestamp', 'desc')
      ]);
      return messages;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  }

  static async createMessage(data: any) {
    try {
      const messageData = {
        ...data,
        timestamp: new Date().toISOString(),
        read: false
      };
      
      return await FirebaseDB.addDocument('messages', messageData);
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Failed to create message');
    }
  }

  static async markAsRead(id: string) {
    try {
      return await FirebaseDB.updateDocument('messages', id, { read: true });
    } catch (error) {
      console.error('Error marking message as read:', error);
      throw new Error('Failed to mark message as read');
    }
  }

  static async updateMessageStatus(id: string, status: string) {
    try {
      return await FirebaseDB.updateDocument('messages', id, { status, read: status !== 'unread' });
    } catch (error) {
      console.error('Error updating message status:', error);
      throw new Error('Failed to update message status');
    }
  }

  static async deleteMessage(id: string) {
    try {
      await FirebaseDB.deleteDocument('messages', id);
      return { message: 'Message deleted successfully' };
    } catch (error) {
      console.error('Error deleting message:', error);
      throw new Error('Failed to delete message');
    }
  }
}
