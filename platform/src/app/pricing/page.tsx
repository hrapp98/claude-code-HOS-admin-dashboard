'use client';

import { useState } from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 47,
    originalPrice: 97,
    period: 'month',
    description: 'Perfect for beginners exploring AI-enhanced freelancing',
    popular: false,
    features: [
      'Access to 1 specialization course',
      'Basic AI tool tutorials and setup guides',
      'Community forum access and peer support',
      'Weekly group Q&A sessions with instructors',
      'Mobile learning app with offline content',
      'Course completion certificate',
      'Basic job board access',
      'Email support within 24 hours'
    ],
    limitations: [
      'No 1-on-1 mentorship sessions',
      'Basic job placement support only',
      'Limited advanced AI workflows',
      'No priority course updates'
    ],
    cta: 'Start Free Trial',
    trialDays: 7,
    color: 'from-gray-600 to-gray-700',
    badge: null,
    savings: '52% OFF'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 97,
    originalPrice: 197,
    period: 'month',
    description: 'Most popular choice for serious freelancers',
    popular: true,
    features: [
      'Access to ALL 6 specialization courses',
      'Advanced AI tool masterclasses and workshops',
      'Priority community support and networking',
      'Bi-weekly 1-on-1 mentor sessions (2 hours/month)',
      'Live workshop access and recorded sessions',
      'Portfolio review and professional feedback',
      'Direct job referrals from hireoverseas.com',
      'Industry-recognized certifications',
      'Advanced automation workflow templates',
      'Priority email support within 4 hours',
      'Access to exclusive AI tool discounts',
      'Monthly group mastermind sessions'
    ],
    limitations: [],
    cta: 'Start Professional',
    trialDays: 14,
    color: 'from-blue-600 to-purple-600',
    badge: 'Most Popular',
    savings: '51% OFF'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 197,
    originalPrice: 397,
    period: 'month',
    description: 'For freelancers building agencies or premium services',
    popular: false,
    features: [
      'Everything in Professional plan',
      'Custom AI workflow development and consulting',
      'Weekly 1-on-1 strategy sessions (4 hours/month)',
      'White-label course materials for your clients',
      'Team collaboration tools and multi-user access',
      'Priority job placement with enterprise clients',
      'Revenue sharing opportunities and partnerships',
      'Direct access to course creators and experts',
      'Custom API integrations and automations',
      'Dedicated success manager and priority support',
      'Advanced analytics and progress tracking',
      'Custom certification programs for your brand',
      'Exclusive networking events and conferences'
    ],
    limitations: [],
    cta: 'Go Enterprise',
    trialDays: 30,
    color: 'from-purple-600 to-pink-600',
    badge: 'Premium',
    savings: '50% OFF'
  }
];

const annualDiscounts = {
  starter: { monthly: 47, annual: 470, savings: 94 }, // 2 months free
  professional: { monthly: 97, annual: 970, savings: 194 }, // 2 months free  
  enterprise: { monthly: 197, annual: 1970, savings: 394 } // 2 months free
};

const faqs = [
  {
    question: 'What happens during my free trial?',
    answer: 'You get full access to your chosen plan for the trial period. No credit card required for Starter (7 days). Professional and Enterprise trials require a card but you won\'t be charged until the trial ends.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely! You can upgrade or downgrade at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at your next billing cycle.'
  },
  {
    question: 'What if I\'m not satisfied?',
    answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied, contact us for a full refund within 30 days of your purchase.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer 3-month and 6-month payment plans for Professional and Enterprise plans. You can also pay annually for additional savings.'
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No setup fees, no hidden costs. The price you see is the price you pay. All features are included in your monthly subscription.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For annual plans, we also accept wire transfers.'
  },
  {
    question: 'Is there a student discount?',
    answer: 'Yes! Students get 25% off any plan with a valid student ID. Contact our support team after signing up to apply the discount.'
  },
  {
    question: 'Can I get a refund if I don\'t find a job?',
    answer: 'Our job placement success rate is 94%, but if you complete your chosen course and don\'t receive any job referrals within 60 days, we\'ll extend your membership for free until you do.'
  }
];

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Virtual Assistant',
    location: 'Philippines',
    plan: 'Professional',
    quote: 'The ROI was incredible. I paid $97/month and increased my income by $1,500/month within 3 months.',
    roi: '1,500% ROI'
  },
  {
    name: 'Raj Patel', 
    role: 'SEO Specialist',
    location: 'India',
    plan: 'Enterprise',
    quote: 'The Enterprise plan helped me build my own agency. Now I have 5 team members and 20+ clients.',
    roi: 'Built 6-figure agency'
  },
  {
    name: 'Elena Volkov',
    role: 'Content Creator',
    location: 'Ukraine', 
    plan: 'Professional',
    quote: 'Started with the Professional plan and tripled my rates in 2 months. Best investment I\'ve ever made.',
    roi: '300% rate increase'
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const getPlanPrice = (plan: any) => {
    if (billingCycle === 'annual') {
      const annualData = annualDiscounts[plan.id as keyof typeof annualDiscounts];
      return {
        price: Math.round(annualData.annual / 12),
        originalPrice: plan.price,
        savings: annualData.savings,
        totalAnnual: annualData.annual
      };
    }
    return {
      price: plan.price,
      originalPrice: plan.originalPrice,
      savings: null,
      totalAnnual: null
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Success Path
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Invest in your future with flexible pricing designed for overseas freelancers. Start free, scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-white' : 'bg-blue-500'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-blue-600 transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`${billingCycle === 'annual' ? 'text-white' : 'text-blue-200'}`}>
                Annual
              </span>
              {billingCycle === 'annual' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 17%
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-blue-200">Successful Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">94%</div>
                <div className="text-blue-200">Job Placement Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">250%</div>
                <div className="text-blue-200">Avg Income Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan) => {
            const pricing = getPlanPrice(plan);
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-sm font-bold`}>
                      {plan.badge}
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
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-center">
                        <span className="text-4xl font-bold text-gray-900">
                          ${pricing.price}
                        </span>
                        <span className="text-gray-500">/{plan.period}</span>
                      </div>
                      
                      {billingCycle === 'monthly' && (
                        <div className="text-sm">
                          <span className="text-gray-500 line-through">${pricing.originalPrice}/month</span>
                          <span className="ml-2 text-green-600 font-medium">{plan.savings}</span>
                        </div>
                      )}
                      
                      {billingCycle === 'annual' && pricing.totalAnnual && (
                        <div className="text-sm">
                          <div className="text-gray-600">Billed annually: ${pricing.totalAnnual}</div>
                          <div className="text-green-600 font-medium">Save ${pricing.savings}/year</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1 flex-shrink-0">✗</span>
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 text-lg font-semibold rounded-lg transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">
                      {plan.trialDays}-day free trial • No credit card required
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Our Students Say About Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {testimonial.plan} Plan
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {testimonial.roi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎉 Limited Time: Get Your First Month FREE
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            New students get their first month completely free on any plan. Start learning today, pay only when you see results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="btn bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
              Claim Free Month
            </button>
            <div className="flex items-center justify-center space-x-2 text-green-100">
              <span>⏰ Offer expires in:</span>
              <span className="font-bold">23:59:47</span>
            </div>
          </div>
          <p className="text-sm text-green-200">
            * Valid for new customers only. No credit card required during free month.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
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

        {/* Money Back Guarantee */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mb-20">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
            🛡️
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Risk-Free 30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're so confident you'll love our courses that we offer a full 30-day money-back guarantee. 
            If you're not completely satisfied, get every penny back—no questions asked.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-semibold text-gray-900 mb-2">Learn Risk-Free</h4>
              <p className="text-sm text-gray-600">Complete access to all course materials</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Refund</h4>
              <p className="text-sm text-gray-600">100% money back if not satisfied</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Process</h4>
              <p className="text-sm text-gray-600">Refund processed within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 2,500+ successful freelancers who've mastered AI-enhanced skills and transformed their income. 
            Your success story starts with the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </Link>
            <Link href="/assessment" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Take Assessment First
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Still not sure? Book a free consultation with our team.
          </p>
        </div>
      </div>
    </div>
  );
}