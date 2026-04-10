import React from 'react';
import { combos } from '../../data/products';
import { ShoppingCart, Check } from 'lucide-react';
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
      title: `${combo.name} added to cart`,
      description: `You save ₹${combo.savings}`,
      duration: 2500,
    });
  };

  return (
    <section className="py-24 noise-overlay" style={{ background: '#1C0F00' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas tracking-wide mb-4" style={{ 
            fontSize: 'clamp(44px, 7vw, 80px)',
            color: '#F2B800'
          }}>
            COMBO PACKS
          </h2>
          <p className="font-nunito text-lg leading-[1.85]" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Mix of all three variants. Free delivery on all orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {combos.map((combo, index) => (
            <div
              key={combo.id}
              className="rounded-[4px] p-8 transition-card hover:-translate-y-2 cursor-pointer animate-fade-up"
              style={{ 
                background: '#FFF8EE',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transitionDelay: `${index * 0.1}s`
              }}
              onClick={() => navigate('/combos')}
            >
              {/* Retail calculation */}
              <div className="mb-4">
                <p className="font-space text-[10px] uppercase tracking-wider" style={{ color: '#8B7355' }}>
                  {combo.bars === 7 ? '3×Classic + 2×Peanut + 2×Badam' : '6×Classic + 5×Peanut + 4×Badam'}
                </p>
                <p className="font-nunito text-sm" style={{ color: '#8B7355', textDecoration: 'line-through' }}>
                  ₹{combo.mrp} at retail
                </p>
              </div>

              {/* Combo price */}
              <div className="mb-6">
                <div className="font-bebas text-6xl mb-2" style={{ color: '#F2B800' }}>
                  ₹{combo.price}
                </div>
                <div 
                  className="inline-block px-3 py-1 rounded-[2px]" 
                  style={{ background: '#C04A1A' }}
                >
                  <span className="font-space text-[10px] uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
                    YOU SAVE ₹{combo.savings}
                  </span>
                </div>
              </div>

              {/* Tick list */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#1A8B7A' }} />
                  <span className="font-nunito text-sm" style={{ color: '#1C0F00' }}>Free delivery included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#1A8B7A' }} />
                  <span className="font-nunito text-sm" style={{ color: '#1C0F00' }}>Mix all 3 variants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#1A8B7A' }} />
                  <span className="font-nunito text-sm" style={{ color: '#1C0F00' }}>
                    {combo.bars === 7 ? 'Best for trying all flavours' : 'Perfect for gifting'}
                  </span>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(combo);
                }}
                className="w-full font-bebas uppercase tracking-[0.1em] text-base px-6 py-4 rounded-[2px] transition-smooth flex items-center justify-center gap-2"
                style={{
                  background: '#F2B800',
                  color: '#1C0F00'
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up">
          <p className="font-space text-sm uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Free delivery on all online orders
          </p>
        </div>
      </div>
    </section>
  );
};

export default CombosSection;