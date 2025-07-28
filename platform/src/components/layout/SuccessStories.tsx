const successStories = [
  {
    name: 'Maria Santos',
    role: 'Virtual Assistant',
    location: 'Philippines 🇵🇭',
    before: '$4/hour, struggling to find consistent work',
    after: '$22/hour, managing 15+ premium clients',
    income: '450% increase',
    duration: '3 months',
    image: '/avatars/maria.jpg',
    testimonial: "The AI tools I learned completely transformed my service offerings. I went from basic admin tasks to providing strategic automation solutions. My clients now see me as indispensable.",
    course: 'Virtual Assistant + AI Mastery',
    achievements: [
      'Built AI-powered client onboarding system',
      'Automated email management for 15 clients',
      'Created custom ChatGPT workflows'
    ]
  },
  {
    name: 'Raj Patel',
    role: 'SEO Specialist',
    location: 'India 🇮🇳',
    before: '$300/month, working for agencies',
    after: '$2,500/month, independent consultant',
    income: '733% increase',
    duration: '4 months',
    image: '/avatars/raj.jpg',
    testimonial: "Learning AI-enhanced SEO techniques gave me a massive competitive advantage. I can deliver results in hours that used to take weeks. My clients are amazed.",
    course: 'SEO Specialist + AI Tools',
    achievements: [
      'Automated keyword research with AI',
      'Reduced audit time from 8 hours to 1 hour',
      'Landed 3 enterprise clients'
    ]
  },
  {
    name: 'Elena Volkov',
    role: 'Content Creator',
    location: 'Ukraine 🇺🇦',
    before: '$8/hour, writing basic articles',
    after: '$35/hour, premium content strategist',
    income: '338% increase',
    duration: '2 months',
    image: '/avatars/elena.jpg',
    testimonial: "The AI content creation course taught me to work smarter, not harder. I now create comprehensive content strategies that clients love to pay premium rates for.",
    course: 'Content Creator + AI Enhancement',
    achievements: [
      'Created viral LinkedIn content series',
      'Built AI-assisted content calendar',
      'Launched successful personal brand'
    ]
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Video Editor',
    location: 'Mexico 🇲🇽',
    before: '$12/hour, basic video editing',
    after: '$45/hour, AI-enhanced production',
    income: '275% increase',
    duration: '5 months',
    image: '/avatars/carlos.jpg',
    testimonial: "AI video tools revolutionized my workflow. I can now produce Hollywood-quality content at lightning speed. My turnaround time went from days to hours.",
    course: 'Video Editor + AI Production',
    achievements: [
      'Automated subtitle generation in 10 languages',
      'Cut video editing time by 70%',
      'Created viral social media campaigns'
    ]
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how overseas freelancers just like you have transformed their careers and multiplied their income using our AI-enhanced training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-gray-600">
                      {story.role} • {story.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    +{story.income}
                  </div>
                  <div className="text-sm text-gray-500">
                    in {story.duration}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before:</h4>
                    <p className="text-gray-600 text-sm">{story.before}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After:</h4>
                    <p className="text-gray-600 text-sm">{story.after}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                  "{story.testimonial}"
                </blockquote>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {story.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">🏆</span>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Completed: <span className="font-medium text-blue-600">{story.course}</span>
                </div>
                <button className="btn btn-primary text-sm">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join 2,500+ Success Stories
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our graduates consistently achieve life-changing results. Here's what you can expect:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">94%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250%</div>
              <div className="text-blue-200">Avg Income Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30</div>
              <div className="text-blue-200">Days to First Job</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$2.1M</div>
              <div className="text-blue-200">Total Earned by Graduates</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}