
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only close if clicking outside the navigation area
      if (!target.closest('[data-mobile-nav]') && !target.closest('[data-mobile-toggle]')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { 
      label: 'Dream Interpreter GPT', 
      url: 'https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt' 
    },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { 
      label: 'More AI Tools', 
      url: 'https://www.aiwebtools.ai' 
    }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 bg-dream-darker/80 backdrop-blur-md border-b border-white/5 shadow-md' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="z-10">
          <Logo withTagline={true} />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              className={`relative text-sm font-medium text-dream-text/80 hover:text-dream-text transition-colors 
                ${index === 0 ? 'text-dream-accent' : ''} 
                group`}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dream-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient rounded-full text-white font-medium text-sm button-shine hover:shadow-lg hover:shadow-dream-accent/20 transition-shadow duration-300"
          >
            Try Now
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          data-mobile-toggle
          className="md:hidden z-20 text-dream-text p-2 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div 
          data-mobile-nav
          className="md:hidden fixed inset-0 bg-dream-dark/95 backdrop-blur-lg z-10 flex flex-col items-center justify-center"
        >
          {/* Close button at the top */}
          <button 
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-dream-text p-2 hover:text-dream-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                className={`text-xl font-medium ${index === 0 ? 'text-dream-accent' : 'text-dream-text'} hover:text-dream-accent transition-colors`}
                onClick={closeMobileMenu}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 mt-4 bg-gradient rounded-full text-white font-medium text-lg button-shine"
              onClick={closeMobileMenu}
            >
              Try Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
