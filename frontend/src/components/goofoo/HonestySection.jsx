import React from 'react';
import { products } from '../../data/products';

const HonestySection = () => {
  return (
    <section className="py-24 bg-goofoo-ink noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-8xl text-dates-gold mb-6 tracking-wide">
            OUR FULL INGREDIENT LIST.
          </h2>
          <p className="font-space text-sm md:text-base text-white uppercase tracking-widest">
            We printed it in the largest font on purpose. Read it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* Variant color dot */}
              <div
                className="w-4 h-4 rounded-full mx-auto mb-4"
                style={{ backgroundColor: product.color }}
              ></div>

              {/* Product name */}
              <h3 className="font-bebas text-3xl text-white mb-6 tracking-wide">
                {product.name}
              </h3>

              {/* Ingredients - large and proud */}
              <div className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <p
                    key={index}
                    className="font-space text-base md:text-lg text-white leading-relaxed"
                  >
                    {ingredient}
                  </p>
                ))}
              </div>

              {/* That's it */}
              <p className="font-space text-sm text-white/60 mt-6 uppercase tracking-wider">
                That's the whole list.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-nunito text-lg text-white/90 mb-6">
            Nothing to add because nothing belongs there.
          </p>
          <button className="font-bebas uppercase tracking-widest text-base bg-transparent text-dates-gold border-2 border-dates-gold px-8 py-3 rounded-sm transition-smooth hover:bg-dates-gold hover:text-goofoo-ink">
            Compare it to theirs.
          </button>
        </div>
      </div>
    </section>
  );
};

export default HonestySection;