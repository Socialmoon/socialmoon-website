import { Subscriber } from '@/models/Subscriber';
import fs from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json');

const readSubscribers = (): Subscriber[] => {
  try {
    if (!fs.existsSync(SUBSCRIBERS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
};

const writeSubscribers = (subscribers: Subscriber[]): void => {
  try {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error('Error writing subscribers:', error);
  }
};

export const getSubscribers = (): Subscriber[] => {
  return readSubscribers();
};

export const addSubscriber = (email: string): Subscriber => {
  const subscribers = readSubscribers();
  const newSubscriber: Subscriber = {
    id: Date.now(),
    email,
    timestamp: new Date().toISOString(),
  };
  subscribers.push(newSubscriber);
  writeSubscribers(subscribers);
  return newSubscriber;
};

export const deleteSubscriber = (id: number): void => {
  const subscribers = readSubscribers();
  const filtered = subscribers.filter(sub => sub.id !== id);
  writeSubscribers(filtered);
};