import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/goofoo/Header';
import Footer from '../components/goofoo/Footer';
import WhatsAppButton from '../components/goofoo/WhatsAppButton';
import { products } from '../data/products';
import { ShoppingCart, Check, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product);
    }
  }, [product]);

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

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-6xl text-goofoo-ink mb-4">Product not found</h1>
          <button
            onClick={() => navigate('/shop')}
            className="font-bebas uppercase tracking-widest text-base bg-dates-gold text-goofoo-ink px-8 py-3 rounded-sm transition-smooth hover:bg-terracotta hover:text-white"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.productId === product.id);

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        productId: product.id,
        productName: product.name,
        price: product.pricePerBar,
        quantity: quantity,
        image: product.image,
        color: product.color
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('storage'));

    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your bag.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header cartItemsCount={cartItemsCount} />

      {/* Product hero with variant color tint */}
      <section
        className="py-16 transition-colors duration-300"
        style={{ backgroundColor: `${selectedVariant?.color}10` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product image */}
            <div>
              <div className="bg-white rounded-sm p-12 mb-6" style={{ boxShadow: '0 8px 32px rgba(28,15,0,0.08)' }}>
                <img
                  src={`${product.image}?auto=compress&cs=tinysrgb&w=800`}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>

              {/* Variant switcher */}
              <div className="bg-white rounded-sm p-6" style={{ boxShadow: '0 4px 16px rgba(28,15,0,0.06)' }}>
                <p className="font-space text-xs uppercase tracking-widest text-mid-brown mb-4">
                  Try other variants:
                </p>
                <div className="flex gap-3">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedVariant(p);
                        navigate(`/product/${p.slug}`);
                      }}
                      className={`flex-1 p-3 rounded-sm transition-smooth ${
                        selectedVariant?.id === p.id
                          ? 'ring-2 ring-offset-2'
                          : 'hover:ring-2 hover:ring-offset-2'
                      }`}
                      style={{
                        backgroundColor: p.color,
                        ringColor: p.color
                      }}
                    >
                      <span className="font-space text-xs text-white uppercase">
                        {p.variant}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Product info */}
            <div>
              {/* Ingredient count badge */}
              <div className="inline-block bg-dates-gold px-4 py-2 rounded-sm mb-4">
                <span className="font-space text-xs text-goofoo-ink font-bold uppercase tracking-wider">
                  {product.ingredientCount} ingredients only
                </span>
              </div>

              {/* Product name */}
              <h1 className="font-bebas text-7xl text-goofoo-ink mb-4 tracking-wide">
                {product.name}
              </h1>

              {/* Description */}
              <p className="font-nunito text-xl text-mid-brown mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-bebas text-6xl text-goofoo-ink">₹{product.mrp}</span>
                <span className="font-space text-sm text-mid-brown uppercase">per bar / {product.weight}</span>
              </div>

              {/* Quantity selector */}
              <div className="mb-8">
                <label className="font-space text-xs uppercase tracking-widest text-mid-brown mb-3 block">
                  Quantity:
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-white border-2 border-mid-brown/20 rounded-sm font-bebas text-2xl text-goofoo-ink hover:border-dates-gold transition-smooth"
                  >
                    -
                  </button>
                  <span className="font-bebas text-3xl text-goofoo-ink w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-white border-2 border-mid-brown/20 rounded-sm font-bebas text-2xl text-goofoo-ink hover:border-dates-gold transition-smooth"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-dates-gold hover:bg-terracotta hover:text-white text-goofoo-ink font-bebas uppercase tracking-widest text-xl px-8 py-6 rounded-sm transition-smooth flex items-center justify-center gap-3 mb-6"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>

              {/* Delivery info */}
              <div className="bg-white rounded-sm p-4">
                <p className="font-space text-xs uppercase tracking-widest text-mid-brown">
                  Free delivery on combos · Ships within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product truth section */}
      <section className="py-24 bg-goofoo-ink noise-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full ingredient list */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl text-dates-gold mb-8 tracking-wide">
              FULL INGREDIENT LIST
            </h2>
            <div className="space-y-4 mb-8">
              {product.ingredients.map((ingredient, index) => (
                <p key={index} className="font-space text-2xl md:text-3xl text-white">
                  {ingredient}
                </p>
              ))}
            </div>
            <p className="font-nunito text-lg text-white/80">
              That's the whole list. Nothing to add because nothing belongs there.
            </p>
          </div>

          {/* What's NOT in this bar */}
          <div className="bg-white rounded-sm p-12 mb-12">
            <h3 className="font-bebas text-4xl text-goofoo-ink mb-8 text-center tracking-wide">
              WHAT'S NOT IN THIS BAR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.whatsNotIn.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-terracotta flex-shrink-0" />
                  <span className="font-nunito text-base text-goofoo-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition facts */}
          <div className="bg-off-white-grey rounded-sm p-12">
            <h3 className="font-bebas text-4xl text-goofoo-ink mb-8 text-center tracking-wide">
              NUTRITION FACTS (PER 100G)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(product.nutritionPer100g).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-bebas text-4xl text-goofoo-ink mb-1">{value}</div>
                  <div className="font-space text-xs uppercase tracking-widest text-mid-brown">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;