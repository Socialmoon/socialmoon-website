import { NextRequest, NextResponse } from 'next/server';
import { MessagesService } from '@/services/messages';

export async function GET() {
  try {
    const messages = await MessagesService.getMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error in GET /api/messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await MessagesService.createMessage(body);
    return NextResponse.json({ 
      message: 'Message sent successfully!',
      success: true,
      data: result 
    });
  } catch (error) {
    console.error('Error in POST /api/messages:', error);
    return NextResponse.json(
      { message: 'Failed to send message', error: true },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    // For messages, PUT is used to update status
    if (body.id && body.status) {
      const result = await MessagesService.markAsRead(body.id);
      return NextResponse.json(result);
    }
    return NextResponse.json(
      { error: 'Invalid update request' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in PUT /api/messages:', error);
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Message ID is required' },
        { status: 400 }
      );
    }

    const result = await MessagesService.deleteMessage(id);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in DELETE /api/messages:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}
