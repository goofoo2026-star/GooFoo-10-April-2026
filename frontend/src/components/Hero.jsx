import React from 'react';
import { heroContent } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroContent.backgroundImage}?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
          <span className="block text-yellow-400 drop-shadow-2xl" style={{
            textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(251, 191, 36, 0.5)'
          }}>
            {heroContent.title.split(' ')[0]}
          </span>
          <span className="block" style={{
            textShadow: '4px 4px 8px rgba(0,0,0,0.8)'
          }}>
            {heroContent.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}>
          {heroContent.subtitle}
        </p>
        <button
          onClick={scrollToProducts}
          className="group bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
        >
          {heroContent.ctaText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
