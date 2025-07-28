'use client';

import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Martinez',
    role: 'Founder & CEO',
    bio: 'Former VP at hireoverseas.com, helped 50,000+ freelancers find work. PhD in Digital Economics from Stanford.',
    specialization: 'Platform Strategy & Growth',
    avatar: 'SM',
    linkedin: '#',
    twitter: '#',
    achievements: ['50K+ freelancers placed', '15 years industry experience', 'TEDx speaker on AI & remote work']
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of AI & Curriculum',
    bio: 'Former AI Research Director at Google. Created educational frameworks used by 2M+ students worldwide.',
    specialization: 'AI Education & Learning Systems',
    avatar: 'MC',
    linkedin: '#',
    twitter: '#',
    achievements: ['Former Google AI Director', '2M+ students taught', '25+ research papers published']
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP of Student Success',
    bio: 'Built student success programs at Coursera and Udemy. Expert in remote learning and international education.',
    specialization: 'Student Experience & Support',
    avatar: 'ER',
    linkedin: '#',
    twitter: '#',
    achievements: ['94% job placement rate', '500+ mentors trained', '8 languages spoken']
  },
  {
    name: 'David Kim',
    role: 'Chief Technology Officer',
    bio: 'Former Lead Engineer at Zoom. Built scalable education platforms serving millions of users globally.',
    specialization: 'Platform Engineering & Scale',
    avatar: 'DK',
    linkedin: '#',
    twitter: '#',
    achievements: ['10M+ users served', '99.9% uptime record', 'AI systems architect']
  }
];

const milestones = [
  {
    year: '2020',
    title: 'The Vision',
    description: 'Sarah Martinez identified the gap between traditional freelancing education and AI-enhanced skills while working at hireoverseas.com.',
    icon: '💡'
  },
  {
    year: '2021',
    title: 'Research & Development',
    description: 'Partnered with AI experts and successful freelancers to develop the first AI-integrated curriculum framework.',
    icon: '🔬'
  },
  {
    year: '2022',
    title: 'Pilot Program',
    description: 'Launched with 100 students across 6 countries. Achieved 89% completion rate and 250% average income increase.',
    icon: '🚀'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Scaled to 2,500+ students worldwide. Established partnerships with major freelancing platforms and AI tool providers.',
    icon: '🌍'
  },
  {
    year: '2024',
    title: 'Platform Launch',
    description: 'Launched comprehensive online platform with 6 specializations, mentor matching, and job placement integration.',
    icon: '🎯'
  }
];

const stats = [
  {
    number: '2,500+',
    label: 'Successful Graduates',
    description: 'Students who completed our programs'
  },
  {
    number: '94%',
    label: 'Job Placement Rate',
    description: 'Graduates who found work within 60 days'
  },
  {
    number: '250%',
    label: 'Average Income Increase',
    description: 'Improvement in hourly rates post-graduation'
  },
  {
    number: '45+',
    label: 'Countries Served',
    description: 'Global reach across emerging markets'
  },
  {
    number: '500+',
    label: 'Industry Mentors',
    description: 'Successful freelancers guiding students'
  },
  {
    number: '150+',
    label: 'Partner Companies',
    description: 'Hiring our graduates regularly'
  }
];

const values = [
  {
    title: 'AI-First Education',
    description: 'We believe the future belongs to professionals who can seamlessly integrate AI into their workflows.',
    icon: '🤖'
  },
  {
    title: 'Global Opportunity',
    description: 'Talent is distributed globally, but opportunity is not. We bridge that gap for overseas freelancers.',
    icon: '🌏'
  },
  {
    title: 'Practical Results',
    description: 'Every lesson, tool, and technique is designed to immediately increase your income and client satisfaction.',
    icon: '📈'
  },
  {
    title: 'Community Support',
    description: 'Success is a team sport. Our global community of mentors and peers accelerates your growth.',
    icon: '🤝'
  },
  {
    title: 'Continuous Innovation',
    description: 'AI evolves rapidly. Our curriculum is updated monthly to reflect the latest tools and techniques.',
    icon: '⚡'
  },
  {
    title: 'Measurable Impact',
    description: 'We track real outcomes: income increases, job placements, and career transformations.',
    icon: '📊'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Overseas Talent with AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We're on a mission to help 100,000 overseas freelancers master AI-enhanced skills 
              and command premium rates in the global marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Explore Courses
              </Link>
              <Link href="/assessment" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2020, we've helped thousands of freelancers transform their careers with AI-enhanced skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We founded Hire Overseas University because we saw talented freelancers around the world 
                struggling to compete in an increasingly AI-driven marketplace. Traditional education wasn't 
                keeping pace with technological change.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our breakthrough insight: instead of replacing human skills with AI, we teach freelancers 
                how to amplify their expertise using AI tools. This creates 10x productivity gains and 
                positions them as premium service providers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, our graduates earn 2-5x more than traditional freelancers while working fewer hours 
                and serving higher-quality clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
                <p className="text-gray-700 text-lg">
                  Help 100,000 overseas freelancers increase their income by 250%+ 
                  through AI-enhanced skills by 2026.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Believe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values drive everything we do, from curriculum design to student support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to global impact - here's how we built the world's first AI-integrated freelancer education platform
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {milestone.icon}
                    </div>
                    <div className="text-center mt-2 text-sm font-bold text-blue-600">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class experts from top tech companies and universities, united by a passion for overseas talent
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2 mb-6">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {achievement}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <Link href={member.linkedin} className="text-blue-600 hover:text-blue-700">
                    LinkedIn
                  </Link>
                  <Link href={member.twitter} className="text-sky-600 hover:text-sky-700">
                    Twitter
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recognition & Awards
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">EdTech Innovation Award</h3>
                <p className="text-gray-300">2023 Global EdTech Summit</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">Best AI Integration</h3>
                <p className="text-gray-300">Future of Work Awards 2023</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Fast Company Most Innovative</h3>
                <p className="text-gray-300">Education Companies 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with industry leaders to provide our students with the best tools, opportunities, and support
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">hireoverseas.com</h3>
              <p className="text-sm text-gray-600">Direct job placement pipeline</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">OpenAI</h3>
              <p className="text-sm text-gray-600">Educational API partnerships</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Zapier</h3>
              <p className="text-sm text-gray-600">Automation training resources</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold text-gray-900 mb-2">LinkedIn Learning</h3>
              <p className="text-sm text-gray-600">Content syndication partner</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join 2,500+ successful graduates who've mastered AI-enhanced skills and transformed their income. 
            Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Take Free Assessment
            </Link>
            <Link href="/register" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Questions? <Link href="/contact" className="underline">Contact our team</Link> - we're here to help.
          </p>
        </div>
      </div>
    </div>
  );
}