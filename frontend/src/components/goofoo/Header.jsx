import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-goofoo-ink shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
              alt="GOOFOO"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className="font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
            >
              Shop
            </Link>
            <Link
              to="/combos"
              className="font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
            >
              Combos
            </Link>
            <Link
              to="/our-story"
              className="font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
            >
              Our Story
            </Link>
            <Link
              to="/gifting"
              className="font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
            >
              Gifting
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/cart')}
              className="hover:text-dates-gold transition-smooth relative text-white"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-dates-gold text-goofoo-ink rounded-full w-5 h-5 flex items-center justify-center text-xs font-space font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-goofoo-ink border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/shop"
              className="block py-3 font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/combos"
              className="block py-3 font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Combos
            </Link>
            <Link
              to="/our-story"
              className="block py-3 font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/gifting"
              className="block py-3 font-space text-xs uppercase tracking-widest text-white hover:text-dates-gold transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gifting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
