import React from 'react';
import { products } from '../../data/products';

const HonestySection = () => {
  return (
    <section className="py-24 noise-overlay" style={{ background: '#1C0F00' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas tracking-wide mb-6" style={{ 
            fontSize: 'clamp(44px, 7vw, 80px)',
            color: '#F2B800'
          }}>
            OUR FULL INGREDIENT LIST.
          </h2>
          <p className="font-space text-xs uppercase tracking-[0.08em]" style={{ color: '#FFFFFF' }}>
            We printed it in the largest font on purpose. Read it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="text-center animate-fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Variant color dot */}
              <div
                className="w-4 h-4 rounded-full mx-auto mb-4"
                style={{ backgroundColor: product.color }}
              ></div>

              {/* Product name */}
              <h3 className="font-bebas text-3xl tracking-wide mb-6" style={{ color: '#FFFFFF' }}>
                {product.name}
              </h3>

              {/* Ingredients - large and proud */}
              <div className="space-y-3">
                {product.ingredients.map((ingredient, idx) => (
                  <p
                    key={idx}
                    className="font-space text-lg leading-relaxed"
                    style={{ color: '#FFFFFF' }}
                  >
                    {ingredient}
                  </p>
                ))}
              </div>

              {/* That's it */}
              <p className="font-space text-sm mt-6 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>
                That's the whole list.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <p className="font-nunito text-lg mb-6 leading-[1.85]" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Nothing to add because nothing belongs there.
          </p>
          <button 
            className="font-bebas uppercase tracking-[0.1em] text-base px-8 py-3.5 rounded-[2px] transition-smooth"
            style={{
              background: 'transparent',
              border: '1.5px solid #F2B800',
              color: '#F2B800'
            }}
          >
            Compare it to theirs.
          </button>
        </div>
      </div>
    </section>
  );
};

export default HonestySection;
