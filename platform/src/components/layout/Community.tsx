export function Community() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Join a Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow freelancers, get mentored by successful graduates, and build lasting professional relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
              👥
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Peer Learning Groups
            </h3>
            <p className="text-gray-600 mb-6">
              Join study groups with freelancers from similar backgrounds and specializations. Share experiences and learn together.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">🇵🇭</span>
                </div>
                <span className="text-sm text-gray-600">Philippines Chapter - 847 members</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
                <span className="text-sm text-gray-600">India Chapter - 623 members</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xs">🇺🇦</span>
                </div>
                <span className="text-sm text-gray-600">Ukraine Chapter - 341 members</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Mentorship Program
            </h3>
            <p className="text-gray-600 mb-6">
              Get paired with successful graduates who've walked the same path. Receive personalized guidance and career advice.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Mentors</span>
                <span className="font-semibold text-blue-600">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Response Time</span>
                <span className="font-semibold text-green-600">2 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="font-semibold text-purple-600">97%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
              💬
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              24/7 Support Network
            </h3>
            <p className="text-gray-600 mb-6">
              Never get stuck alone. Our community is active around the clock with instant help and encouragement.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Messages</span>
                <span className="font-semibold text-blue-600">2,400+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Questions Answered</span>
                <span className="font-semibold text-green-600">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Response</span>
                <span className="font-semibold text-purple-600">12 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Preview */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Live Community Feed</h3>
            <p className="text-blue-100">See what our members are sharing right now</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">Maria Jose</span>
                    <span className="text-sm text-gray-500">• VA Specialist • 🇵🇭</span>
                    <span className="text-xs text-gray-400">2m ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Just landed my first $2000/month client using the AI email automation workflow from Module 3! The ChatGPT integration is a game-changer 🚀
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>❤️ 47</span>
                    <span>💬 12</span>
                    <span>🔄 8</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  RP
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">Raj Patel</span>
                    <span className="text-sm text-gray-500">• SEO Expert • 🇮🇳</span>
                    <span className="text-xs text-gray-400">15m ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Quick tip: The Surfer AI integration can reduce your content optimization time by 80%. Here's how I set it up... [Read more]
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>❤️ 23</span>
                    <span>💬 6</span>
                    <span>🔄 15</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  EV
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">Elena Volkov</span>
                    <span className="text-sm text-gray-500">• Content Creator • 🇺🇦</span>
                    <span className="text-xs text-gray-400">1h ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Who's attending today's live Q&A with Sarah about advanced ChatGPT prompting? I have some questions about B2B content strategies!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>❤️ 18</span>
                    <span>💬 9</span>
                    <span>🔄 3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="btn btn-primary px-8 py-4">
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}