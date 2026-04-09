import React from 'react';
import { brandStory } from '../../data/products';

const BrandStorySection = () => {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pull quote */}
        <div className="text-center mb-16">
          <blockquote className="font-bebas text-4xl md:text-6xl text-goofoo-ink leading-tight mb-6">
            {brandStory.founderQuote}
          </blockquote>
          <p className="font-space text-sm uppercase tracking-widest text-mid-brown">
            {brandStory.founderName}
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-sm p-12" style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}>
          <div className="prose prose-lg max-w-none">
            {brandStory.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-nunito text-base text-goofoo-ink leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Mission */}
          <div className="mt-12 pt-8 border-t-2 border-dates-gold">
            <p className="font-space text-xs uppercase tracking-widest text-mid-brown mb-3">
              Our Mission:
            </p>
            <p className="font-bebas text-3xl text-goofoo-ink tracking-wide">
              {brandStory.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;