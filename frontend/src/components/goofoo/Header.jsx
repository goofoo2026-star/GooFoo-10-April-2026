import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ background: '#1C0F00' }}>
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
              className="font-space text-[10px] uppercase tracking-[0.16em] transition-smooth"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.target.style.color = '#F2B800'}
              onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
            >
              Shop
            </Link>
            <Link
              to="/combos"
              className="font-space text-[10px] uppercase tracking-[0.16em] transition-smooth"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.target.style.color = '#F2B800'}
              onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
            >
              Combos
            </Link>
            <Link
              to="/our-story"
              className="font-space text-[10px] uppercase tracking-[0.16em] transition-smooth"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.target.style.color = '#F2B800'}
              onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
            >
              Our Story
            </Link>
            <Link
              to="/gifting"
              className="font-space text-[10px] uppercase tracking-[0.16em] transition-smooth"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.target.style.color = '#F2B800'}
              onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
            >
              Gifting
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/cart')}
              className="transition-smooth relative cart-icon"
              style={{ color: '#FFFFFF' }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center font-bebas text-[10px]"
                  style={{ 
                    background: '#C04A1A',
                    color: '#FFFFFF'
                  }}
                >
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden"
              style={{ color: '#FFFFFF' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" style={{ background: '#1C0F00', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/shop"
              className="block py-3 font-bebas text-2xl tracking-wide transition-smooth"
              style={{ color: '#F2B800', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/combos"
              className="block py-3 font-bebas text-2xl tracking-wide transition-smooth"
              style={{ color: '#F2B800', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Combos
            </Link>
            <Link
              to="/our-story"
              className="block py-3 font-bebas text-2xl tracking-wide transition-smooth"
              style={{ color: '#F2B800', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/gifting"
              className="block py-3 font-bebas text-2xl tracking-wide transition-smooth"
              style={{ color: '#F2B800', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
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