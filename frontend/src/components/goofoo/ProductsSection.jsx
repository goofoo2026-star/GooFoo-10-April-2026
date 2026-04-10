import React from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  return (
    <section id="products" className="py-24" style={{ background: '#FFF8EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas tracking-wide mb-4" style={{ 
            fontSize: 'clamp(44px, 7vw, 80px)',
            color: '#1C0F00'
          }}>
            THE THREE PRODUCTS
          </h2>
          <p className="font-nunito text-base leading-[1.85] max-w-3xl mx-auto" style={{ color: '#8B7355' }}>
            Three delicious variants. All sweetened with dates. All with ingredient lists you can actually read.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
