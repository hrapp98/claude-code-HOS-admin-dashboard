'use client';

import { useState } from 'react';
import Link from 'next/link';

const assessmentQuestions = [
  {
    id: 1,
    question: 'What is your primary freelancing goal?',
    type: 'single',
    options: [
      { text: 'Increase my hourly rate significantly', value: 'rate_increase', weight: 3 },
      { text: 'Find more consistent clients', value: 'client_acquisition', weight: 2 },
      { text: 'Learn new skills to stay competitive', value: 'skill_development', weight: 1 },
      { text: 'Start freelancing for the first time', value: 'getting_started', weight: 0 }
    ]
  },
  {
    id: 2,
    question: 'How familiar are you with AI tools?',
    type: 'single',
    options: [
      { text: 'I use AI tools professionally every day', value: 'expert', weight: 3 },
      { text: 'I\'ve experimented with ChatGPT and similar tools', value: 'intermediate', weight: 2 },
      { text: 'I\'ve heard about them but never used them', value: 'beginner', weight: 1 },
      { text: 'I\'m completely new to AI tools', value: 'novice', weight: 0 }
    ]
  },
  {
    id: 3,
    question: 'What\'s your current monthly income from freelancing?',
    type: 'single',
    options: [
      { text: '$2000+ per month', value: 'high', weight: 3 },
      { text: '$500-2000 per month', value: 'medium', weight: 2 },
      { text: '$100-500 per month', value: 'low', weight: 1 },
      { text: 'I\'m just starting out', value: 'none', weight: 0 }
    ]
  },
  {
    id: 4,
    question: 'Which skills are you most interested in developing? (Select all that apply)',
    type: 'multiple',
    options: [
      { text: 'Virtual Assistant & Admin Automation', value: 'va', specialization: 'Virtual Assistant' },
      { text: 'SEO & Content Optimization', value: 'seo', specialization: 'SEO Specialist' },
      { text: 'Content Writing & Strategy', value: 'content', specialization: 'Content Creator' },
      { text: 'Video Editing & Production', value: 'video', specialization: 'Video Editor' },
      { text: 'Digital Marketing & Automation', value: 'marketing', specialization: 'Digital Marketer' },
      { text: 'Social Media Management', value: 'social', specialization: 'Social Media Manager' }
    ]
  },
  {
    id: 5,
    question: 'How many hours per week can you dedicate to learning?',
    type: 'single',
    options: [
      { text: '10+ hours per week', value: 'intensive', weight: 3 },
      { text: '5-10 hours per week', value: 'moderate', weight: 2 },
      { text: '2-5 hours per week', value: 'light', weight: 1 },
      { text: 'Less than 2 hours per week', value: 'minimal', weight: 0 }
    ]
  },
  {
    id: 6,
    question: 'What\'s your biggest challenge in freelancing?',
    type: 'single',
    options: [
      { text: 'Not getting paid enough for my time', value: 'pricing', weight: 3 },
      { text: 'Finding quality clients consistently', value: 'client_quality', weight: 2 },
      { text: 'Standing out from the competition', value: 'differentiation', weight: 2 },
      { text: 'Managing multiple projects efficiently', value: 'productivity', weight: 1 }
    ]
  },
  {
    id: 7,
    question: 'What\'s your preferred learning style?',
    type: 'single',
    options: [
      { text: 'Hands-on projects with real clients', value: 'practical', weight: 2 },
      { text: 'Video tutorials and step-by-step guides', value: 'visual', weight: 2 },
      { text: 'Live sessions with instructors and peers', value: 'interactive', weight: 2 },
      { text: 'Self-paced reading and documentation', value: 'reading', weight: 1 }
    ]
  }
];

const recommendations = {
  'Virtual Assistant': {
    title: 'Virtual Assistant + AI Mastery',
    description: 'Perfect for administrative professionals who want to leverage AI for efficiency and premium positioning.',
    course: '/courses/virtual-assistant',
    duration: '8 weeks',
    price: '$297',
    outcomes: ['Automate 80% of routine tasks', 'Increase rates to $20+/hour', 'Handle 3x more clients'],
    tools: ['ChatGPT', 'Zapier', 'Notion AI', 'Calendly']
  },
  'SEO Specialist': {
    title: 'SEO Specialist + AI Tools',
    description: 'Ideal for marketers who want to master AI-powered SEO strategies and automation.',
    course: '/courses/seo-specialist',
    duration: '10 weeks',
    price: '$397',
    outcomes: ['Complete audits in 1 hour vs 8', 'Land $2000+ monthly clients', 'Automate reporting'],
    tools: ['Surfer SEO', 'SEMrush AI', 'ChatGPT', 'Screaming Frog']
  },
  'Content Creator': {
    title: 'Content Creator + AI Enhancement',
    description: 'Great for writers who want to create high-quality content 10x faster using AI.',
    course: '/courses/content-creator',
    duration: '6 weeks',
    price: '$247',
    outcomes: ['Write articles in 30 minutes', 'Create viral content', 'Build personal brand'],
    tools: ['GPT-4', 'Jasper AI', 'Grammarly', 'Canva AI']
  },
  'Video Editor': {
    title: 'Video Editor + AI Production',
    description: 'Perfect for creatives who want to streamline video production with AI tools.',
    course: '/courses/video-editor',
    duration: '12 weeks',
    price: '$497',
    outcomes: ['Edit 5x faster', 'Auto-generate subtitles', 'Create viral content'],
    tools: ['RunwayML', 'Descript', 'Adobe Sensei', 'Pictory']
  },
  'Digital Marketer': {
    title: 'Digital Marketer + AI Automation',
    description: 'Ideal for marketers ready to build self-optimizing campaigns with AI.',
    course: '/courses/digital-marketer',
    duration: '14 weeks',
    price: '$597',
    outcomes: ['Self-optimizing campaigns', 'Predict customer behavior', '300%+ ROI'],
    tools: ['HubSpot AI', 'Google AI', 'Facebook AI', 'Mailchimp AI']
  },
  'Social Media Manager': {
    title: 'Social Media Manager + AI Tools',
    description: 'Great for social media professionals who want to manage more accounts efficiently.',
    course: '/courses/social-media',
    duration: '8 weeks',
    price: '$347',
    outcomes: ['Manage 10+ accounts', 'Create content in minutes', '300% faster growth'],
    tools: ['Buffer AI', 'Hootsuite AI', 'ChatGPT', 'Canva AI']
  }
};

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnswer = (questionId: number, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    // Calculate skill level based on weighted answers
    let totalWeight = 0;
    let maxWeight = 0;

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = assessmentQuestions.find(q => q.id === parseInt(questionId));
      if (question && question.type === 'single') {
        const option = question.options.find(opt => opt.value === answer);
        if (option && 'weight' in option) {
          totalWeight += option.weight;
          maxWeight += 3; // Max weight per question
        }
      }
    });

    const skillPercentage = (totalWeight / maxWeight) * 100;
    
    let skillLevel = 'beginner';
    if (skillPercentage >= 70) skillLevel = 'advanced';
    else if (skillPercentage >= 40) skillLevel = 'intermediate';

    // Determine recommended specialization
    const skillInterests = answers[4] || [];
    let recommendedSpecialization = 'Virtual Assistant'; // Default
    
    if (Array.isArray(skillInterests) && skillInterests.length > 0) {
      const question4 = assessmentQuestions.find(q => q.id === 4);
      if (question4) {
        const selectedOption = question4.options.find(opt => skillInterests.includes(opt.value));
        if (selectedOption && 'specialization' in selectedOption) {
          recommendedSpecialization = selectedOption.specialization;
        }
      }
    }

    const recommendation = recommendations[recommendedSpecialization as keyof typeof recommendations];
    
    setResults({
      skillLevel,
      skillPercentage,
      recommendedSpecialization,
      recommendation,
      answers
    });
    
    setIsComplete(true);
  };

  const currentQ = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  if (isComplete && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                ✓
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Personalized Recommendation
              </h1>
              <p className="text-xl text-gray-600">
                Based on your assessment, here's the perfect course for your goals
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{results.recommendation.title}</h2>
                    <p className="text-blue-100 text-lg mb-6">{results.recommendation.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {results.recommendation.duration}
                      </div>
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {results.recommendation.price}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">{Math.round(results.skillPercentage)}%</div>
                    <div className="text-blue-200">Skill Match</div>
                    <div className="mt-4 bg-white/20 px-4 py-2 rounded-lg">
                      <div className="text-sm text-blue-200">Current Level</div>
                      <div className="font-bold capitalize">{results.skillLevel}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Achieve:</h3>
                    <ul className="space-y-3">
                      {results.recommendation.outcomes.map((outcome: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AI Tools You'll Master:</h3>
                    <div className="flex flex-wrap gap-2">
                      {results.recommendation.tools.map((tool: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={results.recommendation.course} className="btn btn-primary px-8 py-4 text-lg">
                      View Course Details
                    </Link>
                    <Link href="/register" className="btn btn-secondary px-8 py-4 text-lg">
                      Start Free Trial
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Join 2,500+ successful graduates who've transformed their careers
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Recommendations */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Great Options for You</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(recommendations)
                  .filter(([key]) => key !== results.recommendedSpecialization)
                  .slice(0, 2)
                  .map(([key, rec]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-2">{rec.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{rec.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{rec.duration} • {rec.price}</span>
                        <Link href={rec.course} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (currentQ.type === 'single') {
                      handleAnswer(currentQ.id, option.value);
                    } else {
                      // Multiple choice
                      const currentAnswers = answers[currentQ.id] || [];
                      const newAnswers = currentAnswers.includes(option.value)
                        ? currentAnswers.filter((a: any) => a !== option.value)
                        : [...currentAnswers, option.value];
                      handleAnswer(currentQ.id, newAnswers);
                    }
                  }}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    currentQ.type === 'single'
                      ? (answers[currentQ.id] === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-800'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50')
                      : (answers[currentQ.id]?.includes(option.value)
                          ? 'border-blue-500 bg-blue-50 text-blue-800'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50')
                  }`}
                >
                  <div className="flex items-center">
                    {currentQ.type === 'multiple' && (
                      <div className={`w-4 h-4 border-2 rounded mr-3 ${
                        answers[currentQ.id]?.includes(option.value)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQ.id]?.includes(option.value) && (
                          <div className="text-white text-xs">✓</div>
                        )}
                      </div>
                    )}
                    {option.text}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQ.id] || (currentQ.type === 'multiple' && (!answers[currentQ.id] || answers[currentQ.id].length === 0))}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}