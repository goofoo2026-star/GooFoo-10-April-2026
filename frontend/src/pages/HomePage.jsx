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

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('storage', updateCartCount);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#FFF8EE' }}>
      <Header cartItemsCount={cartItemsCount} />
      <Hero /> {/* #1C0F00 dark */}
      <Marquee /> {/* #F2B800 gold */}
      <ProductsSection /> {/* #FFF8EE cream */}
      <HonestySection /> {/* #1C0F00 dark */}
      <WhyDatesSection /> {/* #F0EDE8 grey */}
      <CombosSection /> {/* #1C0F00 dark */}
      <SocialProofSection /> {/* #F0EDE8 grey */}
      <BrandStorySection /> {/* #FFF8EE cream */}
      <Footer /> {/* #1C0F00 dark */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
