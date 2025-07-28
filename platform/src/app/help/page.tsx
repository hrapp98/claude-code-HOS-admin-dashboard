'use client';

import { useState } from 'react';
import Link from 'next/link';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    description: 'New to the platform? Start here for basics',
    articles: [
      { title: 'How to create your account', views: 2547, helpful: 98 },
      { title: 'Taking your first assessment', views: 1890, helpful: 95 },
      { title: 'Choosing the right course', views: 1654, helpful: 92 },
      { title: 'Setting up your profile', views: 1234, helpful: 89 }
    ]
  },
  {
    title: 'Courses & Learning',
    icon: '📚',
    description: 'Everything about our courses and curriculum',
    articles: [
      { title: 'How to access course materials', views: 3210, helpful: 97 },
      { title: 'Understanding the course structure', views: 2890, helpful: 94 },
      { title: 'Downloading content for offline use', views: 2156, helpful: 91 },
      { title: 'Taking assessments and quizzes', views: 1987, helpful: 88 }
    ]
  },
  {
    title: 'AI Tools & Integration',
    icon: '🤖',
    description: 'Learn about AI tools and how to use them',
    articles: [
      { title: 'Getting discounts on AI tools', views: 4321, helpful: 99 },
      { title: 'Setting up ChatGPT for freelancing', views: 3654, helpful: 96 },
      { title: 'Integrating Zapier with your workflow', views: 2987, helpful: 93 },
      { title: 'Troubleshooting AI tool connections', views: 1876, helpful: 87 }
    ]
  },
  {
    title: 'Mentorship & Community',
    icon: '👥',
    description: 'Connect with mentors and fellow students',
    articles: [
      { title: 'How to book a mentorship session', views: 2765, helpful: 96 },
      { title: 'Community guidelines and rules', views: 1987, helpful: 91 },
      { title: 'Participating in live sessions', views: 1654, helpful: 89 },
      { title: 'Getting help from the community', views: 1432, helpful: 85 }
    ]
  },
  {
    title: 'Job Placement',
    icon: '💼',
    description: 'Find opportunities and land your dream job',
    articles: [
      { title: 'How job placement works', views: 3456, helpful: 97 },
      { title: 'Preparing for job interviews', views: 2890, helpful: 94 },
      { title: 'Building an impressive portfolio', views: 2543, helpful: 92 },
      { title: 'Negotiating freelance rates', views: 2187, helpful: 89 }
    ]
  },
  {
    title: 'Technical Support',
    icon: '🔧',
    description: 'Troubleshoot technical issues',
    articles: [
      { title: 'Video playback troubleshooting', views: 1987, helpful: 88 },
      { title: 'Login and account access issues', views: 1765, helpful: 92 },
      { title: 'Mobile app troubleshooting', views: 1543, helpful: 86 },
      { title: 'Browser compatibility guide', views: 1234, helpful: 83 }
    ]
  },
  {
    title: 'Billing & Subscriptions',
    icon: '💳',
    description: 'Manage your payments and subscriptions',
    articles: [
      { title: 'Understanding pricing plans', views: 2890, helpful: 95 },
      { title: 'How to cancel your subscription', views: 2156, helpful: 89 },
      { title: 'Payment methods and billing', views: 1876, helpful: 92 },
      { title: 'Refund policy and process', views: 1654, helpful: 88 }
    ]
  },
  {
    title: 'Platform Features',
    icon: '⚡',
    description: 'Make the most of all platform features',
    articles: [
      { title: 'Using the mobile app effectively', views: 2543, helpful: 93 },
      { title: 'Achievements and gamification', views: 2187, helpful: 90 },
      { title: 'Live streaming and video calls', views: 1890, helpful: 87 },
      { title: 'Affiliate program guide', views: 1654, helpful: 85 }
    ]
  }
];

const popularArticles = [
  {
    title: 'How to Get Started: Complete Beginner\'s Guide',
    category: 'Getting Started',
    views: 15780,
    helpful: 98,
    lastUpdated: '2024-01-20',
    readTime: '5 min read'
  },
  {
    title: 'Maximizing Your AI Tool Discounts',
    category: 'AI Tools',
    views: 12450,
    helpful: 97,
    lastUpdated: '2024-01-18',
    readTime: '3 min read'
  },
  {
    title: 'Job Placement Success Stories and Tips',
    category: 'Job Placement',
    views: 9876,
    helpful: 96,
    lastUpdated: '2024-01-15',
    readTime: '7 min read'
  },
  {
    title: 'Setting Up Your Learning Environment',
    category: 'Courses',
    views: 8654,
    helpful: 95,
    lastUpdated: '2024-01-22',
    readTime: '4 min read'
  }
];

const quickActions = [
  {
    title: 'Reset Password',
    description: 'Can\'t access your account?',
    icon: '🔑',
    action: 'Reset Now',
    link: '/reset-password'
  },
  {
    title: 'Download Mobile App',
    description: 'Learn on the go',
    icon: '📱',
    action: 'Download',
    link: '/mobile'
  },
  {
    title: 'Contact Support',
    description: 'Get help from our team',
    icon: '💬',
    action: 'Chat Now',
    link: '/contact'
  },
  {
    title: 'Schedule Demo',
    description: 'See the platform in action',
    icon: '🎥',
    action: 'Book Demo',
    link: '/demo'
  }
];

const faqData = [
  {
    question: 'How quickly can I start earning more after joining?',
    answer: 'Most students see income increases within 30-60 days. Our average graduate increases their hourly rate by 150% within 90 days of completion. Success depends on your dedication, chosen specialization, and how quickly you implement what you learn.'
  },
  {
    question: 'Do I need any prior experience to start?',
    answer: 'No prior experience required! Our courses are designed for all skill levels. We start with fundamentals and gradually build to advanced techniques. Our assessment system helps place you at the right starting point.'
  },
  {
    question: 'What if I don\'t find a job after completing the course?',
    answer: 'We have a 94% job placement rate. If you complete your course and don\'t receive job referrals within 60 days, we\'ll extend your membership for free until you do. We\'re committed to your success.'
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Absolutely! All courses are self-paced with no deadlines. You can learn as quickly or slowly as you prefer. Live sessions are recorded if you can\'t attend, and mentorship sessions are scheduled at your convenience.'
  },
  {
    question: 'What AI tools will I learn to use?',
    answer: 'You\'ll master 20+ AI tools including ChatGPT, Zapier, Canva AI, Jasper, Surfer SEO, and more. We provide exclusive discounts and hands-on training for each tool, plus ongoing updates as new tools emerge.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied within 30 days, we\'ll refund your full payment, no questions asked.'
  }
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredCategories = searchQuery
    ? helpCategories.filter(category =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.articles.some(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : helpCategories;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🆘 Help Center
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get instant answers, step-by-step guides, and expert support. 
              We're here to help you succeed every step of the way.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full px-6 py-4 text-lg rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
                />
                <button className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <span className="btn btn-primary text-sm">{action.action}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">🔥 Most Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-green-600">
                      <span>👍</span>
                      <span className="text-sm font-medium">{article.helpful}%</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Updated {article.lastUpdated}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">📚 Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.articles.slice(0, 3).map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between">
                      <button className="text-left text-sm text-blue-600 hover:text-blue-800 hover:underline">
                        {article.title}
                      </button>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <span>👍</span>
                        <span>{article.helpful}%</span>
                      </div>
                    </div>
                  ))}
                  {category.articles.length > 3 && (
                    <button
                      onClick={() => setSelectedCategory(category.title)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all {category.articles.length} articles →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">❓ Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50"
                >
                  <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                  <span className={`text-blue-600 transform transition-transform ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
            Can't find what you're looking for? Our support team is available 24/7 
            to help you succeed. Get personalized assistance from real humans.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold mb-2">Live Chat</h4>
              <p className="text-green-100 text-sm mb-3">Average response time: 2 minutes</p>
              <button className="btn bg-white text-green-600 hover:bg-green-50 text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-bold mb-2">Email Support</h4>
              <p className="text-green-100 text-sm mb-3">Response within 4 hours</p>
              <Link href="/contact" className="btn bg-white text-green-600 hover:bg-green-50 text-sm">
                Send Email
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-bold mb-2">Phone Support</h4>
              <p className="text-green-100 text-sm mb-3">Mon-Fri 9AM-6PM EST</p>
              <button className="btn bg-white text-green-600 hover:bg-green-50 text-sm">
                Call Now
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-green-200 text-sm">
              🏆 Rated #1 in customer support by our students
            </p>
          </div>
        </div>

        {/* Help Center Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Help Center Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Help Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Issue Resolution Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2 min</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}