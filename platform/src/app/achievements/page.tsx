'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const userStats = {
  level: 12,
  xp: 2450,
  xpToNext: 550,
  totalXp: 3000,
  streak: 7,
  coursesCompleted: 3,
  totalCourses: 6,
  skillPoints: 85,
  mentorshipSessions: 8,
  jobsApplied: 15,
  toolsMastered: 12,
  communityPosts: 23,
  helpfulAnswers: 18
};

const achievements = [
  {
    id: 1,
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '👶',
    category: 'Learning',
    xp: 50,
    unlocked: true,
    unlockedDate: '2024-01-15',
    rarity: 'common'
  },
  {
    id: 2,
    title: 'AI Apprentice',
    description: 'Master your first AI tool',
    icon: '🤖',
    category: 'Tools',
    xp: 100,
    unlocked: true,
    unlockedDate: '2024-01-18',
    rarity: 'common'
  },
  {
    id: 3,
    title: 'Week Warrior',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    category: 'Consistency',
    xp: 150,
    unlocked: true,
    unlockedDate: '2024-01-22',
    rarity: 'uncommon'
  },
  {
    id: 4,
    title: 'Course Crusher',
    description: 'Complete your first full course',
    icon: '📚',
    category: 'Learning',
    xp: 200,
    unlocked: true,
    unlockedDate: '2024-01-20',
    rarity: 'uncommon'
  },
  {
    id: 5,
    title: 'Community Helper',
    description: 'Help 10 fellow students in the forum',
    icon: '🤝',
    category: 'Community',
    xp: 150,
    unlocked: true,
    unlockedDate: '2024-01-25',
    rarity: 'uncommon'
  },
  {
    id: 6,
    title: 'Job Hunter',
    description: 'Apply to your first job through the platform',
    icon: '🎯',
    category: 'Career',
    xp: 100,
    unlocked: true,
    unlockedDate: '2024-01-23',
    rarity: 'common'
  },
  {
    id: 7,
    title: 'Mentor\'s Pick',
    description: 'Receive recognition from your mentor',
    icon: '⭐',
    category: 'Recognition',
    xp: 250,
    unlocked: false,
    progress: 0,
    total: 1,
    rarity: 'rare'
  },
  {
    id: 8,
    title: 'Triple Threat',
    description: 'Complete 3 different specializations',
    icon: '🎭',
    category: 'Learning',
    xp: 500,
    unlocked: false,
    progress: 3,
    total: 3,
    rarity: 'epic'
  },
  {
    id: 9,
    title: 'AI Master',
    description: 'Master 20 different AI tools',
    icon: '🧠',
    category: 'Tools',
    xp: 400,
    unlocked: false,
    progress: 12,
    total: 20,
    rarity: 'rare'
  },
  {
    id: 10,
    title: 'Income Booster',
    description: 'Increase your hourly rate by 200%',
    icon: '💰',
    category: 'Success',
    xp: 600,
    unlocked: false,
    progress: 150,
    total: 200,
    rarity: 'legendary'
  },
  {
    id: 11,
    title: 'Knowledge Sharer',
    description: 'Create a helpful tutorial for the community',
    icon: '📝',
    category: 'Community',
    xp: 300,
    unlocked: false,
    progress: 0,
    total: 1,
    rarity: 'rare'
  },
  {
    id: 12,
    title: 'Perfectionist',
    description: 'Score 100% on 5 assessments',
    icon: '💯',
    category: 'Learning',
    xp: 350,
    unlocked: false,
    progress: 3,
    total: 5,
    rarity: 'epic'
  }
];

const leaderboard = [
  { rank: 1, name: 'Maria Santos', level: 18, xp: 4250, avatar: 'MS', country: 'Philippines' },
  { rank: 2, name: 'David Chen', level: 17, xp: 4100, avatar: 'DC', country: 'Malaysia' },
  { rank: 3, name: 'Elena Rodriguez', level: 16, xp: 3950, avatar: 'ER', country: 'Brazil' },
  { rank: 4, name: 'Raj Patel', level: 15, xp: 3800, avatar: 'RP', country: 'India' },
  { rank: 5, name: 'Sofia Kim', level: 14, xp: 3650, avatar: 'SK', country: 'Vietnam' },
  { rank: 6, name: 'Carlos Martinez', level: 13, xp: 3500, avatar: 'CM', country: 'Colombia' },
  { rank: 7, name: 'Aisha Okonkwo', level: 13, xp: 3400, avatar: 'AO', country: 'Nigeria' },
  { rank: 8, name: 'You', level: userStats.level, xp: userStats.totalXp, avatar: 'YU', country: 'Your Country', isCurrentUser: true },
  { rank: 9, name: 'Ahmed Hassan', level: 11, xp: 2850, avatar: 'AH', country: 'Egypt' },
  { rank: 10, name: 'Linda Wu', level: 11, xp: 2750, avatar: 'LW', country: 'Taiwan' }
];

const categories = ['All', 'Learning', 'Tools', 'Community', 'Career', 'Success', 'Recognition'];

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  uncommon: 'from-green-400 to-green-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-orange-600'
};

export default function AchievementsPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedCategory, setSelectedCategory] = useState('All');
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
      setUser(parsedUser);
    } catch (error) {
      router.push('/login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const totalAchievements = achievements.length;

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

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏆 Achievements & Leaderboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your progress, unlock achievements, and compete with students worldwide. 
              Gamify your learning journey!
            </p>
          </div>

          {/* User Progress Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Level {userStats.level}</div>
                <div className="text-blue-100">Current Level</div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${(userStats.xp / userStats.totalXp) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-blue-200 mt-1">
                  {userStats.xp}/{userStats.totalXp} XP
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{userStats.streak}</div>
                <div className="text-blue-100">Day Streak</div>
                <div className="text-2xl mt-2">🔥</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{unlockedAchievements.length}/{totalAchievements}</div>
                <div className="text-blue-100">Achievements</div>
                <div className="text-2xl mt-2">🏆</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{userStats.skillPoints}</div>
                <div className="text-blue-100">Skill Points</div>
                <div className="text-2xl mt-2">⚡</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl shadow-sm p-2">
              {[
                { key: 'achievements', label: 'Achievements', icon: '🏆' },
                { key: 'leaderboard', label: 'Leaderboard', icon: '👑' },
                { key: 'progress', label: 'Progress', icon: '📊' }
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

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Achievements Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`bg-white rounded-xl shadow-sm p-6 border-2 transition-all hover:shadow-lg ${
                      achievement.unlocked
                        ? 'border-transparent'
                        : 'border-gray-200 opacity-75'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-4xl p-3 rounded-full bg-gradient-to-r ${
                        rarityColors[achievement.rarity as keyof typeof rarityColors]
                      } text-white flex items-center justify-center`}>
                        {achievement.icon}
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                          achievement.rarity === 'common' ? 'bg-gray-100 text-gray-700' :
                          achievement.rarity === 'uncommon' ? 'bg-green-100 text-green-700' :
                          achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
                          achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {achievement.rarity.toUpperCase()}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">+{achievement.xp} XP</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {achievement.description}
                    </p>

                    {achievement.unlocked ? (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-2 text-green-600 text-sm font-medium">
                          <span>✅</span>
                          <span>Unlocked</span>
                        </span>
                        <span className="text-xs text-gray-500">
                          {achievement.unlockedDate}
                        </span>
                      </div>
                    ) : (
                      <div>
                        {achievement.progress !== undefined && achievement.total && (
                          <div className="mb-2">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{achievement.progress}/{achievement.total}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        <span className="text-sm text-gray-500">🔒 Locked</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Global Leaderboard</h3>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg">
                    <option>This Month</option>
                    <option>All Time</option>
                    <option>This Week</option>
                  </select>
                </div>

                <div className="space-y-4">
                  {leaderboard.map((player) => (
                    <div
                      key={player.rank}
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                        player.isCurrentUser
                          ? 'bg-blue-50 border-2 border-blue-200'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          player.rank === 1 ? 'bg-yellow-500' :
                          player.rank === 2 ? 'bg-gray-400' :
                          player.rank === 3 ? 'bg-orange-500' :
                          'bg-blue-500'
                        }`}>
                          {player.rank <= 3 ? (
                            player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'
                          ) : (
                            player.rank
                          )}
                        </div>
                        
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {player.avatar}
                        </div>
                        
                        <div>
                          <h4 className={`font-bold ${
                            player.isCurrentUser ? 'text-blue-700' : 'text-gray-900'
                          }`}>
                            {player.name}
                            {player.isCurrentUser && <span className="ml-2 text-blue-600">(You)</span>}
                          </h4>
                          <p className="text-sm text-gray-600">{player.country}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-gray-900">Level {player.level}</div>
                        <div className="text-sm text-gray-600">{player.xp.toLocaleString()} XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Stats */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Your Performance</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">#{leaderboard.find(p => p.isCurrentUser)?.rank}</div>
                    <div className="text-green-100 text-sm">Global Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">+47</div>
                    <div className="text-green-100 text-sm">Positions This Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">💪</div>
                    <div className="text-green-100 text-sm">Keep Climbing!</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Learning Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Courses Completed</span>
                        <span>{userStats.coursesCompleted}/{userStats.totalCourses}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(userStats.coursesCompleted / userStats.totalCourses) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Tools Mastered</span>
                        <span>{userStats.toolsMastered}/20</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(userStats.toolsMastered / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">👥 Community Impact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Forum Posts</span>
                      <span className="font-bold text-gray-900">{userStats.communityPosts}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Helpful Answers</span>
                      <span className="font-bold text-gray-900">{userStats.helpfulAnswers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Reputation Score</span>
                      <span className="font-bold text-green-600">⭐ 4.8</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💼 Career Growth</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Jobs Applied</span>
                      <span className="font-bold text-gray-900">{userStats.jobsApplied}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mentor Sessions</span>
                      <span className="font-bold text-gray-900">{userStats.mentorshipSessions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Income Growth</span>
                      <span className="font-bold text-green-600">+150%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Goals */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 Weekly Goals</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { goal: 'Complete 3 lessons', progress: 2, total: 3, xp: 150 },
                    { goal: 'Help 2 community members', progress: 1, total: 2, xp: 100 },
                    { goal: 'Practice with 1 AI tool', progress: 1, total: 1, xp: 75 },
                    { goal: 'Attend 1 live session', progress: 0, total: 1, xp: 200 }
                  ].map((goal, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">
                        {goal.progress >= goal.total ? '✅' : '⏳'}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{goal.goal}</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {goal.progress}/{goal.total} • +{goal.xp} XP
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}