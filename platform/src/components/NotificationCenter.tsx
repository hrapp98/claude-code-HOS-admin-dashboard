'use client';

import { useState, useEffect } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error' | 'achievement' | 'course' | 'job' | 'mentor';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
  avatar?: string;
  icon?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'achievement',
    title: 'New Achievement Unlocked!',
    message: 'Congratulations! You\'ve earned the "Week Warrior" achievement for maintaining a 7-day learning streak.',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    read: false,
    actionUrl: '/achievements',
    actionText: 'View Achievement',
    icon: '🏆'
  },
  {
    id: '2',
    type: 'course',
    title: 'New Lesson Available',
    message: 'The next lesson in "Virtual Assistant + AI Mastery" is now available: Advanced Email Automation.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
    actionUrl: '/courses/virtual-assistant/lesson-12',
    actionText: 'Start Lesson',
    icon: '📚'
  },
  {
    id: '3',
    type: 'job',
    title: 'New Job Match Found',
    message: 'We found 3 new job opportunities that match your Virtual Assistant skills and experience.',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    read: false,
    actionUrl: '/jobs',
    actionText: 'View Jobs',
    icon: '💼'
  },
  {
    id: '4',
    type: 'mentor',
    title: 'Mentorship Session Reminder',
    message: 'Your 1-on-1 session with Elena Rodriguez is scheduled for tomorrow at 2:00 PM EST.',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    read: true,
    actionUrl: '/mentorship',
    actionText: 'Join Session',
    avatar: 'ER'
  },
  {
    id: '5',
    type: 'success',
    title: 'Payment Successful',
    message: 'Your Professional Plan subscription has been renewed successfully. Next billing: Feb 20, 2024.',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: true,
    actionUrl: '/billing',
    actionText: 'View Details',
    icon: '💳'
  },
  {
    id: '6',
    type: 'info',
    title: 'Live Workshop Tomorrow',
    message: 'Don\'t miss "AI Content Creation Masterclass" with Sarah Martinez tomorrow at 2:00 PM EST.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: true,
    actionUrl: '/live/workshop-123',
    actionText: 'Register Now',
    avatar: 'SM'
  }
];

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.read).length;
  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const getNotificationIcon = (notification: Notification) => {
    if (notification.avatar) {
      return (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {notification.avatar}
        </div>
      );
    }
    
    if (notification.icon) {
      return (
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
          {notification.icon}
        </div>
      );
    }

    const typeIcons = {
      success: '✅',
      info: 'ℹ️',
      warning: '⚠️',
      error: '❌',
      achievement: '🏆',
      course: '📚',
      job: '💼',
      mentor: '👨‍🏫'
    };

    return (
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
        {typeIcons[notification.type]}
      </div>
    );
  };

  const getNotificationColor = (type: string) => {
    const colors = {
      success: 'text-green-600',
      info: 'text-blue-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      achievement: 'text-purple-600',
      course: 'text-indigo-600',
      job: 'text-orange-600',
      mentor: 'text-pink-600'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <span className="text-xl">🔔</span>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Panel */}
          <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'all'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All ({notifications.length})
                  </button>
                  <button
                    onClick={() => setFilter('unread')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'unread'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Unread ({unreadCount})
                  </button>
                </div>
                
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">📭</div>
                  <h4 className="font-medium text-gray-900 mb-2">No notifications</h4>
                  <p className="text-gray-600 text-sm">
                    {filter === 'unread' ? 'All caught up!' : 'You\'ll see notifications here when you have them.'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {getNotificationIcon(notification)}
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className={`font-medium text-sm ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center space-x-1 ml-2">
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="text-gray-400 hover:text-gray-600 text-xs"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-500">
                              {formatTimeAgo(notification.timestamp)}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              {notification.actionUrl && (
                                <a
                                  href={notification.actionUrl}
                                  onClick={() => {
                                    markAsRead(notification.id);
                                    setIsOpen(false);
                                  }}
                                  className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                                >
                                  {notification.actionText}
                                </a>
                              )}
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-gray-500 hover:text-gray-700 text-xs"
                                >
                                  Mark read
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All Notifications
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}