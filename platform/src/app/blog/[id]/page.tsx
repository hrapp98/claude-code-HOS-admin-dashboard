'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Mock blog data - in a real app, this would come from a CMS or API
const getBlogPost = (id: string) => {
  const posts: Record<string, any> = {
    '1': {
      id: 1,
      title: '10 ChatGPT Prompts That Will Transform Your Virtual Assistant Business',
      excerpt: 'Discover the exact prompts our top VA graduates use to automate client communication, streamline workflows, and command premium rates.',
      content: `
# 10 ChatGPT Prompts That Will Transform Your Virtual Assistant Business

As a virtual assistant, your success depends on efficiency, quality, and the ability to deliver exceptional value to your clients. The AI revolution has opened up incredible opportunities for VAs who know how to leverage these tools effectively.

After working with over 2,400 virtual assistants and seeing their transformations, I've identified the 10 most powerful ChatGPT prompts that can revolutionize your VA business.

## 1. The Client Communication Optimizer

**Prompt:** "You are a professional virtual assistant communication expert. Help me rewrite this client email to be more professional, clear, and action-oriented while maintaining a warm, helpful tone: [INSERT EMAIL]"

**Why it works:** This prompt helps you maintain consistent, professional communication that clients love. Our graduates report 40% fewer clarification emails after implementing this.

## 2. The Meeting Summary Generator

**Prompt:** "Create a comprehensive meeting summary from these notes. Include: key decisions made, action items with owners and deadlines, and follow-up questions. Format it professionally for client distribution: [INSERT MEETING NOTES]"

**Result:** Transform messy meeting notes into polished summaries that make you look like a strategic partner, not just a note-taker.

## 3. The Project Breakdown Specialist

**Prompt:** "Break down this complex project into specific, actionable tasks with estimated time requirements and suggested priorities. Consider dependencies and create a logical sequence: [INSERT PROJECT DESCRIPTION]"

**Impact:** Clients see you as a strategic thinker who can take complex requests and turn them into manageable workflows.

## 4. The Email Template Creator

**Prompt:** "Create 5 different email templates for [SPECIFIC SITUATION] that I can customize for different clients. Make them professional, concise, and include placeholders for personalization."

**Value:** Never start from scratch again. Build a library of proven email templates for every situation.

## 5. The Research Assistant

**Prompt:** "Research [TOPIC] and provide a executive summary with: key findings, relevant statistics, industry trends, and 3 actionable recommendations. Focus on information that would be valuable for a [CLIENT'S INDUSTRY] business."

**Advantage:** Deliver research that goes beyond basic information to provide strategic insights your clients can act on.

## 6. The Schedule Optimizer

**Prompt:** "Analyze this schedule and suggest optimizations to: minimize travel time, group similar tasks, create focused work blocks, and identify potential conflicts. Provide specific recommendations: [INSERT SCHEDULE]"

**Outcome:** Position yourself as an efficiency expert who saves clients time and increases their productivity.

## 7. The Process Documentation Expert

**Prompt:** "Create a step-by-step process document for [TASK] that includes: prerequisites, detailed steps, quality checkpoints, troubleshooting tips, and success metrics. Make it clear enough for someone new to follow."

**Benefit:** Turn your expertise into valuable, reusable documentation that clients see as intellectual property.

## 8. The Proposal Writer

**Prompt:** "Write a professional proposal for [SERVICE] that includes: problem statement, proposed solution, timeline, deliverables, and benefits. Make it compelling and results-focused for a [CLIENT TYPE] client."

**Power:** Create proposals that sell your value, not just your time.

## 9. The Crisis Communications Manager

**Prompt:** "Help me draft a professional response to this challenging situation: [SITUATION]. The response should be empathetic, solution-focused, and maintain the client relationship while addressing their concerns."

**Strength:** Handle difficult situations with grace and professionalism, turning potential conflicts into trust-building moments.

## 10. The Workflow Automation Planner

**Prompt:** "Analyze this repetitive task and suggest automation opportunities using tools like Zapier, calendly, or other integrations. Provide: current process map, automation recommendations, implementation steps, and ROI estimate: [TASK DESCRIPTION]"

**Revolution:** Become the VA who doesn't just do the work, but improves how the work gets done.

## How Our Graduates Use These Prompts

Maria Santos from the Philippines went from $4/hour to $25/hour by implementing these prompts. Here's her strategy:

1. **Week 1:** Implemented prompts 1-3 for better client communication
2. **Week 2:** Used prompts 4-6 to streamline operations  
3. **Week 3:** Applied prompts 7-10 for strategic positioning
4. **Result:** Clients started viewing her as a strategic partner, not just task executor

## Advanced Tips for Maximum Impact

### Customize for Your Niche
Each prompt should be adapted for your specific client base. A VA for coaches will use different language than one for e-commerce businesses.

### Build Your Prompt Library
Save successful variations of these prompts in a document. Over time, you'll develop your own signature approaches.

### Track Your Results
Document how these prompts improve your efficiency and client satisfaction. Use this data to justify rate increases.

## The Real Secret: It's Not Just About the Prompts

While these prompts are powerful, the real transformation comes from understanding how to position yourself as an AI-enhanced professional. This means:

- **Learning prompt engineering** as a core skill
- **Staying updated** on new AI tools and capabilities  
- **Communicating your AI expertise** to clients as a competitive advantage
- **Continuously optimizing** your workflows with AI assistance

## Take Action Today

Don't just read about these prompts—implement them. Choose one that addresses your biggest current challenge and try it with your next client interaction.

Remember: The VAs who embrace AI now will be the ones commanding premium rates while others struggle to compete on price alone.

## Ready to Master AI-Enhanced VA Skills?

These prompts are just the beginning. In our Virtual Assistant + AI Mastery course, you'll learn:

- 50+ advanced AI prompts for every VA scenario
- How to build custom GPT assistants for your clients
- Automation workflows that save 20+ hours per week
- Pricing strategies for AI-enhanced services

**Join the 847 VAs who've already transformed their businesses →**
      `,
      author: {
        name: 'Sarah Martinez',
        role: 'VA Expert & Course Instructor',
        avatar: 'SM',
        bio: 'Helped 2,400+ VAs scale to $50K+/year with AI tools',
        linkedin: '#',
        twitter: '#'
      },
      category: 'Virtual Assistant',
      tags: ['ChatGPT', 'AI Tools', 'Prompts', 'Automation'],
      publishedAt: '2024-01-20',
      readTime: '8 min read',
      likes: 347,
      comments: 42,
      shares: 89,
      seoKeywords: ['ChatGPT prompts virtual assistant', 'AI tools for VAs', 'virtual assistant automation'],
      relatedPosts: [2, 3, 4]
    }
  };

  return posts[id] || null;
};

const mockComments = [
  {
    id: 1,
    author: 'Jennifer L.',
    role: 'Virtual Assistant',
    avatar: 'JL',
    content: 'These prompts are game-changers! I\'ve been using prompt #2 for my meeting summaries and clients are amazed at the quality. Already increased my rate by $5/hour!',
    timestamp: '2 days ago',
    likes: 24
  },
  {
    id: 2,
    author: 'Mark T.',
    role: 'Freelance VA',
    avatar: 'MT',
    content: 'The research assistant prompt (#5) has saved me hours of work. I can now deliver comprehensive research reports that position me as a strategic partner rather than just a task executor.',
    timestamp: '3 days ago',
    likes: 18
  },
  {
    id: 3,
    author: 'Sophia R.',
    role: 'Executive Assistant',
    avatar: 'SR',
    content: 'Implementing the email optimization prompt (#1) has dramatically improved my client communication. No more back-and-forth clarification emails!',
    timestamp: '5 days ago',
    likes: 31
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  const post = getBlogPost(id);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes || 0);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-b-2xl shadow-sm px-8 py-12 mb-8">
          <div className="mb-6">
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500">{post.readTime}</span>
            <span className="text-gray-500">{post.publishedAt}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.avatar}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{post.author.name}</h3>
                <p className="text-indigo-600 font-medium">{post.author.role}</p>
                <p className="text-gray-600 text-sm">{post.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                }`}
              >
                <span>{isLiked ? '❤️' : '🤍'}</span>
                <span>{likeCount}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <span>🔄</span>
                <span>{post.shares}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph: string, index: number) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">{paragraph.slice(2)}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{paragraph.slice(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">{paragraph.slice(4)}</h3>;
                  } else if (paragraph.startsWith('**Prompt:**')) {
                    return <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4"><strong>Prompt:</strong> {paragraph.slice(11)}</div>;
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <p key={index} className="font-bold text-gray-900 mb-2">{paragraph.slice(2, -2)}</p>;
                  } else if (paragraph.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
                  }
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    #{tag.toLowerCase().replace(' ', '')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Comments ({mockComments.length})
              </h3>
              
              {/* Comment form */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Join the Discussion</h4>
                <textarea
                  rows={4}
                  placeholder="Share your thoughts or ask questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                ></textarea>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">Be respectful and constructive</span>
                  <button className="btn btn-primary">Post Comment</button>
                </div>
              </div>

              {/* Comments list */}
              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h5 className="font-semibold text-gray-900">{comment.author}</h5>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{comment.role}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          {comment.content}
                        </p>
                        <div className="flex items-center space-x-4">
                          <button className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                            ❤️ {comment.likes}
                          </button>
                          <button className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Share */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Share this article</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <span>📘</span>
                    <span>Facebook</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Author bio */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">About the Author</h3>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {post.author.avatar}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{post.author.name}</h4>
                  <p className="text-indigo-600 text-sm mb-3">{post.author.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{post.author.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Link href="#" className="text-blue-600 hover:text-blue-700">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-sky-600 hover:text-sky-700">
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Get More Like This</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Subscribe for weekly AI freelancing tips and strategies.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full btn bg-white text-indigo-600 hover:bg-indigo-50">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    Virtual Assistant
                  </span>
                  <h4 className="font-bold text-gray-900 mt-3 mb-2">
                    Related Article Title {i}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Brief description of the related article content...
                  </p>
                  <Link href={`/blog/${i + 1}`} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}