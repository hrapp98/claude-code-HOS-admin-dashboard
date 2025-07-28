'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const affiliateData = {
  overview: {
    totalEarnings: 2847.50,
    thisMonthEarnings: 485.20,
    totalReferrals: 23,
    activeReferrals: 18,
    conversionRate: 12.5,
    averageCommission: 38.50,
    nextPayoutDate: '2024-02-01',
    payoutThreshold: 100
  },
  recentActivity: [
    {
      id: 1,
      type: 'referral',
      user: 'Maria Santos',
      email: 'm***@gmail.com',
      plan: 'Professional',
      commission: 48.50,
      status: 'confirmed',
      date: '2024-01-22'
    },
    {
      id: 2,
      type: 'tool_sale',
      user: 'David Kim',
      email: 'd***@yahoo.com',
      tool: 'ChatGPT Plus',
      commission: 12.00,
      status: 'pending',
      date: '2024-01-21'
    },
    {
      id: 3,
      type: 'referral',
      user: 'Elena Rodriguez',
      email: 'e***@hotmail.com',
      plan: 'Starter',
      commission: 23.50,
      status: 'confirmed',
      date: '2024-01-20'
    }
  ],
  payoutHistory: [
    { date: '2024-01-01', amount: 456.75, method: 'PayPal', status: 'completed' },
    { date: '2023-12-01', amount: 389.25, method: 'Bank Transfer', status: 'completed' },
    { date: '2023-11-01', amount: 512.80, method: 'PayPal', status: 'completed' }
  ]
};

const commissionRates = {
  courses: {
    starter: { rate: 50, amount: 23.50 },
    professional: { rate: 50, amount: 48.50 },
    enterprise: { rate: 50, amount: 98.50 }
  },
  tools: {
    chatgpt: { rate: 60, amount: 12.00 },
    zapier: { rate: 40, amount: 8.00 },
    jasper: { rate: 45, amount: 22.05 }
  },
  lifetime: {
    tier1: { referrals: '1-10', rate: 50 },
    tier2: { referrals: '11-25', rate: 55 },
    tier3: { referrals: '26-50', rate: 60 },
    tier4: { referrals: '51+', rate: 65 }
  }
};

export default function AffiliatesPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [affiliateLink, setAffiliateLink] = useState('');
  const [customLink, setCustomLink] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      // Generate affiliate link
      const baseUrl = 'https://hireoverseasuniversity.com';
      const userId = parsedUser.id || 'user123';
      setAffiliateLink(`${baseUrl}?ref=${userId}`);
    } catch (error) {
      router.push('/login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show a toast notification
    alert('Copied to clipboard!');
  };

  const generateCustomLink = () => {
    if (!customLink.trim()) return;
    const baseUrl = 'https://hireoverseasuniversity.com';
    const userId = user?.id || 'user123';
    const custom = `${baseUrl}/${customLink}?ref=${userId}`;
    setAffiliateLink(custom);
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

  const { overview, recentActivity, payoutHistory } = affiliateData;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              💰 Affiliate Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn up to 65% commission by referring students to our AI-enhanced courses. 
              Help others transform their careers while building your income stream.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl shadow-sm p-2">
              {[
                { key: 'dashboard', label: 'Dashboard', icon: '📊' },
                { key: 'links', label: 'Links & Tools', icon: '🔗' },
                { key: 'rates', label: 'Commission Rates', icon: '💵' },
                { key: 'resources', label: 'Marketing Resources', icon: '📁' },
                { key: 'payouts', label: 'Payouts', icon: '💳' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Overview Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Earnings</p>
                      <p className="text-3xl font-bold text-green-600">${overview.totalEarnings}</p>
                      <p className="text-gray-500 text-sm">All time</p>
                    </div>
                    <div className="text-3xl">💰</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">This Month</p>
                      <p className="text-3xl font-bold text-blue-600">${overview.thisMonthEarnings}</p>
                      <p className="text-green-500 text-sm">+23% vs last month</p>
                    </div>
                    <div className="text-3xl">📈</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Referrals</p>
                      <p className="text-3xl font-bold text-purple-600">{overview.totalReferrals}</p>
                      <p className="text-gray-500 text-sm">{overview.activeReferrals} active</p>
                    </div>
                    <div className="text-3xl">👥</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Conversion Rate</p>
                      <p className="text-3xl font-bold text-orange-600">{overview.conversionRate}%</p>
                      <p className="text-gray-500 text-sm">Above average</p>
                    </div>
                    <div className="text-3xl">🎯</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                          activity.type === 'referral' ? 'bg-blue-500' : 'bg-green-500'
                        }`}>
                          {activity.type === 'referral' ? '👤' : '🛠️'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.type === 'referral' ? 'Course Referral' : 'Tool Sale'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.user} ({activity.email}) • {activity.type === 'referral' ? activity.plan : activity.tool}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+${activity.commission}</p>
                        <p className={`text-xs px-2 py-1 rounded ${
                          activity.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {activity.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Payout */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">💳 Next Payout</h3>
                    <p className="text-green-100">
                      You have ${overview.thisMonthEarnings} ready for payout on {overview.nextPayoutDate}
                    </p>
                    <p className="text-sm text-green-200 mt-2">
                      Minimum payout: ${overview.payoutThreshold}
                    </p>
                  </div>
                  <button className="btn bg-white text-green-600 hover:bg-green-50">
                    Request Early Payout
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Links & Tools Tab */}
          {activeTab === 'links' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Affiliate Links</h3>
                
                {/* Main Affiliate Link */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Affiliate Link
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={affiliateLink}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                    <button
                      onClick={() => copyToClipboard(affiliateLink)}
                      className="btn btn-primary px-6"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Custom Link Generator */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Create Custom Link
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={customLink}
                      onChange={(e) => setCustomLink(e.target.value)}
                      placeholder="custom-path"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={generateCustomLink}
                      className="btn btn-secondary px-6"
                    >
                      Generate
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Example: hireoverseasuniversity.com/your-custom-path?ref=your-id
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { page: 'Pricing Page', path: '/pricing', description: 'Direct to pricing plans' },
                      { page: 'Free Assessment', path: '/assessment', description: 'Lead generation tool' },
                      { page: 'Success Stories', path: '/success-stories', description: 'Social proof page' },
                      { page: 'AI Tools', path: '/tools', description: 'Tool marketplace' }
                    ].map((link, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900">{link.page}</h5>
                        <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={`https://hireoverseasuniversity.com${link.path}?ref=${user?.id || 'user123'}`}
                            readOnly
                            className="flex-1 text-xs px-2 py-1 border border-gray-300 rounded bg-gray-50"
                          />
                          <button
                            onClick={() => copyToClipboard(`https://hireoverseasuniversity.com${link.path}?ref=${user?.id || 'user123'}`)}
                            className="text-xs btn btn-secondary px-3 py-1"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* QR Code & Social Sharing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">QR Code</h3>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500">QR Code</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Share your affiliate link easily with a QR code
                    </p>
                    <button className="btn btn-secondary">Download QR Code</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Social Sharing</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <span>📘</span>
                      <span>Share on Facebook</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
                      <span>🐦</span>
                      <span>Share on Twitter</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
                      <span>💼</span>
                      <span>Share on LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Commission Rates Tab */}
          {activeTab === 'rates' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Commission Structure</h3>
                
                {/* Course Commissions */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">📚 Course Referrals</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(commissionRates.courses).map(([plan, data]) => (
                      <div key={plan} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 capitalize">{plan} Plan</h5>
                        <p className="text-2xl font-bold text-green-600">{data.rate}%</p>
                        <p className="text-sm text-gray-600">${data.amount} per sale</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool Commissions */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">🛠️ Tool Sales</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(commissionRates.tools).map(([tool, data]) => (
                      <div key={tool} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 capitalize">{tool.replace('chatgpt', 'ChatGPT')}</h5>
                        <p className="text-2xl font-bold text-blue-600">{data.rate}%</p>
                        <p className="text-sm text-gray-600">${data.amount} per month</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifetime Commission Tiers */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">🚀 Lifetime Commission Tiers</h4>
                  <div className="space-y-4">
                    {Object.entries(commissionRates.lifetime).map(([tier, data]) => (
                      <div key={tier} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Tier {tier.slice(-1)}</p>
                          <p className="text-sm text-gray-600">{data.referrals} referrals</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">{data.rate}%</p>
                          <p className="text-sm text-gray-600">commission rate</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">🎯 Performance Bonuses</h3>
                <p className="text-yellow-100 mb-4">
                  Reach monthly milestones and earn extra rewards!
                </p>
                <ul className="space-y-2 text-yellow-100">
                  <li>• 10 referrals/month: $200 bonus</li>
                  <li>• 25 referrals/month: $500 bonus</li>
                  <li>• 50 referrals/month: $1,000 bonus + exclusive rewards</li>
                </ul>
              </div>
            </div>
          )}

          {/* Marketing Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Marketing Resources</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Banners & Images */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">🖼️ Banners & Graphics</h4>
                    <div className="space-y-4">
                      {[
                        { name: 'Header Banner (728x90)', downloads: 1247 },
                        { name: 'Square Social Media (1080x1080)', downloads: 892 },
                        { name: 'Story Template (1080x1920)', downloads: 654 },
                        { name: 'Email Signature (600x150)', downloads: 433 }
                      ].map((banner, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{banner.name}</p>
                            <p className="text-sm text-gray-500">{banner.downloads} downloads</p>
                          </div>
                          <button className="btn btn-secondary text-sm">Download</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email Templates */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">📧 Email Templates</h4>
                    <div className="space-y-4">
                      {[
                        { name: 'Welcome Sequence (5 emails)', type: 'Onboarding' },
                        { name: 'Success Story Template', type: 'Social Proof' },
                        { name: 'Limited Time Offer', type: 'Promotion' },
                        { name: 'Free Assessment Invite', type: 'Lead Generation' }
                      ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{template.name}</p>
                            <p className="text-sm text-gray-500">{template.type}</p>
                          </div>
                          <button className="btn btn-secondary text-sm">Preview</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Media Content */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">📱 Social Media Content</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { platform: 'LinkedIn', posts: 15, type: 'Professional' },
                      { platform: 'Facebook', posts: 12, type: 'Community' },
                      { platform: 'Instagram', posts: 20, type: 'Visual Stories' }
                    ].map((social, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900">{social.platform}</h5>
                        <p className="text-sm text-gray-600">{social.posts} ready-to-post content</p>
                        <p className="text-xs text-gray-500 mb-3">{social.type}</p>
                        <button className="w-full btn btn-secondary text-sm">View Content</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Calendar */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Content Calendar</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">This Week's Suggested Posts</p>
                  <ul className="mt-2 space-y-2 text-blue-700">
                    <li>• Monday: Share success story from Maria Santos</li>
                    <li>• Wednesday: Post about new AI tools integration</li>
                    <li>• Friday: Highlight free assessment opportunity</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Payouts Tab */}
          {activeTab === 'payouts' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payout Settings</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Payment Method</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="radio" name="payment" value="paypal" defaultChecked className="mr-3" />
                        <span>PayPal (paypal@email.com)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="payment" value="bank" className="mr-3" />
                        <span>Bank Transfer</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="payment" value="crypto" className="mr-3" />
                        <span>Cryptocurrency</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Payout Schedule</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="radio" name="schedule" value="monthly" defaultChecked className="mr-3" />
                        <span>Monthly (1st of each month)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="schedule" value="weekly" className="mr-3" />
                        <span>Weekly (every Friday)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="schedule" value="threshold" className="mr-3" />
                        <span>When reaching $500 threshold</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payout History */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payout History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Method</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payoutHistory.map((payout, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-gray-900">{payout.date}</td>
                          <td className="py-4 px-4 font-medium text-green-600">${payout.amount}</td>
                          <td className="py-4 px-4 text-gray-700">{payout.method}</td>
                          <td className="py-4 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              {payout.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}