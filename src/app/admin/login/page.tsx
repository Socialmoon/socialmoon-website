'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles, UserRound } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUsername', data.username);
        localStorage.setItem('adminRole', data.role);
        window.location.href = '/admin/dashboard';
      } else {
        setError(data.error || 'Invalid username or password.');
      }
    } catch {
      setError('Login could not be completed right now. Check the local server and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf8] px-4 py-6 sm:px-6 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
          />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <Image src="/1.png" alt="SocialMoon" width={92} height={92} className="h-16 w-auto rounded-2xl bg-white object-contain p-2" priority />
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                SocialMoon admin
              </div>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                The control room for honest content.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                Manage messages, admin access, and website content from a quiet dashboard that follows the same trust-first SocialMoon system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {['No fake claims', 'Verified access'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Sparkles className="h-4 w-4 text-orange-200" />
                  <p className="mt-3 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center p-6 sm:p-8 lg:p-10">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Secure sign in</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Welcome back.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Use your admin credentials to continue.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-slate-800">Username</span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fffdf8] px-4 py-3 focus-within:border-[#ff4d2e]">
                  <UserRound className="h-5 w-5 shrink-0 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    placeholder="admin"
                    required
                    disabled={isLoading}
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-800">Password</span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fffdf8] px-4 py-3 focus-within:border-[#ff4d2e]">
                  <LockKeyhole className="h-5 w-5 shrink-0 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    placeholder="Enter password"
                    required
                    disabled={isLoading}
                  />
                </div>
              </label>

              {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-xs font-semibold leading-5 text-slate-500">
              Database admin records are optional. The configured environment admin can sign in without extra database setup.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
