import React from 'react';
import { products } from '../data/mock';
import ProductCard from './ProductCard';
import { useToast } from '../hooks/use-toast';

const ProductGrid = () => {
  const { toast } = useToast();

  const handleAddToCart = (product, bundle) => {
    // Mock cart functionality
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(
      item => item.productId === product.id && item.bundleSize === bundle.size
    );

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({
        productId: product.id,
        productName: product.name,
        bundleSize: bundle.size,
        price: bundle.price,
        quantity: 1,
        image: product.image
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    toast({
      title: "Added to Cart!",
      description: `${product.name} (${bundle.size} bars) added to your bag.`,
      duration: 3000,
    });
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            SHOP OUR WORLD'S CLEANEST CHOCOLATE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three delicious flavors, all made with ethically sourced ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
