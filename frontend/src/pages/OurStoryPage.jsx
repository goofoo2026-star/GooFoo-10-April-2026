import React, { useState, useEffect } from 'react';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import { brandStory, whyDates } from '../data/products';

const OurStoryPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

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

      {/* Hero */}
      <section className="py-32 bg-goofoo-ink noise-overlay dot-grid">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white leading-tight mb-8">
            WE HAVE NOTHING TO <span className="text-dates-gold">HIDE.</span><br />
            SO WE <span className="text-dates-gold">HIDE NOTHING.</span>
          </h1>
          <p className="font-space text-sm uppercase tracking-widest text-white/80">
            The story of GOOFOO
          </p>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-20 bg-off-white-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center mb-12">
            <p className="font-bebas text-4xl md:text-6xl text-goofoo-ink leading-tight mb-6">
              {brandStory.founderQuote}
            </p>
            <footer className="font-space text-sm uppercase tracking-widest text-mid-brown">
              {brandStory.founderName}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* The story */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm p-12" style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}>
            {brandStory.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-nunito text-lg text-goofoo-ink leading-relaxed mb-8 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our promise */}
      <section className="py-20 bg-goofoo-ink noise-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-5xl md:text-6xl text-dates-gold mb-12 text-center tracking-wide">
            OUR PRODUCT STANDARD
          </h2>
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="font-bebas text-3xl md:text-4xl text-goofoo-ink leading-relaxed">
              If we can't print the full ingredient list in the largest font on the pack and be proud of it — we don't make it.
            </p>
          </div>
        </div>
      </section>

      {/* Why dates section */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-5xl md:text-6xl text-goofoo-ink mb-6 text-center tracking-wide">
            {whyDates.headline}
          </h2>
          <p className="font-nunito text-xl text-mid-brown text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {whyDates.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyDates.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-sm p-8 text-center"
                style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}
              >
                <div className="font-bebas text-7xl text-dates-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-space text-xs uppercase tracking-widest text-goofoo-ink mb-3">
                  {stat.label}
                </div>
                <div className="font-nunito text-sm text-mid-brown">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-goofoo-ink rounded-sm p-12">
            <p className="font-bebas text-3xl md:text-4xl text-dates-gold">
              {whyDates.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Platform ambition */}
      <section className="py-20 bg-off-white-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-goofoo-ink mb-6 tracking-wide">
            WHAT'S NEXT?
          </h2>
          <p className="font-nunito text-lg text-mid-brown leading-relaxed">
            Chocolate today. Protein bars and energy bars coming soon. Same standard. Same honesty. Same promise: if we can't print the ingredients proudly, we don't make it.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OurStoryPage;