'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Users, Star, CheckCircle, Sparkles, Quote, Target, BarChart3, MessageSquare, Globe, Shield, Clock, Award, Mail, Rocket } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
};

type HomePageContent = {
  title: string;
  description: string;
  features: Feature[];
};

const HomePage = () => {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => {
        // Only set content if we have valid data with a title
        if (data && data.title) {
          setContent(data);
        } else {
          console.error('Invalid home data received:', data);
          // Set default content if API fails
          setContent({
            title: 'Welcome to SocialMoon',
            description: 'Your one-stop solution for social media management.',
            features: []
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching home content:', error);
        // Set default content on error
        setContent({
          title: 'Welcome to SocialMoon',
          description: 'Your one-stop solution for social media management.',
          features: []
        });
      });
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  const featureIcons = [
    <Globe className="h-6 w-6" key="globe" />,
    <Shield className="h-6 w-6" key="shield" />,
    <Clock className="h-6 w-6" key="clock" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100">
      {/* Modern Split-Layout Hero Section */}
      <Hero className="relative overflow-hidden bg-white pt-4 pb-8 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-50 blur-3xl opacity-50 pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-0">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Trusted by 10,000+ creators worldwide
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 md:mb-6 leading-[1.15]">
                Scale your <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  social impact.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-3 sm:mb-5 max-w-md md:max-w-xl leading-relaxed">
                Connect your accounts, automate your strategy with AI, and watch your engagement soar. All from one intuitive platform.
              </p>

              {/* Brand Tagline */}
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                {['Connect', 'Create', 'Conquer'].map((word, i) => (
                  <div key={word} className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {word}
                    </span>
                    {i < 2 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-5 sm:mb-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 sm:px-8 sm:py-5 text-sm sm:text-base font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Start for free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 px-5 py-3 sm:px-8 sm:py-5 text-sm sm:text-base font-semibold rounded-xl transition-all"
                  onClick={() => window.open('/services', '_self')}
                >
                  See how it works
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            {/* Right Visual Area - Instagram Reel Style */}
            <div className="flex w-full md:w-1/2 relative items-center justify-center mt-4 md:mt-0">
              
              {/* Phone Frame containing the video */}
              <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] z-10">
                {/* Phone shell */}
                <div className="relative rounded-[3rem] overflow-hidden border-[8px] border-gray-900 shadow-[0_40px_80px_rgba(0,0,0,0.3)] bg-black">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-30"></div>

                  {/* Video in portrait reel format */}
                  <div className="relative aspect-[9/16] bg-black overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/12501474_1080_1920_30fps.mp4" type="video/mp4" />
                    </video>

                    {/* Instagram Reel UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10 pointer-events-none"></div>

                    {/* Top - Profile & Follow */}
                    <div className="absolute top-8 left-3 right-3 flex items-center justify-between z-20">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                            <Image src="/logo.png" alt="logo" width={32} height={32} className="object-contain w-full h-full" />
                          </div>
                        </div>
                        <span className="text-white text-xs font-bold drop-shadow">the_social_moon_</span>
                        <span className="text-white/80 text-[10px] border border-white/50 rounded px-1.5 py-0.5">Follow</span>
                      </div>
                      <span className="text-white/70 text-lg font-light">···</span>
                    </div>

                    {/* Bottom - Caption & Actions */}
                    <div className="absolute bottom-4 left-3 right-3 z-20 flex items-end justify-between">
                      <div className="flex-1 mr-3">
                        <p className="text-white text-xs font-semibold drop-shadow leading-relaxed line-clamp-2">
                          🚀 Scale your brand with AI-powered social media! 
                          <span className="text-blue-300"> #SocialMoon #Growth</span>
                        </p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400 -ml-1.5 border border-black/20"></div>
                          <span className="text-white/80 text-[10px]">Liked by 12.4k others</span>
                        </div>
                      </div>
                      {/* Side action buttons */}
                      <div className="flex flex-col items-center gap-4 text-white">
                        <div className="flex flex-col items-center">
                          <div className="text-xl">❤️</div>
                          <span className="text-[10px] mt-0.5">12.4k</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-xl">💬</div>
                          <span className="text-[10px] mt-0.5">843</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-xl">↗️</div>
                          <span className="text-[10px] mt-0.5">Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator bar */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-30"></div>
              </div>

              {/* Floating decorative cards around the phone */}
              <div className="hidden md:block absolute top-10 right-0 lg:-right-6 w-48 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 border border-gray-100 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Post Scheduled</div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block absolute bottom-20 left-0 lg:-left-12 w-56 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-4 border border-gray-100 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">New Followers</div>
                    <div className="text-xs text-gray-500">+1,240 this week</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Hero>

      {/* Brands Section */}
      <Section className="py-16 overflow-hidden bg-white border-y border-gray-100">
        {/* Keyframe styles injected inline */}
        <style>{`
          @keyframes marquee-left  { from { transform: translateX(0) }  to { transform: translateX(-50%) } }
          @keyframes marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) } }
          .animate-marquee-left  { animation: marquee-left  28s linear infinite; }
          .animate-marquee-right { animation: marquee-right 32s linear infinite; }
          .animate-marquee-left:hover,
          .animate-marquee-right:hover { animation-play-state: paused; }
        `}</style>

        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Powering India&apos;s fastest-growing brands</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Brands that trust <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SocialMoon</span></h3>
          </div>
        </Container>

        {/* Row 1 — scrolls left */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-marquee-left whitespace-nowrap w-max">
            {[
              { name: "Bewakoof",   url: "https://www.google.com/s2/favicons?domain=bewakoof.com&sz=128",        color: "from-orange-50 to-yellow-50",  border: "border-orange-100"  },
              { name: "Lenskart",   url: "https://www.google.com/s2/favicons?domain=lenskart.com&sz=128",        color: "from-red-50 to-orange-50",     border: "border-red-100"     },
              { name: "boAt",       url: "https://www.google.com/s2/favicons?domain=boat-lifestyle.com&sz=128",  color: "from-gray-50 to-slate-50",     border: "border-gray-200"    },
              { name: "Mamaearth",  url: "https://www.google.com/s2/favicons?domain=mamaearth.in&sz=128",        color: "from-green-50 to-emerald-50",  border: "border-green-100"   },
              { name: "Sugar",      url: "https://www.google.com/s2/favicons?domain=sugarcosmetics.com&sz=128",  color: "from-pink-50 to-rose-50",      border: "border-pink-100"    },
              { name: "Wakefit",    url: "https://www.google.com/s2/favicons?domain=wakefit.co&sz=128",          color: "from-blue-50 to-indigo-50",    border: "border-blue-100"    },
              { name: "Chumbak",    url: "https://www.google.com/s2/favicons?domain=chumbak.com&sz=128",         color: "from-violet-50 to-purple-50",  border: "border-violet-100"  },
              { name: "Nykaa",      url: "https://www.google.com/s2/favicons?domain=nykaa.com&sz=128",           color: "from-pink-50 to-fuchsia-50",   border: "border-pink-200"    },
              // duplicate for seamless loop
              { name: "Bewakoof",   url: "https://www.google.com/s2/favicons?domain=bewakoof.com&sz=128",        color: "from-orange-50 to-yellow-50",  border: "border-orange-100"  },
              { name: "Lenskart",   url: "https://www.google.com/s2/favicons?domain=lenskart.com&sz=128",        color: "from-red-50 to-orange-50",     border: "border-red-100"     },
              { name: "boAt",       url: "https://www.google.com/s2/favicons?domain=boat-lifestyle.com&sz=128",  color: "from-gray-50 to-slate-50",     border: "border-gray-200"    },
              { name: "Mamaearth",  url: "https://www.google.com/s2/favicons?domain=mamaearth.in&sz=128",        color: "from-green-50 to-emerald-50",  border: "border-green-100"   },
              { name: "Sugar",      url: "https://www.google.com/s2/favicons?domain=sugarcosmetics.com&sz=128",  color: "from-pink-50 to-rose-50",      border: "border-pink-100"    },
              { name: "Wakefit",    url: "https://www.google.com/s2/favicons?domain=wakefit.co&sz=128",          color: "from-blue-50 to-indigo-50",    border: "border-blue-100"    },
              { name: "Chumbak",    url: "https://www.google.com/s2/favicons?domain=chumbak.com&sz=128",         color: "from-violet-50 to-purple-50",  border: "border-violet-100"  },
              { name: "Nykaa",      url: "https://www.google.com/s2/favicons?domain=nykaa.com&sz=128",           color: "from-pink-50 to-fuchsia-50",   border: "border-pink-200"    },
            ].map((brand, i) => (
              <div key={i} className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${brand.color} border ${brand.border} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default`}>
                <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <Image src={brand.url} alt={brand.name} width={24} height={24} className="object-contain rounded" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="flex gap-4 animate-marquee-right whitespace-nowrap w-max">
            {[
              { name: "Zomato",     url: "https://www.google.com/s2/favicons?domain=zomato.com&sz=128",         color: "from-red-50 to-rose-50",       border: "border-red-100"     },
              { name: "Meesho",     url: "https://www.google.com/s2/favicons?domain=meesho.com&sz=128",         color: "from-purple-50 to-violet-50",  border: "border-purple-100"  },
              { name: "Cred",       url: "https://www.google.com/s2/favicons?domain=cred.club&sz=128",          color: "from-slate-50 to-gray-50",     border: "border-slate-200"   },
              { name: "Zepto",      url: "https://www.google.com/s2/favicons?domain=zeptonow.com&sz=128",       color: "from-yellow-50 to-amber-50",   border: "border-yellow-100"  },
              { name: "Delhivery",  url: "https://www.google.com/s2/favicons?domain=delhivery.com&sz=128",      color: "from-red-50 to-orange-50",     border: "border-red-100"     },
              { name: "Razorpay",   url: "https://www.google.com/s2/favicons?domain=razorpay.com&sz=128",       color: "from-blue-50 to-sky-50",       border: "border-blue-100"    },
              { name: "Ola",        url: "https://www.google.com/s2/favicons?domain=olacabs.com&sz=128",        color: "from-green-50 to-lime-50",     border: "border-green-100"   },
              { name: "PhonePe",    url: "https://www.google.com/s2/favicons?domain=phonepe.com&sz=128",        color: "from-violet-50 to-indigo-50",  border: "border-violet-100"  },
              // duplicate for seamless loop
              { name: "Zomato",     url: "https://www.google.com/s2/favicons?domain=zomato.com&sz=128",         color: "from-red-50 to-rose-50",       border: "border-red-100"     },
              { name: "Meesho",     url: "https://www.google.com/s2/favicons?domain=meesho.com&sz=128",         color: "from-purple-50 to-violet-50",  border: "border-purple-100"  },
              { name: "Cred",       url: "https://www.google.com/s2/favicons?domain=cred.club&sz=128",          color: "from-slate-50 to-gray-50",     border: "border-slate-200"   },
              { name: "Zepto",      url: "https://www.google.com/s2/favicons?domain=zeptonow.com&sz=128",       color: "from-yellow-50 to-amber-50",   border: "border-yellow-100"  },
              { name: "Delhivery",  url: "https://www.google.com/s2/favicons?domain=delhivery.com&sz=128",      color: "from-red-50 to-orange-50",     border: "border-red-100"     },
              { name: "Razorpay",   url: "https://www.google.com/s2/favicons?domain=razorpay.com&sz=128",       color: "from-blue-50 to-sky-50",       border: "border-blue-100"    },
              { name: "Ola",        url: "https://www.google.com/s2/favicons?domain=olacabs.com&sz=128",        color: "from-green-50 to-lime-50",     border: "border-green-100"   },
              { name: "PhonePe",    url: "https://www.google.com/s2/favicons?domain=phonepe.com&sz=128",        color: "from-violet-50 to-indigo-50",  border: "border-violet-100"  },
            ].map((brand, i) => (
              <div key={i} className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${brand.color} border ${brand.border} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default`}>
                <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <Image src={brand.url} alt={brand.name} width={24} height={24} className="object-contain rounded" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-400 font-medium">Join 10,000+ companies already growing with SocialMoon</p>
        </div>
      </Section>

      {/* Luna AI Banner */}
      <Section className="py-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-black text-xl leading-tight">Meet Luna</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-400/20 border border-green-400/40 text-green-300 text-[10px] font-bold uppercase tracking-wider">Live</span>
                </div>
                <p className="text-white/70 text-sm">Our AI assistant — instantly answers questions about services, pricing & more.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://luna.socialmoon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                Talk to Luna
              </a>
              {/* Learn More button removed as requested */}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 pb-2">
              Everything you need to succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to help you grow your social media presence and engage your audience effectively.
            </p>
          </div>

          {/* Animated Platform Dashboard Mockup */}
          <div className="flex justify-center items-center w-full mt-12 mb-16 px-4">
            <div className="relative w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(30,_58,_138,_0.15)] border border-white group transition-all duration-700 hover:shadow-[0_30px_70px_rgba(30,_58,_138,_0.25)] hover:-translate-y-2">
              
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100/80 bg-white/60">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-5 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="hidden sm:flex h-5 w-48 bg-gray-100 rounded-md mx-4"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:block h-6 w-32 bg-gray-100 rounded-full"></div>
                  <div className="h-9 w-9 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>

              {/* Main Dashboard Layout */}
              <div className="flex min-h-[300px] md:h-[450px]">
                {/* Sidebar - hidden on mobile */}
                <div className="hidden sm:flex w-16 md:w-20 border-r border-gray-100/80 bg-gray-50/50 flex-col items-center py-6 space-y-6 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow-inner cursor-pointer transition-transform hover:scale-110">
                    <div className="w-5 h-5 rounded bg-blue-600"></div>
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110 group/icon">
                      <div className="w-5 h-5 rounded bg-gray-300 group-hover/icon:bg-indigo-400 transition-colors"></div>
                    </div>
                  ))}
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-4 md:p-6 lg:p-8 bg-gradient-to-br from-blue-50/40 to-purple-50/40 relative overflow-hidden">
                  
                  {/* Background Floating Orbs */}
                  <div className="absolute top-10 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-10 left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">Performance Overview</h3>
                      <p className="text-sm text-gray-500">Welcome back! Your campaigns are growing rapidly.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-600 flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
                      Last 30 Days <span className="ml-2 text-xs">▼</span>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
                    {[
                      { label: 'Total Followers', value: '124,563', growth: '+12.5%' },
                      { label: 'Engagement Rate', value: '8.4%', growth: '+2.1%' },
                      { label: 'Content Reach', value: '892,305', growth: '+24.8%' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="text-sm font-medium text-gray-500 mb-2">{stat.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</div>
                          <div className="flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {stat.growth}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Chart Area */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-52 relative z-10">
                    {/* Activity Chart */}
                    <div className="flex-[2] min-h-[150px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-sm border border-white flex flex-col group/chart cursor-pointer transition-shadow hover:shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm font-bold text-gray-700">Audience Growth</div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden flex">
                           <div className="w-1/2 h-full bg-blue-400 animate-pulse rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between space-x-1 sm:space-x-2 pb-2">
                        {[40, 55, 45, 70, 65, 80, 75, 95, 85, 100].map((height, i) => (
                          <div key={i} className="w-full bg-blue-50/50 rounded-t-md relative overflow-hidden group-hover/chart:bg-blue-100/50 transition-colors" style={{ height: '100%' }}>
                            <div 
                              className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-md transition-all duration-700 ease-out sm:group-hover/chart:from-indigo-500 sm:group-hover/chart:to-purple-500" 
                              style={{ height: `${height}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Post Card */}
                    <div className="flex-1 min-h-[180px] bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-4 md:p-5 shadow-lg text-white overflow-hidden relative group/post cursor-pointer">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover/post:scale-150 pointer-events-none"></div>
                      <div className="text-sm font-bold text-white/90 mb-4 relative z-10 flex items-center justify-between">
                        Top Performing Post
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 relative z-10 border border-white/20 transition-transform duration-300 group-hover/post:-translate-y-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center p-1">
                            <Image src="/logo.png" alt="logo" width={24} height={24} className="opacity-90 object-contain w-full h-full" />
                          </div>
                          <div>
                            <div className="w-24 h-2.5 bg-white/40 rounded-full mb-2"></div>
                            <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-16 bg-white/15 rounded-lg mb-3 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center pl-1 backdrop-blur-sm transition-transform group-hover/post:scale-110">
                            <div className="w-0 h-0 border-t-4 border-t-transparent border-l-[6px] border-l-white border-b-4 border-b-transparent"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-medium">
                          <div className="px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">❤ 12.4k</div>
                          <div className="px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" /> +340%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-200/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-purple-100/50 text-purple-700 text-sm font-bold mb-8 hover:shadow-md transition-shadow">
              <Award className="w-4 h-4 mr-2" />
              Global Trust
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Trusted by businesses <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">worldwide</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Join thousands of companies already growing with SocialMoon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "10K+", label: "Active Users", icon: Users, color: "blue" },
              { number: "500K+", label: "Posts Managed", icon: MessageSquare, color: "purple" },
              { number: "98%", label: "Satisfaction Rate", icon: Star, color: "yellow" },
              { number: "24/7", label: "Support Available", icon: CheckCircle, color: "emerald" }
            ].map((stat, index) => (
              <div key={index} className="text-center group perspective-1000">
                <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:border-white/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Subtle hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-${stat.color}-100/50`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-gray-800 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* subtle bg patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-400 opacity-20 blur-[100px]"></div>

        <Container className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-teal-600 text-sm font-bold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              How SocialMoon works
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Get started in minutes and see results within days, not months.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 lg:mb-32 relative group">
              <div className="md:w-1/2 pr-0 md:pr-12 lg:pr-20 mb-12 md:mb-0 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-6 shadow-sm border border-green-200">01</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Connect Your Accounts</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Link your social media accounts securely in just a few clicks. Our streamlined onboarding gets your tools completely synced.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> One-click OAuth</div>
                  <div className="flex items-center text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"><Shield className="w-4 h-4 text-green-500 mr-2" /> Bank-level secruity</div>
                </div>
              </div>
              <div className="md:w-1/2 w-full relative">
                {/* Visualizer 1 */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.15)] flex items-center justify-center bg-gradient-to-br from-green-50/50 to-teal-50/50">
                   {/* Connecting Animation */}
                   <div className="relative w-full h-full flex items-center justify-center">
                     {/* Central Hub */}
                     <div className="absolute z-20 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-green-100">
                        <Image src="/logo.png" alt="hub" width={48} height={48} className="w-12 h-12 object-contain" />
                     </div>
                     
                     {/* Floating platforms - Adjusted positions to circle the hub gracefully */}
                     <div className="absolute top-[15%] left-[15%] w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center border border-gray-100 animate-float">
                        <Image src="https://www.google.com/s2/favicons?domain=instagram.com&sz=128" alt="ig" width={24} height={24} className="rounded" />
                     </div>
                     <div className="absolute top-[20%] right-[15%] w-12 h-12 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                        <Image src="https://www.google.com/s2/favicons?domain=linkedin.com&sz=128" alt="in" width={20} height={20} className="rounded" />
                     </div>
                     <div className="absolute bottom-[20%] left-[15%] w-16 h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '2s' }}>
                        <Image src="https://www.google.com/s2/favicons?domain=facebook.com&sz=128" alt="fb" width={28} height={28} className="rounded" />
                     </div>
                     <div className="absolute bottom-[15%] right-[15%] w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '1.5s' }}>
                        <Image src="https://www.google.com/s2/favicons?domain=tiktok.com&sz=128" alt="tk" width={24} height={24} className="rounded" />
                     </div>

                     {/* connecting lines (svg) - Adjusted slightly to match */}
                     <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-50" preserveAspectRatio="none">
                       <path d="M 50% 50% L 20% 20%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                       <path d="M 50% 50% L 80% 25%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                       <path d="M 50% 50% L 20% 75%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                       <path d="M 50% 50% L 80% 80%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                     </svg>
                   </div>
                </div>
                {/* Connection line to next step for desktop */}
                <div className="hidden lg:block absolute -bottom-24 left-1/2 w-0.5 h-24 bg-gradient-to-b from-green-200 to-transparent"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-24 lg:mb-32 relative group">
              <div className="md:w-1/2 w-full relative mt-12 md:mt-0">
                {/* Visualizer 2 */}
                <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-800 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(14,165,233,0.3)] p-6 flex flex-col">
                  {/* Fake Code/Strategy Editor */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-gray-500 text-xs font-mono ml-4">ai_strategy_engine.yaml</div>
                  </div>
                  <div className="flex-1 space-y-3 font-mono text-sm">
                    <div className="flex text-blue-400">
                       <span className="text-gray-500 mr-4">1</span><span>Analyzing</span><span className="text-yellow-300 ml-2">target_audience</span>
                    </div>
                    <div className="flex text-gray-300 ml-8">
                       <span className="text-gray-500 mr-4">2</span>Demographics: <span className="text-green-400">Millennials</span>
                    </div>
                    <div className="flex text-gray-300 ml-8">
                       <span className="text-gray-500 mr-4">3</span>Peak_Time: <span className="text-green-400">18:00 EST</span>
                    </div>
                    <div className="flex text-blue-400 mt-4">
                       <span className="text-gray-500 mr-4">4</span><span>Generating</span><span className="text-yellow-300 ml-2">content_pillars</span>
                    </div>
                    <div className="flex text-gray-300 ml-8 border-l border-gray-700 pl-4 h-8 relative">
                       <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1/2 -translate-y-1/2 animate-ping"></div>
                       <span className="text-gray-500 mr-4">5</span>Processing...<span className="animate-pulse">_</span>
                    </div>
                  </div>
                  <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between backdrop-blur-md">
                     <div className="flex items-center">
                       <Sparkles className="w-5 h-5 text-sky-400 mr-3" />
                       <div className="text-white font-medium text-sm">Strategy Compiled</div>
                     </div>
                     <div className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs font-bold">100% Match</div>
                  </div>
                </div>
                {/* Connection line to next step for desktop */}
                <div className="hidden lg:block absolute -bottom-24 right-1/2 w-0.5 h-24 bg-gradient-to-b from-sky-200 to-transparent"></div>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-12 lg:pl-20 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 font-bold text-xl mb-6 shadow-sm border border-sky-200">02</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">AI-Powered Strategy</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our intelligent algorithms analyze your audience and create personalized content strategies. No more guessing what to post.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div> Smart keyword analysis</div>
                  <div className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div> Predictive engagement modeling</div>
                  <div className="flex items-center text-gray-700 font-medium"><div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div> Automated content calendar generation</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-1/2 pr-0 md:pr-12 lg:pr-20 mb-12 md:mb-0 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl mb-6 shadow-sm border border-indigo-200">03</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Grow & Engage</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Watch your engagement soar as we optimize posts and grow your following naturally with targeted interactions.
                </p>
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Start Growing Now
                </button>
              </div>
              <div className="md:w-1/2 w-full relative">
                {/* Visualizer 3 */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] border border-indigo-400/50 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 p-8 flex flex-col justify-between">
                  {/* Floating elements background */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                     <Rocket className="w-32 h-32 text-white" />
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 mb-4 relative z-10">
                    <div className="text-indigo-100 text-sm font-medium mb-1">Followers Gained</div>
                    <div className="flex items-end justify-between">
                      <div className="text-4xl font-extrabold text-white">24,592</div>
                      <div className="text-green-300 text-sm font-bold flex items-center bg-green-400/20 px-2 py-1 rounded-lg">
                        <TrendingUp className="w-4 h-4 mr-1" /> +304%
                      </div>
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="flex-1 w-full flex items-end justify-between space-x-2 pt-8 relative z-10">
                     {[20, 35, 45, 40, 60, 75, 85, 100].map((height, i) => (
                        <div key={i} className="flex-1 bg-white/20 rounded-t-lg relative group/bar hover:bg-white/30 transition-colors" style={{ height: `${height}%` }}>
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-indigo-600 text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity">
                             {height * 100}
                           </div>
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-12 right-12 w-28 h-28 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-12 left-12 w-36 h-36 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 text-sm font-semibold mb-6 border border-yellow-200/50 shadow-sm">
              <Quote className="w-4 h-4 mr-2" />
              Customer Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-6">
              What our customers say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from real businesses
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {[
                {
                  quote: "SocialMoon ne humare Instagram page ko completely transform kar diya. Sirf 2 mahine mein followers 5x ho gaye!",
                  author: "Priya Sharma",
                  role: "Founder",
                  company: "Priya's Boutique, Delhi",
                  avatar: "PS"
                },
                {
                  quote: "Pehle hum khud content banate the, bahut time lagta tha. Ab SocialMoon se sab kuch smooth ho gaya hai. Highly recommended!",
                  author: "Rahul Verma",
                  role: "Marketing Head",
                  company: "Verma Sweets & Co., Lucknow",
                  avatar: "RV"
                },
                {
                  quote: "Our engagement rate went from 1% to almost 8% in three months. The content strategy they helped us build actually works.",
                  author: "Ananya Iyer",
                  role: "Social Media Manager",
                  company: "The Brew Room, Bangalore",
                  avatar: "AI"
                },
                {
                  quote: "Bohot achi service hai. Hamare restaurant ke liye reels aur posts banane mein bahut help mili. Orders bhi badhe.",
                  author: "Mohammed Arif",
                  role: "Owner",
                  company: "Arif's Biryani House, Hyderabad",
                  avatar: "MA"
                },
                {
                  quote: "I was skeptical at first but the results speak for themselves. Our brand visibility on Instagram doubled within weeks.",
                  author: "Sneha Kulkarni",
                  role: "Co-Founder",
                  company: "Kulkarni Organics, Pune",
                  avatar: "SK"
                },
                {
                  quote: "SocialMoon ka scheduling tool bahut kaam ka hai. Ek baar set karo, baaki sab automatic. Time aur paise dono bache.",
                  author: "Deepak Nair",
                  role: "Business Owner",
                  company: "Nair Electronics, Kochi",
                  avatar: "DN"
                },
                {
                  quote: "We run a small handcraft business from home. SocialMoon helped us reach customers pan-India through social media. Life-changing!",
                  author: "Kavita Joshi",
                  role: "Artisan & Owner",
                  company: "KavitaKrafts, Jaipur",
                  avatar: "KJ"
                },
                {
                  quote: "The support team is very responsive. Whenever we had a doubt, they explained everything clearly. Great experience overall.",
                  author: "Amit Bhatia",
                  role: "Digital Lead",
                  company: "Bhatia Travel Agency, Chandigarh",
                  avatar: "AB"
                },
                {
                  quote: "Hamari clothing brand ke liye SocialMoon ne kaam ka content calendar banaya. Sales mein seedha 40% ka fark pada.",
                  author: "Riya Mehta",
                  role: "Brand Manager",
                  company: "Studio Riya, Surat",
                  avatar: "RM"
                },
                {
                  quote: "Finally found a platform that understands small Indian businesses. No jargon, just results. Our Facebook page is thriving now.",
                  author: "Suresh Pillai",
                  role: "Owner",
                  company: "Pillai Bakery, Chennai",
                  avatar: "SP"
                },
                {
                  quote: "SocialMoon ki team ne samjha ki hamara target customer kaun hai. Uske hisaab se campaigns chalaye. Bahut fayda hua.",
                  author: "Pooja Agarwal",
                  role: "CEO",
                  company: "Agarwal Jewellers, Nagpur",
                  avatar: "PA"
                },
                {
                  quote: "We used to post randomly. Now with SocialMoon we have a proper strategy. Our inquiries from Instagram have tripled.",
                  author: "Vikram Singh",
                  role: "Founder",
                  company: "VS Fitness Studio, Indore",
                  avatar: "VS"
                }
              ].concat([
                {
                  quote: "SocialMoon ne humare Instagram page ko completely transform kar diya. Sirf 2 mahine mein followers 5x ho gaye!",
                  author: "Priya Sharma",
                  role: "Founder",
                  company: "Priya's Boutique, Delhi",
                  avatar: "PS"
                },
                {
                  quote: "Pehle hum khud content banate the, bahut time lagta tha. Ab SocialMoon se sab kuch smooth ho gaya hai. Highly recommended!",
                  author: "Rahul Verma",
                  role: "Marketing Head",
                  company: "Verma Sweets & Co., Lucknow",
                  avatar: "RV"
                },
                {
                  quote: "Our engagement rate went from 1% to almost 8% in three months. The content strategy they helped us build actually works.",
                  author: "Ananya Iyer",
                  role: "Social Media Manager",
                  company: "The Brew Room, Bangalore",
                  avatar: "AI"
                },
                {
                  quote: "Bohot achi service hai. Hamare restaurant ke liye reels aur posts banane mein bahut help mili. Orders bhi badhe.",
                  author: "Mohammed Arif",
                  role: "Owner",
                  company: "Arif's Biryani House, Hyderabad",
                  avatar: "MA"
                },
                {
                  quote: "I was skeptical at first but the results speak for themselves. Our brand visibility on Instagram doubled within weeks.",
                  author: "Sneha Kulkarni",
                  role: "Co-Founder",
                  company: "Kulkarni Organics, Pune",
                  avatar: "SK"
                },
                {
                  quote: "SocialMoon ka scheduling tool bahut kaam ka hai. Ek baar set karo, baaki sab automatic. Time aur paise dono bache.",
                  author: "Deepak Nair",
                  role: "Business Owner",
                  company: "Nair Electronics, Kochi",
                  avatar: "DN"
                }
              ]).map((testimonial, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 flex-shrink-0 w-96 z-10">
                  <Quote className="h-10 w-10 text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Integrations Section */}
      <Section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-40"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50 shadow-sm">
              <Globe className="w-4 h-4 mr-2" />
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 bg-clip-text text-transparent mb-4">
              Works with your favorite platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect all your social media accounts in one place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: "Instagram", logo: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128" },
              { name: "Facebook", logo: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
              { name: "Twitter", logo: "https://www.google.com/s2/favicons?domain=twitter.com&sz=128" },
              { name: "LinkedIn", logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128" },
              { name: "TikTok", logo: "https://www.google.com/s2/favicons?domain=tiktok.com&sz=128" },
              { name: "YouTube", logo: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128" },
              { name: "Pinterest", logo: "https://www.google.com/s2/favicons?domain=pinterest.com&sz=128" },
              { name: "Snapchat", logo: "https://www.google.com/s2/favicons?domain=snapchat.com&sz=128" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-200">
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </div>
                <span className="font-semibold text-gray-900 text-center text-sm group-hover:text-indigo-700 transition-colors">{platform.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-slate-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-800 bg-clip-text text-transparent mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SocialMoon
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How quickly can I see results?",
                answer: "Most customers see improved engagement within the first 2 weeks. Full optimization and growth typically takes 4-6 weeks depending on your current social media presence."
              },
              {
                question: "Can I connect multiple social media accounts?",
                answer: "Yes! Depending on your plan, you can connect anywhere from 5 to unlimited social media accounts across all major platforms."
              },
              {
                question: "Do you provide content creation services?",
                answer: "Absolutely. Our AI-powered content assistant helps generate ideas, and our professional team can create custom content for your brand."
              },
              {
                question: "What kind of analytics do you provide?",
                answer: "We provide comprehensive analytics including engagement rates, reach, follower growth, best posting times, and detailed performance reports."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA, and never share your data with third parties."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden text-gray-800">
        {/* Background decorative elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-emerald-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-40"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200/50 shadow-sm">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-4">
              Stay in the loop
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest social media tips, platform updates, and growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/80 backdrop-blur-sm border border-gray-200"
              />
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 active:scale-95"
                onClick={async () => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  const email = emailInput?.value;
                  if (!email) {
                    return;
                  }
                  try {
                    const res = await fetch('/api/subscribers', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email }),
                    });
                    if (res.ok) {
                      emailInput.value = '';
                      setSubscribeSuccess(true);
                      setTimeout(() => setSubscribeSuccess(false), 3000);
                    }
                  } catch (error) {
                    // Silent fail
                  }
                }}
              >
                Subscribe
              </Button>
            </div>
            {subscribeSuccess && (
              <p className="text-sm text-green-600 mt-2 text-center">Thank you for subscribing!</p>
            )}
            <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default HomePage;