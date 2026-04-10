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
    <section className="bg-gold py-0 overflow-hidden" style={{ background: '#F2B800' }}>
      <div 
        className="flex whitespace-nowrap items-center" 
        style={{ animation: 'marquee 16s linear infinite' }}
      >
        {/* First set */}
        {items.map((item, index) => (
          <React.Fragment key={`first-${index}`}>
            <span 
              className="font-bebas px-8" 
              style={{ 
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: '#1C0F00',
                lineHeight: '1.2'
              }}
            >
              {item}
            </span>
            <div 
              className="flex-shrink-0 rounded-full" 
              style={{ 
                width: '10px', 
                height: '10px', 
                background: '#C04A1A',
                margin: '0 16px'
              }}
            ></div>
          </React.Fragment>
        ))  }
        {/* Second set for seamless loop */}
        {items.map((item, index) => (
          <React.Fragment key={`second-${index}`}>
            <span 
              className="font-bebas px-8" 
              style={{ 
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: '#1C0F00',
                lineHeight: '1.2'
              }}
            >
              {item}
            </span>
            <div 
              className="flex-shrink-0 rounded-full" 
              style={{ 
                width: '10px', 
                height: '10px', 
                background: '#C04A1A',
                margin: '0 16px'
              }}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
