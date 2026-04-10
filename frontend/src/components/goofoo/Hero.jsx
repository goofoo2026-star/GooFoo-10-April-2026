import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink noise-overlay dot-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-gold-glow"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
            alt="GOOFOO"
            className="w-[200px] md:w-[320px] lg:w-[360px] mx-auto"
            style={{ filter: 'drop-shadow(0 8px 40px rgba(242, 184, 0, 0.25))' }}
          />
        </div>

        {/* Tagline - 4 lines */}
        <div className="mb-12">
          {/* Line 1: JUST */}
          <p className="font-space text-[18px] uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            JUST
          </p>

          {/* Line 2: GOO FOOD */}
          <h1 className="font-bebas leading-none mb-3" style={{ 
            fontSize: 'clamp(60px, 12vw, 130px)',
            color: '#FFFFFF'
          }}>
            <span style={{ color: '#F2B800' }}>GOO</span> FOOD
          </h1>

          {/* Line 3: & */}
          <p className="font-bebas mb-3" style={{ 
            fontSize: 'clamp(24px, 4vw, 44px)',
            color: 'rgba(242, 184, 0, 0.5)'
          }}>
            &
          </p>

          {/* Line 4: NOTHING TO HIDE */}
          <h2 className="font-bebas leading-none" style={{ 
            fontSize: 'clamp(36px, 7vw, 80px)',
            color: '#FFFFFF'
          }}>
            NOTHING TO <span style={{ color: '#F2B800' }}>HIDE</span>
          </h2>
        </div>

        {/* Supporting line */}
        <p className="font-space text-xs tracking-[0.08em] mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          The only chocolate bar sweetened with real dates. No refined sugar. No artificial sweeteners.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToProducts}
            className="font-bebas uppercase tracking-[0.1em] text-base px-8 py-3.5 rounded-[2px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#F2B800',
              color: '#1C0F00'
            }}
          >
            SHOP NOW
          </button>
          <button
            onClick={scrollToProducts}
            className="font-bebas uppercase tracking-[0.1em] text-base px-8 py-3.5 rounded-[2px] transition-all duration-200"
            style={{
              background: 'transparent',
              border: '1.5px solid #F2B800',
              color: '#F2B800'
            }}
          >
            READ THE LABEL
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          className="animate-bounce transition-smooth"
          style={{ color: '#F2B800' }}
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
