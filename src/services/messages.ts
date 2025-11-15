import { connectToDatabase } from '@/database';
import Message, { IMessage } from '@/models/Message';

export class MessagesService {
  static async getMessages() {
    try {
      await connectToDatabase();
      const messages = await Message.find().sort({ timestamp: -1 });
      return messages.map(message => ({
        id: message.id,
        name: message.name,
        email: message.email,
        subject: message.subject,
        message: message.message,
        timestamp: message.timestamp,
        status: message.status,
      }));
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw new Error('Failed to fetch messages');
    }
  }

  static async createMessage(messageData: Partial<IMessage>) {
    try {
      await connectToDatabase();
      const message = new Message({
        ...messageData,
        id: Date.now(), // Simple ID generation
        timestamp: new Date(),
        status: 'unread',
      });
      await message.save();
      return { message: 'Message sent successfully' };
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Failed to send message');
    }
  }

  static async updateMessageStatus(id: number, status: 'unread' | 'read' | 'replied') {
    try {
      await connectToDatabase();
      const message = await Message.findOneAndUpdate({ id }, { status }, { new: true });
      return message;
    } catch (error) {
      console.error('Error updating message status:', error);
      throw new Error('Failed to update message status');
    }
  }

  static async deleteMessage(id: number) {
    try {
      await connectToDatabase();
      await Message.findOneAndDelete({ id });
      return { message: 'Message deleted successfully' };
    } catch (error) {
      console.error('Error deleting message:', error);
      throw new Error('Failed to delete message');
    }
  }
}
