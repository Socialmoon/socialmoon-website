'use client';

import { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { Award, ArrowRight, CheckCircle } from 'lucide-react';

interface Platform {
  platform: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  image: string;
}

export const PlatformExpertiseSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState('All');

  const platforms: Platform[] = [
    {
      platform: 'WordPress',
      icon: '🌐',
      title: 'WordPress Development',
      description: 'Custom themes, plugins, and e-commerce solutions built on the world\'s most popular CMS platform.',
      features: ['Custom Theme Development', 'Plugin Development', 'WooCommerce Integration'],
      color: 'from-blue-500 to-blue-600',
      image: '/images/platforms/wordpress.jpg'
    },
    {
      platform: 'Shopify',
      icon: '🛒',
      title: 'Shopify Solutions',
      description: 'Complete e-commerce solutions with custom themes, apps, and integrations for maximum conversion.',
      features: ['Custom Theme Design', 'App Development', 'Payment Integration'],
      color: 'from-green-500 to-green-600',
      image: '/images/platforms/shopify.jpg'
    },
    {
      platform: 'Odoo',
      icon: '⚙️',
      title: 'Odoo Implementation',
      description: 'Comprehensive ERP and CRM solutions tailored to streamline your business operations.',
      features: ['Custom Module Development', 'System Integration', 'Workflow Automation'],
      color: 'from-purple-500 to-purple-600',
      image: '/images/platforms/odoo.jpg'
    }
  ];

  const filteredPlatforms = activePlatform === 'All'
    ? platforms
    : platforms.filter(platform => platform.platform === activePlatform);

  const platformTabs = ['All', 'WordPress', 'Shopify', 'Odoo'];

  return (
    <Section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
            <Award className="w-4 h-4 mr-2" />
            Platform Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Specialized Platform Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We excel in developing and customizing solutions on leading platforms to meet your unique business requirements.
          </p>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platformTabs.map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                activePlatform === platform
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 border border-gray-200'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlatforms.map((platform, index) => (
            <Link key={platform.platform} href={`/contact?platform=${platform.platform.toLowerCase()}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80">
                  {/* Platform Image/Icon Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-10`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">{platform.icon}</div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${platform.color} text-white text-xs font-bold mb-3 w-fit`}>
                      {platform.platform}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{platform.title}</h4>
                    <p className="text-gray-200 mb-4 line-clamp-2">{platform.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-blue-600">{platform.platform}</p>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${platform.color}`}></div>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{platform.title}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{platform.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPlatforms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No platforms found for this filter.</p>
          </div>
        )}
      </Container>
    </Section>
  );
};