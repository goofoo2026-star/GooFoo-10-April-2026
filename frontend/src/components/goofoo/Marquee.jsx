import React from 'react';

const Marquee = () => {
  const items = [
    'No refined sugar',
    'No artificial sweeteners',
    'No palm oil',
    'No PGPR',
    'Just dates',
    'Just chocolate',
    'Just honest',
  ];

  return (
    <section className="bg-dates-gold py-4 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
        {/* First set */}
        {items.map((item, index) => (
          <React.Fragment key={`first-${index}`}>
            <span className="font-bebas text-2xl md:text-3xl text-goofoo-ink px-8">
              {item}
            </span>
            <span className="text-terracotta text-2xl md:text-3xl">·</span>
          </React.Fragment>
        ))}
        {/* Second set for seamless loop */}
        {items.map((item, index) => (
          <React.Fragment key={`second-${index}`}>
            <span className="font-bebas text-2xl md:text-3xl text-goofoo-ink px-8">
              {item}
            </span>
            <span className="text-terracotta text-2xl md:text-3xl">·</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Marquee;