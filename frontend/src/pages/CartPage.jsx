import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadCart();
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
  }, []);

  const loadCart = () => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemsCount(totalItems);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('storage'));
  };

  const removeItem = (productId) => {
    const updatedItems = cartItems.filter(item => item.productId !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('storage'));
    toast({
      title: "Removed from cart",
      description: "Item removed successfully",
      duration: 2000,
    });
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    const orderMessage = `Hi! I want to place an order:\n\n${cartItems.map(item => `${item.productName} x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n')}\n\nTotal: ₹${getTotal()}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-warm-cream">
        <Header cartItemsCount={cartItemsCount} />
        <section className="py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingBag className="w-24 h-24 text-mid-brown/30 mx-auto mb-8" />
            <h1 className="font-bebas text-6xl text-goofoo-ink mb-4 tracking-wide">
              YOUR BAG IS EMPTY
            </h1>
            <p className="font-nunito text-lg text-mid-brown mb-8">
              Add some chocolate to your cart and start your clean eating journey.
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-base px-8 py-4 rounded-sm transition-smooth"
            >
              Shop Now
            </button>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header cartItemsCount={cartItemsCount} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bebas text-6xl md:text-7xl text-goofoo-ink mb-12 tracking-wide">
            YOUR BAG
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white rounded-sm p-6 flex items-center gap-6"
                  style={{ boxShadow: '0 4px 16px rgba(28,15,0,0.06)' }}
                >
                  {/* Product image */}
                  <div
                    className="w-24 h-24 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: item.color || '#F2B800' }}
                  >
                    <img
                      src={`${item.image}?auto=compress&cs=tinysrgb&w=200`}
                      alt={item.productName}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1">
                    <h3 className="font-bebas text-2xl text-goofoo-ink mb-1 tracking-wide">
                      {item.productName}
                    </h3>
                    <p className="font-space text-xs uppercase tracking-widest text-mid-brown mb-3">
                      ₹{item.price} per {item.isCombo ? 'combo' : 'bar'}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-8 h-8 bg-off-white-grey border border-mid-brown/20 rounded-sm font-bebas text-lg text-goofoo-ink hover:border-dates-gold transition-smooth"
                      >
                        <Minus className="w-4 h-4 mx-auto" />
                      </button>
                      <span className="font-bebas text-2xl text-goofoo-ink w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 bg-off-white-grey border border-mid-brown/20 rounded-sm font-bebas text-lg text-goofoo-ink hover:border-dates-gold transition-smooth"
                      >
                        <Plus className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Price and remove */}
                  <div className="text-right">
                    <div className="font-bebas text-3xl text-goofoo-ink mb-3">
                      ₹{item.price * item.quantity}
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-terracotta hover:text-red-600 transition-smooth"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-sm p-8 sticky top-24"
                style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}
              >
                <h2 className="font-bebas text-3xl text-goofoo-ink mb-6 tracking-wide">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b-2 border-mid-brown/10">
                  <div className="flex justify-between">
                    <span className="font-nunito text-base text-mid-brown">Subtotal</span>
                    <span className="font-bebas text-2xl text-goofoo-ink">₹{getTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-nunito text-base text-mid-brown">Shipping</span>
                    <span className="font-space text-xs uppercase tracking-widest text-classic-teal">
                      Free
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-8">
                  <span className="font-bebas text-2xl text-goofoo-ink tracking-wide">Total</span>
                  <span className="font-bebas text-4xl text-goofoo-ink">₹{getTotal()}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-xl px-8 py-6 rounded-sm transition-smooth mb-4"
                >
                  Checkout via WhatsApp
                </button>

                <p className="font-space text-xs uppercase tracking-widest text-mid-brown text-center">
                  Free delivery on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CartPage;