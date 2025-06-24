import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full text-white z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' 
        : 'bg-opacity-95 bg-gradient-to-r from-slate-900 to-purple-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
              IN Dhliso
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left scale-x-100 transition-transform duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 transform ${
            isOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform ${
                    location.pathname === item.path
                      ? 'text-orange-400 bg-orange-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-300"
            style={{
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
            }}
          />
        </div>
      )}
    </nav>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;