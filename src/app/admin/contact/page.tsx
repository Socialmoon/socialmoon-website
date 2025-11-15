'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
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

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Manage Contact Messages</h1>
      <div className="bg-white p-6 rounded shadow">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="border p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{msg.name} ({msg.email})</h3>
                    <p className="text-sm text-gray-600">{new Date(msg.date).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      msg.status === 'unread' ? 'bg-red-100 text-red-800' :
                      msg.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {msg.status}
                    </span>
                    {msg.status === 'unread' && (
                      <button
                        onClick={() => updateMessageStatus(msg.id, 'read')}
                        disabled={saving}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
                      >
                        Mark Read
                      </button>
                    )}
                    {msg.status === 'read' && (
                      <button
                        onClick={() => updateMessageStatus(msg.id, 'replied')}
                        disabled={saving}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:opacity-50"
                      >
                        Mark Replied
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      disabled={saving}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => router.push('/admin/dashboard')}
        className="mt-4 text-blue-500 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ContactAdminPage;
