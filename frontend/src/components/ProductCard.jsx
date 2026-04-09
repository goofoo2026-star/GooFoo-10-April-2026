import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(product.bundles[0]);

  return (
    <Card
      className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-yellow-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
          <img
            src={`${isHovered ? product.hoverImage : product.image}?auto=compress&cs=tinysrgb&w=600`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

          {/* Bundle Selection */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-gray-700 mb-2 block">Bundle Size:</label>
            <div className="flex gap-2">
              {product.bundles.map((bundle) => (
                <button
                  key={bundle.size}
                  onClick={() => setSelectedBundle(bundle)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    selectedBundle.size === bundle.size
                      ? 'bg-yellow-400 text-black shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {bundle.size} Bars
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900">₹{selectedBundle.price}</span>
              <span className="text-sm text-gray-500">
                (₹{product.pricePerBar}/bar)
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={() => onAddToCart(product, selectedBundle)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
            ADD TO BAG
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
