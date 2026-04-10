import React from 'react';
import { whyDates } from '../../data/products';

const WhyDatesSection = () => {
  return (
    <section className="py-24" style={{ background: '#F0EDE8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas tracking-wide mb-6" style={{ 
            fontSize: 'clamp(44px, 7vw, 80px)',
            color: '#1C0F00'
          }}>
            {whyDates.headline}
          </h2>
          <p className="font-nunito text-lg leading-[1.85] max-w-3xl mx-auto" style={{ color: '#8B7355' }}>
            {whyDates.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whyDates.stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[4px] p-8 text-center transition-card hover:-translate-y-2 animate-fade-up"
              style={{ 
                background: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(28,15,0,0.06)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="font-bebas text-7xl mb-2" style={{ color: '#F2B800' }}>
                {stat.number}
              </div>
              <div className="font-space text-[9px] uppercase tracking-[0.12em] mb-3" style={{ color: '#1C0F00' }}>
                {stat.label}
              </div>
              <div className="font-nunito text-sm leading-[1.85]" style={{ color: '#8B7355' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center rounded-[4px] p-12 animate-fade-up" style={{ background: '#1C0F00' }}>
          <p className="font-bebas text-4xl tracking-wide" style={{ color: '#F2B800' }}>
            {whyDates.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyDatesSection;