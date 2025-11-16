'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Check, MessageSquare, Trash2 } from 'lucide-react';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'unread' | 'read' | 'replied';
};

type Subscriber = {
  id: number;
  email: string;
  timestamp: string;
};

const ContactAdminPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'messages' | 'subscribers'>('messages');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('isAdmin')) {
      router.push('/admin/login');
      return;
    }
    fetchMessages();
    fetchSubscribers();
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

  const fetchSubscribers = async () => {
    try {
      const res = await fetch('/api/subscribers');
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data);
      }
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
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

  const deleteSubscriber = async (id: number) => {
    setSaving(true);
    try {
      const res = await fetch('/api/subscribers', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        await fetchSubscribers(); // Refresh subscribers
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8 text-center">Loading messages...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Messages & Subscribers</h1>
          <Button
            onClick={() => router.push('/admin/dashboard')}
            variant="outline"
          >
            Back to Dashboard
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm">
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'messages'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('subscribers')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'subscribers'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Subscribers ({subscribers.length})
          </button>
        </div>

        {activeTab === 'messages' && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
            </CardHeader>
            <CardContent>
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No messages yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Name</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Email</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Message</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Status</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Date</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg, index) => (
                        <tr key={msg.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                          <td className="py-4 px-6 border-b border-gray-200">{msg.name}</td>
                          <td className="py-4 px-6 border-b border-gray-200">{msg.email}</td>
                          <td className="py-4 px-6 border-b border-gray-200 max-w-xs">
                            <div className="truncate" title={msg.message}>
                              {msg.message}
                            </div>
                          </td>
                          <td className="py-4 px-6 border-b border-gray-200">
                            <Badge
                              variant={
                                msg.status === 'unread' ? 'destructive' :
                                msg.status === 'read' ? 'secondary' :
                                'default'
                              }
                            >
                              {msg.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-6 border-b border-gray-200 text-sm text-gray-500">
                            {new Date(msg.timestamp).toLocaleString()}
                          </td>
                          <td className="py-4 px-6 border-b border-gray-200">
                            <div className="flex gap-1">
                              <Button
                                onClick={() => setSelectedMessage(msg)}
                                size="sm"
                                variant="ghost"
                                className="p-2"
                                title="View Message"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              {msg.status === 'unread' && (
                                <Button
                                  onClick={() => updateMessageStatus(msg.id, 'read')}
                                  disabled={saving}
                                  size="sm"
                                  variant="ghost"
                                  className="p-2"
                                  title="Mark as Read"
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                              )}
                              {msg.status === 'read' && (
                                <Button
                                  onClick={() => updateMessageStatus(msg.id, 'replied')}
                                  disabled={saving}
                                  size="sm"
                                  variant="ghost"
                                  className="p-2"
                                  title="Mark as Replied"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                onClick={() => deleteMessage(msg.id)}
                                disabled={saving}
                                size="sm"
                                variant="ghost"
                                className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                title="Delete Message"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === 'subscribers' && (
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              {subscribers.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No subscribers yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Email</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Subscribed Date</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((subscriber, index) => (
                        <tr key={subscriber.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                          <td className="py-4 px-6 border-b border-gray-200">{subscriber.email}</td>
                          <td className="py-4 px-6 border-b border-gray-200 text-sm text-gray-500">
                            {new Date(subscriber.timestamp).toLocaleString()}
                          </td>
                          <td className="py-4 px-6 border-b border-gray-200">
                            <Button
                              onClick={() => deleteSubscriber(subscriber.id)}
                              disabled={saving}
                              size="sm"
                              variant="ghost"
                              className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                              title="Delete Subscriber"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Message Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Message from {selectedMessage.name}</h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-2 mb-4">
                <p><strong>Email:</strong> {selectedMessage.email}</p>
                <p><strong>Date:</strong> {new Date(selectedMessage.timestamp).toLocaleString()}</p>
                <div><strong>Status:</strong> <Badge variant={selectedMessage.status === 'unread' ? 'destructive' : selectedMessage.status === 'read' ? 'secondary' : 'default'}>{selectedMessage.status}</Badge></div>
              </div>
              <div className="border-t pt-4">
                <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
              <div className="flex gap-2 mt-4">
                {selectedMessage.status === 'unread' && (
                  <Button
                    onClick={() => {
                      updateMessageStatus(selectedMessage.id, 'read');
                      setSelectedMessage(null);
                    }}
                    disabled={saving}
                    size="sm"
                    variant="default"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Mark Read
                  </Button>
                )}
                {selectedMessage.status === 'read' && (
                  <Button
                    onClick={() => {
                      updateMessageStatus(selectedMessage.id, 'replied');
                      setSelectedMessage(null);
                    }}
                    disabled={saving}
                    size="sm"
                    variant="default"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Mark Replied
                  </Button>
                )}
                <Button
                  onClick={() => {
                    deleteMessage(selectedMessage.id);
                    setSelectedMessage(null);
                  }}
                  disabled={saving}
                  size="sm"
                  variant="destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAdminPage;
