import React from 'react';
import { whyDates } from '../../data/products';

const WhyDatesSection = () => {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-7xl text-goofoo-ink mb-6 tracking-wide">
            {whyDates.headline}
          </h2>
          <p className="font-nunito text-xl text-mid-brown max-w-3xl mx-auto leading-relaxed">
            {whyDates.intro}
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whyDates.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-sm p-8 text-center transition-smooth hover:-translate-y-2"
              style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}
            >
              <div className="font-bebas text-7xl text-dates-gold mb-2">
                {stat.number}
              </div>
              <div className="font-space text-xs uppercase tracking-widest text-goofoo-ink mb-3">
                {stat.label}
              </div>
              <div className="font-nunito text-sm text-mid-brown">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="text-center bg-goofoo-ink rounded-sm p-12">
          <p className="font-bebas text-3xl md:text-4xl text-dates-gold leading-relaxed">
            {whyDates.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyDatesSection;