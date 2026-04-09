import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from './Buttons';
import { useToast } from '../../hooks/use-toast';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState({ size: 7, price: product.pricePerBar * 7 });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Calculate bundle prices
  const bundles = [
    { size: 7, price: product.pricePerBar * 7 },
    { size: 15, price: product.pricePerBar * 15 }
  ];

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartKey = `${product.id}-bundle-${selectedBundle.size}`;
    const existingItemIndex = cartItems.findIndex(item => item.productId === cartKey);

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({
        productId: cartKey,
        productName: `${product.name} (${selectedBundle.size} bars)`,
        price: selectedBundle.price,
        quantity: 1,
        image: product.image,
        color: product.color
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('storage'));

    toast({
      title: "Added to Cart!",
      description: `${product.name} (${selectedBundle.size} bars) added to your bag.`,
      duration: 2000,
    });
  };

  return (
    <div
      className="group cursor-pointer transition-smooth hover:-translate-y-2"
      style={{
        boxShadow: isHovered ? '0 8px 32px rgba(28,15,0,0.12)' : 'none'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowIngredients(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowIngredients(false);
      }}
      onClick={() => navigate(`/product/${product.slug}`)}
    >
      {/* Card with variant color */}
      <div
        className="relative overflow-hidden rounded-sm p-8 min-h-[550px] flex flex-col justify-between"
        style={{ backgroundColor: product.color }}
      >
        {/* Ingredient count badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm">
          <span className="font-space text-xs text-goofoo-ink font-bold uppercase tracking-wider">
            {product.ingredientCount} ingredients
          </span>
        </div>

        {/* Product image */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <img
            src={`${product.image}?auto=compress&cs=tinysrgb&w=400`}
            alt={product.name}
            className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Product info */}
        <div>
          <h3 className="font-bebas text-4xl text-dates-gold mb-2 tracking-wide">
            {product.name}
          </h3>
          <p className="font-nunito text-white/90 text-sm mb-4">
            {product.description}
          </p>

          {/* Bundle selection */}
          <div className="mb-4">
            <label className="font-space text-xs uppercase tracking-widest text-white/70 mb-2 block">
              Bundle Size:
            </label>
            <div className="flex gap-2">
              {bundles.map((bundle) => (
                <button
                  key={bundle.size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBundle(bundle);
                  }}
                  className={`flex-1 px-3 py-2 rounded-sm text-sm font-bebas transition-all duration-200 ${
                    selectedBundle.size === bundle.size
                      ? 'bg-dates-gold text-goofoo-ink shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {bundle.size} Bars
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-bebas text-3xl text-white">₹{selectedBundle.price}</span>
            <span className="font-space text-xs text-white/70 uppercase">(₹{product.pricePerBar}/bar)</span>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-dates-gold hover:bg-white text-goofoo-ink font-bebas uppercase tracking-widest text-base px-6 py-3 rounded-sm transition-smooth flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Ingredients list below card */}
      <div
        className={`mt-4 transition-all duration-300 ${showIngredients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <p className="font-space text-xs uppercase tracking-widest text-mid-brown mb-2">
          Full ingredient list:
        </p>
        <p className="font-space text-sm text-goofoo-ink">
          {product.ingredients.join(', ')}.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;