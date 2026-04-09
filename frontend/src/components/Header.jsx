import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white text-center py-2 text-sm font-medium">
        FREE SHIPPING ON ORDERS ₹500+
      </div>

      {/* Main Header */}
      <nav className="bg-[#1a3a52] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://customer-assets.emergentagent.com/job_572c33a1-e8f5-4d0d-8805-6cacb6919aba/artifacts/a77ayx32_Gemini_Generated_Image_3p6jn73p6jn73p6j.png"
                alt="GOOFOO"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-yellow-400 transition-colors font-semibold">
                SHOP
              </Link>
              <Link to="/mission" className="hover:text-yellow-400 transition-colors font-semibold">
                OUR MISSION
              </Link>
              <Link to="/stores" className="hover:text-yellow-400 transition-colors font-semibold">
                FIND A STORE
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:text-yellow-400 transition-colors hidden md:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-yellow-400 transition-colors hidden md:block">
                <User className="w-5 h-5" />
              </button>
              <button className="hover:text-yellow-400 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#1a3a52] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a3a52] border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link
                to="/"
                className="block py-2 hover:text-yellow-400 transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                to="/mission"
                className="block py-2 hover:text-yellow-400 transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OUR MISSION
              </Link>
              <Link
                to="/stores"
                className="block py-2 hover:text-yellow-400 transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FIND A STORE
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
