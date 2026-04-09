import React from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-7xl text-goofoo-ink mb-4 tracking-wide">
            THE THREE PRODUCTS
          </h2>
          <p className="font-nunito text-lg text-mid-brown max-w-2xl mx-auto">
            Three delicious variants. All sweetened with dates. All with ingredient lists you can actually read.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;