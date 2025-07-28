'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '10 ChatGPT Prompts That Will Transform Your Virtual Assistant Business',
    excerpt: 'Discover the exact prompts our top VA graduates use to automate client communication, streamline workflows, and command premium rates.',
    content: 'These battle-tested ChatGPT prompts have helped virtual assistants increase their efficiency by 300% and their rates by 150%. Learn the exact formulas...',
    author: {
      name: 'Sarah Martinez',
      role: 'VA Expert & Course Instructor',
      avatar: 'SM',
      bio: 'Helped 2,400+ VAs scale to $50K+/year with AI tools'
    },
    category: 'Virtual Assistant',
    tags: ['ChatGPT', 'AI Tools', 'Prompts', 'Automation'],
    publishedAt: '2024-01-20',
    readTime: '8 min read',
    featured: true,
    likes: 347,
    comments: 42,
    shares: 89,
    thumbnail: '/blog/chatgpt-prompts-va.jpg',
    seoKeywords: ['ChatGPT prompts virtual assistant', 'AI tools for VAs', 'virtual assistant automation']
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing SEO: 5 Tools Every Specialist Must Master',
    excerpt: 'The SEO landscape has changed forever. Here are the AI tools that are separating winners from losers in 2024.',
    content: 'Traditional SEO is dead. The future belongs to those who can harness AI for keyword research, content optimization, and technical analysis...',
    author: {
      name: 'David Chen',
      role: 'SEO Agency Owner',
      avatar: 'DC',
      bio: '12 years SEO experience, $2M+ in client results'
    },
    category: 'SEO',
    tags: ['SEO', 'AI Tools', 'Surfer SEO', 'Content Optimization'],
    publishedAt: '2024-01-18',
    readTime: '12 min read',
    featured: true,
    likes: 289,
    comments: 38,
    shares: 67,
    thumbnail: '/blog/ai-seo-tools.jpg',
    seoKeywords: ['AI SEO tools 2024', 'SEO automation', 'artificial intelligence SEO']
  },
  {
    id: 3,
    title: 'From $5 to $25/Hour: A Filipino VA\'s AI Transformation Story',
    excerpt: 'Maria Santos shares her complete journey from struggling freelancer to premium VA using AI automation workflows.',
    content: 'When Maria started freelancing, she was working 60+ hours a week for $4/hour. Today, she manages 15 premium clients at $25/hour...',
    author: {
      name: 'Maria Santos',
      role: 'Success Story Graduate',
      avatar: 'MS',
      bio: 'Transformed from $400/month to $2,100/month with AI'
    },
    category: 'Success Stories',
    tags: ['Success Story', 'Virtual Assistant', 'Philippines', 'Income Growth'],
    publishedAt: '2024-01-15',
    readTime: '10 min read',
    featured: false,
    likes: 456,
    comments: 89,
    shares: 123,
    thumbnail: '/blog/maria-success-story.jpg',
    seoKeywords: ['Filipino virtual assistant success', 'VA income increase', 'freelancer transformation']
  },
  {
    id: 4,
    title: 'The Ultimate Guide to AI Content Creation for Freelancers',
    excerpt: 'Master the art of creating high-quality content 10x faster using AI tools like GPT-4, Jasper, and Claude.',
    content: 'Content creation has been revolutionized by AI. Learn how to use these tools to create compelling, original content...',
    author: {
      name: 'Emma Thompson',
      role: 'Content Marketing Expert',
      avatar: 'ET',
      bio: '6 years content marketing, 3,200+ students taught'
    },
    category: 'Content Creation',
    tags: ['Content Creation', 'AI Writing', 'GPT-4', 'Content Strategy'],
    publishedAt: '2024-01-12',
    readTime: '15 min read',
    featured: false,
    likes: 234,
    comments: 56,
    shares: 78,
    thumbnail: '/blog/ai-content-creation.jpg',
    seoKeywords: ['AI content creation tools', 'AI writing assistant', 'content marketing automation']
  },
  {
    id: 5,
    title: 'Why Overseas Freelancers Are Winning the AI Revolution',
    excerpt: 'Discover why international freelancers are perfectly positioned to dominate the AI-enhanced services market.',
    content: 'The future of freelancing belongs to those who can combine traditional skills with AI enhancement. Here\'s why overseas talent has the advantage...',
    author: {
      name: 'Dr. Michael Roberts',
      role: 'Freelance Economy Expert',
      avatar: 'MR',
      bio: 'Professor of Digital Economics, 50+ research papers'
    },
    category: 'Industry Insights',
    tags: ['Freelancing', 'AI Revolution', 'Global Talent', 'Future of Work'],
    publishedAt: '2024-01-10',
    readTime: '7 min read',
    featured: false,
    likes: 178,
    comments: 34,
    shares: 45,
    thumbnail: '/blog/overseas-ai-advantage.jpg',
    seoKeywords: ['overseas freelancers AI', 'international talent AI tools', 'global freelancing trends']
  },
  {
    id: 6,
    title: 'Automation Workflows That Every Digital Marketer Needs',
    excerpt: 'Set up these 7 automation workflows to manage campaigns across multiple platforms without burning out.',
    content: 'Digital marketing automation isn\'t just nice to have—it\'s essential for scaling. These workflows will save you 20+ hours per week...',
    author: {
      name: 'Rachel Kim',
      role: 'Marketing Agency Founder',
      avatar: 'RK',
      bio: '9 years marketing, $5M+ in ad spend managed'
    },
    category: 'Digital Marketing',
    tags: ['Marketing Automation', 'Workflows', 'HubSpot', 'Campaign Management'],
    publishedAt: '2024-01-08',
    readTime: '11 min read',
    featured: false,
    likes: 312,
    comments: 67,
    shares: 91,
    thumbnail: '/blog/marketing-automation-workflows.jpg',
    seoKeywords: ['digital marketing automation', 'marketing workflows', 'campaign automation tools']
  },
  {
    id: 7,
    title: 'Video Editing with AI: Cut Your Production Time by 75%',
    excerpt: 'Learn how AI-powered video editing tools like RunwayML and Descript can revolutionize your video production workflow.',
    content: 'Video editing used to take days. With AI tools, you can create professional content in hours. Here\'s how to master these game-changing tools...',
    author: {
      name: 'Carlos Rodriguez',
      role: 'Video Production Director',
      avatar: 'CR',
      bio: '10 years video production, viral content creator'
    },
    category: 'Video Editing',
    tags: ['Video Editing', 'AI Tools', 'RunwayML', 'Production Efficiency'],
    publishedAt: '2024-01-05',
    readTime: '9 min read',
    featured: false,
    likes: 267,
    comments: 45,
    shares: 72,
    thumbnail: '/blog/ai-video-editing.jpg',
    seoKeywords: ['AI video editing tools', 'video production automation', 'AI video creation']
  },
  {
    id: 8,
    title: 'Building Your Personal Brand as an AI-Enhanced Freelancer',
    excerpt: 'Stand out in a crowded marketplace by positioning yourself as an AI expert in your field.',
    content: 'Personal branding is crucial for commanding premium rates. Here\'s how to position yourself as the go-to AI expert...',
    author: {
      name: 'Alex Johnson',
      role: 'Personal Branding Strategist',
      avatar: 'AJ',
      bio: 'Helped 500+ freelancers build 6-figure brands'
    },
    category: 'Career Development',
    tags: ['Personal Branding', 'AI Expertise', 'Freelancer Marketing', 'Professional Growth'],
    publishedAt: '2024-01-03',
    readTime: '13 min read',
    featured: false,
    likes: 189,
    comments: 29,
    shares: 56,
    thumbnail: '/blog/personal-branding-ai.jpg',
    seoKeywords: ['freelancer personal branding', 'AI expert positioning', 'freelance marketing strategy']
  }
];

const categories = [
  { name: 'All Posts', count: blogPosts.length, color: 'text-gray-600' },
  { name: 'Virtual Assistant', count: 2, color: 'text-blue-600' },
  { name: 'SEO', count: 1, color: 'text-green-600' },
  { name: 'Content Creation', count: 1, color: 'text-purple-600' },
  { name: 'Digital Marketing', count: 1, color: 'text-orange-600' },
  { name: 'Video Editing', count: 1, color: 'text-red-600' },
  { name: 'Success Stories', count: 1, color: 'text-pink-600' },
  { name: 'Industry Insights', count: 1, color: 'text-indigo-600' },
  { name: 'Career Development', count: 1, color: 'text-teal-600' }
];

const popularTags = [
  'AI Tools', 'ChatGPT', 'Automation', 'Income Growth', 'Freelancing',
  'SEO', 'Content Creation', 'Virtual Assistant', 'Video Editing',
  'Digital Marketing', 'Success Stories', 'Personal Branding'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Freelancing Blog
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Master AI tools, grow your income, and transform your freelance career with expert insights and proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.author.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.publishedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={category.color}>{category.name}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    #{tag.toLowerCase().replace(' ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Get the latest AI freelancing tips and success stories delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button className="w-full btn bg-white text-indigo-600 hover:bg-indigo-50">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  📘
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  🐦
                </button>
                <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  💼
                </button>
                <button className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  📹
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All Posts' ? 'Latest Articles' : selectedCategory}
              </h2>
              <span className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            #{tag.toLowerCase().replace(' ', '')}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {post.author.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.publishedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>❤️ {post.likes}</span>
                          <span>💬 {post.comments}</span>
                          <span>🔄 {post.shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn btn-secondary px-8 py-3">
                Load More Articles
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Freelance Career?
          </h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Stop reading about success and start creating it. Join our AI-enhanced courses and become the freelancer you've always wanted to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold">
              Browse Courses
            </Link>
            <Link href="/assessment" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold">
              Take Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}