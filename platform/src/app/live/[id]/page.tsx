'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function LiveSessionPage() {
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [attendeeCount, setAttendeeCount] = useState(147);
  const [user, setUser] = useState<any>(null);
  
  const params = useParams();
  const router = useRouter();
  const sessionId = params.id;

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

    // Mock session data - in real app would fetch from API
    const mockSession = {
      id: sessionId,
      title: 'Virtual Assistant Automation Workshop',
      instructor: 'Elena Rodriguez',
      instructorTitle: 'VA Success Coach',
      instructorAvatar: 'ER',
      startTime: '10:00 AM EST',
      duration: '120 minutes',
      level: 'Beginner',
      category: 'Virtual Assistant',
      description: 'Hands-on workshop covering Zapier automations, AI email management, and client communication systems.',
      isLive: true,
      streamUrl: 'https://example.com/stream',
      resources: [
        { name: 'Workshop Slides', url: '#', type: 'pdf' },
        { name: 'Zapier Templates', url: '#', type: 'zip' },
        { name: 'Email Templates', url: '#', type: 'doc' }
      ]
    };

    setSession(mockSession);

    // Mock chat messages
    const mockMessages = [
      { id: 1, user: 'Maria S.', avatar: 'MS', message: 'Great session so far! The Zapier examples are very helpful.', timestamp: '10:15 AM', isInstructor: false },
      { id: 2, user: 'Elena Rodriguez', avatar: 'ER', message: 'Thanks Maria! We\'ll dive deeper into email automation in the next section.', timestamp: '10:16 AM', isInstructor: true },
      { id: 3, user: 'David K.', avatar: 'DK', message: 'Can you share the template you just showed?', timestamp: '10:18 AM', isInstructor: false },
      { id: 4, user: 'Elena Rodriguez', avatar: 'ER', message: 'Absolutely! I\'ll add it to the resources section after the demo.', timestamp: '10:19 AM', isInstructor: true },
      { id: 5, user: 'Sarah M.', avatar: 'SM', message: 'This is exactly what I needed for my client work!', timestamp: '10:22 AM', isInstructor: false }
    ];

    setChatMessages(mockMessages);
    setIsLoading(false);

    // Simulate live updates
    const interval = setInterval(() => {
      setAttendeeCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 30000);

    return () => clearInterval(interval);
  }, [sessionId, router]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: chatMessages.length + 1,
      user: `${user?.firstName} ${user?.lastName}`,
      avatar: `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`,
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isInstructor: false
    };

    setChatMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Session Not Found</h1>
          <p className="text-gray-600 mb-6">The session you're looking for doesn't exist or has ended.</p>
          <button onClick={() => router.push('/live')} className="btn btn-primary">
            Back to Live Sessions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'min-h-screen bg-gray-50 pt-16'}`}>
      <div className={`${isFullscreen ? 'h-full' : 'container py-6'}`}>
        <div className={`${isFullscreen ? 'h-full flex flex-col' : 'grid lg:grid-cols-4 gap-6 h-screen'}`}>
          {/* Video Section */}
          <div className={`${isFullscreen ? 'flex-1' : 'lg:col-span-3'}`}>
            <div className="bg-black rounded-lg overflow-hidden h-full relative">
              {/* Video Player */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Stream</h3>
                  <p className="text-gray-300">Video streaming would be implemented here</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-black bg-opacity-50 rounded px-3 py-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">LIVE</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-black bg-opacity-50 rounded px-3 py-1">
                    <span className="text-white text-sm">👥 {attendeeCount}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75">
                    🔊
                  </button>
                  <button className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75">
                    ⚙️
                  </button>
                  <button 
                    onClick={toggleFullscreen}
                    className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                  >
                    {isFullscreen ? '🗗' : '⛶'}
                  </button>
                </div>
              </div>
            </div>

            {/* Session Info (below video when not fullscreen) */}
            {!isFullscreen && (
              <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="flex items-center space-x-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span>LIVE NOW</span>
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {session.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {session.level}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      {session.title}
                    </h1>
                    
                    <p className="text-gray-600 mb-4">
                      {session.description}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>⏰ Started at {session.startTime}</span>
                      <span>⏱️ {session.duration}</span>
                      <span>👥 {attendeeCount} attendees</span>
                    </div>
                  </div>

                  <div className="ml-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                      {session.instructorAvatar}
                    </div>
                    <h3 className="font-bold text-gray-900">{session.instructor}</h3>
                    <p className="text-purple-600 text-sm">{session.instructorTitle}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat & Resources Sidebar */}
          <div className={`${isFullscreen ? 'hidden' : 'lg:col-span-1'}`}>
            <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
              {/* Tab Headers */}
              <div className="flex border-b">
                <button
                  onClick={() => setShowChat(true)}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    showChat ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
                  }`}
                >
                  Chat ({chatMessages.length})
                </button>
                <button
                  onClick={() => setShowChat(false)}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    !showChat ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'
                  }`}
                >
                  Resources
                </button>
              </div>

              {/* Chat Tab */}
              {showChat && (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                          msg.isInstructor ? 'bg-purple-500' : 'bg-gray-400'
                        }`}>
                          {msg.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`text-sm font-medium ${
                              msg.isInstructor ? 'text-purple-600' : 'text-gray-900'
                            }`}>
                              {msg.user}
                            </span>
                            {msg.isInstructor && (
                              <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">
                                Instructor
                              </span>
                            )}
                            <span className="text-xs text-gray-500">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Ask a question or share your thoughts..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        onClick={sendMessage}
                        className="btn btn-primary px-4 py-2 text-sm"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Resources Tab */}
              {!showChat && (
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-4">Session Resources</h3>
                  <div className="space-y-3">
                    {session.resources.map((resource: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">
                            {resource.type === 'pdf' ? '📄' : resource.type === 'zip' ? '📦' : '📝'}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{resource.name}</span>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700 text-sm">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold text-gray-900 mb-3">Quick Actions</h4>
                    <div className="space-y-2">
                      <button className="w-full btn btn-secondary text-sm py-2">
                        🔖 Bookmark Session
                      </button>
                      <button className="w-full btn btn-secondary text-sm py-2">
                        📧 Email Summary
                      </button>
                      <button className="w-full btn btn-secondary text-sm py-2">
                        📝 Request Transcript
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fullscreen Exit Button */}
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
          >
            ✕ Exit Fullscreen
          </button>
        )}
      </div>
    </div>
  );
}