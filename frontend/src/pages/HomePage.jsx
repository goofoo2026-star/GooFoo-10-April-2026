import React, { useState, useEffect } from 'react';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import Marquee from '../components/goofoo/Marquee';
import Hero from '../components/goofoo/Hero';
import ProductsSection from '../components/goofoo/ProductsSection';
import HonestySection from '../components/goofoo/HonestySection';
import WhyDatesSection from '../components/goofoo/WhyDatesSection';
import CombosSection from '../components/goofoo/CombosSection';
import SocialProofSection from '../components/goofoo/SocialProofSection';
import BrandStorySection from '../components/goofoo/BrandStorySection';

const HomePage = () => {
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
      <Marquee />
      <Header cartItemsCount={cartItemsCount} />
      <Hero />
      <ProductsSection />
      <HonestySection />
      <WhyDatesSection />
      <CombosSection />
      <SocialProofSection />
      <BrandStorySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;