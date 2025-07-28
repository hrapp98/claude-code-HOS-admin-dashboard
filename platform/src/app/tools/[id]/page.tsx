'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ToolDetailPage() {
  const [tool, setTool] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const router = useRouter();
  const toolId = params.id;

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data');
      }
    }

    // Mock tool data - in real app would fetch from API
    const mockTools: Record<string, any> = {
      '1': {
        id: 1,
        name: 'ChatGPT Plus',
        provider: 'OpenAI',
        category: 'Content & Writing',
        description: 'Advanced AI assistant for content creation, coding, analysis, and complex problem-solving.',
        longDescription: 'ChatGPT Plus gives you access to GPT-4, OpenAI\'s most advanced AI model. Perfect for freelancers who need reliable, fast, and intelligent assistance with writing, coding, analysis, and creative tasks.',
        features: ['GPT-4 access', 'Faster response times', 'Priority access', 'Custom instructions'],
        detailedFeatures: [
          {
            title: 'GPT-4 Access',
            description: 'Access to the most advanced language model for superior quality responses',
            icon: '🧠'
          },
          {
            title: 'Faster Response Times',
            description: 'Skip the queue and get responses up to 10x faster than free users',
            icon: '⚡'
          },
          {
            title: 'Priority Access',
            description: 'Access ChatGPT even during peak hours when free users can\'t',
            icon: '🎯'
          },
          {
            title: 'Custom Instructions',
            description: 'Set persistent instructions so ChatGPT remembers your preferences',
            icon: '⚙️'
          }
        ],
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
        courseIncluded: true,
        pros: [
          'Most advanced AI model available',
          'Excellent for complex reasoning tasks',
          'Great customer support',
          'Regular model updates',
          'Works across many languages'
        ],
        cons: [
          'Can be expensive for heavy users',
          'Still has knowledge cutoff',
          'May be overkill for simple tasks'
        ],
        useCases: [
          {
            title: 'Content Creation',
            description: 'Write blog posts, social media content, and marketing copy',
            example: 'Generate a 1,000-word blog post about AI in freelancing with proper SEO optimization'
          },
          {
            title: 'Email Management',
            description: 'Draft professional emails and responses for clients',
            example: 'Create follow-up email sequences for potential clients with personalized touches'
          },
          {
            title: 'Research & Analysis',
            description: 'Analyze data, research topics, and summarize information',
            example: 'Research competitor strategies and provide actionable insights for client campaigns'
          }
        ],
        tutorials: [
          { title: 'Getting Started with ChatGPT Plus', duration: '15 min', type: 'video' },
          { title: 'Advanced Prompt Engineering', duration: '30 min', type: 'interactive' },
          { title: 'Custom Instructions Setup', duration: '10 min', type: 'written' }
        ],
        alternatives: [
          { name: 'Claude Pro', price: 20, description: 'Anthropic\'s AI assistant' },
          { name: 'Jasper AI', price: 49, description: 'Marketing-focused AI writer' }
        ]
      }
    };

    const foundTool = mockTools[toolId as string];
    if (foundTool) {
      setTool(foundTool);
    } else {
      router.push('/tools');
      return;
    }

    setIsLoading(false);
  }, [toolId, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!tool) {
    return null;
  }

  const currentDiscount = user ? tool.studentDiscount : tool.discount;
  const currentPrice = tool.originalPrice * (1 - currentDiscount / 100);
  const savings = tool.originalPrice - currentPrice;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/tools" className="hover:text-gray-700">AI Tools</Link>
            <span>→</span>
            <span className="text-gray-900">{tool.name}</span>
          </div>

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{tool.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                      {tool.isPopular && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Popular Choice
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-600 mb-2">by {tool.provider}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-medium">{tool.rating}</span>
                        <span className="text-sm text-gray-500">({tool.users} users)</span>
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tool.category}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {tool.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {tool.longDescription}
                </p>

                {/* Specializations */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Perfect for:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.specialization.map((spec: string, index: number) => (
                      <span key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${currentPrice.toFixed(2)}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    {savings > 0 && (
                      <div className="space-y-1">
                        <span className="text-lg text-gray-500 line-through">
                          ${tool.originalPrice.toFixed(2)}
                        </span>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Save ${savings.toFixed(2)}/month
                          {user && ' (Student Discount)'}
                        </div>
                      </div>
                    )}
                  </div>

                  {tool.freeTrialDays > 0 && (
                    <div className="bg-blue-600 text-white text-center py-2 rounded-lg mb-4">
                      🎁 {tool.freeTrialDays}-day free trial
                    </div>
                  )}

                  <div className="space-y-3">
                    <button className="w-full btn btn-primary py-3 text-lg">
                      Get {currentDiscount > 0 ? 'Discount' : 'Started'}
                    </button>
                    {tool.courseIncluded && (
                      <Link 
                        href={`/courses?tool=${tool.name.toLowerCase()}`}
                        className="w-full btn btn-secondary py-3 text-center"
                      >
                        📚 View Training Course
                      </Link>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Cancel anytime</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>24/7 customer support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Money-back guarantee</span>
                      </div>
                      {user && (
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>Student discount applied</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-t-2xl shadow-sm">
            <div className="flex space-x-8 px-8 py-4 border-b border-gray-200">
              {[
                { key: 'overview', label: 'Overview', icon: '📋' },
                { key: 'features', label: 'Features', icon: '⚡' },
                { key: 'use-cases', label: 'Use Cases', icon: '💡' },
                { key: 'tutorials', label: 'Tutorials', icon: '🎓' },
                { key: 'reviews', label: 'Reviews', icon: '⭐' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.key
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-2xl shadow-sm p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What is {tool.name}?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {tool.longDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">✅ Pros</h4>
                    <ul className="space-y-2">
                      {tool.pros.map((pro: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">❌ Cons</h4>
                    <ul className="space-y-2">
                      {tool.cons.map((con: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Similar Tools</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tool.alternatives.map((alt: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-gray-900">{alt.name}</h5>
                          <span className="text-sm text-gray-500">${alt.price}/mo</span>
                        </div>
                        <p className="text-sm text-gray-600">{alt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tool.detailedFeatures.map((feature: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases Tab */}
            {activeTab === 'use-cases' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Freelancers Use {tool.name}</h3>
                <div className="space-y-6">
                  {tool.useCases.map((useCase: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h4>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-medium text-blue-900 mb-2">Example:</h5>
                        <p className="text-blue-800 italic">{useCase.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tutorials Tab */}
            {activeTab === 'tutorials' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h3>
                {user ? (
                  <div className="space-y-4">
                    {tool.tutorials.map((tutorial: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">
                            {tutorial.type === 'video' ? '📹' : tutorial.type === 'interactive' ? '🖱️' : '📄'}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{tutorial.title}</h4>
                            <p className="text-sm text-gray-500">{tutorial.duration} • {tutorial.type}</p>
                          </div>
                        </div>
                        <button className="btn btn-primary">Start</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Exclusive Content</h4>
                    <p className="text-gray-600 mb-6">
                      Access comprehensive tutorials and guides as a student.
                    </p>
                    <Link href="/register" className="btn btn-primary">
                      Sign Up for Free
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Students Say</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Maria Santos',
                      role: 'Virtual Assistant',
                      rating: 5,
                      review: 'ChatGPT Plus has completely transformed my VA business. The faster response times and GPT-4 access help me provide much better service to my clients.',
                      date: '2 weeks ago'
                    },
                    {
                      name: 'David Chen',
                      role: 'Content Creator',
                      rating: 5,
                      review: 'The custom instructions feature is a game-changer. I can set up my brand voice once and ChatGPT maintains it across all content.',
                      date: '1 month ago'
                    },
                    {
                      name: 'Elena Rodriguez',
                      role: 'SEO Specialist',
                      rating: 4,
                      review: 'Great for research and content optimization. Sometimes I wish it had more recent data, but overall excellent value.',
                      date: '3 weeks ago'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">⭐</span>
                          ))}
                          <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{review.review}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started with {tool.name}?
            </h3>
            <p className="text-indigo-100 mb-6">
              Join thousands of successful freelancers who are already using this tool to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-semibold">
                Get {currentDiscount > 0 ? 'Discount' : 'Started'} Now
              </button>
              {tool.courseIncluded && (
                <Link href={`/courses?tool=${tool.name.toLowerCase()}`} className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold">
                  View Training Course
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}