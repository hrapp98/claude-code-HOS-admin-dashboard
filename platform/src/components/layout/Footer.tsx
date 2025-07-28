import Link from 'next/link';

const footerLinks = {
  courses: [
    { name: 'Virtual Assistant + AI', href: '/courses/virtual-assistant' },
    { name: 'SEO + AI Tools', href: '/courses/seo-specialist' },
    { name: 'Content Creation + AI', href: '/courses/content-creator' },
    { name: 'Video Editing + AI', href: '/courses/video-editor' },
    { name: 'Digital Marketing + AI', href: '/courses/digital-marketing' },
    { name: 'Social Media + AI', href: '/courses/social-media' },
  ],
  resources: [
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blog' },
    { name: 'AI Tools Guide', href: '/ai-tools' },
    { name: 'Freelancer Resources', href: '/resources' },
    { name: 'Help Center', href: '/help' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partnerships', href: '/partnerships' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Code of Conduct', href: '/conduct' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Facebook', href: '#', icon: '👥' },
  { name: 'Instagram', href: '#', icon: '📸' },
  { name: 'YouTube', href: '#', icon: '📹' },
  { name: 'Discord', href: '#', icon: '💬' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HOU</span>
              </div>
              <span className="font-bold text-lg">
                Hire Overseas University
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering overseas freelancers to master AI-enhanced skills and transform their careers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-2xl hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest AI tools, freelancing tips, and success stories delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="btn btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Hire Overseas University. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🌍 Trusted by 2,500+ freelancers worldwide</span>
              <span>•</span>
              <span>📊 94% success rate</span>
              <span>•</span>
              <span>⚡ Made with ❤️ for overseas talent</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}