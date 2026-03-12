
import React from 'react';
import Logo from './Logo';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo withText withTagline size="md" />
            <p className="mt-4 text-dream-text/70 max-w-md">
              <strong>AI Web Tools LLC</strong> - Premium AI tools and web applications for modern businesses. 
              Dream Interpreter GPT analyzes, interprets, and visualizes your dreams 
              for self-discovery and personal growth, powered by advanced AI technology from <strong>AIWEBTOOLS.AI</strong>.
            </p>
            
            <div className="mt-6 space-y-2">
              <a 
                href="tel:4758008096" 
                className="flex items-center text-dream-text/70 hover:text-dream-accent transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-dream-text/70 hover:text-dream-accent transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-dream-text">AI Tools & Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  Dream Interpreter AI Tool
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  AI Tools FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  AI Tools Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  More AI Web Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-dream-text">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-dream-text/70 hover:text-dream-accent transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Small disclaimer notice */}
        <div className="mb-6 text-center">
          <p className="text-dream-text/60 text-sm font-medium">
            Professional AI Tools for informational, educational, and research purposes only
          </p>
          <p className="text-dream-text/50 text-xs mt-1">
            Powered by <strong>AI Web Tools LLC</strong> - Leading provider of advanced AI web applications
          </p>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dream-text/50 text-sm">
            © 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-dream-accent transition-colors font-semibold" target="_blank" rel="noopener noreferrer">AI WEB TOOLS LLC</a> - <strong>AIWEBTOOLS.AI</strong> All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            className="flex items-center mt-4 md:mt-0 bg-gradient p-2 px-4 rounded-full text-white text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore All AI Tools
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
