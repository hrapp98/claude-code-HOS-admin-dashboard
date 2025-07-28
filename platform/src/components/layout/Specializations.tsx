const specializations = [
  {
    title: 'Virtual Assistant + AI Mastery',
    description: 'Master AI-powered email management, scheduling automation, and intelligent client communication.',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    aiTools: ['ChatGPT', 'Zapier', 'Calendly AI', 'Notion AI'],
    outcomes: [
      'Automate 80% of routine tasks',
      'Handle 3x more clients efficiently',
      'Increase rates from $5 to $20+ per hour'
    ],
    image: '🤖',
    color: 'from-blue-500 to-purple-600',
    price: '$297'
  },
  {
    title: 'SEO Specialist + AI Tools',
    description: 'Leverage AI for keyword research, content optimization, and automated reporting at scale.',
    duration: '10 weeks',
    level: 'Intermediate',
    aiTools: ['Surfer SEO', 'Jasper AI', 'SEMrush AI', 'Screaming Frog'],
    outcomes: [
      'Complete SEO audits in 1 hour vs 8 hours',
      'Generate data-driven content strategies',
      'Land $2,000+ monthly retainer clients'
    ],
    image: '📈',
    color: 'from-green-500 to-teal-600',
    price: '$397'
  },
  {
    title: 'Content Creator + AI Enhancement',
    description: 'Create engaging content 10x faster using AI writing assistants and optimization tools.',
    duration: '6 weeks',
    level: 'Beginner',
    aiTools: ['GPT-4', 'Grammarly AI', 'Canva AI', 'Copy.ai'],
    outcomes: [
      'Write high-quality articles in 30 minutes',
      'Create multi-platform content from one piece',
      'Build a personal brand that attracts premium clients'
    ],
    image: '✍️',
    color: 'from-purple-500 to-pink-600',
    price: '$247'
  },
  {
    title: 'Video Editor + AI Production',
    description: 'Streamline video editing with AI-powered tools for faster, professional results.',
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    aiTools: ['RunwayML', 'Descript', 'Adobe Sensei', 'Pictory'],
    outcomes: [
      'Edit videos 5x faster with AI assistance',
      'Auto-generate subtitles and translations',
      'Create viral social media content'
    ],
    image: '🎬',
    color: 'from-red-500 to-orange-600',
    price: '$497'
  },
  {
    title: 'Digital Marketer + AI Automation',
    description: 'Build AI-driven marketing campaigns that optimize themselves and deliver better ROI.',
    duration: '14 weeks',
    level: 'Advanced',
    aiTools: ['HubSpot AI', 'Facebook AI', 'Google AI', 'Mailchimp AI'],
    outcomes: [
      'Create self-optimizing ad campaigns',
      'Predict customer behavior with AI',
      'Scale marketing operations without scaling team'
    ],
    image: '🎯',
    color: 'from-indigo-500 to-blue-600',
    price: '$597'
  },
  {
    title: 'Social Media Manager + AI Tools',
    description: 'Manage multiple clients with AI-powered content creation and community management.',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    aiTools: ['Buffer AI', 'Hootsuite AI', 'Later AI', 'Loomly'],
    outcomes: [
      'Manage 10+ accounts effortlessly',
      'Create engaging content in minutes',
      'Grow follower base 300% faster'
    ],
    image: '📱',
    color: 'from-cyan-500 to-blue-600',
    price: '$347'
  }
];

export function Specializations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Enhanced Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path to success. Each specialization combines traditional skills with cutting-edge AI tools for maximum market impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${spec.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${spec.color} flex items-center justify-center text-2xl`}>
                      {spec.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {spec.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⏱️ {spec.duration}</span>
                        <span>📊 {spec.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{spec.price}</div>
                    <div className="text-sm text-gray-500">one-time</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {spec.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">AI Tools You'll Master:</h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.aiTools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Achieve:</h4>
                  <ul className="space-y-2">
                    {spec.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn btn-primary flex-1">
                    Enroll Now
                  </button>
                  <button className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Decide? Get a Free Consultation
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our career advisors will help you choose the perfect specialization based on your background, goals, and market opportunities.
            </p>
            <button className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}