'use client';

import { useState } from 'react';
import Link from 'next/link';

const jobListings = [
  {
    id: 1,
    title: 'AI-Enhanced Virtual Assistant for Tech Startup',
    company: 'TechFlow Solutions',
    location: 'Remote (US Client)',
    type: 'Full-time',
    salary: { min: 1800, max: 2500, currency: 'USD' },
    description: 'We\'re looking for a skilled virtual assistant who can leverage AI tools to manage our executive schedules, emails, and project coordination. Must be proficient in ChatGPT, Zapier, and Notion.',
    requirements: [
      '2+ years VA experience',
      'Proficient in AI tools (ChatGPT, Zapier, Notion)',
      'Excellent English communication',
      'Experience with tech startups preferred'
    ],
    aiToolsRequired: ['ChatGPT', 'Zapier', 'Notion AI', 'Calendly'],
    postedAt: '2 days ago',
    applicants: 24,
    matchScore: 95,
    companyLogo: '🚀',
    featured: true,
    skills: ['Virtual Assistant', 'AI Tools', 'Project Management'],
    benefits: ['Health Insurance', 'Flexible Hours', 'Professional Development']
  },
  {
    id: 2,
    title: 'SEO Specialist with AI Automation Skills',
    company: 'Digital Marketing Agency Pro',
    location: 'Remote (Global)',
    type: 'Contract',
    salary: { min: 2000, max: 3500, currency: 'USD' },
    description: 'Join our team as an SEO specialist who can implement AI-driven strategies. You\'ll be responsible for keyword research, content optimization, and automated reporting using cutting-edge AI tools.',
    requirements: [
      '3+ years SEO experience',
      'Experience with AI SEO tools',
      'Knowledge of technical SEO',
      'Client communication skills'
    ],
    aiToolsRequired: ['Surfer SEO', 'SEMrush AI', 'ChatGPT', 'Screaming Frog'],
    postedAt: '1 week ago',
    applicants: 18,
    matchScore: 88,
    companyLogo: '📈',
    featured: false,
    skills: ['SEO', 'AI Tools', 'Content Strategy'],
    benefits: ['Performance Bonuses', 'Flexible Schedule', 'Training Provided']
  },
  {
    id: 3,
    title: 'Content Creator & AI Prompt Engineer',
    company: 'ContentCraft Media',
    location: 'Remote (English Speaking)',
    type: 'Part-time',
    salary: { min: 1200, max: 1800, currency: 'USD' },
    description: 'We need a creative content creator who can develop high-quality blog posts, social media content, and marketing materials using AI assistance. Perfect for someone who understands prompt engineering.',
    requirements: [
      '1+ years content creation',
      'Strong writing skills',
      'AI prompt engineering experience',
      'Portfolio of published work'
    ],
    aiToolsRequired: ['GPT-4', 'Jasper AI', 'Grammarly', 'Canva AI'],
    postedAt: '3 days ago',
    applicants: 31,
    matchScore: 82,
    companyLogo: '✍️',
    featured: true,
    skills: ['Content Creation', 'AI Writing', 'Social Media'],
    benefits: ['Creative Freedom', 'Byline Credit', 'Skill Development']
  },
  {
    id: 4,
    title: 'Video Editor with AI Production Tools',
    company: 'Viral Video Studios',
    location: 'Remote (Any Timezone)',
    type: 'Freelance',
    salary: { min: 25, max: 45, currency: 'USD', per: 'hour' },
    description: 'Looking for a video editor who can create engaging content using AI-powered editing tools. You\'ll work on YouTube videos, social media content, and promotional materials.',
    requirements: [
      '2+ years video editing',
      'Experience with AI editing tools',
      'Creative storytelling skills',
      'Fast turnaround capability'
    ],
    aiToolsRequired: ['RunwayML', 'Descript', 'Adobe Sensei', 'Pictory'],
    postedAt: '5 days ago',
    applicants: 12,
    matchScore: 76,
    companyLogo: '🎬',
    featured: false,
    skills: ['Video Editing', 'AI Tools', 'Creative Design'],
    benefits: ['Project Variety', 'Portfolio Building', 'Long-term Partnership']
  },
  {
    id: 5,
    title: 'Digital Marketing Manager - AI-Focused',
    company: 'Growth Hacker Inc',
    location: 'Remote (US/EU Hours)',
    type: 'Full-time',
    salary: { min: 3000, max: 4500, currency: 'USD' },
    description: 'Lead our digital marketing efforts using AI-powered automation and analytics. You\'ll manage campaigns across multiple platforms and optimize using machine learning insights.',
    requirements: [
      '4+ years marketing experience',
      'AI marketing tool expertise',
      'Campaign optimization skills',
      'Team leadership experience'
    ],
    aiToolsRequired: ['HubSpot AI', 'Google AI', 'Facebook AI', 'Mailchimp AI'],
    postedAt: '1 day ago',
    applicants: 8,
    matchScore: 91,
    companyLogo: '🎯',
    featured: true,
    skills: ['Digital Marketing', 'AI Automation', 'Team Leadership'],
    benefits: ['Stock Options', 'Health Coverage', 'Professional Development']
  },
  {
    id: 6,
    title: 'Social Media Manager with AI Content Tools',
    company: 'Brand Builders Co',
    location: 'Remote (Global)',
    type: 'Contract',
    salary: { min: 1500, max: 2200, currency: 'USD' },
    description: 'Manage social media accounts for multiple clients using AI-powered content creation and scheduling tools. Experience with community management and analytics required.',
    requirements: [
      '2+ years social media management',
      'AI content creation experience',
      'Multi-client management',
      'Analytics and reporting skills'
    ],
    aiToolsRequired: ['Buffer AI', 'Hootsuite AI', 'ChatGPT', 'Canva AI'],
    postedAt: '4 days ago',
    applicants: 22,
    matchScore: 79,
    companyLogo: '📱',
    featured: false,
    skills: ['Social Media', 'AI Content', 'Community Management'],
    benefits: ['Diverse Clients', 'Creative Freedom', 'Growth Opportunities']
  }
];

const filters = {
  type: ['All Types', 'Full-time', 'Part-time', 'Contract', 'Freelance'],
  location: ['All Locations', 'Remote (US)', 'Remote (EU)', 'Remote (Global)', 'Remote (English Speaking)'],
  salary: ['All Salaries', '$1000-2000', '$2000-3000', '$3000-4000', '$4000+'],
  skills: ['All Skills', 'Virtual Assistant', 'SEO', 'Content Creation', 'Video Editing', 'Digital Marketing', 'Social Media']
};

export default function JobsPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedSalary, setSelectedSalary] = useState('All Salaries');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobListings.filter(job => {
    const matchesType = selectedType === 'All Types' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'All Locations' || job.location.includes(selectedLocation.replace('Remote ', ''));
    const matchesSalary = selectedSalary === 'All Salaries' || 
      (selectedSalary === '$1000-2000' && job.salary.min >= 1000 && job.salary.max <= 2000) ||
      (selectedSalary === '$2000-3000' && job.salary.min >= 2000 && job.salary.max <= 3000) ||
      (selectedSalary === '$3000-4000' && job.salary.min >= 3000 && job.salary.max <= 4000) ||
      (selectedSalary === '$4000+' && job.salary.min >= 4000);
    const matchesSkill = selectedSkill === 'All Skills' || job.skills.includes(selectedSkill);
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesLocation && matchesSalary && matchesSkill && matchesSearch;
  });

  const formatSalary = (salary: any) => {
    if (salary.per === 'hour') {
      return `$${salary.min}-${salary.max}/hr`;
    }
    return `$${salary.min.toLocaleString()}-${salary.max.toLocaleString()}/month`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Enhanced Job Board
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Exclusive opportunities for graduates with AI-enhanced skills. Connected directly with hireoverseas.com
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-between text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-green-200">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-green-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$2.1M</div>
                  <div className="text-green-200">Total Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-5 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {filters.type.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {filters.location.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              value={selectedSalary}
              onChange={(e) => setSelectedSalary(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {filters.salary.map(salary => (
                <option key={salary} value={salary}>{salary}</option>
              ))}
            </select>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {filters.skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobListings.length} jobs
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Newest First</option>
                <option>Best Match</option>
                <option>Highest Salary</option>
                <option>Most Applicants</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${job.featured ? 'ring-2 ring-green-500' : ''}`}>
              {job.featured && (
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-2 text-sm font-medium rounded-t-xl">
                  ⭐ Featured Job
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                      {job.companyLogo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="font-medium">{job.company}</span>
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                        <span>⏰ {job.postedAt}</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        {formatSalary(job.salary)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{job.matchScore}%</span>
                      <span className="text-sm text-gray-600">Match</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {job.applicants} applicants
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">💎</span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Required AI Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.aiToolsRequired.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="btn btn-primary flex-1 text-center"
                  >
                    Apply Now
                  </Link>
                  <button className="btn btn-secondary">
                    Save Job
                  </button>
                  <button className="btn btn-secondary">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary px-8 py-3">
            Load More Jobs
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not Finding the Right Job?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Create a job alert and get notified when positions matching your AI skills become available. Our algorithm matches you with opportunities based on your course progress and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
              Create Job Alert
            </button>
            <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
              Upload Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}