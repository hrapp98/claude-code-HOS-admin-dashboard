'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const mockAnalyticsData = {
  overview: {
    totalStudents: 2547,
    activeStudents: 1892,
    completionRate: 78,
    averageProgress: 65,
    totalRevenue: 247850,
    monthlyGrowth: 23,
    coursesCompleted: 1034,
    jobPlacements: 956
  },
  revenueData: [
    { month: 'Jan', revenue: 18500, students: 156 },
    { month: 'Feb', revenue: 22300, students: 189 },
    { month: 'Mar', revenue: 28900, students: 234 },
    { month: 'Apr', revenue: 35600, students: 287 },
    { month: 'May', revenue: 42100, students: 341 },
    { month: 'Jun', revenue: 48750, students: 398 }
  ],
  coursePerformance: [
    { course: 'Virtual Assistant + AI', enrolled: 847, completed: 658, rating: 4.9, revenue: 82150 },
    { course: 'SEO Specialist + AI', enrolled: 623, completed: 486, rating: 4.8, revenue: 73920 },
    { course: 'Content Creator + AI', enrolled: 589, completed: 461, rating: 4.7, revenue: 56780 },
    { course: 'Digital Marketer + AI', enrolled: 456, completed: 347, rating: 4.8, revenue: 68400 },
    { course: 'Video Editor + AI', enrolled: 234, completed: 178, rating: 4.6, revenue: 41580 },
    { course: 'Social Media Manager + AI', enrolled: 298, completed: 231, rating: 4.7, revenue: 35670 }
  ],
  studentProgress: {
    week1Retention: 94,
    week2Retention: 87,
    week4Retention: 78,
    week8Retention: 65,
    averageTimeToComplete: 42,
    mostEngagedHours: ['7PM-9PM', '2PM-4PM', '10AM-12PM']
  },
  toolMarketplace: {
    totalClicks: 12547,
    conversions: 2891,
    conversionRate: 23,
    topTools: [
      { name: 'ChatGPT Plus', clicks: 3247, conversions: 892, revenue: 4460 },
      { name: 'Zapier Pro', clicks: 2156, conversions: 567, revenue: 2835 },
      { name: 'Surfer SEO', clicks: 1890, conversions: 445, revenue: 3115 },
      { name: 'Jasper AI', clicks: 1654, conversions: 387, revenue: 2709 }
    ]
  },
  demographics: {
    countries: [
      { country: 'Philippines', students: 789, percentage: 31 },
      { country: 'India', students: 634, percentage: 25 },
      { country: 'Brazil', students: 456, percentage: 18 },
      { country: 'Ukraine', students: 312, percentage: 12 },
      { country: 'Others', students: 356, percentage: 14 }
    ],
    ageGroups: [
      { range: '18-24', count: 456, percentage: 18 },
      { range: '25-34', count: 1147, percentage: 45 },
      { range: '35-44', count: 743, percentage: 29 },
      { range: '45+', count: 201, percentage: 8 }
    ]
  }
};

export default function AnalyticsPage() {
  const [user, setUser] = useState<any>(null);
  const [timeRange, setTimeRange] = useState('6months');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      // Check if user is admin/instructor
      if (!parsedUser.isAdmin && !parsedUser.isInstructor) {
        router.push('/dashboard');
        return;
      }
      setUser(parsedUser);
    } catch (error) {
      router.push('/login');
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

  if (!user) {
    return null;
  }

  const { overview, revenueData, coursePerformance, studentProgress, toolMarketplace, demographics } = mockAnalyticsData;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
              <p className="text-xl text-gray-600">Comprehensive insights into platform performance and student success</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="1month">Last Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
              <button className="btn btn-primary">
                📊 Export Report
              </button>
            </div>
          </div>

          {/* Key Metrics Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900">{overview.totalStudents.toLocaleString()}</p>
                  <p className="text-green-600 text-sm">+{overview.monthlyGrowth}% this month</p>
                </div>
                <div className="text-3xl">👥</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Students</p>
                  <p className="text-3xl font-bold text-gray-900">{overview.activeStudents.toLocaleString()}</p>
                  <p className="text-blue-600 text-sm">{Math.round((overview.activeStudents/overview.totalStudents)*100)}% of total</p>
                </div>
                <div className="text-3xl">🎯</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">${overview.totalRevenue.toLocaleString()}</p>
                  <p className="text-green-600 text-sm">Monthly recurring</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Job Placements</p>
                  <p className="text-3xl font-bold text-gray-900">{overview.jobPlacements}</p>
                  <p className="text-purple-600 text-sm">{Math.round((overview.jobPlacements/overview.coursesCompleted)*100)}% success rate</p>
                </div>
                <div className="text-3xl">🚀</div>
              </div>
            </div>
          </div>

          {/* Revenue & Growth Chart */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth</h3>
              <div className="space-y-4">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{data.month}</span>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.revenue / 50000) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-gray-900 w-20 text-right">
                        ${data.revenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Student Retention</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Week 1</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${studentProgress.week1Retention}%` }}></div>
                    </div>
                    <span className="font-medium text-gray-900 w-12 text-right">{studentProgress.week1Retention}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Week 2</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${studentProgress.week2Retention}%` }}></div>
                    </div>
                    <span className="font-medium text-gray-900 w-12 text-right">{studentProgress.week2Retention}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Week 4</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${studentProgress.week4Retention}%` }}></div>
                    </div>
                    <span className="font-medium text-gray-900 w-12 text-right">{studentProgress.week4Retention}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Week 8</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${studentProgress.week8Retention}%` }}></div>
                    </div>
                    <span className="font-medium text-gray-900 w-12 text-right">{studentProgress.week8Retention}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Course Performance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Course</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Enrolled</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Completed</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Completion Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {coursePerformance.map((course, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium text-gray-900">{course.course}</td>
                      <td className="py-4 px-4 text-gray-700">{course.enrolled}</td>
                      <td className="py-4 px-4 text-gray-700">{course.completed}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(course.completed/course.enrolled)*100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">
                            {Math.round((course.completed/course.enrolled)*100)}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-gray-700">{course.rating}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-green-600">
                        ${course.revenue.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Demographics & Tool Performance */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Student Demographics</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">By Country</h4>
                  <div className="space-y-3">
                    {demographics.countries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-600">{country.country}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${country.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-700 w-12 text-right">
                            {country.students}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">By Age Group</h4>
                  <div className="space-y-3">
                    {demographics.ageGroups.map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-600">{age.range}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${age.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-700 w-12 text-right">
                            {age.count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">AI Tools Performance</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{toolMarketplace.totalClicks.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Clicks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{toolMarketplace.conversions.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Conversions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{toolMarketplace.conversionRate}%</p>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Top Performing Tools</h4>
                  <div className="space-y-3">
                    {toolMarketplace.topTools.map((tool, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{tool.name}</p>
                          <p className="text-sm text-gray-500">{tool.clicks} clicks → {tool.conversions} conversions</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">${tool.revenue}</p>
                          <p className="text-sm text-gray-500">
                            {Math.round((tool.conversions/tool.clicks)*100)}% rate
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights & Recommendations */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">🎯 Key Insights & Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">📈 Growth Opportunities</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Philippines market showing 31% adoption - consider localized content</li>
                  <li>• 25-34 age group is 45% of users - optimize marketing for this segment</li>
                  <li>• Video Editor course has lowest enrollment - needs marketing boost</li>
                  <li>• Week 4-8 retention drops - implement engagement campaigns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">🚀 Action Items</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Create Filipino language content for VA course</li>
                  <li>• Launch video editing webinar series</li>
                  <li>• Implement week 4 check-in automation</li>
                  <li>• Expand ChatGPT Plus affiliate partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}