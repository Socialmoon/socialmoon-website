'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Activity = {
  type: string;
  title: string;
  description: string;
  time: string;
  icon: string;
};

type MessageType = {
  name: string;
  subject?: string;
  timestamp: string | Date;
};

type BlogPostType = {
  title: string;
  author: string;
  date: string;
};

type ProjectType = {
  title: string;
  category: string;
};

const DashboardPage = () => {
  const [stats, setStats] = useState([
    { name: 'Total Messages', value: '0', change: '0', changeType: 'neutral' },
    { name: 'Blog Posts', value: '0', change: '0', changeType: 'neutral' },
    { name: 'Services', value: '0', change: '0', changeType: 'neutral' },
    { name: 'Portfolio Items', value: '0', change: '0', changeType: 'neutral' },
  ]);
  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [messagesRes, blogRes, servicesRes, portfolioRes] = await Promise.all([
          fetch('/api/messages'),
          fetch('/api/blog'),
          fetch('/api/services'),
          fetch('/api/portfolio')
        ]);

        const messages = messagesRes.ok ? await messagesRes.json() : [];
        const blog = blogRes.ok ? await blogRes.json() : { posts: [] };
        const services = servicesRes.ok ? await servicesRes.json() : { services: [] };
        const portfolio = portfolioRes.ok ? await portfolioRes.json() : { projects: [] };

        // Set stats
        setStats([
          {
            name: 'Total Messages',
            value: messages.length?.toString() || '0',
            change: '0',
            changeType: 'neutral'
          },
          {
            name: 'Blog Posts',
            value: blog.posts?.length?.toString() || '0',
            change: '0',
            changeType: 'neutral'
          },
          {
            name: 'Services',
            value: services.services?.length?.toString() || '0',
            change: '0',
            changeType: 'neutral'
          },
          {
            name: 'Portfolio Items',
            value: portfolio.projects?.length?.toString() || '0',
            change: '0',
            changeType: 'neutral'
          },
        ]);

        // Process recent activities
        const activities = [];

        // Add recent messages
        if (messages && messages.length > 0) {
          const recentMessages = messages.slice(0, 3).map((msg: MessageType) => ({
            type: 'message',
            title: `New message from ${msg.name}`,
            description: msg.subject || 'Contact form submission',
            time: new Date(msg.timestamp).toLocaleDateString(),
            icon: 'message'
          }));
          activities.push(...recentMessages);
        }

        // Add recent blog posts
        if (blog.posts && blog.posts.length > 0) {
          const recentPosts = blog.posts.slice(0, 2).map((post: BlogPostType) => ({
            type: 'blog',
            title: `Blog post: ${post.title}`,
            description: `Published by ${post.author}`,
            time: post.date,
            icon: 'blog'
          }));
          activities.push(...recentPosts);
        }

        // Add recent portfolio items
        if (portfolio.projects && portfolio.projects.length > 0) {
          const recentProjects = portfolio.projects.slice(0, 2).map((project: ProjectType) => ({
            type: 'portfolio',
            title: `Portfolio: ${project.title}`,
            description: `Added ${project.category} project`,
            time: 'Recently added',
            icon: 'portfolio'
          }));
          activities.push(...recentProjects);
        }

        // Sort activities by recency (messages have timestamps, others are recent)
        activities.sort((a, b) => {
          if (a.time.includes('/') && b.time.includes('/')) {
            return new Date(b.time).getTime() - new Date(a.time).getTime();
          }
          return 0;
        });

        setRecentActivities(activities.slice(0, 5)); // Show only 5 most recent
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        setActivitiesLoading(false);
      }
    };

    fetchData();
  }, []);

  const quickActions = [
    { name: 'Messages', href: '/admin/contact', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', description: 'Manage contact messages' },
    { name: 'Blog', href: '/admin/blog', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', description: 'Edit blog posts' },
    { name: 'Services', href: '/admin/services', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', description: 'Edit services' },
    { name: 'Portfolio', href: '/admin/portfolio', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', description: 'Edit portfolio projects' },
    { name: 'Case Studies', href: '/admin/case-studies', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', description: 'Edit case studies' },
    { name: 'Luna Admin Login', href: 'https://luna.socialmoon.in/admin-login', icon: 'M5 12h14M12 5l7 7-7 7', description: 'Open Luna admin login' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your site.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-8"></div>
              </div>
            </div>
          ))
        ) : (
          stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' :
                  stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  <span>{stat.change}</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                      stat.changeType === 'increase' ? 'M5 10l7-7m0 0l7 7m-7-7v18' :
                      stat.changeType === 'decrease' ? 'M19 14l-7 7m0 0l-7-7m7 7V3' :
                      'M5 12h14'
                    } />
                  </svg>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
          <p className="text-sm text-gray-600">Manage your content and settings</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-600">Latest updates and changes</p>
        </div>
        <div className="p-6">
          {activitiesLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-3 animate-pulse">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : recentActivities.length > 0 ? (
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.icon === 'message' ? 'bg-green-100' :
                    activity.icon === 'blog' ? 'bg-blue-100' :
                    activity.icon === 'portfolio' ? 'bg-purple-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-4 h-4 ${
                      activity.icon === 'message' ? 'text-green-600' :
                      activity.icon === 'blog' ? 'text-blue-600' :
                      activity.icon === 'portfolio' ? 'text-purple-600' : 'text-gray-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                        activity.icon === 'message' ? 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' :
                        activity.icon === 'blog' ? 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' :
                        activity.icon === 'portfolio' ? 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' :
                        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      } />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-sm">No recent activity</p>
              <p className="text-gray-400 text-xs mt-1">Activity will appear here as you add content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
