
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, quote, rating }) => {
  return (
    <div className="glass-panel rounded-lg p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <Quote className="text-dream-accent w-8 h-8 mr-2 opacity-50" />
      </div>
      <p className="text-dream-text/90 italic mb-6 flex-grow">{quote}</p>
      <div className="mt-auto">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-dream-accent fill-dream-accent' : 'text-dream-text/30'}`}
            />
          ))}
        </div>
        <div>
          <h4 className="font-medium text-dream-text">{name}</h4>
          <p className="text-dream-text/60 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      title: "Therapist",
      quote: "Dream Interpreter GPT has been invaluable for my personal practice. The insights it provides have helped me understand my subconscious patterns and make meaningful changes.",
      rating: 5
    },
    {
      name: "Michael T.",
      title: "Artist",
      quote: "As a creative professional, my dreams are a source of inspiration. This tool helps me extract meaning and symbolism that I incorporate into my work.",
      rating: 4
    },
    {
      name: "Aisha R.",
      title: "Psychology Student",
      quote: "The psychological frameworks used by Dream Interpreter GPT have deepened my understanding of dream analysis. It's fascinating to see how accurately it interprets symbolic elements.",
      rating: 5
    },
    {
      name: "David L.",
      title: "Software Engineer",
      quote: "I've always been skeptical of dream interpretation, but this tool's analytical approach has provided insights that actually resonate with my waking life challenges.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What <span className="text-gradient">Dreamers</span> Are Saying
          </h2>
          <p className="text-dream-text/70 max-w-xl mx-auto">
            Join thousands who have unlocked the meaning behind their dreams with Dream Interpreter GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
