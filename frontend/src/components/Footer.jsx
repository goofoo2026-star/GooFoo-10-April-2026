import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_chocolate-trio-pack/artifacts/ykiskrxo_GOOFOO%20-%20THE%20GOODFOOD%20%2824%20x%2012%20in%29.png"
              alt="GOOFOO"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/70 max-w-md">
              World's cleanest chocolate. Made with ethically sourced ingredients and crafted with love.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/70 hover:text-yellow-400 transition-colors">Shop All</a></li>
              <li><a href="/mission" className="text-white/70 hover:text-yellow-400 transition-colors">Our Mission</a></li>
              <li><a href="/stores" className="text-white/70 hover:text-yellow-400 transition-colors">Find a Store</a></li>
              <li><a href="/about" className="text-white/70 hover:text-yellow-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-white/70 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-white/70 hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="text-white/70 hover:text-yellow-400 transition-colors">Shipping</a></li>
              <li><a href="/returns" className="text-white/70 hover:text-yellow-400 transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 GOOFOO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
