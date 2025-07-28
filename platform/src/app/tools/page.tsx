'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const aiTools = [
  {
    id: 1,
    name: 'ChatGPT Plus',
    provider: 'OpenAI',
    category: 'Content & Writing',
    description: 'Advanced AI assistant for content creation, coding, analysis, and complex problem-solving.',
    features: ['GPT-4 access', 'Faster response times', 'Priority access', 'Custom instructions'],
    price: 20,
    originalPrice: 20,
    discount: 0,
    studentDiscount: 15,
    rating: 4.9,
    users: '2.1M+',
    logo: '🤖',
    specialization: ['Content Creator', 'Virtual Assistant', 'Digital Marketer'],
    difficulty: 'Beginner',
    integration: 'Direct API',
    freeTrialDays: 7,
    isPopular: true,
    courseIncluded: true
  },
  {
    id: 2,
    name: 'Zapier Professional',
    provider: 'Zapier',
    category: 'Automation',
    description: 'Connect and automate workflows between 5,000+ apps without coding.',
    features: ['Unlimited automations', '750+ premium apps', 'Multi-step workflows', 'Advanced filters'],
    price: 19.99,
    originalPrice: 19.99,
    discount: 20,
    studentDiscount: 25,
    rating: 4.7,
    users: '750K+',
    logo: '⚡',
    specialization: ['Virtual Assistant', 'Digital Marketer'],
    difficulty: 'Intermediate',
    integration: 'Native connector',
    freeTrialDays: 14,
    isPopular: true,
    courseIncluded: true
  },
  {
    id: 3,
    name: 'Surfer SEO',
    provider: 'Surfer',
    category: 'SEO & Marketing',
    description: 'AI-powered SEO optimization tool for content planning, writing, and optimization.',
    features: ['Content Editor', 'SERP analysis', 'Keyword research', 'Content audit'],
    price: 59,
    originalPrice: 89,
    discount: 33,
    studentDiscount: 40,
    rating: 4.8,
    users: '150K+',
    logo: '🏄‍♂️',
    specialization: ['SEO Specialist', 'Content Creator'],
    difficulty: 'Intermediate',
    integration: 'API available',
    freeTrialDays: 7,
    isPopular: false,
    courseIncluded: true
  },
  {
    id: 4,
    name: 'Jasper AI',
    provider: 'Jasper',
    category: 'Content & Writing',
    description: 'AI writing assistant trained on marketing copy that converts.',
    features: ['50+ templates', 'Brand voice', 'Long-form content', 'Plagiarism checker'],
    price: 49,
    originalPrice: 59,
    discount: 17,
    studentDiscount: 30,
    rating: 4.6,
    users: '500K+',
    logo: '✍️',
    specialization: ['Content Creator', 'Digital Marketer'],
    difficulty: 'Beginner',
    integration: 'Chrome extension',
    freeTrialDays: 5,
    isPopular: false,
    courseIncluded: true
  },
  {
    id: 5,
    name: 'Canva Pro',
    provider: 'Canva',
    category: 'Design & Visual',
    description: 'Design platform with AI-powered tools for creating professional graphics.',
    features: ['100M+ premium elements', 'Background remover', 'Magic resize', 'Brand kit'],
    price: 12.99,
    originalPrice: 14.99,
    discount: 13,
    studentDiscount: 20,
    rating: 4.7,
    users: '100M+',
    logo: '🎨',
    specialization: ['Social Media Manager', 'Content Creator', 'Digital Marketer'],
    difficulty: 'Beginner',
    integration: 'Web platform',
    freeTrialDays: 30,
    isPopular: true,
    courseIncluded: false
  },
  {
    id: 6,
    name: 'Notion AI',
    provider: 'Notion',
    category: 'Productivity',
    description: 'AI-powered workspace for notes, docs, wikis, and project management.',
    features: ['AI writing assistant', 'Database automation', 'Template gallery', 'Team collaboration'],
    price: 10,
    originalPrice: 10,
    discount: 0,
    studentDiscount: 0,
    rating: 4.5,
    users: '30M+',
    logo: '📝',
    specialization: ['Virtual Assistant', 'Content Creator'],
    difficulty: 'Beginner',
    integration: 'Native AI',
    freeTrialDays: 0,
    isPopular: false,
    courseIncluded: true
  },
  {
    id: 7,
    name: 'RunwayML',
    provider: 'Runway',
    category: 'Video & Media',
    description: 'AI-powered creative tools for video editing, image generation, and more.',
    features: ['AI video editing', 'Green screen', 'Motion tracking', 'Text to video'],
    price: 15,
    originalPrice: 15,
    discount: 0,
    studentDiscount: 25,
    rating: 4.4,
    users: '2M+',
    logo: '🎬',
    specialization: ['Video Editor', 'Content Creator'],
    difficulty: 'Advanced',
    integration: 'Desktop app',
    freeTrialDays: 3,
    isPopular: false,
    courseIncluded: true
  },
  {
    id: 8,
    name: 'Grammarly Business',
    provider: 'Grammarly',
    category: 'Content & Writing',
    description: 'AI writing assistant for grammar, tone, and style optimization.',
    features: ['Advanced grammar check', 'Tone detection', 'Brand style guide', 'Team insights'],
    price: 15,
    originalPrice: 15,
    discount: 0,
    studentDiscount: 10,
    rating: 4.6,
    users: '30M+',
    logo: '✅',
    specialization: ['Content Creator', 'Virtual Assistant'],
    difficulty: 'Beginner',
    integration: 'Browser extension',
    freeTrialDays: 7,
    isPopular: false,
    courseIncluded: false
  }
];

const categories = [
  'All Tools',
  'Content & Writing', 
  'Automation',
  'SEO & Marketing',
  'Design & Visual',
  'Video & Media',
  'Productivity'
];

const specializations = [
  'All Specializations',
  'Virtual Assistant',
  'Content Creator', 
  'SEO Specialist',
  'Digital Marketer',
  'Video Editor',
  'Social Media Manager'
];

export default function AIToolsPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All Specializations');
  const [priceRange, setPriceRange] = useState('all');
  const [showOnlyDiscounts, setShowOnlyDiscounts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      // Allow access without login but with limited features
      setIsLoading(false);
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data');
    }

    setIsLoading(false);
  }, []);

  const filteredTools = aiTools.filter(tool => {
    const categoryMatch = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    const specializationMatch = selectedSpecialization === 'All Specializations' || 
      tool.specialization.includes(selectedSpecialization);
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'free' && tool.price === 0) ||
      (priceRange === 'low' && tool.price > 0 && tool.price <= 20) ||
      (priceRange === 'mid' && tool.price > 20 && tool.price <= 50) ||
      (priceRange === 'high' && tool.price > 50);
    const discountMatch = !showOnlyDiscounts || tool.discount > 0 || tool.studentDiscount > 0;

    return categoryMatch && specializationMatch && priceMatch && discountMatch;
  });

  const totalSavings = user ? 
    filteredTools.reduce((sum, tool) => sum + (tool.originalPrice * tool.studentDiscount / 100), 0) :
    filteredTools.reduce((sum, tool) => sum + (tool.originalPrice * tool.discount / 100), 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Tools Marketplace
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Discover, learn, and save on the best AI tools for freelancers. 
              Get exclusive discounts and comprehensive training.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-indigo-200">Curated AI Tools</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">${Math.round(totalSavings)}</div>
                <div className="text-indigo-200">
                  {user ? 'Your Potential Savings' : 'Average Savings'}
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-indigo-200">Support & Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="low">$1 - $20</option>
                <option value="mid">$21 - $50</option>
                <option value="high">$50+</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnlyDiscounts}
                  onChange={(e) => setShowOnlyDiscounts(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Show only discounted tools</span>
              </label>
            </div>
          </div>
        </div>

        {/* Student Discount Banner */}
        {user && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-8">
            <h3 className="text-xl font-bold mb-2">🎓 Student Exclusive Discounts</h3>
            <p className="text-green-100">
              As a Hire Overseas University student, you get special pricing on all tools. 
              Save up to 40% more than regular users!
            </p>
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const currentDiscount = user ? tool.studentDiscount : tool.discount;
            const currentPrice = tool.originalPrice * (1 - currentDiscount / 100);
            const savings = tool.originalPrice - currentPrice;

            return (
              <div key={tool.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.logo}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                        <p className="text-sm text-gray-500">by {tool.provider}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-1">
                      {tool.isPopular && (
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                          Popular
                        </span>
                      )}
                      {currentDiscount > 0 && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {currentDiscount}% OFF
                        </span>
                      )}
                      {tool.courseIncluded && (
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                          Course Included
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tool.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600">{tool.rating}</span>
                      <span className="text-xs text-gray-500">({tool.users})</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {tool.features.length > 3 && (
                        <li className="text-xs text-indigo-600">
                          +{tool.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tool.specialization.map((spec, index) => (
                        <span key={index} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${currentPrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500">/month</span>
                      {currentDiscount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          ${tool.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {savings > 0 && (
                      <p className="text-sm text-green-600">
                        Save ${savings.toFixed(2)}/month
                        {user && ' with student discount'}
                      </p>
                    )}
                  </div>

                  {/* Trial Info */}
                  {tool.freeTrialDays > 0 && (
                    <div className="mb-4 p-2 bg-blue-50 rounded text-center">
                      <span className="text-sm text-blue-800">
                        🎁 {tool.freeTrialDays}-day free trial available
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-2">
                    <Link 
                      href={`/tools/${tool.id}`}
                      className="w-full btn btn-primary text-center"
                    >
                      Learn More & Get Discount
                    </Link>
                    {tool.courseIncluded && (
                      <Link 
                        href={`/courses?tool=${tool.name.toLowerCase()}`}
                        className="w-full btn btn-secondary text-center text-sm"
                      >
                        📚 View Training Course
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Tools');
                setSelectedSpecialization('All Specializations');
                setPriceRange('all');
                setShowOnlyDiscounts(false);
              }}
              className="btn btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find the Right Tool?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            Our AI tool experts can recommend the perfect stack for your specific needs and budget. 
            Get personalized recommendations and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold">
              Get Personalized Recommendations
            </Link>
            <Link href="/assessment" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold">
              Take Tool Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}