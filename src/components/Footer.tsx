import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-black/80 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className='flex'>
              <img src="../assets/akatsukilogo.png" alt="Akatsuki Logo" className="mr-4 max-h-8" />
              <h3 className="text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Akatsuki
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empowering students through coding excellence and innovation at R. C. Patel Institute
              of Technology, Shirpur.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-blue-600/90 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/akatsuki_codingclub/"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-pink-600/90 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/akatsuki-coding-club/"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-blue-800/90 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="grid grid-cols-2 gap-4">
              {[
                'Home',
                'About us',
                'Services',
                'Terms of service',
                'Privacy policy',
                'Contact us',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-red-500 transform group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Akatsuki Coding Club. All rights reserved.
            </p>
            <p className="text-gray-500">
              Developed with <span className="text-red-800">❤️</span> by{' '}
              <a
                href="https://www.instagram.com/akatsuki_codingclub/"
                className="text-red-500 hover:text-red-400 font-medium transition-colors"
              >
                Akatsuki
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
