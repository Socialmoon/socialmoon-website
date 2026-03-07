'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Star,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle
} from 'lucide-react';

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
  whatsapp?: string;
};

type OfficeHours = {
  weekdays: string;
  weekends: string;
  closed: string;
};

type SocialMedia = {
  instagram: string;
  linkedin: string;
  twitter: string;
  facebook: string;
};

type ContactPageContent = {
  title: string;
  contactInfo: ContactInfo;
  officeHours?: OfficeHours;
  socialMedia?: SocialMedia;
};

const ContactPage = () => {
  const [content, setContent] = useState<ContactPageContent | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formResponse, setFormResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        // Validate that we have valid contact data
        if (data && data.contactInfo) {
          setContent(data);
        } else {
          console.error('Invalid contact data received:', data);
          // Set default content if API fails
          setContent({
            title: 'Contact Us',
            contactInfo: {
              email: 'socialmoon.in@gmail.com',
              phone: '+91 9118439107',
              whatsapp: '+91 9118439107',
              address: 'Lucknow, Uttar Pradesh, India'
            },
            officeHours: {
              weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
              weekends: 'Saturday: 10:00 AM - 4:00 PM IST',
              closed: 'Sunday: Closed'
            },
            socialMedia: {
              instagram: 'https://www.instagram.com/the_social_moon_',
              linkedin: 'https://www.linkedin.com/company/socialmoon1/',
              twitter: 'https://x.com/the_social_moon',
              facebook: 'https://www.facebook.com/profile.php?id=61580131888044'
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching contact:', error);
        // Set default content on error
        setContent({
          title: 'Contact Us',
          contactInfo: {
            email: 'socialmoon.in@gmail.com',
            phone: '+91 9118439107',
            whatsapp: '+91 9118439107',
            address: 'Lucknow, Uttar Pradesh, India'
          },
          officeHours: {
            weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
            weekends: 'Saturday: 10:00 AM - 4:00 PM IST',
            closed: 'Sunday: Closed'
          },
          socialMedia: {
            instagram: 'https://www.instagram.com/the_social_moon_',
            linkedin: 'https://www.linkedin.com/company/socialmoon1/',
            twitter: 'https://x.com/the_social_moon',
            facebook: 'https://www.facebook.com/profile.php?id=61580131888044'
          }
        });
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      setFormResponse(data.message);
      if (res.ok) {
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      setFormResponse('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24 pb-16">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Let's Start a
              <span className="block">Conversation</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We'd love to hear from you. Get in touch and let's discuss how we can help your business thrive.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "< 24hrs", label: "Response Time", icon: Clock },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Support Available", icon: Users },
                { number: "Free", label: "Initial Consultation", icon: CheckCircle }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Hero>

      {/* Contact Information Cards */}
      <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the method that works best for you. We're here to help and respond quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us a detailed message about your project",
                contact: content.contactInfo?.email || 'socialmoon.in@gmail.com',
                color: "from-blue-500 to-indigo-500",
                action: "Send Email",
                link: `https://mail.google.com/mail/?view=cm&to=${content.contactInfo?.email || 'socialmoon.in@gmail.com'}`
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our team for immediate assistance",
                contact: content.contactInfo?.phone || '+91 9118439107',
                color: "from-green-500 to-teal-500",
                action: "Call Now",
                link: `tel:${content.contactInfo?.phone || '+919118439107'}`
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Chat with us instantly on WhatsApp for quick responses",
                contact: content.contactInfo?.whatsapp || content.contactInfo?.phone || '+91 9118439107',
                color: "from-green-600 to-emerald-500",
                action: "Chat Now",
                link: `https://wa.me/${(content.contactInfo?.whatsapp || content.contactInfo?.phone || '+919118439107').replace(/[^0-9]/g, '')}`
              },
              {
                icon: MapPin,
                title: "Visit Us",
                description: "Meet us in person at our office location",
                contact: content.contactInfo?.address || 'Lucknow, Uttar Pradesh, India',
                color: "from-purple-500 to-pink-500",
                action: "Get Directions",
                link: `https://maps.google.com/?q=${encodeURIComponent(content.contactInfo?.address || 'Lucknow, Uttar Pradesh, India')}`
              }
            ].map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <p className="text-gray-700 font-medium text-sm whitespace-pre-line">{item.contact}</p>
                  </div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full py-3 text-base font-semibold rounded-2xl transition-all duration-300 bg-gradient-to-r ${item.color} text-white border-0 shadow-lg hover:shadow-xl`}>
                      {item.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media & Team Section */}
      {content.socialMedia && (
        <Section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold mb-6 border border-pink-200/50">
                  <Users className="w-4 h-4 mr-2" />
                  Connect With Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pink-900 to-purple-900 bg-clip-text text-transparent">
                  Follow Our Journey
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Stay updated with our latest projects, insights, and industry trends on social media.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: 'Instagram',
                    icon: Instagram,
                    url: content.socialMedia.instagram,
                    color: 'from-pink-500 to-purple-500',
                    bgColor: 'from-pink-50 to-purple-50',
                    borderColor: 'border-pink-200',
                    handle: '@the_social_moon_'
                  },
                  {
                    name: 'LinkedIn',
                    icon: Linkedin,
                    url: content.socialMedia.linkedin,
                    color: 'from-blue-600 to-blue-400',
                    bgColor: 'from-blue-50 to-blue-50',
                    borderColor: 'border-blue-200',
                    handle: 'socialmoon1'
                  },
                  {
                    name: 'Twitter',
                    icon: Twitter,
                    url: content.socialMedia.twitter,
                    color: 'from-sky-500 to-blue-500',
                    bgColor: 'from-sky-50 to-blue-50',
                    borderColor: 'border-sky-200',
                    handle: '@the_social_moon'
                  },
                  {
                    name: 'Facebook',
                    icon: Facebook,
                    url: content.socialMedia.facebook,
                    color: 'from-blue-700 to-indigo-600',
                    bgColor: 'from-blue-50 to-indigo-50',
                    borderColor: 'border-blue-200',
                    handle: 'Social Moon'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className={`relative bg-gradient-to-br ${social.bgColor} rounded-3xl p-8 border ${social.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3`}>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="relative text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${social.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{social.name}</h3>
                        <p className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">{social.handle}</p>
                        <div className="mt-4 flex items-center justify-center text-sm font-semibold text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          Follow Us
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours Card */}
              {content.officeHours && (
                <div className="mt-12 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 text-white mb-6 shadow-lg">
                      <Clock className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                      <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                        <p className="text-green-900 font-semibold mb-2">Weekdays</p>
                        <p className="text-green-700 text-sm">{content.officeHours.weekdays.split(': ')[1]}</p>
                      </div>
                      <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
                        <p className="text-teal-900 font-semibold mb-2">Weekends</p>
                        <p className="text-teal-700 text-sm">{content.officeHours.weekends.split(': ')[1]}</p>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <p className="text-gray-900 font-semibold mb-2">Closed</p>
                        <p className="text-gray-700 text-sm">{content.officeHours.closed.split(': ')[1]}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-6 text-sm">
                      💡 For urgent matters outside business hours, send us an email and we'll respond as soon as possible.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Contact Form Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-6 border border-green-200/50">
                <Send className="w-4 h-4 mr-2" />
                Send Us a Message
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours with a personalized response.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="social-media-management">Social Media Management</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="social-media-advertising">Social Media Advertising</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                {formResponse && (
                  <div className={`mt-6 p-4 rounded-2xl ${formResponse.includes('success') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {formResponse}
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-2xl">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Global Reach, Local Expertise</h3>
                      <p className="text-blue-800">We serve clients worldwide while maintaining personalized, local service excellence.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-2xl">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 mb-2">Quick Response Guarantee</h3>
                      <p className="text-green-800">We respond to all inquiries within 24 hours and provide project proposals within 48 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-2xl">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-900 mb-2">Dedicated Account Management</h3>
                      <p className="text-purple-800">Every client gets a dedicated account manager who knows your business and goals.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-2xl">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-900 mb-2">Free Initial Consultation</h3>
                      <p className="text-orange-800">Get expert advice and a customized strategy recommendation at no cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about working with SocialMoon.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We can typically begin work within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding to get started within 48 hours."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! We work with clients worldwide and have experience with different time zones, languages, and international business practices."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope, but most social media campaigns launch within 2-4 weeks, while web/app development projects take 8-12 weeks."
              },
              {
                question: "Can I pause or cancel my service anytime?",
                answer: "Yes, we offer flexible agreements with no long-term contracts. You can modify, pause, or cancel services with 30 days notice."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Definitely! We offer maintenance packages and ongoing support to ensure your digital assets continue performing optimally."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Story CTA Section */}
      <Section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-200/50">
              <Star className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Let's Build Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence with SocialMoon. Your success story starts with a conversation.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: "< 24hrs", label: "Response Time" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "Free", label: "Initial Consultation" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto sm:max-w-none">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95">
                Schedule Free Consultation
                <MessageSquare className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:scale-110" />
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 active:scale-95">
                View Our Portfolio
                <ArrowRight className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;
