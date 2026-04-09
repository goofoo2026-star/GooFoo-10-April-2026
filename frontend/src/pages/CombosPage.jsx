import React, { useState, useEffect } from 'react';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import { combos } from '../data/products';
import { ShoppingCart, Gift, Check } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const CombosPage = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
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

  const handleAddToCart = (combo) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.productId === combo.id);

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({
        productId: combo.id,
        productName: combo.name,
        price: combo.price,
        quantity: 1,
        image: combo.image,
        isCombo: true
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('storage'));

    toast({
      title: "Added to Cart!",
      description: `${combo.name} added to your bag.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header cartItemsCount={cartItemsCount} />

      {/* Hero */}
      <section className="py-20 bg-goofoo-ink noise-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-7xl md:text-9xl text-dates-gold mb-6 tracking-wide">
            COMBO PACKS
          </h1>
          <p className="font-space text-sm uppercase tracking-widest text-white mb-4">
            Order online. Only as combos.
          </p>
          <p className="font-nunito text-xl text-white/90 max-w-2xl mx-auto">
            Mix of all three variants. Free delivery. Better value.
          </p>
        </div>
      </section>

      {/* Combos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className="bg-white rounded-sm overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.12)' }}
              >
                {/* Combo image */}
                <div className="relative h-80">
                  <img
                    src={`${combo.image}?auto=compress&cs=tinysrgb&w=800`}
                    alt={combo.name}
                    className="w-full h-full object-cover"
                  />
                  {combo.giftingBadge && (
                    <div className="absolute top-6 right-6 bg-terracotta text-white px-4 py-2 rounded-sm flex items-center gap-2">
                      <Gift className="w-5 h-5" />
                      <span className="font-space text-xs uppercase tracking-widest">
                        Gifting
                      </span>
                    </div>
                  )}
                </div>

                {/* Combo details */}
                <div className="p-8">
                  <h2 className="font-bebas text-6xl text-goofoo-ink mb-3 tracking-wide">
                    {combo.name}
                  </h2>
                  <p className="font-nunito text-lg text-mid-brown mb-6">
                    {combo.description}
                  </p>

                  {/* What's inside */}
                  <div className="bg-off-white-grey rounded-sm p-6 mb-6">
                    <p className="font-space text-xs uppercase tracking-widest text-goofoo-ink mb-4">
                      What's inside:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-nunito text-base text-mid-brown">Classic Chocolate</span>
                        <span className="font-bebas text-2xl text-goofoo-ink">{combo.mix.classic}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-nunito text-base text-mid-brown">Peanut Chocolate</span>
                        <span className="font-bebas text-2xl text-goofoo-ink">{combo.mix.peanut}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-nunito text-base text-mid-brown">Badam Chocolate</span>
                        <span className="font-bebas text-2xl text-goofoo-ink">{combo.mix.badam}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-bebas text-6xl text-goofoo-ink">₹{combo.price}</span>
                    <div>
                      <span className="font-nunito text-lg text-mid-brown line-through block">₹{combo.mrp}</span>
                      <span className="font-space text-xs uppercase tracking-widest text-terracotta">
                        Save ₹{combo.savings}
                      </span>
                    </div>
                  </div>

                  {/* Add to cart */}
                  <button
                    onClick={() => handleAddToCart(combo)}
                    className="w-full bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-xl px-8 py-6 rounded-sm transition-smooth flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-goofoo-ink noise-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-5xl text-dates-gold mb-12 text-center tracking-wide">
            WHY ORDER COMBOS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Check className="w-12 h-12 text-dates-gold mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Better Value</h3>
              <p className="font-nunito text-sm text-white/80">
                Save up to ₹336 vs buying individual bars
              </p>
            </div>
            <div className="text-center">
              <Check className="w-12 h-12 text-dates-gold mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Free Delivery</h3>
              <p className="font-nunito text-sm text-white/80">
                All combo orders ship free across India
              </p>
            </div>
            <div className="text-center">
              <Check className="w-12 h-12 text-dates-gold mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Try All Variants</h3>
              <p className="font-nunito text-sm text-white/80">
                Perfect mix of Classic, Peanut, and Badam
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CombosPage;