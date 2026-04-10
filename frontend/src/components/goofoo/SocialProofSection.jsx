import React from 'react';
import { reviews } from '../../data/products';
import { Star } from 'lucide-react';

const SocialProofSection = () => {
  return (
    <section className="py-24" style={{ background: '#F0EDE8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas tracking-wide mb-4" style={{ 
            fontSize: 'clamp(44px, 7vw, 80px)',
            color: '#1C0F00'
          }}>
            PEOPLE WHO READ LABELS.
          </h2>
          <p className="font-nunito text-base leading-[1.85]" style={{ color: '#8B7355' }}>
            Real reviews from real ingredient readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="rounded-[4px] p-6 transition-card hover:-translate-y-1 animate-fade-up"
              style={{ 
                background: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(28,15,0,0.06)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: '#F2B800', color: '#F2B800' }} />
                ))}
              </div>

              <p className="font-nunito text-sm mb-4 leading-[1.85]" style={{ color: '#1C0F00' }}>
                "{review.comment}"
              </p>

              <div className="flex items-center justify-between">
                <span className="font-space text-[9px] uppercase tracking-[0.12em]" style={{ color: '#8B7355' }}>
                  {review.name}
                </span>
                {review.verified && (
                  <span className="font-space text-[9px] uppercase tracking-[0.12em]" style={{ color: '#1A8B7A' }}>
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;