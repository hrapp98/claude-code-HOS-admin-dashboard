'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BillingPage() {
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const subscriptionData = localStorage.getItem('subscription');
    
    if (!userData) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      if (subscriptionData) {
        setSubscription(JSON.parse(subscriptionData));
      }
    } catch (error) {
      router.push('/login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  const handleCancelSubscription = () => {
    // In a real app, this would call an API
    const updatedSubscription = {
      ...subscription,
      status: 'cancelled',
      cancellationDate: new Date().toISOString(),
      endsAt: subscription.nextBilling
    };
    
    localStorage.setItem('subscription', JSON.stringify(updatedSubscription));
    setSubscription(updatedSubscription);
    setShowCancelModal(false);
  };

  const handleReactivateSubscription = () => {
    const updatedSubscription = {
      ...subscription,
      status: 'active',
      cancellationDate: null,
      endsAt: null
    };
    
    localStorage.setItem('subscription', JSON.stringify(updatedSubscription));
    setSubscription(updatedSubscription);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const planNames = {
    starter: 'Starter Plan',
    professional: 'Professional Plan',
    enterprise: 'Enterprise Plan'
  };

  const planPrices = {
    starter: { monthly: 47, annual: 470 },
    professional: { monthly: 97, annual: 970 },
    enterprise: { monthly: 197, annual: 1970 }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const mockInvoices = [
    {
      id: 'inv_001',
      date: '2024-01-20',
      amount: subscription?.amount || 97,
      status: 'paid',
      description: `${planNames[subscription?.plan as keyof typeof planNames]} - ${subscription?.billingCycle}`
    },
    {
      id: 'inv_002',
      date: '2023-12-20',
      amount: subscription?.amount || 97,
      status: 'paid',
      description: `${planNames[subscription?.plan as keyof typeof planNames]} - ${subscription?.billingCycle}`
    },
    {
      id: 'inv_003',
      date: '2023-11-20',
      amount: subscription?.amount || 97,
      status: 'paid',
      description: `${planNames[subscription?.plan as keyof typeof planNames]} - ${subscription?.billingCycle}`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Billing & Subscription</h1>
            <p className="text-xl text-gray-600">Manage your subscription, billing details, and payment history</p>
          </div>

          {/* Current Subscription */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Current Subscription</h2>
              {subscription ? (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  subscription.status === 'cancelled' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {subscription.status === 'cancelled' ? 'Cancelled' : 'Active'}
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  No Subscription
                </span>
              )}
            </div>

            {subscription ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600">Plan:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      {planNames[subscription.plan as keyof typeof planNames]}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Billing Cycle:</span>
                    <span className="ml-2 font-medium text-gray-900 capitalize">
                      {subscription.billingCycle}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Amount:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      ${subscription.amount.toFixed(2)} / {subscription.billingCycle}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      •••• 4242 (Visa)
                    </span>
                    <button className="ml-2 text-blue-600 hover:text-blue-700 text-sm">
                      Update
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600">
                      {subscription.status === 'cancelled' ? 'Ends On:' : 'Next Billing:'}
                    </span>
                    <span className="ml-2 font-medium text-gray-900">
                      {formatDate(subscription.status === 'cancelled' ? subscription.endsAt : subscription.nextBilling)}
                    </span>
                  </div>
                  {subscription.status === 'cancelled' && (
                    <div>
                      <span className="text-gray-600">Cancelled On:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {formatDate(subscription.cancellationDate)}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-600">Auto-Renewal:</span>
                    <span className={`ml-2 font-medium ${
                      subscription.status === 'cancelled' ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {subscription.status === 'cancelled' ? 'Disabled' : 'Enabled'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Subscription</h3>
                <p className="text-gray-600 mb-6">Start your AI freelancing journey today</p>
                <Link href="/pricing" className="btn btn-primary">
                  View Plans
                </Link>
              </div>
            )}

            {/* Action Buttons */}
            {subscription && (
              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-4">
                  {subscription.status !== 'cancelled' ? (
                    <>
                      <button
                        onClick={() => setShowUpgradeModal(true)}
                        className="btn btn-primary"
                      >
                        Upgrade Plan
                      </button>
                      <Link href="/checkout?plan=professional&billing=annual" className="btn btn-secondary">
                        Switch to Annual
                      </Link>
                      <button
                        onClick={() => setShowCancelModal(true)}
                        className="btn bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        Cancel Subscription
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleReactivateSubscription}
                      className="btn btn-primary"
                    >
                      Reactivate Subscription
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Add New Method
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">•••• •••• •••• 4242</div>
                    <div className="text-sm text-gray-500">Expires 12/2027</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Default
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing History</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-gray-600 font-medium">Date</th>
                    <th className="text-left py-3 text-gray-600 font-medium">Description</th>
                    <th className="text-left py-3 text-gray-600 font-medium">Amount</th>
                    <th className="text-left py-3 text-gray-600 font-medium">Status</th>
                    <th className="text-left py-3 text-gray-600 font-medium">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-100">
                      <td className="py-4 text-gray-900">{formatDate(invoice.date)}</td>
                      <td className="py-4 text-gray-900">{invoice.description}</td>
                      <td className="py-4 text-gray-900">${invoice.amount.toFixed(2)}</td>
                      <td className="py-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Usage & Limits */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage & Limits</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-bold text-gray-900 mb-1">Courses Accessed</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">3/6</p>
                <p className="text-gray-500 text-sm">Specializations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-bold text-gray-900 mb-1">Mentorship Sessions</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">4/8</p>
                <p className="text-gray-500 text-sm">This month</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-bold text-gray-900 mb-1">Community Posts</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">Unlimited</p>
                <p className="text-gray-500 text-sm">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Subscription Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cancel Subscription</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your subscription? You'll continue to have access until {formatDate(subscription?.nextBilling)}.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleCancelSubscription}
                className="flex-1 btn bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Cancel
              </button>
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 btn btn-secondary"
              >
                Keep Subscription
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upgrade Your Plan</h3>
            <div className="space-y-4">
              {Object.entries(planNames).map(([key, name]) => (
                key !== subscription?.plan && (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">{name}</h4>
                        <p className="text-gray-600 text-sm">
                          ${planPrices[key as keyof typeof planPrices].monthly}/month
                        </p>
                      </div>
                      <Link 
                        href={`/checkout?plan=${key}&billing=monthly`}
                        className="btn btn-primary"
                      >
                        Upgrade
                      </Link>
                    </div>
                  </div>
                )
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}