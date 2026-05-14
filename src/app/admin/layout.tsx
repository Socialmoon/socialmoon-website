'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Messages', href: '/admin/contact', icon: Mail },
  { name: 'Services', href: '/admin/services', icon: Sparkles },
  { name: 'Portfolio', href: '/admin/portfolio', icon: FolderKanban },
  { name: 'Case Studies', href: '/admin/case-studies', icon: FileText },
  { name: 'Blog', href: '/admin/blog', icon: Newspaper },
  { name: 'Careers', href: '/admin/careers', icon: BriefcaseBusiness },
  { name: 'Admins', href: '/admin/admins', icon: Users },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (pathname === '/admin/login') {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        router.replace('/admin/login');
        return;
      }
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch {
      setIsAuthenticated(false);
      setIsLoading(false);
      router.replace('/admin/login');
    }
  }, [pathname, router, isMounted]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('adminRole');
    window.location.href = '/admin/login';
  };

  if (pathname === '/admin/login') return <>{children}</>;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffdf8]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <span key={index} className="h-3 w-3 animate-bounce rounded-full bg-[#ff4d2e]" style={{ animationDelay: `${index * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#fffdf8] text-slate-950">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-white/10 bg-slate-950 text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <Image src="/1.png" alt="SocialMoon" width={52} height={52} className="h-12 w-12 rounded-2xl bg-white object-contain p-1" />
              <span>
                <span className="block text-sm font-black">SocialMoon</span>
                <span className="block text-xs font-semibold text-slate-400">Control Center</span>
              </span>
            </Link>
            <button className="rounded-full p-2 text-slate-300 hover:bg-white/10 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close admin menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <ShieldCheck className="h-5 w-5 text-orange-200" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-orange-200">Admin mode</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">Manage site data without adding noise.</p>
            </div>

            <div className="space-y-1">
              {navigation.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-colors ${
                      active ? 'bg-[#ff4d2e] text-white shadow-lg shadow-orange-600/20' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-white/10 p-4">
            <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-red-200 transition-colors hover:bg-red-500/10">
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-slate-200 bg-white p-2 text-slate-900 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open admin menu">
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff4d2e]">Admin</p>
                <p className="text-sm font-black text-slate-950">{navigation.find((item) => pathname.startsWith(item.href))?.name || 'Dashboard'}</p>
              </div>
            </div>
            <Link href="/" className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 sm:inline-flex">
              View site
            </Link>
          </div>
        </header>

        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>

      {sidebarOpen && <button aria-label="Close overlay" className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default AdminLayout;
