'use client';

import { useState } from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant + AI Mastery',
    description: 'Master AI-powered email management, scheduling automation, and intelligent client communication systems.',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    students: 847,
    rating: 4.9,
    price: 297,
    originalPrice: 497,
    aiTools: ['ChatGPT', 'Zapier', 'Calendly AI', 'Notion AI'],
    outcomes: [
      'Automate 80% of routine administrative tasks',
      'Handle 3x more clients efficiently with AI workflows',
      'Increase rates from $5 to $20+ per hour',
      'Master advanced ChatGPT prompting for client communication'
    ],
    image: '🤖',
    color: 'from-blue-500 to-purple-600',
    instructor: {
      name: 'Sarah Martinez',
      title: 'Senior VA Consultant',
      experience: '8 years',
      students: 2400
    },
    curriculum: [
      'Week 1-2: AI Foundations for VAs',
      'Week 3-4: Email & Communication Automation',
      'Week 5-6: Calendar & Task Management AI',
      'Week 7-8: Advanced Client Solutions'
    ],
    featured: true
  },
  {
    id: 'seo-specialist',
    title: 'SEO Specialist + AI Tools',
    description: 'Leverage AI for advanced keyword research, content optimization, and automated reporting at enterprise scale.',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 623,
    rating: 4.8,
    price: 397,
    originalPrice: 597,
    aiTools: ['Surfer SEO', 'Jasper AI', 'SEMrush AI', 'Screaming Frog'],
    outcomes: [
      'Complete comprehensive SEO audits in 1 hour vs 8 hours',
      'Generate data-driven content strategies with AI',
      'Land $2,000+ monthly retainer clients',
      'Automate technical SEO monitoring and reporting'
    ],
    image: '📈',
    color: 'from-green-500 to-teal-600',
    instructor: {
      name: 'David Chen',
      title: 'SEO Agency Owner',
      experience: '12 years',
      students: 1800
    },
    curriculum: [
      'Week 1-2: AI-Powered Keyword Research',
      'Week 3-4: Content Optimization with AI',
      'Week 5-6: Technical SEO Automation',
      'Week 7-8: Link Building & AI Outreach',
      'Week 9-10: Reporting & Client Management'
    ],
    featured: false
  },
  {
    id: 'content-creator',
    title: 'Content Creator + AI Enhancement',
    description: 'Create engaging, high-quality content 10x faster using advanced AI writing assistants and optimization tools.',
    duration: '6 weeks',
    level: 'Beginner',
    students: 1240,
    rating: 4.9,
    price: 247,
    originalPrice: 397,
    aiTools: ['GPT-4', 'Grammarly AI', 'Canva AI', 'Copy.ai'],
    outcomes: [
      'Write high-quality articles in 30 minutes instead of 3 hours',
      'Create multi-platform content from single pieces',
      'Build a personal brand that attracts premium clients',
      'Master AI prompt engineering for content creation'
    ],
    image: '✍️',
    color: 'from-purple-500 to-pink-600',
    instructor: {
      name: 'Emma Thompson',
      title: 'Content Marketing Expert',
      experience: '6 years',
      students: 3200
    },
    curriculum: [
      'Week 1-2: AI Writing Fundamentals',
      'Week 3-4: Content Strategy & Planning',
      'Week 5-6: Multi-Platform Optimization'
    ],
    featured: true
  },
  {
    id: 'video-editor',
    title: 'Video Editor + AI Production',
    description: 'Streamline video editing workflows with cutting-edge AI-powered tools for faster, professional results.',
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    students: 445,
    rating: 4.7,
    price: 497,
    originalPrice: 697,
    aiTools: ['RunwayML', 'Descript', 'Adobe Sensei', 'Pictory'],
    outcomes: [
      'Edit videos 5x faster with AI assistance',
      'Auto-generate subtitles and translations in 20+ languages',
      'Create viral social media content with AI insights',
      'Master AI color correction and audio enhancement'
    ],
    image: '🎬',
    color: 'from-red-500 to-orange-600',
    instructor: {
      name: 'Carlos Rodriguez',
      title: 'Video Production Director',
      experience: '10 years',
      students: 1500
    },
    curriculum: [
      'Week 1-3: AI Video Editing Foundations',
      'Week 4-6: Advanced AI Tools & Workflows',
      'Week 7-9: Social Media Video Optimization',
      'Week 10-12: Client Projects & Portfolio'
    ],
    featured: false
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketer + AI Automation',
    description: 'Build AI-driven marketing campaigns that optimize themselves and deliver superior ROI for clients.',
    duration: '14 weeks',
    level: 'Advanced',
    students: 332,
    rating: 4.8,
    price: 597,
    originalPrice: 897,
    aiTools: ['HubSpot AI', 'Facebook AI', 'Google AI', 'Mailchimp AI'],
    outcomes: [
      'Create self-optimizing ad campaigns across all platforms',
      'Predict customer behavior with AI analytics',
      'Scale marketing operations without scaling team size',
      'Generate 300%+ ROI improvements for clients'
    ],
    image: '🎯',
    color: 'from-indigo-500 to-blue-600',
    instructor: {
      name: 'Rachel Kim',
      title: 'Marketing Agency Founder',
      experience: '9 years',
      students: 980
    },
    curriculum: [
      'Week 1-3: AI Marketing Fundamentals',
      'Week 4-7: Paid Advertising Automation',
      'Week 8-11: Email & Social Media AI',
      'Week 12-14: Analytics & Optimization'
    ],
    featured: false
  },
  {
    id: 'social-media',
    title: 'Social Media Manager + AI Tools',
    description: 'Manage multiple client accounts effortlessly with AI-powered content creation and community management.',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    students: 756,
    rating: 4.6,
    price: 347,
    originalPrice: 497,
    aiTools: ['Buffer AI', 'Hootsuite AI', 'Later AI', 'Loomly'],
    outcomes: [
      'Manage 10+ client accounts effortlessly',
      'Create engaging content in minutes, not hours',
      'Grow follower base 300% faster with AI insights',
      'Automate community management and engagement'
    ],
    image: '📱',
    color: 'from-cyan-500 to-blue-600',
    instructor: {
      name: 'Alex Johnson',
      title: 'Social Media Strategist',
      experience: '7 years',
      students: 2100
    },
    curriculum: [
      'Week 1-2: AI Content Creation',
      'Week 3-4: Scheduling & Automation',
      'Week 5-6: Community Management AI',
      'Week 7-8: Analytics & Growth Hacking'
    ],
    featured: true
  }
];

const filters = {
  level: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'],
  duration: ['All Durations', '6 weeks', '8 weeks', '10 weeks', '12 weeks', '14 weeks'],
  price: ['All Prices', 'Under $300', '$300-$400', '$400-$500', '$500+']
};

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === 'All Levels' || course.level.includes(selectedLevel);
    const matchesDuration = selectedDuration === 'All Durations' || course.duration === selectedDuration;
    const matchesPrice = selectedPrice === 'All Prices' || 
      (selectedPrice === 'Under $300' && course.price < 300) ||
      (selectedPrice === '$300-$400' && course.price >= 300 && course.price < 400) ||
      (selectedPrice === '$400-$500' && course.price >= 400 && course.price < 500) ||
      (selectedPrice === '$500+' && course.price >= 500);
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLevel && matchesDuration && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Enhanced Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Master the future of freelancing with our comprehensive AI-integrated training programs
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filters.level.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filters.duration.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filters.price.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${course.featured ? 'ring-2 ring-blue-500' : ''}`}>
              {course.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  ⭐ Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center text-2xl`}>
                      {course.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⏱️ {course.duration}</span>
                        <span>📊 {course.level}</span>
                        <span>👥 {course.students} students</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">${course.price}</div>
                    <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{course.instructor.name}</div>
                      <div className="text-sm text-gray-500">{course.instructor.title} • {course.instructor.experience}</div>
                    </div>
                    <div className="ml-auto flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* AI Tools */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">AI Tools You'll Master:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.aiTools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Achieve:</h4>
                  <ul className="space-y-2">
                    {course.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={`/courses/${course.id}`}
                    className="btn btn-primary flex-1 text-center"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-secondary">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Decide Which Course is Right for You?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our free skill assessment and get personalized course recommendations based on your goals and current experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Take Free Assessment
            </Link>
            <Link href="/consultation" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}