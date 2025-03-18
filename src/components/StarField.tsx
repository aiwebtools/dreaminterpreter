
import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

const StarField: React.FC<StarFieldProps> = ({ 
  starCount = 200, 
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Generate stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    
    function generateStars() {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01
        });
      }
    }

    // Animation
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Twinkle effect
        const twinkle = Math.sin(Date.now() * star.speed * 0.01) * 0.3 + 0.7;
        
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        context.fill();
        
        // Subtle movement
        star.y += star.speed;
        
        // Reset stars when they reach bottom
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, [starCount]);

  return (
    <canvas 
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default StarField;
