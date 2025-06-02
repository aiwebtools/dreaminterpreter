
import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="glass-panel rounded-lg p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="text-dream-accent w-6 h-6 mr-3" />
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Legal <span className="text-gradient">Disclaimer</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-dream-text/80">
            <p>
              Dream Interpreter GPT is provided for entertainment, self-reflection, and educational purposes only. 
              The interpretations and insights offered should not be considered as professional psychological advice, 
              medical diagnosis, or treatment recommendations.
            </p>
            
            <p>
              While dream interpretation can be a valuable tool for self-discovery, it is not a substitute for 
              professional mental health services. If you are experiencing psychological distress or mental health 
              concerns, please consult with a qualified healthcare provider.
            </p>
            
            <p>
              Dream Interpreter GPT utilizes artificial intelligence to analyze dream content and provide 
              interpretations based on various psychological theories, mythological frameworks, and symbolic 
              patterns. The accuracy and relevance of interpretations may vary, and all insights should be 
              considered exploratory rather than definitive.
            </p>
            
            <p>
              By using Dream Interpreter GPT, you acknowledge that AI Web Tools LLC and its affiliates are not 
              responsible for decisions made or actions taken based on the interpretations provided. Dream analysis 
              results are for your personal consideration only.
            </p>
            
            <div className="pt-4 flex items-start">
              <ShieldCheck className="text-dream-accent w-5 h-5 mr-2 mt-0.5" />
              <p className="text-sm">
                For our full Terms of Service, please visit our 
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-dream-accent hover:underline ml-1">
                  Terms of Service
                </a> 
                . For information about how we handle your data, please review our 
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-dream-accent hover:underline ml-1">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
