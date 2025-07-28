const features = [
  {
    icon: '🤖',
    title: 'AI-First Learning',
    description: 'Every course integrates cutting-edge AI tools directly into your workflow, not as separate subjects.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🌍',
    title: 'Overseas-Focused',
    description: 'Designed specifically for international freelancers with real-world client scenarios and cultural context.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '💼',
    title: 'Direct Job Placement',
    description: 'Connect directly with hireoverseas.com for immediate job opportunities upon course completion.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: '👥',
    title: 'Community-Driven',
    description: 'Learn with peers from your region, get mentored by successful graduates, and build lasting networks.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: '📈',
    title: 'Income Guarantee',
    description: '94% of graduates increase their income by 150%+ within 6 months or get additional support.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    description: 'Learn on-the-go with offline downloads, optimized for mobile devices and slower internet connections.',
    gradient: 'from-teal-500 to-green-500'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Hire Overseas University?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another online learning platform. We're built specifically for overseas freelancers who want to master AI and multiply their income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Freelance Career?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful freelancers who've mastered AI-enhanced skills and landed premium clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <button className="btn btn-secondary px-8 py-4 text-lg">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}