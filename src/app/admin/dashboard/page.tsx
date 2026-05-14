'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, ExternalLink, Mail, MessageSquare, ShieldCheck, Sparkles, Users } from 'lucide-react';

type Message = { _id?: string; id?: string; name: string; email: string; message: string; timestamp?: string; createdAt?: string; status?: string };

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    fetch('/api/messages')
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load messages');
        return response.json();
      })
      .then((data) => setMessages(Array.isArray(data) ? data : []))
      .catch(() => {
        setMessages([]);
        setLoadError('Messages could not be loaded. Check database access if this continues.');
      })
      .finally(() => setLoading(false));
  }, []);

  const unread = messages.filter((message) => !message.status || message.status === 'unread').length;

  const stats = [
    { label: 'Messages', value: messages.length, sub: `${unread} unread`, icon: MessageSquare, href: '/admin/contact' },
    { label: 'Admin Access', value: 'Active', sub: 'JWT session', icon: ShieldCheck, href: '/admin/admins' },
    { label: 'Database', value: loadError ? 'Check' : 'Ready', sub: loadError || 'Messages endpoint responding', icon: Mail, href: '/admin/contact' },
  ];

  const quickLinks = [
    { label: 'View Messages', desc: 'Read contact submissions and update status.', icon: MessageSquare, href: '/admin/contact' },
    { label: 'Manage Admins', desc: 'Create, remove, or update admin access.', icon: Users, href: '/admin/admins' },
    { label: 'Avena Admin', desc: 'Open the AI assistant admin panel.', icon: Sparkles, href: 'https://avena.socialmoon.in/admin-login', external: true },
  ];

  return (
    <div className="min-h-full bg-[#fffdf8] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
                <Sparkles className="h-3.5 w-3.5" />
                SocialMoon dashboard
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Operate the website without adding noise.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Keep messages, admin access, and content operations clean. If the database is unavailable, the dashboard shows it without breaking the login flow.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Today</p>
              <p className="mt-3 text-3xl font-black">{loading ? '...' : messages.length}</p>
              <p className="mt-1 text-sm text-slate-300">total message{messages.length === 1 ? '' : 's'} tracked</p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Link key={stat.label} href={stat.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1ec] text-[#ff4d2e]">
                  <stat.icon className="h-5 w-5" />
                </span>
                <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700" />
              </div>
              <p className="mt-5 text-3xl font-black text-slate-950">{loading && stat.label === 'Messages' ? '...' : stat.value}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
              <p className="mt-2 text-sm leading-5 text-slate-600">{stat.sub}</p>
            </Link>
          ))}
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4d2e]">Quick actions</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Go where the work is.</h2>
            </div>
            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group p-5 transition-colors hover:bg-[#fffdf8]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 flex items-center gap-2 text-base font-black text-slate-950">
                    {item.label}
                    {item.external && <ExternalLink className="h-3.5 w-3.5 text-slate-400" />}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#ff4d2e]">
                    Open
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4d2e]">Recent</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">Messages</h2>
              </div>
              <Link href="/admin/contact" className="text-sm font-black text-[#ff4d2e]">View all</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="p-5">
                    <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
                    <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-100" />
                  </div>
                ))
              ) : loadError ? (
                <div className="p-6 text-sm leading-6 text-slate-600">{loadError}</div>
              ) : messages.length === 0 ? (
                <div className="p-8 text-center">
                  <MessageSquare className="mx-auto h-8 w-8 text-slate-300" />
                  <p className="mt-3 text-sm font-semibold text-slate-500">No messages yet.</p>
                </div>
              ) : (
                messages.slice(0, 6).map((message, index) => (
                  <div key={message._id || message.id || index} className="p-5">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-black text-slate-950">{message.name}</p>
                      {(!message.status || message.status === 'unread') && <span className="h-2 w-2 rounded-full bg-[#ff4d2e]" />}
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-600">{message.message}</p>
                    <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-400">
                      <Clock className="h-3 w-3" />
                      {new Date(message.timestamp || message.createdAt || Date.now()).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
