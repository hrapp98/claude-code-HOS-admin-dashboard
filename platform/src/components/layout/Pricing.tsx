const pricingPlans = [
  {
    name: 'Starter',
    price: '$47',
    period: '/month',
    description: 'Perfect for beginners exploring AI-enhanced freelancing',
    features: [
      'Access to 1 specialization course',
      'Basic AI tool tutorials',
      'Community forum access',
      'Weekly group Q&A sessions',
      'Mobile learning app',
      'Course completion certificate'
    ],
    limitations: [
      'No 1-on-1 mentorship',
      'Basic job placement support'
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Professional',
    price: '$97',
    period: '/month',
    description: 'Most popular choice for serious freelancers',
    features: [
      'Access to ALL 6 specialization courses',
      'Advanced AI tool masterclasses',
      'Priority community support',
      'Bi-weekly 1-on-1 mentor sessions',
      'Live workshop access',
      'Portfolio review & feedback',
      'Direct job referrals from hireoverseas.com',
      'Industry-recognized certifications'
    ],
    limitations: [],
    cta: 'Start Professional',
    popular: true,
    color: 'from-blue-600 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: '$197',
    period: '/month',
    description: 'For freelancers building agencies or premium services',
    features: [
      'Everything in Professional',
      'Custom AI workflow development',
      'Weekly 1-on-1 strategy sessions',
      'White-label course materials',
      'Team collaboration tools',
      'Priority job placement',
      'Revenue sharing opportunities',
      'Direct access to course creators',
      'Custom integrations & APIs'
    ],
    limitations: [],
    cta: 'Go Enterprise',
    popular: false,
    color: 'from-purple-600 to-pink-600'
  }
];

const faqs = [
  {
    question: 'What if I\'m completely new to AI tools?',
    answer: 'Perfect! Our courses are designed for beginners. We start with the basics and gradually build up your skills. Most of our successful graduates had zero AI experience when they started.'
  },
  {
    question: 'How quickly can I start earning more?',
    answer: 'Most students see income improvements within 30-60 days. Our average graduate increases their rates by 150% within 6 months. However, results depend on your dedication and current skill level.'
  },
  {
    question: 'Do you really guarantee job placement?',
    answer: 'Yes! 94% of our Professional and Enterprise graduates get job referrals within 30 days of completion through our partnership with hireoverseas.com. If you don\'t get placed, we provide additional support until you do.'
  },
  {
    question: 'Can I access courses on mobile?',
    answer: 'Absolutely! Our platform is mobile-first, designed specifically for learners in emerging markets. All videos can be downloaded for offline viewing, and the entire experience works great on slower internet connections.'
  },
  {
    question: 'What if I need help with English?',
    answer: 'All our courses include subtitles and we have community support in multiple languages. Many of our mentors are bilingual and can provide guidance in your native language.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with the quality or don\'t see improvement in your skills, we\'ll refund your payment completely.'
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Success Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your future with flexible pricing designed for overseas freelancers. Start free, scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {plan.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3">
                      <span className="text-gray-400 mt-1">✗</span>
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} py-4 text-lg font-semibold`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎉 Limited Time: First Month Free
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            New students get their first month completely free on any plan. Start learning today, pay only when you see results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
              Claim Free Month
            </button>
            <div className="text-green-100 px-4 py-2">
              Expires in: <span className="font-bold">23:59:47</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 2,500+ successful freelancers who've mastered AI-enhanced skills and transformed their income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </button>
              <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}