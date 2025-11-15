'use client';

import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Link href="/admin/contact" className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Manage Messages</h2>
          <p>View and manage contact form messages</p>
        </Link>
        <Link href="/admin/blog" className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Manage Blog</h2>
          <p>Edit blog posts</p>
        </Link>
        <Link href="/admin/services" className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Manage Services</h2>
          <p>Edit services</p>
        </Link>
        <Link href="/admin/portfolio" className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Manage Portfolio</h2>
          <p>Edit portfolio projects</p>
        </Link>
        <Link href="/admin/case-studies" className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Manage Case Studies</h2>
          <p>Edit case studies</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
