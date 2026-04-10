import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.productId === product.id);

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({
        productId: product.id,
        productName: product.name,
        price: product.pricePerBar,
        quantity: 1,
        image: product.image,
        color: product.color,
        variant: product.variant
      });}

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('storage'));

    // Trigger cart bounce animation
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('animate-cart-bounce');
      setTimeout(() => cartIcon.classList.remove('animate-cart-bounce'), 300);
    }

    toast({
      title: `${product.name} · ${product.variant}`,
      description: "Added to cart",
      duration: 2500,
    });
  };

  return (
    <div
      className="group cursor-pointer transition-card"
      style={{
        boxShadow: isHovered ? '0 16px 40px rgba(0,0,0,0.35)' : 'none',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.slug}`)}
    >
      {/* Card with exact variant color */}
      <div
        className="relative overflow-hidden rounded-[4px] p-8 min-h-[520px] flex flex-col"
        style={{ backgroundColor: product.color }}
      >
        {/* Ingredient count badge - top right */}
        <div 
          className="absolute top-4 right-4 px-3 py-1.5 rounded-[2px]" 
          style={{ background: '#1C0F00' }}
        >
          <span className="font-space text-[9px] uppercase tracking-[0.08em]" style={{ color: '#F2B800' }}>
            {product.ingredientCount} ingredients
          </span>
        </div>

        {/* Product name - gold Bebas Neue at top */}
        <h3 className="font-bebas text-5xl tracking-wide mb-4" style={{ color: '#F2B800' }}>
          {product.name}
        </h3>

        {/* Product image */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <img
            src={`${product.image}?auto=compress&cs=tinysrgb&w=400`}
            alt={product.name}
            className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Ingredient list on card */}
        <div className="mb-6">
          <p className="font-space text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {product.ingredients.join(', ')}.
          </p>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="font-bebas text-4xl" style={{ color: '#FFFFFF' }}>
            \u20b9{product.pricePerBar}
          </div>
          <div className="font-space text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
            per bar
          </div>
        </div>

        {/* Add to cart button - full width at bottom */}
        <button
          onClick={handleAddToCart}
          className="w-full font-bebas uppercase tracking-[0.1em] text-base px-6 py-3.5 rounded-[2px] transition-all duration-200 flex items-center justify-center gap-2"
          style={{
            background: '#F2B800',
            color: '#1C0F00'
          }}
        >
          <ShoppingCart className="w-5 h-5" />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
