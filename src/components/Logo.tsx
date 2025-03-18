
import React from 'react';
import { Moon, Star } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  withTagline?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  withText = true, 
  withTagline = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <Moon className={`${sizeClasses[size]} text-dream-accent animate-pulse-glow`} />
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
          <Star className="w-4 h-4 text-dream-cyan animate-star-twinkle" />
        </div>
      </div>
      
      {withText && (
        <div className="ml-2 flex flex-col">
          <h1 className={`font-display ${textSizes[size]} font-bold text-gradient tracking-wide`}>
            Dream Interpreter GPT
          </h1>
          {withTagline && (
            <p className="text-xs text-dream-text/70 mt-0.5">
              Presented by <span className="hover:text-dream-accent transition-colors">AiWebTools.Ai</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
