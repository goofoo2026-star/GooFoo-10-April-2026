import React from 'react';
import { brandStory } from '../../data/products';

const BrandStorySection = () => {
  return (
    <section className="py-24" style={{ background: '#FFF8EE' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <blockquote className="font-bebas text-5xl leading-tight mb-6" style={{ color: '#1C0F00' }}>
            {brandStory.founderQuote}
          </blockquote>
          <p className="font-space text-sm uppercase tracking-wider" style={{ color: '#8B7355' }}>
            {brandStory.founderName}
          </p>
        </div>

        <div className="rounded-[4px] p-12 animate-fade-up" style={{ 
          background: '#FFFFFF',
          boxShadow: '0 8px 32px rgba(28,15,0,0.08)'
        }}>
          <div className="prose prose-lg max-w-none">
            {brandStory.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-nunito text-base mb-6 last:mb-0 leading-[1.85]" style={{ color: '#1C0F00' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8" style={{ borderTop: '2px solid #F2B800' }}>
            <p className="font-space text-[10px] uppercase tracking-wider mb-3" style={{ color: '#8B7355' }}>
              Our Mission:
            </p>
            <p className="font-bebas text-3xl tracking-wide" style={{ color: '#1C0F00' }}>
              {brandStory.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;