'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Visa, Mastercard, American Express',
    icon: '💳',
    popular: true
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Pay with your PayPal account',
    icon: '🅿️',
    popular: false
  },
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    description: 'Quick and secure payment',
    icon: '🍎',
    popular: false
  },
  {
    id: 'google_pay',
    name: 'Google Pay',
    description: 'Pay with Google',
    icon: '🅶',
    popular: false
  }
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' }
];

const plans = {
  starter: {
    name: 'Starter Plan',
    monthlyPrice: 47,
    annualPrice: 470,
    originalPrice: 97,
    features: [
      'Access to 1 specialization course',
      'Basic AI tool tutorials',
      'Community forum access',
      'Weekly group Q&A sessions',
      'Mobile learning app',
      'Course completion certificate'
    ]
  },
  professional: {
    name: 'Professional Plan',
    monthlyPrice: 97,
    annualPrice: 970,
    originalPrice: 197,
    features: [
      'Access to ALL 6 specialization courses',
      'Advanced AI tool masterclasses',
      'Priority community support',
      'Bi-weekly 1-on-1 mentor sessions',
      'Live workshop access',
      'Portfolio review and feedback',
      'Direct job referrals',
      'Industry-recognized certifications'
    ]
  },
  enterprise: {
    name: 'Enterprise Plan',
    monthlyPrice: 197,
    annualPrice: 1970,
    originalPrice: 397,
    features: [
      'Everything in Professional plan',
      'Custom AI workflow development',
      'Weekly 1-on-1 strategy sessions',
      'White-label course materials',
      'Team collaboration tools',
      'Priority job placement',
      'Revenue sharing opportunities',
      'Dedicated success manager'
    ]
  }
};

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    city: '',
    postalCode: ''
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const plan = searchParams.get('plan');
    const billing = searchParams.get('billing');
    
    if (plan && plans[plan as keyof typeof plans]) {
      setSelectedPlan(plan);
    }
    
    if (billing === 'annual' || billing === 'monthly') {
      setBillingCycle(billing);
    }
  }, [searchParams]);

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currency = currencies.find(c => c.code === selectedCurrency) || currencies[0];
  
  const basePrice = billingCycle === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;
  const discount = appliedCoupon ? (basePrice * appliedCoupon.percentage / 100) : 0;
  const subtotal = basePrice - discount;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const applyCoupon = () => {
    const validCoupons = {
      'WELCOME25': { percentage: 25, description: '25% off your first payment' },
      'STUDENT20': { percentage: 20, description: '20% student discount' },
      'EARLY50': { percentage: 50, description: '50% early bird discount' }
    };

    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setAppliedCoupon({
        code: couponCode,
        ...validCoupons[couponCode as keyof typeof validCoupons]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Store purchase info
    const purchaseData = {
      plan: selectedPlan,
      billingCycle,
      amount: total,
      currency: selectedCurrency,
      paymentMethod: selectedPaymentMethod,
      purchaseDate: new Date().toISOString(),
      nextBilling: billingCycle === 'annual' 
        ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };

    localStorage.setItem('subscription', JSON.stringify(purchaseData));
    router.push('/checkout/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Purchase</h1>
            <p className="text-xl text-gray-600">You're one step away from transforming your freelance career</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                {/* Plan Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-900">Selected Plan</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">Change</button>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800">{currentPlan.name}</h4>
                    <p className="text-blue-600 text-sm">{billingCycle === 'annual' ? 'Annual billing' : 'Monthly billing'}</p>
                  </div>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        billingCycle === 'monthly'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle('annual')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        billingCycle === 'annual'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Annual (Save 17%)
                    </button>
                  </div>
                </div>

                {/* Currency Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {currencies.map(curr => (
                      <option key={curr.code} value={curr.code}>
                        {curr.symbol} {curr.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={applyCoupon}
                      className="btn btn-secondary px-4 py-2"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-2 p-2 bg-green-50 rounded text-sm text-green-800">
                      ✓ {appliedCoupon.description}
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {currentPlan.name} - {billingCycle}
                    </span>
                    <span className="font-medium">
                      {currency.symbol}{basePrice.toFixed(2)}
                    </span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-{currency.symbol}{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">{currency.symbol}{tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-xl font-bold border-t pt-3">
                    <span>Total</span>
                    <span>{currency.symbol}{total.toFixed(2)}</span>
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-500 text-center">
                      Equivalent to {currency.symbol}{(total/12).toFixed(2)}/month
                    </p>
                  )}
                </div>

                {/* Features Included */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {currentPlan.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {currentPlan.features.length > 4 && (
                      <li className="text-sm text-blue-600">
                        +{currentPlan.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Philippines"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPaymentMethod(method.id)}
                        className={`relative p-4 border-2 rounded-lg text-left transition-colors ${
                          selectedPaymentMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-500">{method.description}</div>
                          </div>
                        </div>
                        {method.popular && (
                          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            Popular
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Card Details */}
                  {selectedPaymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Billing Address</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="mb-6">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" required className="mt-1" />
                      <span className="text-sm text-gray-600">
                        I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing Payment...' : `Complete Purchase - ${currency.symbol}${total.toFixed(2)}`}
                  </button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <p>🔒 Your payment information is secure and encrypted</p>
                    <p className="mt-2">30-day money-back guarantee • Cancel anytime</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}