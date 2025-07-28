'use client';

import { useState } from 'react';
import Link from 'next/link';

const appFeatures = [
  {
    category: 'Learning on the Go',
    icon: '📚',
    features: [
      {
        title: 'Offline Course Access',
        description: 'Download lessons and watch without internet connection',
        icon: '📱'
      },
      {
        title: 'Audio-Only Mode',
        description: 'Listen to courses while commuting or multitasking',
        icon: '🎧'
      },
      {
        title: 'Progress Sync',
        description: 'Seamlessly continue where you left off across devices',
        icon: '🔄'
      },
      {
        title: 'Smart Notes',
        description: 'Take notes with voice-to-text and image capture',
        icon: '📝'
      }
    ]
  },
  {
    category: 'AI-Powered Tools',
    icon: '🤖',
    features: [
      {
        title: 'Voice Assistant',
        description: 'Ask questions and get instant help using voice commands',
        icon: '🎤'
      },
      {
        title: 'Camera Scanner',
        description: 'Scan documents and business cards with AI text extraction',
        icon: '📷'
      },
      {
        title: 'Practice Mode',
        description: 'Interactive AI scenarios for skill practice',
        icon: '🎯'
      },
      {
        title: 'Smart Reminders',
        description: 'AI-powered learning reminders based on your schedule',
        icon: '⏰'
      }
    ]
  },
  {
    category: 'Community & Networking',
    icon: '👥',
    features: [
      {
        title: 'Instant Messaging',
        description: 'Chat with mentors and peers in real-time',
        icon: '💬'
      },
      {
        title: 'Video Calls',
        description: 'One-tap video calls for mentorship sessions',
        icon: '📹'
      },
      {
        title: 'Networking Events',
        description: 'Join virtual meetups and workshops from your phone',
        icon: '🎪'
      },
      {
        title: 'Success Sharing',
        description: 'Share achievements and celebrate milestones',
        icon: '🎉'
      }
    ]
  },
  {
    category: 'Productivity & Jobs',
    icon: '💼',
    features: [
      {
        title: 'Job Alerts',
        description: 'Push notifications for matching job opportunities',
        icon: '🚨'
      },
      {
        title: 'Quick Apply',
        description: 'Apply to jobs with one-tap using your profile',
        icon: '⚡'
      },
      {
        title: 'Time Tracking',
        description: 'Track learning time and freelance work hours',
        icon: '⏱️'
      },
      {
        title: 'Earnings Tracker',
        description: 'Monitor your income growth and goal progress',
        icon: '📊'
      }
    ]
  }
];

const screenshots = [
  {
    title: 'Dashboard',
    description: 'Your personalized learning hub',
    image: '/mobile/dashboard.png'
  },
  {
    title: 'Course Player',
    description: 'Seamless video learning experience',
    image: '/mobile/course-player.png'
  },
  {
    title: 'AI Assistant',
    description: 'Get help instantly with voice commands',
    image: '/mobile/ai-assistant.png'
  },
  {
    title: 'Community',
    description: 'Connect with peers and mentors',
    image: '/mobile/community.png'
  }
];

const appStats = [
  { number: '4.9', label: 'App Store Rating', icon: '⭐' },
  { number: '50K+', label: 'Downloads', icon: '📱' },
  { number: '95%', label: 'User Retention', icon: '🔄' },
  { number: '24/7', label: 'Offline Access', icon: '🌐' }
];

export default function MobileAppPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [emailSignup, setEmailSignup] = useState('');

  const handleNotifyMe = () => {
    if (!emailSignup.trim()) return;
    
    // In a real app, save to database
    alert('Thanks! We\'ll notify you when the app launches.');
    setEmailSignup('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium">
                  Beta Testing
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn AI Skills 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Anywhere
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Take your AI-enhanced freelancing education with you. Learn offline, 
                practice with AI, connect with mentors, and land jobs - all from your mobile device.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>Download for iOS</span>
                </button>
                <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2">
                  <span>🤖</span>
                  <span>Download for Android</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {appStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                  
                  {/* Screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-4">📚</div>
                      <h3 className="font-bold text-gray-900 mb-2">Interactive Learning</h3>
                      <p className="text-gray-600 text-sm">AI-powered courses optimized for mobile</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                🎯
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Mobile Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mobile app brings the full power of Hire Overseas University to your pocket, 
            with features designed specifically for on-the-go learning and productivity.
          </p>
        </div>

        <div className="space-y-16">
          {appFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Screenshots Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See It in Action</h2>
            <p className="text-xl text-gray-600">Explore the app interface and features</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeScreenshot === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 hover:bg-blue-50'
                  }`}
                >
                  <h4 className="font-bold text-lg mb-2">{screenshot.title}</h4>
                  <p className={activeScreenshot === index ? 'text-blue-100' : 'text-gray-600'}>
                    {screenshot.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                  
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-4">
                        {screenshots[activeScreenshot].title === 'Dashboard' && '📊'}
                        {screenshots[activeScreenshot].title === 'Course Player' && '📹'}
                        {screenshots[activeScreenshot].title === 'AI Assistant' && '🤖'}
                        {screenshots[activeScreenshot].title === 'Community' && '👥'}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{screenshots[activeScreenshot].title}</h3>
                      <p className="text-gray-600 text-sm">{screenshots[activeScreenshot].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beta Testing CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧪 Join Our Beta Testing Program
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
            Be among the first to experience our mobile app! Beta testers get early access, 
            exclusive features, and direct input on app development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              placeholder="Enter your email for beta access"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button
              onClick={handleNotifyMe}
              className="btn bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 font-semibold"
            >
              Join Beta
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Early Access</h4>
              <p className="text-orange-100 text-sm">Get the app weeks before public launch</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-bold mb-2">Exclusive Rewards</h4>
              <p className="text-orange-100 text-sm">Free premium features and course access</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold mb-2">Direct Input</h4>
              <p className="text-orange-100 text-sm">Shape the app with your feedback</p>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span>📱</span>
                <span>iOS Requirements</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• iOS 14.0 or later</li>
                <li>• iPhone 8 or newer recommended</li>
                <li>• 2GB RAM minimum, 4GB recommended</li>
                <li>• 1GB free storage space</li>
                <li>• Camera access for document scanning</li>
                <li>• Microphone access for voice features</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span>🤖</span>
                <span>Android Requirements</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Android 8.0 (API level 26) or higher</li>
                <li>• 3GB RAM minimum, 4GB recommended</li>
                <li>• 1GB free storage space</li>
                <li>• Camera and microphone permissions</li>
                <li>• Internet connection for sync</li>
                <li>• Offline mode available for downloaded content</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Key Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React Native', 'AI/ML Integration', 'Offline Sync', 'Video Streaming',
                'Real-time Chat', 'Voice Recognition', 'Push Notifications', 'Biometric Auth'
              ].map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'When will the mobile app be available?',
                answer: 'We\'re currently in beta testing with plans to launch iOS and Android apps in Q2 2024. Join our beta program for early access!'
              },
              {
                question: 'Will the app work offline?',
                answer: 'Yes! You can download courses for offline viewing and take notes. Progress syncs automatically when you reconnect to the internet.'
              },
              {
                question: 'Is the mobile app free?',
                answer: 'The app is free to download. Access to courses requires an active subscription, which works across web and mobile platforms.'
              },
              {
                question: 'Can I attend live sessions on mobile?',
                answer: 'Absolutely! The app includes full video conferencing capabilities for live sessions, mentorship calls, and community events.'
              },
              {
                question: 'What AI features are included?',
                answer: 'The app includes voice assistant, smart note-taking, personalized learning recommendations, and AI-powered practice scenarios.'
              },
              {
                question: 'How much storage space is needed?',
                answer: 'The app itself is under 100MB. Downloaded courses vary, but typically 500MB-1GB per course. You can manage storage in settings.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}