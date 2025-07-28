'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const upcomingSessions = [
  {
    id: 1,
    title: 'AI-Powered Content Creation Masterclass',
    instructor: 'Sarah Martinez',
    instructorTitle: 'Content Strategy Expert',
    instructorAvatar: 'SM',
    date: '2024-01-25',
    time: '2:00 PM EST',
    duration: '90 minutes',
    attendees: 147,
    maxAttendees: 200,
    level: 'Intermediate',
    category: 'Content Creation',
    description: 'Learn advanced techniques for creating high-converting content using ChatGPT, Jasper, and Claude. Perfect for content creators and marketers.',
    topics: [
      'Advanced prompt engineering for content',
      'Brand voice consistency with AI',
      'Content optimization strategies',
      'Q&A with live examples'
    ],
    isLive: false,
    isUpcoming: true,
    requiresPlan: 'professional'
  },
  {
    id: 2,
    title: 'Virtual Assistant Automation Workshop',
    instructor: 'Elena Rodriguez',
    instructorTitle: 'VA Success Coach',
    instructorAvatar: 'ER',
    date: '2024-01-26',
    time: '10:00 AM EST',
    duration: '120 minutes',
    attendees: 203,
    maxAttendees: 250,
    level: 'Beginner',
    category: 'Virtual Assistant',
    description: 'Hands-on workshop covering Zapier automations, AI email management, and client communication systems.',
    topics: [
      'Building your first Zapier automation',
      'AI email templates and responses',
      'Calendar management systems',
      'Client onboarding workflows'
    ],
    isLive: true,
    isUpcoming: false,
    requiresPlan: 'starter'
  },
  {
    id: 3,
    title: 'SEO with AI Tools: Complete Guide',
    instructor: 'David Chen',
    instructorTitle: 'SEO Specialist',
    instructorAvatar: 'DC',
    date: '2024-01-27',
    time: '3:00 PM EST',
    duration: '105 minutes',
    attendees: 89,
    maxAttendees: 150,
    level: 'Advanced',
    category: 'SEO',
    description: 'Master AI-powered SEO strategies using Surfer SEO, SEMrush AI, and custom GPT solutions for keyword research and content optimization.',
    topics: [
      'AI-powered keyword research',
      'Content gap analysis with AI',
      'Automated technical SEO audits',
      'Link building automation'
    ],
    isLive: false,
    isUpcoming: true,
    requiresPlan: 'professional'
  }
];

const recordedSessions = [
  {
    id: 101,
    title: 'Getting Started with ChatGPT for Freelancers',
    instructor: 'Dr. Michael Chen',
    duration: '85 minutes',
    views: 1247,
    rating: 4.9,
    category: 'AI Fundamentals',
    thumbnail: '/thumbnails/chatgpt-basics.jpg',
    description: 'Complete beginner guide to using ChatGPT effectively in freelance work.',
    recordedDate: '2024-01-15'
  },
  {
    id: 102,
    title: 'Building Your First AI Automation',
    instructor: 'Sarah Martinez',
    duration: '120 minutes',
    views: 892,
    rating: 4.8,
    category: 'Automation',
    thumbnail: '/thumbnails/first-automation.jpg',
    description: 'Step-by-step guide to creating your first profitable automation workflow.',
    recordedDate: '2024-01-10'
  },
  {
    id: 103,
    title: 'Client Communication Scripts with AI',
    instructor: 'Elena Rodriguez',
    duration: '95 minutes',
    views: 1156,
    rating: 4.9,
    category: 'Communication',
    thumbnail: '/thumbnails/client-communication.jpg',
    description: 'Professional templates and scripts for all client interactions.',
    recordedDate: '2024-01-08'
  }
];

export default function LiveLearningPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      router.push('/login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  const categories = ['All', 'Virtual Assistant', 'Content Creation', 'SEO', 'Digital Marketing', 'Video Editing'];

  const filteredUpcoming = selectedCategory === 'All' 
    ? upcomingSessions 
    : upcomingSessions.filter(session => session.category === selectedCategory);

  const filteredRecorded = selectedCategory === 'All'
    ? recordedSessions
    : recordedSessions.filter(session => session.category === selectedCategory);

  const canAccessSession = (session: any) => {
    if (!user?.subscription) return false;
    
    const planHierarchy = { starter: 1, professional: 2, enterprise: 3 };
    const userPlan = planHierarchy[user.subscription.plan as keyof typeof planHierarchy] || 0;
    const requiredPlan = planHierarchy[session.requiresPlan as keyof typeof planHierarchy] || 1;
    
    return userPlan >= requiredPlan;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Live Learning Hub
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Join live sessions with expert instructors, ask questions in real-time, 
              and learn alongside peers from around the world.
            </p>
            
            {/* Live Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-purple-100">2 sessions live now • 5 starting soon</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                Join Live Session
              </button>
              <Link href="/schedule" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
                View Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white rounded-xl shadow-sm p-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Upcoming Sessions
            </button>
            <button
              onClick={() => setActiveTab('recorded')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'recorded'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Recorded Sessions
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Upcoming Sessions */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {filteredUpcoming.map((session) => (
              <div key={session.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        {session.isLive && (
                          <span className="flex items-center space-x-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>LIVE NOW</span>
                          </span>
                        )}
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {session.category}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {session.level}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {session.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {session.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-500">📅</span>
                            <span className="text-gray-700">{session.date} at {session.time}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-500">⏱️</span>
                            <span className="text-gray-700">{session.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-500">👥</span>
                            <span className="text-gray-700">
                              {session.attendees}/{session.maxAttendees} registered
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                          <ul className="space-y-1">
                            {session.topics.map((topic, index) => (
                              <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="ml-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                        {session.instructorAvatar}
                      </div>
                      <h4 className="font-bold text-gray-900">{session.instructor}</h4>
                      <p className="text-purple-600 text-sm">{session.instructorTitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${(session.attendees / session.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {canAccessSession(session) ? (
                        <>
                          {session.isLive ? (
                            <Link href={`/live/${session.id}`} className="btn bg-red-600 text-white hover:bg-red-700 px-6 py-3">
                              Join Live Session
                            </Link>
                          ) : (
                            <button className="btn btn-primary px-6 py-3">
                              Register Now
                            </button>
                          )}
                          <button className="text-gray-500 hover:text-gray-700">
                            🔖
                          </button>
                        </>
                      ) : (
                        <div className="text-center">
                          <p className="text-gray-500 text-sm mb-2">
                            Requires {session.requiresPlan.charAt(0).toUpperCase() + session.requiresPlan.slice(1)} Plan
                          </p>
                          <Link href="/pricing" className="btn btn-secondary px-6 py-3">
                            Upgrade Plan
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recorded Sessions */}
        {activeTab === 'recorded' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredRecorded.map((session) => (
              <div key={session.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">▶️</div>
                    <span className="text-gray-600 text-sm">{session.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      {session.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-600 text-sm">{session.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {session.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {session.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {session.instructor}</span>
                    <span>{session.views} views</span>
                  </div>
                  
                  <button className="w-full btn btn-primary">
                    Watch Recording
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule 1-on-1</h3>
            <p className="text-gray-600 text-sm mb-4">
              Book a private session with an expert mentor
            </p>
            <Link href="/mentorship" className="btn btn-secondary">
              Book Session
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Request Topic</h3>
            <p className="text-gray-600 text-sm mb-4">
              Suggest topics for future live sessions
            </p>
            <button className="btn btn-secondary">
              Submit Request
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Live Notifications</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get notified when sessions start
            </p>
            <button className="btn btn-secondary">
              Enable Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}