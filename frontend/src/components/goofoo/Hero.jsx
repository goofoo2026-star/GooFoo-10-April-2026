import React from 'react';
import { ArrowDown } from 'lucide-react';
import { GoldButton, GhostButton } from './Buttons';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-goofoo-ink noise-overlay dot-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-gold-glow"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
            alt="GOOFOO"
            className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
          <span className="block text-white">
            JUST <span className="text-dates-gold">GOO</span> FOOD
          </span>
          <span className="block text-white">
            & NOTHING TO <span className="text-dates-gold">HIDE</span>
          </span>
        </h1>

        {/* Supporting text */}
        <p className="font-space text-sm md:text-base text-white/90 uppercase tracking-wider mb-12 max-w-2xl mx-auto leading-relaxed">
          The only chocolate bar sweetened with real dates. No refined sugar. No artificial sweeteners. No excuses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <GoldButton onClick={scrollToProducts}>Shop Now</GoldButton>
          <GhostButton onClick={scrollToProducts}>Read the Label</GhostButton>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          className="animate-bounce text-dates-gold hover:text-white transition-smooth"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;