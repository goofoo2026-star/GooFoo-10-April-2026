export const products = [
  {
    id: 'classic-chocolate',
    name: 'Classic Chocolate',
    slug: 'classic-chocolate',
    variant: 'classic',
    color: '#1A8B7A',
    colorName: 'classic-teal',
    pricePerBar: 99,
    mrp: 99,
    image: 'https://images.unsplash.com/photo-1623660053975-cf75a8be0908',
    hoverImage: 'https://images.pexels.com/photos/4113305/pexels-photo-4113305.jpeg',
    description: 'No refined sugar. Sweetened only with dates.',
    ingredientCount: 4,
    ingredients: ['Cocoa mass', 'Dates', 'Whole milk powder', 'Cocoa butter'],
    nutritionPer100g: {
      energy: '520 kcal',
      protein: '6.2g',
      carbs: '54g',
      sugar: '42g',
      fat: '28g',
      fiber: '8g'
    },
    whatsNotIn: ['Refined sugar', 'Maltitol', 'PGPR', 'Palm oil', 'Artificial sweeteners', 'Preservatives'],
    shelfLife: '8 months',
    weight: '40g',
    available: true
  },
  {
    id: 'peanut-chocolate',
    name: 'Peanut Chocolate',
    slug: 'peanut-chocolate',
    variant: 'peanut',
    color: '#C84B0A',
    colorName: 'peanut-orange',
    pricePerBar: 120,
    mrp: 120,
    image: 'https://images.unsplash.com/photo-1638194645412-1d0b4c53ffed',
    hoverImage: 'https://images.pexels.com/photos/4113340/pexels-photo-4113340.jpeg',
    description: 'Crunchy roasted peanuts. Still dates-sweetened.',
    ingredientCount: 5,
    ingredients: ['Cocoa mass', 'Dates', 'Whole milk powder', 'Cocoa butter', 'Roasted peanuts'],
    nutritionPer100g: {
      energy: '560 kcal',
      protein: '10.4g',
      carbs: '48g',
      sugar: '38g',
      fat: '32g',
      fiber: '9g'
    },
    whatsNotIn: ['Refined sugar', 'Maltitol', 'PGPR', 'Palm oil', 'Artificial sweeteners', 'Preservatives'],
    shelfLife: '8 months',
    weight: '45g',
    available: true
  },
  {
    id: 'badam-chocolate',
    name: 'Badam Chocolate',
    slug: 'badam-chocolate',
    variant: 'badam',
    color: '#3D1A00',
    colorName: 'badam-brown',
    pricePerBar: 140,
    mrp: 140,
    image: 'https://images.pexels.com/photos/27672874/pexels-photo-27672874.jpeg',
    hoverImage: 'https://images.pexels.com/photos/27672872/pexels-photo-27672872.jpeg',
    description: 'Premium almonds and cashews. Dates-sweetened.',
    ingredientCount: 6,
    ingredients: ['Cocoa mass', 'Dates', 'Whole milk powder', 'Cocoa butter', 'Almonds', 'Cashews'],
    nutritionPer100g: {
      energy: '580 kcal',
      protein: '11.8g',
      carbs: '46g',
      sugar: '36g',
      fat: '35g',
      fiber: '10g'
    },
    whatsNotIn: ['Refined sugar', 'Maltitol', 'PGPR', 'Palm oil', 'Artificial sweeteners', 'Preservatives'],
    shelfLife: '8 months',
    weight: '45g',
    available: true
  }
];

export const combos = [
  {
    id: '7-bar-combo',
    name: '7-Bar Combo',
    slug: '7-bar-combo',
    price: 699,
    mrp: 819,
    savings: 120,
    bars: 7,
    description: 'Mix of all three variants',
    mix: {
      classic: 3,
      peanut: 2,
      badam: 2
    },
    image: 'https://images.pexels.com/photos/4113300/pexels-photo-4113300.jpeg',
    available: true
  },
  {
    id: '15-bar-combo',
    name: '15-Bar Combo',
    slug: '15-bar-combo',
    price: 1449,
    mrp: 1785,
    savings: 336,
    bars: 15,
    description: 'Perfect for gifting',
    mix: {
      classic: 6,
      peanut: 5,
      badam: 4
    },
    image: 'https://images.pexels.com/photos/4113303/pexels-photo-4113303.jpeg',
    giftingBadge: true,
    available: true
  }
];

export const reviews = [
  {
    id: 1,
    name: 'ARJUN MEHTA',
    rating: 5,
    comment: "Finally a chocolate bar I can read. 4 ingredients. That's it. My diabetic father can actually eat this.",
    verified: true
  },
  {
    id: 2,
    name: 'PRIYA KUMAR',
    rating: 5,
    comment: 'I compared the label to Cadbury. GOOFOO wins by miles. No PGPR. No palm oil. Just dates and cocoa.',
    verified: true
  },
  {
    id: 3,
    name: 'VIKRAM SINGH',
    rating: 5,
    comment: 'Ordered 15 bars for Diwali gifting. Everyone asked where I got it. The ingredient list is the real flex.',
    verified: true
  },
  {
    id: 4,
    name: 'ANANYA RAO',
    rating: 5,
    comment: 'No maltitol. No stevia. Just dates. This is what clean label actually means.',
    verified: true
  },
  {
    id: 5,
    name: 'RAHUL SHARMA',
    rating: 5,
    comment: 'I work in FMCG. I know what goes into mass-market chocolate. GOOFOO is the opposite. Respect.',
    verified: true
  },
  {
    id: 6,
    name: 'SNEHA PATEL',
    rating: 5,
    comment: 'Bought it for my kids. Read the label. Bought 15 more bars. This is the only chocolate in our house now.',
    verified: true
  }
];

export const brandStory = {
  founderQuote: '"15 years in FMCG. I saw exactly how labels are written to hide things. GOOFOO is the brand that writes them to show things."',
  founderName: 'Founder, GOOFOO',
  story: `GOOFOO was born in Chennai from a simple frustration: every chocolate bar in India hides something. Palm oil masked as "vegetable fat." PGPR as "emulsifier." Maltitol as "sugar-free."

After 15 years in FMCG, I knew exactly what those ingredients were and why they were there. Cost-cutting. Shelf-life extension. Label gymnastics.

GOOFOO is the opposite. If we can't print the full ingredient list in the largest font on the pack and be proud of it — we don't make it.

We started with chocolate. Sweetened only with dates. No refined sugar. No artificial sweeteners. No palm oil. No PGPR. Just cocoa and dates.

Next: protein bars and energy bars. Same standard. Same honesty.

The brand name says it all: Just Goo Food & Nothing to Hide.`,
  mission: "Build India's most honest food brand. One ingredient list at a time."
};

export const whyDates = {
  headline: 'WHY DATES AND NOT STEVIA?',
  intro: 'Dates are a whole food. Stevia is extracted and processed. Maltitol causes bloating. Erythritol is synthesized. Dates are just dates.',
  stats: [
    {
      number: '42',
      label: 'Glycemic Index',
      description: 'Lower than refined sugar (65)'
    },
    {
      number: '6,000',
      label: 'Years',
      description: 'Used as a natural sweetener'
    },
    {
      number: '100%',
      label: 'Fiber Intact',
      description: 'Unlike processed sweeteners'
    }
  ],
  conclusion: 'Dates. Not stevia. Not maltitol. Not erythritol. The actual fruit.'
};
