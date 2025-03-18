
import React from 'react';
import { Brain, Sparkles, Compass, Eye, MessageCircle, Star, BookOpen, Smile } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Dream Analysis",
      description: "Break down your dreams into symbolic elements and analyze them using psychological frameworks."
    },
    {
      icon: Eye,
      title: "Symbolic Interpretation",
      description: "Uncover the hidden meanings behind recurring symbols in your dreams."
    },
    {
      icon: Sparkles,
      title: "Creative Visualizations",
      description: "Experience rich, imaginative descriptions of your dream's symbolic meaning."
    },
    {
      icon: BookOpen,
      title: "Psychological Insights",
      description: "Gain perspective through Freudian, Jungian, and other psychological approaches."
    },
    {
      icon: Compass,
      title: "Guided Reflection",
      description: "Explore reflective questions that connect dreams to your waking life."
    },
    {
      icon: Star,
      title: "Actionable Advice",
      description: "Receive practical guidance for personal growth based on your dreams."
    },
    {
      icon: MessageCircle,
      title: "Detailed Breakdown",
      description: "Receive a comprehensive analysis of dream types, patterns, and themes."
    },
    {
      icon: Smile,
      title: "Personal Growth",
      description: "Transform dream insights into meaningful steps for self-improvement."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Dream",
      description: "Describe your dream in detail, including settings, emotions, symbols, and interactions."
    },
    {
      number: "02",
      title: "Symbol Analysis",
      description: "Our AI identifies key symbols and analyzes them through psychological and cultural lenses."
    },
    {
      number: "03",
      title: "Receive Insights",
      description: "Get a detailed interpretation with symbolic meanings, visualizations, and personal reflections."
    },
    {
      number: "04",
      title: "Guided Growth",
      description: "Apply actionable advice to transform dream insights into personal development."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-dream-purple/20 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-dream-accent/15 filter blur-[120px]"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-dream-accent font-bold mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="text-gradient">Unlock</span> the Secrets of Your Dreams
          </h3>
          <p className="max-w-2xl mx-auto text-dream-text/80 text-lg">
            Dream Interpreter GPT follows a structured approach to analyze your dreams, 
            providing meaningful insights and actionable guidance for personal growth.
          </p>
        </div>
        
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 hover-scale"
            >
              <div className="text-xl font-display font-bold text-dream-accent mb-4">{step.number}</div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-dream-text/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="neo-blur rounded-xl p-6 flex flex-col items-start hover-scale"
            >
              <div className="w-12 h-12 rounded-lg bg-dream-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-dream-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-dream-text/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
