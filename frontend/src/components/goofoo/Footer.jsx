import React from 'react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-goofoo-ink text-white noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <img
            src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
            alt="GOOFOO"
            className="h-20 w-auto mx-auto mb-6"
          />
          <p className="font-space text-sm uppercase tracking-widest text-dates-gold">
            Just Goo Food & Nothing to Hide
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bebas text-xl text-dates-gold mb-4 tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/combos" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Combos
                </Link>
              </li>
              <li>
                <Link to="/product/classic-chocolate" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Classic Chocolate
                </Link>
              </li>
              <li>
                <Link to="/product/peanut-chocolate" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Peanut Chocolate
                </Link>
              </li>
              <li>
                <Link to="/product/badam-chocolate" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Badam Chocolate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-xl text-dates-gold mb-4 tracking-wider">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-xl text-dates-gold mb-4 tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+919876543210" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Call Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/shipping" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-xl text-dates-gold mb-4 tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/returns" className="font-nunito text-sm text-white/70 hover:text-dates-gold transition-smooth">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com/goofoo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-dates-gold hover:text-goofoo-ink rounded-sm flex items-center justify-center transition-smooth"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com/goofoo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-dates-gold hover:text-goofoo-ink rounded-sm flex items-center justify-center transition-smooth"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-dates-gold hover:text-goofoo-ink rounded-sm flex items-center justify-center transition-smooth"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-space text-xs text-white/50 uppercase tracking-widest mb-2">
            Just Goo Food & Nothing to Hide
          </p>
          <p className="font-nunito text-sm text-white/40">
            © 2025 GOOFOO. Made in Chennai, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
