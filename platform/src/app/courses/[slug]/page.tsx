'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock course data - in a real app, this would come from an API
const getCourseData = (slug: string) => {
  const courses: Record<string, any> = {
    'virtual-assistant': {
      id: 'virtual-assistant',
      title: 'Virtual Assistant + AI Mastery',
      subtitle: 'Transform your VA services with cutting-edge AI automation',
      description: 'Master AI-powered email management, scheduling automation, and intelligent client communication systems to become a premium virtual assistant.',
      duration: '8 weeks',
      level: 'Beginner to Advanced',
      students: 847,
      rating: 4.9,
      reviews: 234,
      price: 297,
      originalPrice: 497,
      image: '🤖',
      color: 'from-blue-500 to-purple-600',
      instructor: {
        name: 'Sarah Martinez',
        title: 'Senior VA Consultant & AI Expert',
        experience: '8 years helping VAs scale to $50K+/year',
        avatar: 'SM',
        bio: 'Former corporate executive turned VA consultant. Has helped over 2,400 virtual assistants transform their careers using AI tools.',
        linkedin: '#',
        website: '#'
      },
      curriculum: [
        {
          week: 'Week 1',
          title: 'AI Foundations for Virtual Assistants',
          lessons: [
            'Introduction to AI tools for VAs',
            'Setting up your AI toolkit',
            'ChatGPT basics for client communication',
            'Email automation fundamentals'
          ],
          duration: '3 hours',
          assignments: 1
        },
        {
          week: 'Week 2',
          title: 'Advanced Email Management with AI',
          lessons: [
            'Smart email filtering and prioritization',
            'AI-powered response templates',
            'Client communication automation',
            'Managing multiple inboxes efficiently'
          ],
          duration: '4 hours',
          assignments: 2
        },
        {
          week: 'Week 3',
          title: 'Calendar & Scheduling Automation',
          lessons: [
            'Calendly AI integration',
            'Cross-timezone scheduling',
            'Meeting preparation automation',
            'Follow-up sequence automation'
          ],
          duration: '3.5 hours',
          assignments: 1
        },
        {
          week: 'Week 4',
          title: 'Task Management & Project Coordination',
          lessons: [
            'Notion AI for project management',
            'Automated task creation and tracking',
            'Client reporting automation',
            'Team collaboration tools'
          ],
          duration: '4 hours',
          assignments: 2
        },
        {
          week: 'Week 5',
          title: 'Content Creation & Social Media',
          lessons: [
            'AI content creation for clients',
            'Social media post automation',
            'Brand voice consistency with AI',
            'Content calendar management'
          ],
          duration: '3.5 hours',
          assignments: 1
        },
        {
          week: 'Week 6',
          title: 'Research & Data Analysis',
          lessons: [
            'AI-powered market research',
            'Competitive analysis automation',
            'Data visualization for clients',
            'Report generation with AI'
          ],
          duration: '4 hours',
          assignments: 2
        },
        {
          week: 'Week 7',
          title: 'Client Onboarding & Systems',
          lessons: [
            'Automated client onboarding',
            'Creating SOP templates',
            'Quality control systems',
            'Performance tracking'
          ],
          duration: '3.5 hours',
          assignments: 1
        },
        {
          week: 'Week 8',
          title: 'Scaling & Premium Positioning',
          lessons: [
            'Pricing your AI-enhanced services',
            'Creating service packages',
            'Client retention strategies',
            'Building your VA agency'
          ],
          duration: '4 hours',
          assignments: 1
        }
      ],
      features: [
        '30+ AI tool integrations',
        'Live weekly Q&A sessions',
        '1-on-1 mentor sessions',
        'Private community access',
        'Lifetime course updates',
        'Money-back guarantee',
        'Certificate of completion',
        'Direct job referrals'
      ],
      tools: ['ChatGPT', 'Zapier', 'Calendly AI', 'Notion AI', 'Buffer', 'Canva AI'],
      outcomes: [
        'Automate 80% of routine administrative tasks',
        'Handle 3x more clients efficiently with AI workflows',
        'Increase rates from $5 to $20+ per hour',
        'Master advanced ChatGPT prompting for client communication',
        'Build systematic processes for consistent quality',
        'Create compelling service packages that sell themselves'
      ],
      testimonials: [
        {
          name: 'Maria Santos',
          role: 'Virtual Assistant',
          location: 'Philippines',
          rating: 5,
          text: "This course completely transformed my VA business. I went from struggling to find clients at $4/hour to having a waitlist at $25/hour. The AI tools Sarah teaches are game-changers!",
          income: '525% increase in 4 months'
        },
        {
          name: 'Priya Sharma',
          role: 'Executive Assistant',
          location: 'India',
          rating: 5,
          text: "The automation workflows I learned help me manage 12 clients simultaneously. What used to take me 8 hours now takes 2 hours with better results.",
          income: '300% increase in 3 months'
        }
      ],
      faqs: [
        {
          question: 'Do I need prior experience with AI tools?',
          answer: 'No! This course is designed for complete beginners. We start with the basics and gradually build up your skills.'
        },
        {
          question: 'What if I already have some VA experience?',
          answer: 'Perfect! The course will help you integrate AI into your existing workflows and significantly increase your value to clients.'
        },
        {
          question: 'How much time do I need to dedicate per week?',
          answer: 'Plan for 4-6 hours per week including lessons, practice, and assignments. The course is designed to fit around your current work schedule.'
        }
      ]
    }
  };

  return courses[slug] || null;
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = getCourseData(slug);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link href="/courses" className="btn btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In a real app, this would handle payment and enrollment
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center text-3xl`}>
                  {course.image}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h1>
                  <p className="text-xl text-gray-600">{course.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <span>⭐</span>
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>👥</span>
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📊</span>
                  <span>{course.level}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Instructor</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {course.instructor.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900">{course.instructor.name}</h4>
                    <p className="text-blue-600 font-medium mb-2">{course.instructor.title}</p>
                    <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                    <p className="text-sm text-gray-500">{course.instructor.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Course Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${course.price}
                  </div>
                  <div className="text-lg text-gray-500 line-through mb-4">
                    ${course.originalPrice}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Save ${course.originalPrice - course.price}
                  </div>
                </div>

                <button
                  onClick={handleEnroll}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg mb-4 transition-colors ${
                    isEnrolled 
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isEnrolled ? 'Enrolled ✓' : 'Enroll Now'}
                </button>

                <div className="text-center text-sm text-gray-500 mb-6">
                  30-day money-back guarantee
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">This course includes:</h4>
                  {course.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container py-12">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'instructor', label: 'Instructor' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What You'll Learn */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.outcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Tools */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Tools You'll Master</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {course.tools.map((tool: string, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="font-semibold text-gray-900">{tool}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {course.faqs.map((faq: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  {course.curriculum.map((module: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {module.week}: {module.title}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {module.duration} • {module.assignments} assignment{module.assignments !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <ul className="space-y-2">
                          {module.lessons.map((lesson: string, lessonIndex: number) => (
                            <li key={lessonIndex} className="flex items-center space-x-3">
                              <span className="text-blue-500">▶️</span>
                              <span className="text-gray-700">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                <div className="space-y-6">
                  {course.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">⭐</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {testimonial.income}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Courses */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Students Also Enrolled In</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-xl">
                  ✍️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Content Creator + AI Enhancement</h4>
                  <p className="text-sm text-gray-600">6 weeks • $247</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Create engaging content 10x faster with AI tools</p>
              <Link href="/courses/content-creator" className="btn btn-secondary text-sm">
                View Course
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-xl">
                  📈
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">SEO Specialist + AI Tools</h4>
                  <p className="text-sm text-gray-600">10 weeks • $397</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Master AI-powered SEO strategies and automation</p>
              <Link href="/courses/seo-specialist" className="btn btn-secondary text-sm">
                View Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}