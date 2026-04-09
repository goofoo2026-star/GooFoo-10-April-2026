import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import RetailerBanner from './components/RetailerBanner';
import ProductGrid from './components/ProductGrid';
import MissionSection from './components/Mission';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

const Home = () => {
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
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={cartItemsCount} />
      <Hero />
      <RetailerBanner />
      <ProductGrid />
      <MissionSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

const MissionPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemsCount(totalItems);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={cartItemsCount} />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black text-center mb-8">OUR MISSION</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              At GOOFOO, we're on a mission to create the world's cleanest and most delicious chocolate.
            </p>
            <p className="text-gray-700 mb-6">
              Every bar we make is crafted with ethically sourced cocoa and premium ingredients. We believe in transparency, sustainability, and giving back to the communities that make our chocolate possible.
            </p>
            <p className="text-gray-700">
              From farm to bar, we're committed to making chocolate that not only tastes incredible but also makes a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const StoresPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemsCount(totalItems);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={cartItemsCount} />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black text-center mb-8">FIND A STORE</h1>
          <p className="text-xl text-center text-gray-700 mb-12">
            GOOFOO is available at these fine retailers across India
          </p>
          <RetailerBanner />
          <div className="mt-12 text-center">
            <p className="text-gray-600">Can't find us near you? Shop online and get free shipping on orders over ₹500!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/stores" element={<StoresPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
