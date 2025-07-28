'use client';

import { useState } from 'react';
import Link from 'next/link';

const communityPosts = [
  {
    id: 1,
    author: {
      name: 'Maria Santos',
      role: 'Virtual Assistant',
      country: '🇵🇭 Philippines',
      avatar: 'MS',
      level: 'Advanced'
    },
    title: 'Just landed my first $2000/month client using AI workflows! 🚀',
    content: 'I wanted to share this win with the community! After completing the VA + AI course, I implemented the email automation system Sarah taught us. My new client was so impressed that they signed a $2000/month retainer on the spot. The key was showing them the time savings...',
    category: 'Success Story',
    tags: ['AI Tools', 'Virtual Assistant', 'Client Win'],
    timestamp: '2 hours ago',
    likes: 47,
    replies: 12,
    isLiked: false,
    isPinned: true
  },
  {
    id: 2,
    author: {
      name: 'Raj Patel',
      role: 'SEO Specialist',
      country: '🇮🇳 India',
      avatar: 'RP',
      level: 'Intermediate'
    },
    title: 'Best AI tools for keyword research in 2024?',
    content: 'I\'ve been using Surfer SEO and SEMrush AI, but I\'m curious what other tools you all are using for keyword research. Looking for something that can help with local SEO specifically. Any recommendations?',
    category: 'Tools & Resources',
    tags: ['SEO', 'AI Tools', 'Keyword Research'],
    timestamp: '4 hours ago',
    likes: 23,
    replies: 8,
    isLiked: true,
    isPinned: false
  },
  {
    id: 3,
    author: {
      name: 'Elena Volkov',
      role: 'Content Creator',
      country: '🇺🇦 Ukraine',
      avatar: 'EV',
      level: 'Intermediate'
    },
    title: 'ChatGPT prompts that changed my content game',
    content: 'After months of experimentation, I\'ve compiled my top 10 ChatGPT prompts that consistently produce high-quality content. These have helped me reduce writing time by 60% while improving engagement rates. Happy to share them with the community!',
    category: 'Tips & Tricks',
    tags: ['Content Creation', 'ChatGPT', 'Prompts'],
    timestamp: '6 hours ago',
    likes: 89,
    replies: 24,
    isLiked: false,
    isPinned: false
  },
  {
    id: 4,
    author: {
      name: 'Carlos Rodriguez',
      role: 'Video Editor',
      country: '🇲🇽 Mexico',
      avatar: 'CR',
      level: 'Advanced'
    },
    title: 'Client asked me to reduce 50% of editing time. AI to the rescue!',
    content: 'Had a challenging request from a client to cut video editing time in half without compromising quality. Using RunwayML and Descript, I managed to exceed their expectations. Here\'s my workflow breakdown...',
    category: 'Case Study',
    tags: ['Video Editing', 'AI Tools', 'Workflow'],
    timestamp: '8 hours ago',
    likes: 34,
    replies: 15,
    isLiked: false,
    isPinned: false
  },
  {
    id: 5,
    author: {
      name: 'Priya Sharma',
      role: 'Digital Marketer',
      country: '🇮🇳 India',
      avatar: 'PS',
      level: 'Beginner'
    },
    title: 'Feeling overwhelmed with all the AI tools. Where to start?',
    content: 'I\'m new to the digital marketing space and there are so many AI tools out there. ChatGPT, Jasper, Copy.ai, HubSpot AI... I don\'t know where to begin. Any advice for a beginner?',
    category: 'Getting Started',
    tags: ['Beginner', 'AI Tools', 'Digital Marketing'],
    timestamp: '12 hours ago',
    likes: 18,
    replies: 22,
    isLiked: false,
    isPinned: false
  }
];

const categories = [
  { name: 'All', count: 234, color: 'text-gray-600' },
  { name: 'Success Stories', count: 45, color: 'text-green-600' },
  { name: 'Tools & Resources', count: 67, color: 'text-blue-600' },
  { name: 'Tips & Tricks', count: 89, color: 'text-purple-600' },
  { name: 'Case Studies', count: 23, color: 'text-orange-600' },
  { name: 'Getting Started', count: 34, color: 'text-pink-600' },
  { name: 'Job Opportunities', count: 12, color: 'text-indigo-600' }
];

const topContributors = [
  { name: 'Sarah Martinez', role: 'Instructor', posts: 156, badge: '🏆' },
  { name: 'David Chen', role: 'SEO Expert', posts: 134, badge: '🥈' },
  { name: 'Maria Santos', role: 'VA Specialist', posts: 98, badge: '🥉' },
  { name: 'Elena Volkov', role: 'Content Creator', posts: 87, badge: '⭐' },
  { name: 'Raj Patel', role: 'SEO Specialist', posts: 76, badge: '⭐' }
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [posts, setPosts] = useState(communityPosts);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked 
          }
        : post
    ));
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Forum
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Connect with 2,500+ freelancers, share experiences, and learn from each other's success stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                Create New Post
              </button>
              <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                Join Discussion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Posts</h3>
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

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
                        ? 'bg-purple-100 text-purple-700'
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

            {/* Top Contributors */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{contributor.badge}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.role}</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {contributor.posts} posts
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-200">Total Members</span>
                  <span className="font-bold">2,547</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Posts This Week</span>
                  <span className="font-bold">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Active Today</span>
                  <span className="font-bold">234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedCategory === 'All' ? 'All Discussions' : selectedCategory}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Latest First</option>
                    <option>Most Popular</option>
                    <option>Most Replies</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${post.isPinned ? 'ring-2 ring-yellow-300' : ''}`}>
                  {post.isPinned && (
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-t-xl text-sm font-medium flex items-center">
                      📌 Pinned Post
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.avatar}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {post.author.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {post.author.role} • {post.author.country} • {post.timestamp}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.category === 'Success Story' ? 'bg-green-100 text-green-700' :
                          post.category === 'Tools & Resources' ? 'bg-blue-100 text-blue-700' :
                          post.category === 'Tips & Tricks' ? 'bg-purple-100 text-purple-700' :
                          post.category === 'Case Study' ? 'bg-orange-100 text-orange-700' :
                          'bg-pink-100 text-pink-700'
                        }`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          #{tag.toLowerCase().replace(' ', '')}
                        </span>
                      ))}
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-2 ${
                            post.isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                          }`}
                        >
                          <span>{post.isLiked ? '❤️' : '🤍'}</span>
                          <span className="font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                          <span>💬</span>
                          <span className="font-medium">{post.replies}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600">
                          <span>🔄</span>
                          <span className="font-medium">Share</span>
                        </button>
                      </div>
                      <Link 
                        href={`/community/post/${post.id}`}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                      >
                        View Discussion →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn btn-secondary px-8 py-3">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}