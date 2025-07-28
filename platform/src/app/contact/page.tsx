'use client';

import { useState } from 'react';
import Link from 'next/link';

const contactOptions = [
  {
    title: 'General Questions',
    description: 'Course information, pricing, and general inquiries',
    email: 'hello@hireoverseasuniversity.com',
    responseTime: '24 hours',
    icon: '💬'
  },
  {
    title: 'Student Support',
    description: 'Help with courses, technical issues, and learning support',
    email: 'support@hireoverseasuniversity.com',
    responseTime: '4 hours',
    icon: '🎓'
  },
  {
    title: 'Partnership Opportunities',
    description: 'Corporate training, affiliate partnerships, and collaborations',
    email: 'partnerships@hireoverseasuniversity.com',
    responseTime: '48 hours',
    icon: '🤝'
  },
  {
    title: 'Media & Press',
    description: 'Press inquiries, interviews, and media requests',
    email: 'press@hireoverseasuniversity.com',
    responseTime: '24 hours',
    icon: '📰'
  }
];

const faqs = [
  {
    question: 'How quickly can I start earning more after completing a course?',
    answer: 'Most students see income increases within 30-60 days of starting their course. Our average graduate increases their hourly rate by 150% within 90 days of completion.'
  },
  {
    question: 'Do you offer refunds if I\'m not satisfied?',
    answer: 'Yes! We offer a 30-day money-back guarantee on all courses. If you\'re not completely satisfied, we\'ll refund your full payment, no questions asked.'
  },
  {
    question: 'Are the courses suitable for complete beginners?',
    answer: 'Absolutely! Our courses are designed for all skill levels. We start with fundamentals and gradually build to advanced techniques. Our assessment helps place you in the right starting point.'
  },
  {
    question: 'How does the job placement assistance work?',
    answer: 'We have partnerships with hireoverseas.com and other platforms. Graduates get direct referrals, portfolio reviews, and ongoing support to find high-quality clients.'
  },
  {
    question: 'What makes your courses different from other online education?',
    answer: 'We\'re the only platform focused specifically on AI-enhanced freelancing for overseas talent. Our curriculum is updated monthly, includes 1-on-1 mentorship, and guarantees measurable income increases.'
  },
  {
    question: 'Do you offer corporate or group training?',
    answer: 'Yes! We offer custom corporate training programs for companies looking to upskill their remote teams. Contact our partnerships team for a custom quote.'
  }
];

const officeLocations = [
  {
    city: 'San Francisco, USA',
    address: '123 Innovation Street, Suite 456',
    description: 'Global Headquarters',
    timezone: 'PST (UTC-8)',
    phone: '+1 (555) 123-4567'
  },
  {
    city: 'Manila, Philippines',
    address: 'BGC Central Plaza, Tower 2, Floor 15',
    description: 'Southeast Asia Operations',
    timezone: 'PHT (UTC+8)',
    phone: '+63 2 8123 4567'
  },
  {
    city: 'Bangalore, India',
    address: 'UB City Mall, Level 3, Wing A',
    description: 'South Asia Operations',
    timezone: 'IST (UTC+5:30)',
    phone: '+91 80 1234 5678'
  },
  {
    city: 'São Paulo, Brazil',
    address: 'Av. Paulista 1000, Conjunto 101',
    description: 'Latin America Operations',
    timezone: 'BRT (UTC-3)',
    phone: '+55 11 1234-5678'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
            ✓
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '', lastName: '', email: '', phone: '', 
                  country: '', subject: '', message: '', inquiryType: 'general'
                });
              }}
              className="btn btn-primary w-full"
            >
              Send Another Message
            </button>
            <Link href="/" className="btn btn-secondary w-full">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our courses, need support, or want to explore partnerships? 
              We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Contact Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Can We Help You?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${option.email}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium block"
                  >
                    {option.email}
                  </a>
                  <div className="text-xs text-gray-500">
                    Response time: {option.responseTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g., Philippines"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="general">General Questions</option>
                    <option value="courses">Course Information</option>
                    <option value="support">Student Support</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="press">Media & Press</option>
                    <option value="technical">Technical Issues</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Brief description of your inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h3>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{office.city}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {office.description}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{office.timezone}</span>
                      <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-green-100 mb-6">
                Our student support team is available 24/7 via live chat for enrolled students.
              </p>
              <div className="space-y-3">
                <button className="w-full btn bg-white text-green-600 hover:bg-green-50">
                  Start Live Chat
                </button>
                <Link href="/help" className="block text-center text-green-100 hover:text-white text-sm">
                  Browse Help Center →
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest AI freelancing tips, success stories, and platform updates.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-2xl">📘</span>
                  <div>
                    <div className="font-medium text-gray-900">Facebook</div>
                    <div className="text-sm text-gray-500">50K followers</div>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                  <span className="text-2xl">🐦</span>
                  <div>
                    <div className="font-medium text-gray-900">Twitter</div>
                    <div className="text-sm text-gray-500">25K followers</div>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-medium text-gray-900">LinkedIn</div>
                    <div className="text-sm text-gray-500">75K followers</div>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <span className="text-2xl">📹</span>
                  <div>
                    <div className="font-medium text-gray-900">YouTube</div>
                    <div className="text-sm text-gray-500">100K subscribers</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/help" className="text-blue-600 hover:text-blue-700 font-medium">
                View All FAQs in Help Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}