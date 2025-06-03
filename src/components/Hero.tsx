
import React from 'react';
import Dreamcatcher from './Dreamcatcher';
import { Brain, Sparkle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-dream-accent/20 filter blur-[100px]"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-dream-purple/20 filter blur-[120px]"></div>
        <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-dream-pink/10 filter blur-[120px]"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-7/12 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center py-1.5 px-3 rounded-full bg-dream-accent/10 border border-dream-accent/20 text-dream-accent text-sm font-medium animate-fade-in">
              <Sparkle className="w-4 h-4 mr-2" />
              <span>Premium AI Tools by AIWEBTOOLS.AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in" style={{animationDelay: "0.2s"}}>
              <span className="text-gradient">AI Web Tools</span> Dream Interpreter GPT
            </h1>
            
            <p className="text-lg md:text-xl text-dream-text/80 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
              Experience the most advanced AI tools for dream analysis and interpretation. 
              AI Web Tools LLC presents cutting-edge AI technology that analyzes your dreams using psychology, 
              mythology and creative visualization for meaningful insights and personal growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <a 
                href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient rounded-full text-white font-bold text-lg button-shine hover:shadow-lg hover:shadow-dream-accent/20 transition-shadow duration-300 w-full sm:w-auto"
              >
                Try Our AI Dream Tool
              </a>
              
              <a 
                href="#how-it-works" 
                className="px-8 py-4 rounded-full border border-dream-accent/30 bg-dream-accent/10 text-dream-text font-medium text-lg hover:bg-dream-accent/20 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                Explore AI Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* SEO-friendly content */}
            <div className="pt-8 text-sm text-dream-text/60 space-y-2">
              <p>
                <strong>AI Web Tools</strong> - Your trusted source for premium AI tools and web applications
              </p>
              <p>
                Part of the comprehensive <strong>AIWEBTOOLS.AI</strong> suite of advanced artificial intelligence solutions
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 flex justify-center items-center relative animate-fade-in" style={{animationDelay: "0.5s"}}>
            <div className="relative w-full aspect-square max-w-md">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/5LG7DvXbRVSsWDhBjAg1pg" 
                alt="AI Web Tools Dream Interpretation - Advanced AI Tools for Dream Analysis" 
                className="w-full h-auto rounded-lg shadow-xl shadow-dream-accent/10 z-10 relative"
              />
              <div className="absolute -inset-4 bg-dream-accent/5 rounded-xl blur-md -z-0"></div>
              <Dreamcatcher className="absolute inset-0 flex items-center justify-center animate-float opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
