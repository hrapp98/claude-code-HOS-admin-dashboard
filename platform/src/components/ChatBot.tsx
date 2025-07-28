'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

const quickStartOptions = [
  'How do I get started?',
  'What courses do you offer?',
  'Pricing information',
  'Talk to a human',
  'Technical support'
];

const predefinedResponses: Record<string, any> = {
  'how do i get started': {
    content: `Great question! Here's how to get started:

1. 📝 Take our free assessment to get personalized course recommendations
2. 📚 Choose your specialization (VA, SEO, Content Creation, etc.)
3. 💳 Select your plan (Starter, Professional, or Enterprise)
4. 🎓 Start learning with our AI-enhanced curriculum
5. 👥 Connect with mentors and join our community

Would you like me to help you with any specific step?`,
    quickReplies: ['Take assessment', 'View courses', 'See pricing', 'Join community']
  },
  
  'what courses do you offer': {
    content: `We offer 6 AI-enhanced specializations:

🤖 **Virtual Assistant + AI Mastery** - Automate admin tasks, client communication
📈 **SEO Specialist + AI Tools** - Master AI-powered SEO strategies  
✍️ **Content Creator + AI Enhancement** - Create content 10x faster
🎬 **Video Editor + AI Production** - Streamline video editing workflows
📱 **Digital Marketer + AI Automation** - Build self-optimizing campaigns
📊 **Social Media Manager + AI Tools** - Manage multiple accounts efficiently

Each course includes:
• 100+ lessons and hands-on projects
• 1-on-1 mentorship sessions
• AI tool training and discounts
• Job placement assistance
• Industry-recognized certificates

Which specialization interests you most?`,
    quickReplies: ['Virtual Assistant', 'SEO Specialist', 'Content Creator', 'Digital Marketer']
  },

  'pricing information': {
    content: `We have 3 flexible pricing plans:

💡 **Starter Plan - $47/month**
• Access to 1 specialization
• Basic AI tool tutorials
• Community forum access
• Weekly group Q&A sessions

🚀 **Professional Plan - $97/month** (Most Popular)
• Access to ALL 6 specializations
• Bi-weekly 1-on-1 mentorship
• Advanced AI tool masterclasses
• Direct job referrals

⭐ **Enterprise Plan - $197/month**
• Everything in Professional
• Weekly 1-on-1 strategy sessions
• White-label course materials
• Priority job placement

💰 Save 17% with annual billing!
🎁 All plans include 7-30 day free trial

Ready to choose a plan?`,
    quickReplies: ['Start free trial', 'Compare plans', 'Student discounts', 'Payment options']
  },

  'talk to a human': {
    content: `I'd be happy to connect you with our support team! 

**Live Chat**: Available 24/7 for enrolled students
**Email Support**: support@hireoverseasuniversity.com
**Phone**: +1 (555) 123-4567 (Mon-Fri 9AM-6PM EST)

**For immediate help:**
• Technical issues: Live chat
• Course questions: Schedule mentor call  
• Billing: Email support with order number
• General inquiries: This chat or email

Would you like me to:`,
    quickReplies: ['Start live chat', 'Send email', 'Schedule call', 'Continue here']
  },

  'technical support': {
    content: `I can help with common technical issues:

**Login Problems:**
• Reset password: Use "Forgot Password" on login page
• Account locked: Wait 15 minutes or contact support

**Course Access Issues:**
• Check your subscription status in billing section
• Try refreshing the page or clearing browser cache
• Ensure JavaScript is enabled

**Video Playback:**
• Check internet connection (minimum 5 Mbps recommended)
• Try different browser (Chrome, Firefox, Safari)
• Disable browser extensions temporarily

**Mobile App:**
• Update to latest version
• Restart the app
• Check device storage (minimum 1GB required)

Still having issues?`,
    quickReplies: ['Login help', 'Video issues', 'Mobile app', 'Contact tech support']
  }
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickStart, setShowQuickStart] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial welcome message
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `👋 Hi! I'm AI Assistant from Hire Overseas University! 

I'm here to help you:
• Learn about our AI-enhanced courses
• Get technical support
• Answer pricing questions  
• Connect you with our team

How can I assist you today?`,
        timestamp: new Date(),
        quickReplies: quickStartOptions
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for predefined responses
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return {
          id: Date.now().toString(),
          type: 'bot',
          content: response.content,
          timestamp: new Date(),
          quickReplies: response.quickReplies
        };
      }
    }

    // Keyword-based responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('payment')) {
      return predefinedResponses['pricing information'];
    }
    
    if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('curriculum')) {
      return predefinedResponses['what courses do you offer'];
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('problem')) {
      return predefinedResponses['technical support'];
    }

    if (lowerMessage.includes('human') || lowerMessage.includes('agent') || lowerMessage.includes('representative')) {
      return predefinedResponses['talk to a human'];
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I understand you're asking about "${userMessage}". 

While I don't have a specific answer for that, I can help you with:
• Course information and curriculum details
• Pricing and payment options
• Getting started with our platform
• Technical support and troubleshooting
• Connecting with our human support team

What would you like to know more about?`,
      timestamp: new Date(),
      quickReplies: ['Course info', 'Pricing', 'Get started', 'Tech support', 'Human agent']
    };
  };

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickStart(false);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const clearChat = () => {
    setMessages([]);
    setShowQuickStart(true);
    setIsOpen(false);
    setTimeout(() => setIsOpen(true), 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
      >
        <span className="text-2xl">💬</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-sm">AI Assistant</h3>
            <p className="text-xs text-blue-100">Usually replies instantly</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="text-white hover:text-blue-200 text-sm"
            title="Clear chat"
          >
            🔄
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-200 text-lg"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
              message.type === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="whitespace-pre-line">{message.content}</p>
              {message.quickReplies && (
                <div className="mt-3 space-y-1">
                  {message.quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="block w-full text-left p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-xs transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-3 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Start Options */}
      {showQuickStart && messages.length <= 1 && (
        <div className="p-3 border-t border-gray-100">
          <p className="text-xs text-gray-600 mb-2">Quick options:</p>
          <div className="space-y-1">
            {quickStartOptions.slice(0, 3).map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(option)}
                className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => sendMessage(inputValue)}
            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!inputValue.trim()}
          >
            📤
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1 text-center">
          Powered by AI • For complex issues, 
          <button 
            onClick={() => handleQuickReply('talk to a human')}
            className="text-blue-600 hover:underline ml-1"
          >
            talk to a human
          </button>
        </p>
      </div>
    </div>
  );
}