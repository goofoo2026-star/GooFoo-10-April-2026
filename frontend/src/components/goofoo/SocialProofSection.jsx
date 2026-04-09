import React from 'react';
import { reviews } from '../../data/products';
import { Star } from 'lucide-react';

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-off-white-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-7xl text-goofoo-ink mb-4 tracking-wide">
            PEOPLE WHO READ LABELS.
          </h2>
          <p className="font-nunito text-lg text-mid-brown">
            Real reviews from real ingredient readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-sm p-6 transition-smooth hover:-translate-y-1"
              style={{ boxShadow: '0 4px 16px rgba(28,15,0,0.06)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dates-gold text-dates-gold" />
                ))}
              </div>

              {/* Comment */}
              <p className="font-nunito text-sm text-goofoo-ink mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Name and verified badge */}
              <div className="flex items-center justify-between">
                <span className="font-space text-xs uppercase tracking-widest text-mid-brown">
                  {review.name}
                </span>
                {review.verified && (
                  <span className="font-space text-xs uppercase tracking-widest text-classic-teal">
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