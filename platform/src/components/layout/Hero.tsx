'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Active Students', value: '2,500+' },
  { label: 'Success Rate', value: '94%' },
  { label: 'Avg Income Increase', value: '250%' },
  { label: 'Job Placement', value: '30 days' },
];

const testimonialQuotes = [
  {
    text: "I went from $5/hour to $25/hour in just 3 months using AI tools I learned here.",
    author: "Maria S., Virtual Assistant from Philippines"
  },
  {
    text: "The AI-enhanced SEO course landed me my first $2,000/month client.",
    author: "Raj P., SEO Specialist from India"
  },
  {
    text: "Finally, a platform that understands overseas freelancers' needs.",
    author: "Elena R., Content Creator from Ukraine"
  }
];

export function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % testimonialQuotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 pb-20 overflow-hidden">
      <div className="gradient-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-8">
                <span className="mr-2">🚀</span>
                Join 2,500+ successful freelancers
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master AI-Enhanced
                <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Freelance Skills
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Transform your freelance career with AI-powered training designed specifically for overseas professionals. Land premium clients and 3x your income.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/register" 
                  className="btn btn-primary bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  Start Learning Free
                </Link>
                <Link 
                  href="/courses" 
                  className="btn btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  Browse Courses
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="relative z-10">
                {/* Floating testimonial */}
                <div className="bg-white rounded-xl p-6 shadow-2xl mb-8 animate-float">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonialQuotes[currentQuote].author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-2">
                        "{testimonialQuotes[currentQuote].text}"
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonialQuotes[currentQuote].author}
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Tools Showcase */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-3"></div>
                    <h3 className="text-white font-semibold mb-1">ChatGPT</h3>
                    <p className="text-blue-200 text-sm">Content Creation</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mb-3"></div>
                    <h3 className="text-white font-semibold mb-1">Claude</h3>
                    <p className="text-blue-200 text-sm">Analysis & Research</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg mb-3"></div>
                    <h3 className="text-white font-semibold mb-1">Midjourney</h3>
                    <p className="text-blue-200 text-sm">Visual Design</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg mb-3"></div>
                    <h3 className="text-white font-semibold mb-1">Zapier</h3>
                    <p className="text-blue-200 text-sm">Automation</p>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-8 w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by freelancers from</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇵🇭</span>
              <span className="font-medium text-gray-700">Philippines</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇮🇳</span>
              <span className="font-medium text-gray-700">India</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇺🇦</span>
              <span className="font-medium text-gray-700">Ukraine</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="font-medium text-gray-700">Brazil</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇵🇰</span>
              <span className="font-medium text-gray-700">Pakistan</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇧🇩</span>
              <span className="font-medium text-gray-700">Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}