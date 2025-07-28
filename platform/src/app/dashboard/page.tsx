'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  country?: string;
  specialization?: string;
  currentLevel?: string;
  goals?: string[];
  avatar?: string | null;
  joinedAt?: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const currentCourses = [
    {
      id: 1,
      title: 'Virtual Assistant + AI Mastery',
      progress: 65,
      nextLesson: 'AI Email Management with ChatGPT',
      dueDate: '2024-02-15',
      thumbnail: '🤖'
    },
    {
      id: 2,
      title: 'Content Creator + AI Enhancement',
      progress: 30,
      nextLesson: 'Advanced Prompt Engineering',
      dueDate: '2024-02-20',
      thumbnail: '✍️'
    }
  ];

  const recentAchievements = [
    { title: 'First Course Enrollment', date: '2024-01-15', icon: '🎯' },
    { title: 'Community Introduction', date: '2024-01-16', icon: '👋' },
    { title: 'AI Tools Setup Complete', date: '2024-01-18', icon: '⚡' },
    { title: '50% Course Progress', date: '2024-02-01', icon: '📈' }
  ];

  const upcomingEvents = [
    {
      title: 'Live Q&A: Advanced ChatGPT Techniques',
      date: '2024-02-16',
      time: '2:00 PM UTC',
      type: 'webinar'
    },
    {
      title: 'Mentor Session with Sarah K.',
      date: '2024-02-18',
      time: '10:00 AM UTC',
      type: 'mentorship'
    },
    {
      title: 'Community Workshop: Portfolio Building',
      date: '2024-02-22',
      time: '3:00 PM UTC',
      type: 'workshop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HOU</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Dashboard</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <span className="text-xl">🔔</span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </div>
                  <span className="font-medium">{user.firstName}</span>
                </button>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.firstName}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to continue your AI-enhanced learning journey?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Progress</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Courses Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">48%</div>
                  <div className="text-sm text-gray-600">Overall Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
                  <div className="text-sm text-gray-600">Hours Learned</div>
                </div>
              </div>
            </div>

            {/* Current Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                <Link href="/courses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Browse all courses
                </Link>
              </div>
              
              <div className="space-y-4">
                {currentCourses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{course.thumbnail}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Next: {course.nextLesson}
                          </p>
                          <div className="flex items-center mt-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="btn btn-primary text-sm"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-sm text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/courses" className="block w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  📚 Browse Courses
                </Link>
                <Link href="/community" className="block w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  👥 Join Community
                </Link>
                <Link href="/jobs" className="block w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  💼 Find Jobs
                </Link>
                <Link href="/profile" className="block w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  ⚙️ Settings
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                    <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                      event.type === 'webinar' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'mentorship' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Our support team is here to help you succeed.
              </p>
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 text-sm w-full">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}