export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your AI-Enhanced Future
            <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Starts Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Don't let another month pass earning below your potential. Master AI-enhanced skills and transform your freelance career starting today.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Start Immediately</h3>
              <p className="text-gray-400">Access all content within 5 minutes of enrollment</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">See Results Fast</h3>
              <p className="text-gray-400">First income improvement within 30 days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">Risk-Free</h3>
              <p className="text-gray-400">30-day money-back guarantee</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6">🎁 What You Get When You Join Today:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Complete AI tool mastery course ($497 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>1-on-1 mentor matching ($297 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Premium community access ($97 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Job placement guarantee ($197 value)</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🎁</span>
                  <span>Bonus: AI prompt library ($147 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🎁</span>
                  <span>Bonus: Client proposal templates ($97 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🎁</span>
                  <span>Bonus: Rate negotiation masterclass ($197 value)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400">💰</span>
                  <span className="font-bold">Total Value: $1,729</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-xl font-bold">
              🚀 Start Learning Now - $97/month
            </button>
            <div className="text-center">
              <div className="text-sm text-gray-400">Or</div>
              <button className="text-blue-400 hover:text-blue-300 underline">
                Try free for 7 days
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>Secure payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>↻</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Instant access</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>💳</span>
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}