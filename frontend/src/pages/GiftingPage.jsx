import React, { useState, useEffect } from 'react';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import { Gift, MessageCircle, Package, Award } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const GiftingPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    occasion: '',
    dateNeeded: '',
    message: ''
  });
  const { toast } = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I'd like to place a corporate gifting order:\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuantity: ${formData.quantity} bars\nOccasion: ${formData.occasion}\nDate Needed: ${formData.dateNeeded}\n\nMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll respond within 2 hours!",
      duration: 3000,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header cartItemsCount={cartItemsCount} />

      {/* Hero */}
      <section className="py-20 bg-goofoo-ink noise-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-20 h-20 text-dates-gold mx-auto mb-8" />
          <h1 className="font-bebas text-6xl md:text-8xl text-dates-gold mb-6 tracking-wide">
            CORPORATE GIFTING
          </h1>
          <p className="font-bebas text-3xl md:text-4xl text-white leading-tight">
            Give your team a Diwali gift they'll actually read.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-dates-gold rounded-sm mx-auto mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-goofoo-ink" />
              </div>
              <h3 className="font-bebas text-2xl text-goofoo-ink mb-2 tracking-wide">Custom Branding</h3>
              <p className="font-nunito text-sm text-mid-brown">
                Company name on sleeve
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dates-gold rounded-sm mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-goofoo-ink" />
              </div>
              <h3 className="font-bebas text-2xl text-goofoo-ink mb-2 tracking-wide">Bulk Pricing</h3>
              <p className="font-nunito text-sm text-mid-brown">
                Better rates for 100+ bars
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dates-gold rounded-sm mx-auto mb-4 flex items-center justify-center">
                <Gift className="w-8 h-8 text-goofoo-ink" />
              </div>
              <h3 className="font-bebas text-2xl text-goofoo-ink mb-2 tracking-wide">Gift Ready</h3>
              <p className="font-nunito text-sm text-mid-brown">
                Premium packaging included
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dates-gold rounded-sm mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-goofoo-ink" />
              </div>
              <h3 className="font-bebas text-2xl text-goofoo-ink mb-2 tracking-wide">Fast Response</h3>
              <p className="font-nunito text-sm text-mid-brown">
                Quote within 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-20 bg-off-white-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-5xl text-goofoo-ink mb-12 text-center tracking-wide">
            BULK PRICING
          </h2>
          <div className="bg-white rounded-sm overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}>
            <table className="w-full">
              <thead className="bg-goofoo-ink">
                <tr>
                  <th className="font-space text-xs uppercase tracking-widest text-dates-gold py-4 px-6 text-left">Quantity</th>
                  <th className="font-space text-xs uppercase tracking-widest text-dates-gold py-4 px-6 text-left">Classic</th>
                  <th className="font-space text-xs uppercase tracking-widest text-dates-gold py-4 px-6 text-left">Peanut</th>
                  <th className="font-space text-xs uppercase tracking-widest text-dates-gold py-4 px-6 text-left">Badam</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-mid-brown/10">
                  <td className="font-nunito text-base text-goofoo-ink py-4 px-6">100-500 bars</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹90</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹110</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹130</td>
                </tr>
                <tr>
                  <td className="font-nunito text-base text-goofoo-ink py-4 px-6">500+ bars</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹85</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹105</td>
                  <td className="font-bebas text-2xl text-goofoo-ink py-4 px-6">₹125</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-space text-xs uppercase tracking-widest text-mid-brown text-center mt-6">
            All prices per bar. Free shipping on orders above 100 bars.
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl text-goofoo-ink mb-4 tracking-wide">
              REQUEST A QUOTE
            </h2>
            <p className="font-nunito text-lg text-mid-brown">
              Fill the form below and we'll send you a WhatsApp quote within 2 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-sm p-8" style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Quantity (bars) *
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  min="100"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                  Date Needed *
                </label>
                <input
                  type="date"
                  name="dateNeeded"
                  required
                  value={formData.dateNeeded}
                  onChange={handleChange}
                  className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                Occasion *
              </label>
              <input
                type="text"
                name="occasion"
                required
                placeholder="e.g., Diwali, Annual Day, Employee Appreciation"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth"
              />
            </div>

            <div className="mb-6">
              <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2 block">
                Additional Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-mid-brown/20 rounded-sm px-4 py-3 font-nunito text-base text-goofoo-ink focus:border-dates-gold outline-none transition-smooth resize-none"
                placeholder="Any specific requirements?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-xl px-8 py-6 rounded-sm transition-smooth flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GiftingPage;