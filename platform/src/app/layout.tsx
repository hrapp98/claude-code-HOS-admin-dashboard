import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import ChatBot from '@/components/ChatBot';

export const metadata: Metadata = {
  title: 'Hire Overseas University - Master AI-Enhanced Freelance Skills',
  description: 'Transform your freelance career with AI-powered skills training. Learn from industry experts and land premium overseas opportunities.',
  keywords: ['freelancing', 'AI skills', 'overseas jobs', 'remote work', 'digital marketing', 'virtual assistant'],
  authors: [{ name: 'Hire Overseas University' }],
  creator: 'Hire Overseas University',
  publisher: 'Hire Overseas University',
  openGraph: {
    title: 'Hire Overseas University - Master AI-Enhanced Freelance Skills',
    description: 'Transform your freelance career with AI-powered skills training. Learn from industry experts and land premium overseas opportunities.',
    url: 'https://university.hireoverseas.com',
    siteName: 'Hire Overseas University',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hire Overseas University',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Overseas University - Master AI-Enhanced Freelance Skills',
    description: 'Transform your freelance career with AI-powered skills training. Learn from industry experts and land premium overseas opportunities.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
