
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does Dream Interpreter GPT work?",
      answer: "Dream Interpreter GPT uses advanced AI to analyze your dreams by identifying key symbols, themes, and emotions. It applies frameworks from psychology, mythology, and cultural symbolism to provide meaningful interpretations. The AI then generates personalized insights, creative visualizations, and actionable guidance for self-reflection and personal growth."
    },
    {
      question: "Is dream interpretation scientifically valid?",
      answer: "Dream interpretation combines elements of psychology, cultural symbolism, and personal association. While not all aspects are scientifically proven, many psychological approaches to dreams (like those from Jung and Freud) have contributed valuable frameworks for understanding the unconscious mind. Dream Interpreter GPT offers insights based on established interpretative methods but should be viewed as a tool for self-reflection rather than definitive scientific analysis."
    },
    {
      question: "Can Dream Interpreter GPT predict the future?",
      answer: "No, Dream Interpreter GPT cannot predict the future. Its purpose is to analyze dream content for psychological insights and self-discovery, not fortune-telling. Any interpretations that seem predictive are better understood as reflections of your current thoughts, concerns, or aspirations, rather than prophecies of events to come."
    },
    {
      question: "How detailed should my dream description be?",
      answer: "The more details you provide, the more comprehensive your interpretation will be. Try to include sensory aspects (colors, sounds, feelings), notable symbols or figures, the environment, your emotions during the dream, and how the dream ended. Even small details you might think are insignificant could hold important symbolic meaning."
    },
    {
      question: "Can Dream Interpreter GPT help with recurring nightmares?",
      answer: "Dream Interpreter GPT can offer insights into the potential psychological meanings behind recurring nightmares, which might help you understand underlying anxieties or unresolved issues. However, for persistent nightmares causing distress, we recommend consulting with a mental health professional who specializes in sleep disorders or trauma."
    },
    {
      question: "Are my dreams and interpretations private?",
      answer: "Your privacy is important. Dream Interpreter GPT follows OpenAI's privacy policies. While your dream descriptions may be processed by AI systems, they are not publicly shared. Please review OpenAI's privacy policy for complete details on data handling and confidentiality."
    },
    {
      question: "Can I use Dream Interpreter GPT for therapeutic purposes?",
      answer: "While Dream Interpreter GPT can provide interesting insights for self-reflection, it is not a substitute for professional therapy or counseling. Dream interpretation offered is for personal exploration and should not replace professional mental health services, especially for addressing trauma, psychological disorders, or serious emotional concerns."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-dream-accent/15 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-dream-purple/20 filter blur-[120px]"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-dream-accent font-bold mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="text-gradient">Frequently Asked</span> Questions
          </h3>
          <p className="max-w-2xl mx-auto text-dream-text/80 text-lg">
            Find answers to common questions about Dream Interpreter GPT and dream interpretation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glass-panel rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button 
                className="w-full text-left py-5 px-6 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-dream-accent" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-dream-accent" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-dream-text/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
