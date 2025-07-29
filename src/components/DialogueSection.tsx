import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const DialogueSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const dialogues = [
    {
      text: "सैयारा… मतलब तारों में एक तन्हा तारा… खुद जलके रोशन कर दे ये जग सारा… और वो तुम हो, मेरे सैयारा!",
      speaker: "Saiyaara"
    },
    {
      text: "मुझे तसल्ली दे दे वो शब्द उधार ढूंढ रहा है… एक सितारा ढूंढ रहा है… दिल सैयारा ढूंढ रहा है।",
      speaker: "Saiyaara"
    },
    {
      text: "अभी भी कुछ पल बाकी हैं मेरे पास।",
      speaker: "Saiyaara"
    },
    {
      text: "अपने प्यार के लिए ना खुद को खत्म मत कर लेना।",
      speaker: "Saiyaara"
    },
    {
      text: "सारा प्यार… सारी दुनिया चिल्ला-चिल्ला के बोले… कृष, आई लव यू!",
      speaker: "Saiyaara"
    },
    {
      text: "हर किसी का एक सपना होता है जिंदगी में… तुम्हारा सपना क्या है?",
      speaker: "Saiyaara"
    }
  ];

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full bg-deep-black py-16 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className={`hero-text text-3xl md:text-5xl font-bold text-rose-gold mb-16 text-center glow-text transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          Whispers in the Dark
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dialogues.map((dialogue, index) => (
            <div 
              key={index}
              className={`enhanced-card p-6 rounded-lg transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)'
              }}
            >
              <div className="relative">
                {/* Quote marks */}
                <div className="absolute -top-2 -left-2 text-4xl text-rose-gold/30 font-serif">"</div>
                <div className="absolute -bottom-4 -right-2 text-4xl text-rose-gold/30 font-serif rotate-180">"</div>
                
                {/* Love symbol */}
                <div className="absolute top-2 right-2 text-red-400/20 text-lg heartbeat">♥</div>
                
                <p className="dialogue-text text-lg italic text-soft-pink mb-6 leading-relaxed relative z-10 px-4">
                  {dialogue.text}
                </p>
                
                <div className="border-t border-rose-gold/30 pt-4">
                  <p className="text-sm text-rose-gold font-medium">— {dialogue.speaker}</p>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-rose-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DialogueSection;