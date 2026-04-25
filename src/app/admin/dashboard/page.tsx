'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, Users, Mail, ArrowRight, Clock, ExternalLink, Sparkles } from 'lucide-react';

type Message = { _id?: string; name: string; email: string; message: string; timestamp: string; status?: string };

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/messages').then(r => r.ok ? r.json() : []).then(msgs => {
      setMessages(Array.isArray(msgs) ? msgs : []);
    }).finally(() => setLoading(false));
  }, []);

  const unread = messages.filter(m => !m.status || m.status === 'unread').length;

  const stats = [
    { label: 'Total Messages', value: messages.length, sub: `${unread} unread`, icon: MessageSquare, color: 'blue', href: '/admin/contact' },
    { label: 'Subscribers', value: '—', sub: 'Newsletter list', icon: Mail, color: 'emerald', href: '/admin/contact' },
  ];

  const quickLinks = [
    { label: 'View Messages', desc: 'Read & reply to contact form submissions', icon: MessageSquare, href: '/admin/contact', color: 'blue' },
    { label: 'Manage Admins', desc: 'Add or remove admin users', icon: Users, href: '/admin/admins', color: 'purple' },
    { label: 'Luna Admin', desc: 'Manage Luna AI assistant', icon: Sparkles, href: 'https://luna.socialmoon.in/admin-login', color: 'violet', external: true },
  ];

  const COLOR = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
  };

  return (
    <div className="p-6 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here's what's happening with your site.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 animate-pulse">
              <div className="h-4 bg-gray-100 rounded w-24 mb-3" />
              <div className="h-8 bg-gray-100 rounded w-16 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-20" />
            </div>
          ))
        ) : stats.map((s, i) => (
          <Link key={i} href={s.href} className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${COLOR[s.color as keyof typeof COLOR]}`}>
                <s.icon className="w-4 h-4" />
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-0.5">{s.value}</div>
            <div className="text-xs text-gray-400 font-medium">{s.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900 text-sm">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 bg-white p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${COLOR[item.color as keyof typeof COLOR]}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                      {item.label}
                      {item.external && <ExternalLink className="w-3 h-3 text-gray-400" />}
                    </div>
                    <div className="text-xs text-gray-400 truncate">{item.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900 text-sm">Recent Messages</h2>
            <Link href="/admin/contact" className="text-xs text-blue-600 hover:text-blue-700 font-medium">View all</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="px-5 py-3 animate-pulse">
                  <div className="h-3.5 bg-gray-100 rounded w-32 mb-1.5" />
                  <div className="h-3 bg-gray-100 rounded w-48" />
                </div>
              ))
            ) : messages.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <MessageSquare className="w-8 h-8 text-gray-200 mx-auto mb-2" />
                <p className="text-gray-400 text-xs">No messages yet</p>
              </div>
            ) : messages.slice(0, 6).map((msg, i) => (
              <div key={i} className="px-5 py-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-semibold text-gray-900 truncate">{msg.name}</span>
                  {(!msg.status || msg.status === 'unread') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-gray-400 truncate">{msg.message}</p>
                <p className="text-[10px] text-gray-300 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {new Date(msg.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
