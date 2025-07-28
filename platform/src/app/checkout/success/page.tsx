'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const subscription = localStorage.getItem('subscription');
    if (!subscription) {
      router.push('/pricing');
      return;
    }

    try {
      const parsedData = JSON.parse(subscription);
      setSubscriptionData(parsedData);
      
      // Update user with subscription info
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        const updatedUser = {
          ...user,
          subscription: parsedData,
          hasActiveSubscription: true,
          subscriptionPlan: parsedData.plan
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      router.push('/pricing');
      return;
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!subscriptionData) {
    return null;
  }

  const planNames = {
    starter: 'Starter Plan',
    professional: 'Professional Plan',
    enterprise: 'Enterprise Plan'
  };

  const nextSteps = [
    {
      step: 1,
      title: 'Complete Your Profile',
      description: 'Finish setting up your account and preferences',
      action: 'Complete Profile',
      link: '/profile',
      icon: '👤'
    },
    {
      step: 2,
      title: 'Take Skill Assessment',
      description: 'Get personalized course recommendations',
      action: 'Start Assessment',
      link: '/assessment',
      icon: '📊'
    },
    {
      step: 3,
      title: 'Access Your Dashboard',
      description: 'Start learning and track your progress',
      action: 'Go to Dashboard',
      link: '/dashboard',
      icon: '🎯'
    },
    {
      step: 4,
      title: 'Join the Community',
      description: 'Connect with peers and mentors',
      action: 'Join Community',
      link: '/community',
      icon: '👥'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-16">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-6 animate-pulse">
              ✓
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Your Success Journey! 🎉
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your payment was successful! You now have access to all the tools and resources 
              needed to transform your freelance career with AI.
            </p>
          </div>

          {/* Subscription Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Subscription Details</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Plan:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {planNames[subscriptionData.plan as keyof typeof planNames]}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Billing:</span>
                  <span className="ml-2 font-medium text-gray-900 capitalize">
                    {subscriptionData.billingCycle}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {subscriptionData.currency === 'USD' ? '$' : subscriptionData.currency}
                    {subscriptionData.amount.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="ml-2 font-medium text-gray-900 capitalize">
                    {subscriptionData.paymentMethod === 'card' ? 'Credit Card' : subscriptionData.paymentMethod}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Purchase Date:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {formatDate(subscriptionData.purchaseDate)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Next Billing:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {formatDate(subscriptionData.nextBilling)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Access Level:</span>
                  <span className="ml-2 font-medium text-green-600">Full Access</span>
                </div>
                <div>
                  <Link href="/billing" className="text-blue-600 hover:text-blue-700 text-sm">
                    Manage Subscription →
                  </Link>
                </div>
              </div>
            </div>

            {/* Receipt */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Need a receipt?</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download PDF Receipt
                </button>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Get Access To</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-bold text-gray-900 mb-2">Course Library</h3>
                <p className="text-gray-600 text-sm">
                  {subscriptionData.plan === 'starter' ? '1 specialization' : 'All 6 specializations'} 
                  with 100+ lessons
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-gray-900 mb-2">AI Tools Training</h3>
                <p className="text-gray-600 text-sm">Master ChatGPT, Zapier, and 20+ AI tools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h3 className="font-bold text-gray-900 mb-2">1-on-1 Mentorship</h3>
                <p className="text-gray-600 text-sm">
                  {subscriptionData.plan === 'enterprise' ? 'Weekly' : 'Bi-weekly'} sessions with experts
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-bold text-gray-900 mb-2">Job Placement</h3>
                <p className="text-gray-600 text-sm">Direct referrals from hireoverseas.com</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-gray-600 text-sm">Industry-recognized completion certificates</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold text-gray-900 mb-2">Community Access</h3>
                <p className="text-gray-600 text-sm">Connect with 2,500+ successful graduates</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Next Steps</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {nextSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <Link 
                      href={step.link}
                      className="btn btn-primary text-sm px-4 py-2"
                    >
                      {step.action}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our student success team is here to help you make the most of your investment. 
              We're committed to your success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50 px-6 py-3">
                Contact Support
              </Link>
              <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3">
                Schedule Onboarding Call
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Available 24/7 • Average response time: 2 hours
            </p>
          </div>

          {/* Email Confirmation */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              📧 A confirmation email with your receipt and login details has been sent to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}