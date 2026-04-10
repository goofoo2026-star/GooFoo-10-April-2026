import React from 'react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="noise-overlay" style={{ background: '#1C0F00' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <img
            src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
            alt="GOOFOO"
            className="h-20 w-auto mx-auto mb-6"
          />
          <p className="font-space text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(242,184,0,0.6)' }}>
            JUST GOO FOOD & NOTHING TO HIDE
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-space text-[10px] uppercase tracking-wider mb-4" style={{ color: '#F2B800' }}>Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/combos" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Combos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space text-[10px] uppercase tracking-wider mb-4" style={{ color: '#F2B800' }}>About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space text-[10px] uppercase tracking-wider mb-4" style={{ color: '#F2B800' }}>Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+919876543210" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Call Us
                </a>
              </li>
              <li>
                <Link to="/shipping" className="font-space text-[10px] transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space text-[10px] uppercase tracking-wider mb-4" style={{ color: '#F2B800' }}>Social</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/goofoo" target="_blank" rel="noopener noreferrer" className="transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/goofoo" target="_blank" rel="noopener noreferrer" className="transition-smooth" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-[2px] font-space text-[9px] uppercase tracking-wider transition-smooth"
              style={{ background: '#25D366', color: '#FFFFFF' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}></div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="font-space text-[9px] uppercase tracking-[0.12em] mb-2" style={{ color: 'rgba(242,184,0,0.3)' }}>
            just goo food & nothing to hide
          </p>
          <p className="font-space text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2025 GOOFOO · Just Goo Food & Nothing to Hide · Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;