
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    
    if (!hasAccepted) {
      // Show the consent popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto w-11/12 max-w-md">
      <div className="neo-blur rounded-lg p-4 shadow-xl animate-fade-in">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-dream-text text-sm">Dream Interpreter GPT</h3>
          <button 
            onClick={handleAccept}
            className="text-dream-text/70 hover:text-dream-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="mt-2 text-dream-text/70 text-xs">
          By using Dream Interpreter GPT, you agree to our 
          <a href="https://openai.com/policies/privacy-policy/" className="text-dream-accent hover:underline mx-1" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a> 
          and 
          <a href="https://aiwebtools.lovable.app/disclaimers" className="text-dream-accent hover:underline mx-1" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>. 
          This includes the use of cookies to enhance your experience.
        </p>
        
        <div className="mt-3 flex justify-end">
          <Button
            onClick={handleAccept}
            className="text-xs h-8 bg-dream-accent hover:bg-dream-bright"
          >
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
