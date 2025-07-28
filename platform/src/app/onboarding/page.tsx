'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  firstName: string;
  lastName: string;
  specialization?: string;
  currentLevel?: string;
  goals?: string[];
  country?: string;
}

const skillAssessment = {
  'Virtual Assistant': [
    {
      question: 'How comfortable are you with email management and scheduling?',
      options: [
        { text: 'Very comfortable - I manage multiple calendars', value: 3 },
        { text: 'Somewhat comfortable - I use basic tools', value: 2 },
        { text: 'Basic knowledge - I can handle simple tasks', value: 1 },
        { text: 'New to this - I need to learn from scratch', value: 0 }
      ]
    },
    {
      question: 'Have you used any AI tools for administrative tasks?',
      options: [
        { text: 'Yes, I use multiple AI tools regularly', value: 3 },
        { text: 'I\'ve experimented with ChatGPT or similar', value: 2 },
        { text: 'I\'ve heard about them but never used them', value: 1 },
        { text: 'I\'m completely new to AI tools', value: 0 }
      ]
    },
    {
      question: 'What\'s your experience with automation tools like Zapier?',
      options: [
        { text: 'I create complex automations regularly', value: 3 },
        { text: 'I\'ve set up basic automations', value: 2 },
        { text: 'I know what they are but haven\'t used them', value: 1 },
        { text: 'I\'ve never heard of automation tools', value: 0 }
      ]
    }
  ],
  'Content Creator': [
    {
      question: 'How would you rate your writing skills?',
      options: [
        { text: 'Professional writer with published work', value: 3 },
        { text: 'Good writer, some experience', value: 2 },
        { text: 'Basic writing skills, room for improvement', value: 1 },
        { text: 'Beginner, need to develop writing skills', value: 0 }
      ]
    },
    {
      question: 'Have you used AI writing tools like ChatGPT or Jasper?',
      options: [
        { text: 'Yes, I use them professionally', value: 3 },
        { text: 'I\'ve experimented with them', value: 2 },
        { text: 'I\'ve tried them once or twice', value: 1 },
        { text: 'I\'ve never used AI writing tools', value: 0 }
      ]
    },
    {
      question: 'What\'s your experience with content strategy?',
      options: [
        { text: 'I develop comprehensive content strategies', value: 3 },
        { text: 'I understand the basics of content planning', value: 2 },
        { text: 'I write content but don\'t plan strategically', value: 1 },
        { text: 'I\'m new to content strategy concepts', value: 0 }
      ]
    }
  ]
};

const learningPaths = {
  beginner: {
    title: 'Foundation Builder',
    description: 'Start from the basics and build strong fundamentals',
    duration: '12 weeks',
    structure: [
      'Weeks 1-3: Core concepts and tool introduction',
      'Weeks 4-7: Hands-on practice with guided projects',
      'Weeks 8-10: Real-world application and portfolio building',
      'Weeks 11-12: Client acquisition and business setup'
    ]
  },
  intermediate: {
    title: 'Skill Enhancer',
    description: 'Build on existing skills with AI integration',
    duration: '8 weeks',
    structure: [
      'Weeks 1-2: AI tool mastery and integration',
      'Weeks 3-5: Advanced techniques and automation',
      'Weeks 6-7: Portfolio enhancement and positioning',
      'Week 8: Client acquisition and rate optimization'
    ]
  },
  advanced: {
    title: 'AI Specialist',
    description: 'Master cutting-edge AI techniques for premium positioning',
    duration: '6 weeks',
    structure: [
      'Weeks 1-2: Advanced AI strategies and custom workflows',
      'Weeks 3-4: Enterprise-level implementations',
      'Weeks 5-6: Scaling and agency development'
    ]
  }
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [assessmentAnswers, setAssessmentAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [recommendedPath, setRecommendedPath] = useState<any>(null);
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

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...assessmentAnswers];
    newAnswers[currentQuestion] = value;
    setAssessmentAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (user?.specialization && currentQuestion < skillAssessment[user.specialization as keyof typeof skillAssessment].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateSkillLevel();
      setStep(3);
    }
  };

  const calculateSkillLevel = () => {
    const totalScore = assessmentAnswers.reduce((sum, answer) => sum + answer, 0);
    const maxScore = assessmentAnswers.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 70) {
      setSkillLevel('advanced');
      setRecommendedPath(learningPaths.advanced);
    } else if (percentage >= 40) {
      setSkillLevel('intermediate');
      setRecommendedPath(learningPaths.intermediate);
    } else {
      setSkillLevel('beginner');
      setRecommendedPath(learningPaths.beginner);
    }
  };

  const handleCompleteOnboarding = () => {
    // Update user data with assessment results
    const updatedUser = {
      ...user,
      assessmentCompleted: true,
      skillLevel,
      recommendedPath: recommendedPath.title,
      onboardingCompleted: true
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    router.push('/dashboard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= stepNumber 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {stepNumber}
                    </div>
                    {stepNumber < 4 && (
                      <div className={`w-16 h-1 mx-2 ${
                        step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Welcome</span>
              <span>Skill Assessment</span>
              <span>Your Path</span>
              <span>Get Started</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {step === 1 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Hire Overseas University, {user.firstName}! 🎉
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're excited to help you master AI-enhanced skills and transform your freelance career. Let's start by understanding your current experience and goals.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-bold text-blue-800 mb-2">Your Interest</h3>
                    <p className="text-blue-700">{user.specialization}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="font-bold text-purple-800 mb-2">Your Goals</h3>
                    <p className="text-purple-700">{user.goals?.slice(0, 2).join(', ')}</p>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn btn-primary px-8 py-4 text-lg"
                >
                  Let's Get Started →
                </button>
              </div>
            )}

            {step === 2 && user.specialization && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Skill Assessment
                  </h2>
                  <p className="text-gray-600">
                    Question {currentQuestion + 1} of {skillAssessment[user.specialization as keyof typeof skillAssessment].length}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${((currentQuestion + 1) / skillAssessment[user.specialization as keyof typeof skillAssessment].length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {skillAssessment[user.specialization as keyof typeof skillAssessment][currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {skillAssessment[user.specialization as keyof typeof skillAssessment][currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option.value)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                          assessmentAnswers[currentQuestion] === option.value
                            ? 'border-blue-500 bg-blue-50 text-blue-800'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        if (currentQuestion > 0) {
                          setCurrentQuestion(currentQuestion - 1);
                        } else {
                          setStep(1);
                        }
                      }}
                      className="btn btn-secondary"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      disabled={assessmentAnswers[currentQuestion] === undefined}
                      className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentQuestion < skillAssessment[user.specialization as keyof typeof skillAssessment].length - 1 ? 'Next Question' : 'View Results'} →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && recommendedPath && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Personalized Learning Path
                  </h2>
                  <p className="text-gray-600">
                    Based on your assessment, we've created a customized path for your success
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{recommendedPath.title}</h3>
                        <p className="text-blue-100">{recommendedPath.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{recommendedPath.duration}</div>
                        <div className="text-blue-200">Duration</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {recommendedPath.structure.map((item: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <h4 className="font-bold text-gray-900 mb-2">Skill Level</h4>
                      <p className="text-gray-600 capitalize">{skillLevel}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚀</div>
                      <h4 className="font-bold text-gray-900 mb-2">Expected Outcome</h4>
                      <p className="text-gray-600">150%+ Income Increase</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">👥</div>
                      <h4 className="font-bold text-gray-900 mb-2">Support Level</h4>
                      <p className="text-gray-600">1-on-1 Mentorship</p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="btn btn-secondary"
                    >
                      ← Retake Assessment
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="btn btn-primary"
                    >
                      Continue Setup →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    🎉
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    You're All Set!
                  </h2>
                  <p className="text-gray-600">
                    Your learning journey is ready to begin. Here's what happens next:
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4 bg-blue-50 rounded-lg p-6">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Access Your Dashboard</h4>
                        <p className="text-blue-700">View your personalized learning path and track your progress</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 bg-green-50 rounded-lg p-6">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Meet Your Mentor</h4>
                        <p className="text-green-700">Get matched with a successful graduate in your field</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 bg-purple-50 rounded-lg p-6">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-2">Join the Community</h4>
                        <p className="text-purple-700">Connect with peers from your region and specialization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 bg-orange-50 rounded-lg p-6">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-800 mb-2">Start Learning</h4>
                        <p className="text-orange-700">Begin your first lesson and start transforming your skills</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleCompleteOnboarding}
                      className="btn btn-primary px-8 py-4 text-lg"
                    >
                      Go to Dashboard 🚀
                    </button>
                    <p className="text-sm text-gray-500 mt-4">
                      Ready to transform your freelance career with AI?
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}