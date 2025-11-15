'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Home.css'


const Home = () => {
  // Services data
  const services = [
    {
      icon: 'bi-facebook',
      title: 'Facebook Marketing',
      description: 'Boost your Facebook presence with targeted ads and engaging content that drives conversions.',
      features: ['Facebook Ads Management', 'Page Optimization', 'Content Strategy', 'Community Management']
    },
    {
      icon: 'bi-instagram',
      title: 'Instagram Marketing',
      description: 'Grow your Instagram following with stunning visuals and strategic hashtag campaigns.',
      features: ['Instagram Stories', 'Reels Creation', 'IGTV Strategy', 'Influencer Partnerships']
    },
    {
      icon: 'bi-tiktok',
      title: 'TikTok Marketing',
      description: 'Create viral TikTok content that captures attention and drives brand awareness.',
      features: ['TikTok Ads', 'Viral Content', 'Trend Analysis', 'Creator Collaborations']
    },
    {
      icon: 'bi-youtube',
      title: 'YouTube Marketing',
      description: 'Build your YouTube channel with engaging videos and optimized SEO strategies.',
      features: ['Video SEO', 'Channel Optimization', 'YouTube Shorts', 'Monetization Strategy']
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn Marketing',
      description: 'Establish thought leadership and generate B2B leads on LinkedIn.',
      features: ['LinkedIn Ads', 'Content Marketing', 'Lead Generation', 'Professional Branding']
    },
    {
      icon: 'bi-twitter',
      title: 'Twitter Marketing',
      description: 'Engage your audience with real-time conversations and trending topics.',
      features: ['Twitter Ads', 'Community Management', 'Trend Monitoring', 'Crisis Management']
    }
  ]

  // Platform-specific services
  const platformServices = [
    {
      platform: 'Facebook',
      icon: 'bi-facebook',
      color: '#1877F2',
      stats: '2.9B+ Users',
      description: 'Reach your target audience with Facebook\'s powerful advertising platform and community features.'
    },
    {
      platform: 'Instagram',
      icon: 'bi-instagram',
      color: '#E4405F',
      stats: '2B+ Users',
      description: 'Showcase your brand with visually stunning content and stories that engage your audience.'
    },
    {
      platform: 'TikTok',
      icon: 'bi-tiktok',
      color: '#000000',
      stats: '1B+ Users',
      description: 'Create viral content that captures attention and drives massive brand awareness.'
    },
    {
      platform: 'YouTube',
      icon: 'bi-youtube',
      color: '#FF0000',
      stats: '2.7B+ Users',
      description: 'Build your video presence with optimized content and strategic SEO strategies.'
    },
    {
      platform: 'LinkedIn',
      icon: 'bi-linkedin',
      color: '#0077B5',
      stats: '900M+ Users',
      description: 'Establish thought leadership and generate high-quality B2B leads.'
    },
    {
      platform: 'Twitter',
      icon: 'bi-twitter',
      color: '#1DA1F2',
      stats: '450M+ Users',
      description: 'Engage in real-time conversations and build a loyal community around your brand.'
    }
  ]

  // Business-specific services
  const businessServices = [
    {
      type: 'E-commerce',
      icon: 'bi-cart',
      description: 'Drive sales and increase revenue with targeted social media campaigns.',
      results: ['300% increase in sales', '250% more website traffic', '400% boost in engagement']
    },
    {
      type: 'SaaS',
      icon: 'bi-cloud',
      description: 'Generate leads and build brand awareness in the competitive SaaS market.',
      results: ['200% more trial signups', '150% increase in leads', '300% brand awareness growth']
    },
    {
      type: 'Restaurant',
      icon: 'bi-egg-fried',
      description: 'Attract local customers and build a loyal community around your restaurant.',
      results: ['400% increase in foot traffic', '250% more reservations', '500% social media growth']
    },
    {
      type: 'Healthcare',
      icon: 'bi-heart-pulse',
      description: 'Build trust and educate patients through professional social media presence.',
      results: ['500% patient engagement', '200% appointment bookings', '300% trust score increase']
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Forward Co.',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'SocialMoon transformed our social media presence completely. We saw a 300% increase in engagement and 150% boost in sales within just 6 months!',
      rating: 5,
      results: '300% engagement increase'
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow Solutions',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'The team at SocialMoon helped us launch our SaaS startup from zero to 50K followers. Their LinkedIn strategy was absolutely brilliant!',
      rating: 5,
      results: '50K followers gained'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Urban Eats Chain',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Their hyperlocal marketing approach helped us expand to 15 new locations successfully. The results speak for themselves!',
      rating: 5,
      results: '15 successful locations'
    },
    {
      name: 'David Kim',
      company: 'FitLife Brand',
      role: 'Brand Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'From 10K to 100K followers in just 6 months! SocialMoon\'s content strategy and influencer partnerships were game-changing.',
      rating: 5,
      results: '1000% follower growth'
    }
  ]

  // Stats data
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: 'bi-people' },
    { number: '2M+', label: 'Followers Gained', icon: 'bi-graph-up' },
    { number: '98%', label: 'Client Satisfaction', icon: 'bi-heart' },
    { number: '250%', label: 'Average ROI', icon: 'bi-trophy' }
  ]

  // Process steps
  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'We analyze your business, target audience, and competitors to create a customized social media strategy.',
      icon: 'bi-lightbulb'
    },
    {
      step: '02',
      title: 'Content Creation',
      description: 'Our creative team develops engaging content that resonates with your audience and drives engagement.',
      icon: 'bi-palette'
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description: 'We launch and manage your campaigns across all platforms, optimizing for maximum performance.',
      icon: 'bi-rocket'
    },
    {
      step: '04',
      title: 'Analysis & Optimization',
      description: 'We continuously monitor performance and optimize campaigns to ensure the best possible results.',
      icon: 'bi-graph-up'
    }
  ]

  // Why choose us features
  const whyChooseUs = [
    {
      icon: 'bi-award',
      title: 'Proven Results',
      description: 'We\'ve helped 500+ businesses achieve remarkable growth with our data-driven strategies.'
    },
    {
      icon: 'bi-people',
      title: 'Expert Team',
      description: 'Our certified social media experts have years of experience across all major platforms.'
    },
    {
      icon: 'bi-graph-up',
      title: 'ROI-Focused',
      description: 'We focus on delivering measurable results that directly impact your bottom line.'
    },
    {
      icon: 'bi-headset',
      title: '24/7 Support',
      description: 'Get round-the-clock support from our dedicated team whenever you need assistance.'
    }
  ]

  return (
    <div className="home-page">
      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* Floating Elements */}
          <div className="floating-elements">
            <motion.div
              className="floating-shape shape-1"
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="floating-shape shape-2"
              animate={{
                y: [20, -20, 20],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="floating-shape shape-3"
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container relative">
            <div className="grid items-center min-h-screen lg:grid-cols-2">
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-white text-blue-500 px-4 py-2 rounded-full">
                      <i className="bi bi-star-fill mr-2"></i>
                      #1 Social Media Agency
                    </span>
                  </div>

                  <h1 className="text-5xl font-bold text-white mb-4">
                    Grow Your Business with
                    <span className="gradient-text block">Social Media Marketing</span>
                  </h1>

                  <p className="text-xl text-white/50 mb-5">
                    We help businesses of all sizes achieve remarkable growth through strategic social media marketing,
                    content creation, and data-driven campaigns that deliver real results.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/contact" className="btn bg-white text-black text-lg px-5 py-3">
                        <i className="bi bi-calendar-check mr-2"></i>
                        Get Free Consultation
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/portfolio" className="btn border-white text-white text-lg px-5 py-3">
                        <i className="bi bi-play-circle mr-2"></i>
                        View Our Work
                      </Link>
                    </motion.div>
                  </div>

                  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="text-center text-white">
                          <div className="text-4xl font-bold mb-1">{stat.number}</div>
                          <div className="text-sm text-white/50">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=500&fit=crop"
                      alt="Social Media Marketing"
                      className="max-w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="floating-card card-1">
                      <div className="flex items-center">
                        <div className="bg-blue-500 rounded-full p-2 mr-3">
                          <i className="bi bi-graph-up text-white"></i>
                        </div>
                        <div>
                          <div className="font-bold text-black">+300%</div>
                          <div className="text-sm text-gray-500">Engagement</div>
                        </div>
                      </div>
                    </div>
                    <div className="floating-card card-2">
                      <div className="flex items-center">
                        <div className="bg-green-500 rounded-full p-2 mr-3">
                          <i className="bi bi-people text-white"></i>
                        </div>
                        <div>
                          <div className="font-bold text-black">+150%</div>
                          <div className="text-sm text-gray-500">Followers</div>
                        </div>
                      </div>
                    </div>
                    <div className="floating-card card-3">
                      <div className="flex items-center">
                        <div className="bg-yellow-500 rounded-full p-2 mr-3">
                          <i className="bi bi-currency-dollar text-white"></i>
                        </div>
                        <div>
                          <div className="font-bold text-black">+250%</div>
                          <div className="text-sm text-gray-500">Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-100">
          <div className="container">
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">Our Social Media Services</h2>
              <p className="text-xl text-gray-500">Comprehensive solutions to grow your presence across all major platforms</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full">
                    <div className="mb-4">
                      <i className={`bi ${service.icon} text-4xl text-primary`}></i>
                    </div>
                    <h4 className="font-bold mb-3">{service.title}</h4>
                    <p className="text-gray-500 mb-4">{service.description}</p>
                    <ul className="list-none">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center mb-2">
                          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform-Specific Services */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">Platform Expertise</h2>
              <p className="text-xl text-gray-500">We specialize in all major social media platforms</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
              {platformServices.map((platform, index) => (
                <motion.div
                  key={index}
                  className=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full">
                    <div className="flex items-center mb-3">
                      <div
                        className="mr-3"
                        style={{ color: platform.color }}
                      >
                        <i className={`bi ${platform.icon} text-4xl`}></i>
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">{platform.platform}</h5>
                        <small className="text-gray-500">{platform.stats}</small>
                      </div>
                    </div>
                    <p className="text-gray-500">{platform.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business-Specific Services */}
        <section className="py-20 bg-gray-100">
          <div className="container">
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">Industry Solutions</h2>
              <p className="text-xl text-gray-500">Tailored strategies for different business types</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
              {businessServices.map((business, index) => (
                <motion.div
                  key={index}
                  className=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full text-center">
                    <div className="mb-4">
                      <i className={`bi ${business.icon} text-4xl text-primary`}></i>
                    </div>
                    <h5 className="font-bold mb-3">{business.type}</h5>
                    <p className="text-gray-500 mb-4">{business.description}</p>
                    <div className="">
                      {business.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-center mb-2">
                          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                          <small>{result}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">Our Process</h2>
              <p className="text-xl text-gray-500">How we deliver exceptional results for your business</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full text-center">
                    <div className="mb-4">
                      <span className="inline-block bg-primary text-white rounded-full p-3 text-4xl font-bold">
                        {step.step}
                      </span>
                    </div>
                    <div className="mb-4">
                      <i className={`bi ${step.icon} text-4xl text-primary`}></i>
                    </div>
                    <h5 className="font-bold mb-3">{step.title}</h5>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-100">
          <div className="container">
            <div className="grid items-center lg:grid-cols-2 gap-4">
              <div className="">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold mb-4">Why Choose SocialMoon?</h2>
                  <p className="text-xl text-gray-500 mb-5">
                    We're not just another social media agency. We're your strategic partner in growth,
                    delivering measurable results that transform your business.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {whyChooseUs.map((feature, index) => (
                      <div key={index} className="">
                        <div className="flex items-start">
                          <div className="mr-3">
                            <i className={`bi ${feature.icon} text-4xl text-primary`}></i>
                          </div>
                          <div>
                            <h6 className="font-bold mb-2">{feature.title}</h6>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                    alt="Why Choose Us"
                    className="max-w-full h-auto rounded-2xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">What Our Clients Say</h2>
              <p className="text-xl text-gray-500">Real results from real businesses</p>
            </motion.div>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-full">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full mr-3"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="font-bold mb-1">{testimonial.name}</h6>
                          <p className="text-gray-500 text-sm mb-0">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-yellow-400"></i>
                        ))}
                      </div>

                      <blockquote className="italic mb-4">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="">
                        <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">{testimonial.results}</span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 text-white"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="container">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Social Media?</h2>
              <p className="text-xl mb-5">
                Join 500+ businesses that have achieved remarkable growth with our proven strategies.
              </p>
              <div className="flex flex-wrap gap-3 justify-content-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn bg-white text-black text-lg px-5 py-3">
                    <i className="bi bi-calendar-check mr-2"></i>
                    Get Free Consultation
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/portfolio" className="btn border-white text-white text-lg px-5 py-3">
                    <i className="bi bi-grid mr-2"></i>
                    View Our Work
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
