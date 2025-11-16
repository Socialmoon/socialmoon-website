'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'unread' | 'read' | 'replied';
};

const ContactAdminPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetchMessages();
  }, [router]);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
    setLoading(false);
  };

  const updateMessageStatus = async (id: number, status: 'read' | 'replied') => {
    setSaving(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        await fetchMessages(); // Refresh messages
      }
    } catch (error) {
      console.error('Error updating message:', error);
    }
    setSaving(false);
  };

  const deleteMessage = async (id: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    setSaving(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        await fetchMessages(); // Refresh messages
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8 text-center">Loading messages...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Contact Messages</h1>
          <Button
            onClick={() => router.push('/admin/dashboard')}
            variant="outline"
          >
            Back to Dashboard
          </Button>
        </div>

        {messages.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">No messages yet.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <Card key={msg.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{msg.name}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{msg.email}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(msg.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <Badge
                      variant={
                        msg.status === 'unread' ? 'destructive' :
                        msg.status === 'read' ? 'secondary' :
                        'default'
                      }
                      className="ml-2"
                    >
                      {msg.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{msg.message}</p>
                  <div className="flex flex-wrap gap-2">
                    {msg.status === 'unread' && (
                      <Button
                        onClick={() => updateMessageStatus(msg.id, 'read')}
                        disabled={saving}
                        size="sm"
                        variant="default"
                      >
                        Mark Read
                      </Button>
                    )}
                    {msg.status === 'read' && (
                      <Button
                        onClick={() => updateMessageStatus(msg.id, 'replied')}
                        disabled={saving}
                        size="sm"
                        variant="default"
                      >
                        Mark Replied
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteMessage(msg.id)}
                      disabled={saving}
                      size="sm"
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAdminPage;
