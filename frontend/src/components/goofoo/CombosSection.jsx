import React from 'react';
import { combos } from '../../data/products';
import { ShoppingCart, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';

const CombosSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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
    <section className="py-24 bg-goofoo-ink noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-7xl text-dates-gold mb-4 tracking-wide">
            COMBO PACKS
          </h2>
          <p className="font-nunito text-lg text-white/90">
            Mix of all three variants. Free delivery on all orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-warm-cream rounded-sm p-8 transition-smooth hover:-translate-y-2 cursor-pointer"
              style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.12)' }}
              onClick={() => navigate('/combos')}
            >
              {/* Gifting badge */}
              {combo.giftingBadge && (
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-5 h-5 text-terracotta" />
                  <span className="font-space text-xs uppercase tracking-widest text-terracotta">
                    Perfect for Gifting
                  </span>
                </div>
              )}

              {/* Combo image */}
              <div className="mb-6 rounded-sm overflow-hidden">
                <img
                  src={`${combo.image}?auto=compress&cs=tinysrgb&w=600`}
                  alt={combo.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Combo info */}
              <h3 className="font-bebas text-5xl text-goofoo-ink mb-2 tracking-wide">
                {combo.name}
              </h3>
              <p className="font-nunito text-mid-brown mb-4">
                {combo.description}
              </p>

              {/* Mix breakdown */}
              <div className="bg-white rounded-sm p-4 mb-6">
                <p className="font-space text-xs uppercase tracking-widest text-goofoo-ink mb-3">
                  What's inside:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-nunito text-sm text-mid-brown">Classic Chocolate</span>
                    <span className="font-space text-sm font-bold text-goofoo-ink">{combo.mix.classic} bars</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-nunito text-sm text-mid-brown">Peanut Chocolate</span>
                    <span className="font-space text-sm font-bold text-goofoo-ink">{combo.mix.peanut} bars</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-nunito text-sm text-mid-brown">Badam Chocolate</span>
                    <span className="font-space text-sm font-bold text-goofoo-ink">{combo.mix.badam} bars</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-bebas text-5xl text-goofoo-ink">₹{combo.price}</span>
                <span className="font-nunito text-sm text-mid-brown line-through">₹{combo.mrp}</span>
                <span className="font-space text-xs uppercase tracking-widest text-terracotta">
                  Saves ₹{combo.savings}
                </span>
              </div>

              {/* Add to cart button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(combo);
                }}
                className="w-full bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-base px-6 py-4 rounded-sm transition-smooth flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-space text-sm uppercase tracking-widest text-white/70">
            Free delivery on all online orders
          </p>
        </div>
      </div>
    </section>
  );
};

export default CombosSection;