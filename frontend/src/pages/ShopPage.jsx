import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import ProductCard from '../components/goofoo/ProductCard';
import { products } from '../data/products';

const ShopPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartItemsCount(totalItems);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);

    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header cartItemsCount={cartItemsCount} />

      {/* Page header */}
      <section className="py-16 bg-goofoo-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-7xl md:text-8xl text-dates-gold mb-4 tracking-wide">
            SHOP ALL PRODUCTS
          </h1>
          <p className="font-space text-sm uppercase tracking-widest text-white">
            Real chocolate. Honest labels. No excuses.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-8 bg-off-white-grey border-b border-mid-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`font-space text-xs uppercase tracking-widest px-6 py-2 rounded-sm transition-smooth ${
                filter === 'all'
                  ? 'bg-dates-gold text-goofoo-ink'
                  : 'bg-white text-mid-brown hover:bg-dates-gold hover:text-goofoo-ink'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('chocolate')}
              className={`font-space text-xs uppercase tracking-widest px-6 py-2 rounded-sm transition-smooth ${
                filter === 'chocolate'
                  ? 'bg-dates-gold text-goofoo-ink'
                  : 'bg-white text-mid-brown hover:bg-dates-gold hover:text-goofoo-ink'
              }`}
            >
              Chocolate Bars
            </button>
            <button
              onClick={() => navigate('/combos')}
              className="font-space text-xs uppercase tracking-widest px-6 py-2 rounded-sm bg-white text-mid-brown hover:bg-dates-gold hover:text-goofoo-ink transition-smooth"
            >
              Combos
            </button>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-goofoo-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-dates-gold mb-4 tracking-wide">
            WANT TO SAVE MORE?
          </h2>
          <p className="font-nunito text-lg text-white/90 mb-8">
            Order our combo packs and save up to ₹336
          </p>
          <button
            onClick={() => navigate('/combos')}
            className="bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-base px-8 py-4 rounded-sm transition-smooth"
          >
            View Combos
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ShopPage;