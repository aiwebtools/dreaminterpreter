
import React, { useEffect, useRef } from 'react';

const Dreamcatcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const dreamcatcherRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const dreamcatcher = dreamcatcherRef.current;
    if (!dreamcatcher) return;
    
    // Add subtle animation to the dreamcatcher
    const handleMouseMove = (e: MouseEvent) => {
      if (!dreamcatcher) return;
      
      const rect = dreamcatcher.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 50;
      const moveY = (e.clientY - centerY) / 50;
      
      dreamcatcher.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={dreamcatcherRef}
      className={`relative transition-transform duration-300 ease-out ${className}`}
    >
      {/* Outer ring */}
      <div className="w-64 h-64 rounded-full border-2 border-dream-accent relative flex items-center justify-center">
        {/* Inner web */}
        <div className="w-52 h-52 rounded-full border border-dream-cyan/60 relative">
          <div className="w-40 h-40 rounded-full border border-dream-accent/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-28 h-28 rounded-full border border-dream-pink/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-16 h-16 rounded-full border border-dream-cyan/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-4 h-4 bg-dream-bright rounded-full animate-pulse-glow"></div>
          </div>
          
          {/* Web threads */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-dream-pink/30 to-transparent" 
              style={{ transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)` }}
            ></div>
          ))}
        </div>
        
        {/* Hanging feathers */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bottom-0 transform translate-y-full"
            style={{ 
              left: `${25 + i * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          >
            <div className="relative h-20 w-1 mx-auto">
              <div className="absolute top-0 w-px h-full bg-dream-accent/50"></div>
              <div 
                className="absolute bottom-0 w-6 h-12 animate-float"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.3) 100%)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Glowing effects */}
      <div className="absolute inset-0 rounded-full bg-dream-accent/5 filter blur-xl animate-pulse-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dream-accent/20 rounded-full filter blur-xl"></div>
    </div>
  );
};

export default Dreamcatcher;
