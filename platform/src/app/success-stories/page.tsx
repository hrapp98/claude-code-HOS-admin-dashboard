'use client';

import { useState } from 'react';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    name: 'Maria Santos',
    role: 'Virtual Assistant',
    location: 'Philippines 🇵🇭',
    before: {
      income: 400,
      description: 'Working 60+ hours/week for multiple clients at $4/hour, struggling to make ends meet.',
      challenges: ['Low rates', 'Too many hours', 'No systems', 'Manual processes']
    },
    after: {
      income: 2100,
      description: 'Managing 15+ premium clients at $25/hour with automated workflows.',
      achievements: ['525% income increase', '40-hour work week', 'Premium positioning', 'Systematic processes']
    },
    course: 'Virtual Assistant + AI Mastery',
    duration: '3 months',
    avatar: 'MS',
    testimonial: "The AI tools I learned completely transformed my service offerings. I went from basic admin tasks to providing strategic automation solutions. My clients now see me as indispensable, and I've been able to triple my rates while working fewer hours. The community support was incredible throughout my journey.",
    keyTools: ['ChatGPT', 'Zapier', 'Notion AI', 'Calendly'],
    transformation: [
      { metric: 'Hourly Rate', before: '$4', after: '$25', change: '+525%' },
      { metric: 'Weekly Hours', before: '60', after: '40', change: '-33%' },
      { metric: 'Active Clients', before: '8', after: '15', change: '+87%' },
      { metric: 'Monthly Income', before: '$400', after: '$2,100', change: '+425%' }
    ],
    featured: true
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'SEO Specialist',
    location: 'India 🇮🇳',
    before: {
      income: 300,
      description: 'Working for agencies at $300/month, doing manual keyword research and basic optimization.',
      challenges: ['Agency dependency', 'Manual processes', 'Low pay', 'Limited skills']
    },
    after: {
      income: 2500,
      description: 'Running independent SEO consultancy with 3 enterprise clients using AI automation.',
      achievements: ['733% income increase', 'Enterprise clients', 'AI automation', 'Independent business']
    },
    course: 'SEO Specialist + AI Tools',
    duration: '4 months',
    avatar: 'RP',
    testimonial: "Learning AI-enhanced SEO techniques gave me a massive competitive advantage. I can deliver results in hours that used to take weeks. My clients are amazed by the speed and quality of my audits and reports. I've gone from being just another SEO guy to being the go-to AI SEO expert in my network.",
    keyTools: ['Surfer SEO', 'SEMrush AI', 'ChatGPT', 'Screaming Frog'],
    transformation: [
      { metric: 'Monthly Income', before: '$300', after: '$2,500', change: '+733%' },
      { metric: 'Audit Time', before: '8 hours', after: '1 hour', change: '-87%' },
      { metric: 'Client Type', before: 'Small Business', after: 'Enterprise', change: 'Upgraded' },
      { metric: 'Work Status', before: 'Employee', after: 'Independent', change: 'Freedom' }
    ],
    featured: true
  },
  {
    id: 3,
    name: 'Elena Volkov',
    role: 'Content Creator',
    location: 'Ukraine 🇺🇦',
    before: {
      income: 600,
      description: 'Writing basic articles at $8/hour, spending entire days on single pieces.',
      challenges: ['Time-intensive', 'Writer\'s block', 'Low rates', 'Quality inconsistency']
    },
    after: {
      income: 2800,
      description: 'Premium content strategist creating comprehensive campaigns at $35/hour.',
      achievements: ['366% income increase', 'Strategic positioning', 'Premium clients', 'Viral content']
    },
    course: 'Content Creator + AI Enhancement',
    duration: '2 months',
    avatar: 'EV',
    testimonial: "The AI content creation course taught me to work smarter, not harder. I now create comprehensive content strategies that clients love to pay premium rates for. My LinkedIn posts regularly go viral, and I've built a personal brand that attracts clients to me instead of the other way around.",
    keyTools: ['GPT-4', 'Jasper AI', 'Grammarly', 'Canva AI'],
    transformation: [
      { metric: 'Hourly Rate', before: '$8', after: '$35', change: '+337%' },
      { metric: 'Article Time', before: '6 hours', after: '1.5 hours', change: '-75%' },
      { metric: 'Content Quality', before: 'Basic', after: 'Strategic', change: 'Enhanced' },
      { metric: 'Client Acquisition', before: 'Outreach', after: 'Inbound', change: 'Automated' }
    ],
    featured: false
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    role: 'Video Editor',
    location: 'Mexico 🇲🇽',
    before: {
      income: 800,
      description: 'Basic video editing at $12/hour, spending days on simple projects.',
      challenges: ['Long render times', 'Manual processes', 'Limited creativity', 'Low margins']
    },
    after: {
      income: 3600,
      description: 'AI-enhanced video production specialist creating viral content at $45/hour.',
      achievements: ['350% income increase', 'Viral content', 'Premium positioning', 'Efficient workflows']
    },
    course: 'Video Editor + AI Production',
    duration: '5 months',
    avatar: 'CR',
    testimonial: "AI video tools revolutionized my workflow. I can now produce Hollywood-quality content at lightning speed. My turnaround time went from days to hours, and clients are willing to pay premium rates for the quality and speed I deliver. I've created multiple viral campaigns that generated millions of views.",
    keyTools: ['RunwayML', 'Descript', 'Adobe Sensei', 'Pictory'],
    transformation: [
      { metric: 'Hourly Rate', before: '$12', after: '$45', change: '+275%' },
      { metric: 'Project Time', before: '3 days', after: '6 hours', change: '-75%' },
      { metric: 'Content Quality', before: 'Basic', after: 'Premium', change: 'Enhanced' },
      { metric: 'Client Satisfaction', before: '3.8/5', after: '4.9/5', change: '+29%' }
    ],
    featured: false
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Digital Marketer',
    location: 'India 🇮🇳',
    before: {
      income: 500,
      description: 'Junior marketer running basic campaigns with limited analytics knowledge.',
      challenges: ['Manual optimization', 'Poor ROI', 'Limited skills', 'Junior level']
    },
    after: {
      income: 3200,
      description: 'AI marketing strategist managing enterprise campaigns with 300%+ ROI.',
      achievements: ['540% income increase', 'Enterprise clients', 'AI automation', 'High ROI']
    },
    course: 'Digital Marketer + AI Automation',
    duration: '6 months',
    avatar: 'PS',
    testimonial: "The AI marketing course opened up a completely new world for me. I went from running basic campaigns to creating sophisticated, self-optimizing marketing systems. My clients see 300%+ ROI improvements, and I'm now consulted on major marketing strategy decisions. The transformation has been incredible.",
    keyTools: ['HubSpot AI', 'Google AI', 'Facebook AI', 'Mailchimp AI'],
    transformation: [
      { metric: 'Monthly Income', before: '$500', after: '$3,200', change: '+540%' },
      { metric: 'Campaign ROI', before: '120%', after: '400%', change: '+233%' },
      { metric: 'Client Level', before: 'Small Business', after: 'Enterprise', change: 'Upgraded' },
      { metric: 'Campaign Mgmt', before: '5 campaigns', after: '25 campaigns', change: '+400%' }
    ],
    featured: true
  },
  {
    id: 6,
    name: 'Alex Johnson',
    role: 'Social Media Manager',
    location: 'Brazil 🇧🇷',
    before: {
      income: 700,
      description: 'Managing 3 social media accounts manually, struggling with content creation.',
      challenges: ['Manual posting', 'Content struggles', 'Limited reach', 'Time-intensive']
    },
    after: {
      income: 2400,
      description: 'Managing 15+ accounts with AI-powered content and 300% faster growth.',
      achievements: ['243% income increase', '400% more accounts', 'Viral content', 'Automated workflows']
    },
    course: 'Social Media Manager + AI Tools',
    duration: '3 months',
    avatar: 'AJ',
    testimonial: "The AI tools I learned help me manage 15+ client accounts effortlessly. I create engaging content in minutes that used to take hours, and my clients' follower growth has increased by 300%. The automation workflows have given me my life back while growing my business exponentially.",
    keyTools: ['Buffer AI', 'Hootsuite AI', 'ChatGPT', 'Canva AI'],
    transformation: [
      { metric: 'Accounts Managed', before: '3', after: '15', change: '+400%' },
      { metric: 'Content Time', before: '4 hours', after: '30 minutes', change: '-87%' },
      { metric: 'Growth Rate', before: '5%/month', after: '20%/month', change: '+300%' },
      { metric: 'Monthly Income', before: '$700', after: '$2,400', change: '+243%' }
    ],
    featured: false
  }
];

const categories = [
  { name: 'All Stories', count: successStories.length },
  { name: 'Virtual Assistant', count: 1 },
  { name: 'SEO Specialist', count: 1 },
  { name: 'Content Creator', count: 1 },
  { name: 'Video Editor', count: 1 },
  { name: 'Digital Marketer', count: 1 },
  { name: 'Social Media Manager', count: 1 }
];

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const filteredStories = selectedCategory === 'All Stories' 
    ? successStories 
    : successStories.filter(story => story.role === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Real transformations from overseas freelancers who mastered AI-enhanced skills and multiplied their income
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">94%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">350%</div>
                <div className="text-purple-200">Avg Income Increase</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">30</div>
                <div className="text-purple-200">Days to First Win</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$2.1M</div>
                <div className="text-purple-200">Total Earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filter by Role</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {filteredStories.map((story) => (
                <div key={story.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${story.featured ? 'ring-2 ring-purple-500' : ''}`}>
                  {story.featured && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                      ⭐ Featured Success Story
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {story.avatar}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                          <p className="text-lg text-purple-600 font-medium">{story.role}</p>
                          <p className="text-gray-600">{story.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          ${story.after.income.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">per month</div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2">
                          +{Math.round(((story.after.income - story.before.income) / story.before.income) * 100)}%
                        </div>
                      </div>
                    </div>

                    {/* Transformation Metrics */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-red-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                          <span className="mr-2">📉</span> Before
                        </h4>
                        <div className="space-y-3">
                          <div className="text-2xl font-bold text-red-600">
                            ${story.before.income}/month
                          </div>
                          <p className="text-red-700 text-sm">{story.before.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {story.before.challenges.map((challenge: string, index: number) => (
                              <span key={index} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                                {challenge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                          <span className="mr-2">📈</span> After
                        </h4>
                        <div className="space-y-3">
                          <div className="text-2xl font-bold text-green-600">
                            ${story.after.income.toLocaleString()}/month
                          </div>
                          <p className="text-green-700 text-sm">{story.after.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {story.after.achievements.map((achievement: string, index: number) => (
                              <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Transformation */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Transformation Breakdown</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {story.transformation.map((metric: any, index: number) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4">
                            <div>
                              <div className="font-medium text-gray-900">{metric.metric}</div>
                              <div className="text-sm text-gray-600">{metric.before} → {metric.after}</div>
                            </div>
                            <div className={`font-bold ${metric.change.includes('+') ? 'text-green-600' : metric.change.includes('-') ? 'text-red-600' : 'text-blue-600'}`}>
                              {metric.change}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-bold text-blue-800 mb-4">In Their Words</h4>
                      <blockquote className="text-blue-900 italic text-lg leading-relaxed">
                        "{story.testimonial}"
                      </blockquote>
                    </div>

                    {/* Course & Tools */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Course Completed:</h4>
                        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">
                          {story.course}
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          Completed in {story.duration}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key AI Tools Mastered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {story.keyTools.map((tool: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
                      <h4 className="text-lg font-bold mb-2">Ready to Start Your Success Story?</h4>
                      <p className="text-purple-100 mb-4">
                        Join {story.name} and 2,500+ other successful graduates
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href={`/courses/${story.course.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="btn bg-white text-purple-600 hover:bg-purple-50">
                          View Course
                        </Link>
                        <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600">
                          Start Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            These transformations happen every month. With our AI-enhanced training and proven methodology, you could be our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
              Start Your Journey
            </Link>
            <Link href="/consultation" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}