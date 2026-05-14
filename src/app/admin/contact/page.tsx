'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Check,
  Clock3,
  Mail,
  MessageSquare,
  RefreshCw,
  Search,
  Trash2,
  X,
} from 'lucide-react';

type MessageStatus = 'unread' | 'read' | 'replied';

type Message = {
  id?: string;
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  timestamp?: string;
  createdAt?: string;
  status?: MessageStatus | string;
  read?: boolean;
};

const getMessageId = (message: Message) => String(message._id || message.id || '');

const getMessageStatus = (message: Message): MessageStatus => {
  if (message.status === 'replied') return 'replied';
  if (message.status === 'read' || message.read) return 'read';
  return 'unread';
};

const formatDate = (value?: string) => {
  if (!value) return 'No date';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'No date';
  return date.toLocaleString();
};

const statusStyles: Record<MessageStatus, string> = {
  unread: 'border-orange-200 bg-orange-50 text-orange-800',
  read: 'border-slate-200 bg-slate-50 text-slate-700',
  replied: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

const ContactAdminPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | MessageStatus>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const router = useRouter();

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/messages', { cache: 'no-store' });
      if (!res.ok) throw new Error('Could not load messages');
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Messages could not be loaded. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('adminToken')) {
      router.push('/admin/login');
      return;
    }

    fetchMessages();
  }, [router]);

  const counts = useMemo(() => {
    return messages.reduce(
      (acc, message) => {
        const status = getMessageStatus(message);
        acc.total += 1;
        acc[status] += 1;
        return acc;
      },
      { total: 0, unread: 0, read: 0, replied: 0 },
    );
  }, [messages]);

  const filteredMessages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return messages.filter((message) => {
      const status = getMessageStatus(message);
      const matchesStatus = statusFilter === 'all' || status === statusFilter;
      const haystack = [
        message.name,
        message.email,
        message.company,
        message.service,
        message.message,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return matchesStatus && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [messages, query, statusFilter]);

  const updateMessageStatus = async (message: Message, status: MessageStatus) => {
    const id = getMessageId(message);
    if (!id) return;

    setSavingId(id);
    try {
      const res = await fetch('/api/messages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error('Could not update message');
      setMessages((current) =>
        current.map((item) =>
          getMessageId(item) === id ? { ...item, status, read: status !== 'unread' } : item,
        ),
      );
      setSelectedMessage((current) =>
        current && getMessageId(current) === id ? { ...current, status, read: status !== 'unread' } : current,
      );
    } catch (err) {
      console.error('Error updating message:', err);
      setError('Message status could not be updated.');
    } finally {
      setSavingId(null);
    }
  };

  const deleteMessage = async (message: Message) => {
    const id = getMessageId(message);
    if (!id) return;

    setSavingId(id);
    try {
      const res = await fetch('/api/messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('Could not delete message');
      setMessages((current) => current.filter((item) => getMessageId(item) !== id));
      setSelectedMessage(null);
    } catch (err) {
      console.error('Error deleting message:', err);
      setError('Message could not be deleted.');
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/10">
          <div className="relative p-5 sm:p-8">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Inbox</p>
                <h1 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
                  Messages that need a real reply.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Review contact requests, mark progress, and keep the admin area focused on client conversations only.
                </p>
              </div>
              <button
                onClick={fetchMessages}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-5 py-3 text-sm font-black text-white transition hover:bg-[#e63f23] sm:w-auto lg:justify-self-end"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Total messages', value: counts.total, icon: Mail },
            { label: 'Unread', value: counts.unread, icon: Clock3 },
            { label: 'Read', value: counts.read, icon: Check },
            { label: 'Replied', value: counts.replied, icon: MessageSquare },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{item.value}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#ff4d2e]">
                  <item.icon className="h-5 w-5" />
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, email, company, service, or message"
                className="h-12 w-full rounded-full border border-slate-200 bg-[#fffdf8] pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-[#ff4d2e] focus:ring-4 focus:ring-orange-100"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              {(['all', 'unread', 'read', 'replied'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-full px-4 py-2 text-sm font-black capitalize transition ${
                    statusFilter === status
                      ? 'bg-slate-950 text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="grid gap-3 p-4">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-28 animate-pulse rounded-3xl bg-slate-100" />
              ))}
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-[#ff4d2e]">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-black text-slate-950">No messages found</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">New contact form messages will appear here.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredMessages.map((message) => {
                const id = getMessageId(message);
                const status = getMessageStatus(message);
                return (
                  <article key={id} className="grid gap-4 p-4 transition hover:bg-[#fffdf8] sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
                    <button onClick={() => setSelectedMessage(message)} className="min-w-0 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-lg font-black text-slate-950">{message.name || 'Unnamed lead'}</h3>
                        <span className={`rounded-full border px-3 py-1 text-xs font-black capitalize ${statusStyles[status]}`}>
                          {status}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-slate-500">
                        <span>{message.email || 'No email'}</span>
                        {message.phone && <span>{message.phone}</span>}
                        {message.company && <span>{message.company}</span>}
                        {message.service && <span>{message.service}</span>}
                      </div>
                      <p className="mt-3 line-clamp-2 max-w-4xl text-sm leading-6 text-slate-700">
                        {message.message || 'No message provided.'}
                      </p>
                      <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                        {formatDate(message.timestamp || message.createdAt)}
                      </p>
                    </button>

                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {status === 'unread' && (
                        <button
                          onClick={() => updateMessageStatus(message, 'read')}
                          disabled={savingId === id}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                        >
                          <Check className="h-4 w-4" />
                          Read
                        </button>
                      )}
                      {status !== 'replied' && (
                        <button
                          onClick={() => updateMessageStatus(message, 'replied')}
                          disabled={savingId === id}
                          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800 disabled:opacity-60"
                        >
                          <MessageSquare className="h-4 w-4" />
                          Replied
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(message)}
                        disabled={savingId === id}
                        className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-700 transition hover:bg-red-100 disabled:opacity-60"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {selectedMessage && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 px-4 py-6">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4d2e]">Message detail</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{selectedMessage.name || 'Unnamed lead'}</h2>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50"
                  aria-label="Close message"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-5 p-5">
                <div className="grid gap-3 rounded-3xl bg-[#fffdf8] p-4 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                  <p>Email: <span className="font-black text-slate-950">{selectedMessage.email || 'No email'}</span></p>
                  <p>Status: <span className="font-black capitalize text-slate-950">{getMessageStatus(selectedMessage)}</span></p>
                  {selectedMessage.phone && <p>Phone: <span className="font-black text-slate-950">{selectedMessage.phone}</span></p>}
                  {selectedMessage.company && <p>Company: <span className="font-black text-slate-950">{selectedMessage.company}</span></p>}
                  {selectedMessage.service && <p>Service: <span className="font-black text-slate-950">{selectedMessage.service}</span></p>}
                  <p>Date: <span className="font-black text-slate-950">{formatDate(selectedMessage.timestamp || selectedMessage.createdAt)}</span></p>
                </div>

                <p className="whitespace-pre-wrap text-base leading-8 text-slate-700">
                  {selectedMessage.message || 'No message provided.'}
                </p>

                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {getMessageStatus(selectedMessage) === 'unread' && (
                    <button
                      onClick={() => updateMessageStatus(selectedMessage, 'read')}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-50"
                    >
                      <Check className="h-4 w-4" />
                      Mark read
                    </button>
                  )}
                  {getMessageStatus(selectedMessage) !== 'replied' && (
                    <button
                      onClick={() => updateMessageStatus(selectedMessage, 'replied')}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white hover:bg-slate-800"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Mark replied
                    </button>
                  )}
                  <button
                    onClick={() => deleteMessage(selectedMessage)}
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAdminPage;
