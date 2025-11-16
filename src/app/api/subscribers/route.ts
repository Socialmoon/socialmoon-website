import { NextRequest, NextResponse } from 'next/server';
import { getSubscribers, addSubscriber, deleteSubscriber } from '@/services/subscribers';

export async function GET() {
  try {
    const subscribers = getSubscribers();
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const subscriber = addSubscriber(email);
    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return NextResponse.json({ error: 'Failed to add subscriber' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    deleteSubscriber(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    return NextResponse.json({ error: 'Failed to delete subscriber' }, { status: 500 });
  }
}