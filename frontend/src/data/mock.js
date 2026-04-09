export const products = [
  {
    id: 1,
    name: 'Classic Chocolate',
    description: 'Smooth and rich classic milk chocolate made with premium cocoa',
    variant: 'classic',
    pricePerBar: 99,
    image: 'https://images.unsplash.com/photo-1623660053975-cf75a8be0908',
    hoverImage: 'https://images.pexels.com/photos/4113305/pexels-photo-4113305.jpeg',
    bundles: [
      { size: 7, price: 693 },
      { size: 15, price: 1485 }
    ]
  },
  {
    id: 2,
    name: 'Peanuts Chocolate',
    description: 'Crunchy roasted peanuts combined with smooth milk chocolate',
    variant: 'peanuts',
    pricePerBar: 120,
    image: 'https://images.unsplash.com/photo-1638194645412-1d0b4c53ffed',
    hoverImage: 'https://images.pexels.com/photos/4113340/pexels-photo-4113340.jpeg',
    bundles: [
      { size: 7, price: 840 },
      { size: 15, price: 1800 }
    ]
  },
  {
    id: 3,
    name: 'Almond Chocolate',
    description: 'Premium almonds paired with velvety smooth chocolate',
    variant: 'almond',
    pricePerBar: 140,
    image: 'https://images.pexels.com/photos/27672874/pexels-photo-27672874.jpeg',
    hoverImage: 'https://images.pexels.com/photos/27672872/pexels-photo-27672872.jpeg',
    bundles: [
      { size: 7, price: 980 },
      { size: 15, price: 2100 }
    ]
  }
];

export const retailers = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg' },
  { name: 'Big Basket', logo: 'https://cdn.worldvectorlogo.com/logos/bigbasket.svg' },
  { name: 'DMart', logo: 'https://seeklogo.com/images/D/d-mart-logo-5F5F7F8C5E-seeklogo.com.png' },
  { name: 'Reliance Fresh', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Reliance_Fresh_Logo.svg/1200px-Reliance_Fresh_Logo.svg.png' },
  { name: 'More', logo: 'https://www.logo.wine/a/logo/More_(store)/More_(store)-Logo.wine.svg' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    comment: 'The best chocolate I\'ve ever tasted! Absolutely love the classic flavor.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: 2,
    name: 'Raj Kumar',
    comment: 'Almond chocolate is my favorite. Premium quality at an affordable price!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: 3,
    name: 'Anita Desai',
    comment: 'Peanuts chocolate has the perfect crunch. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

export const heroContent = {
  title: 'WORLD\'S CLEANEST CHOCOLATE',
  subtitle: 'Premium chocolate crafted with ethically sourced ingredients you can trust',
  ctaText: 'SHOP NOW',
  backgroundImage: 'https://images.pexels.com/photos/4113300/pexels-photo-4113300.jpeg'
};

export const missionContent = {
  title: 'CLEAN INGREDIENTS, PURE TASTE',
  description: 'At GOOFOO, we believe in transparency. Every bar is made with ethically sourced cocoa and the finest ingredients. No compromises, just pure chocolate perfection.',
  image: 'https://images.pexels.com/photos/4113303/pexels-photo-4113303.jpeg'
};
