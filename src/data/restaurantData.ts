import { Category, Dish, Testimonial } from '../types';

export const categories: Category[] = [
  {
    id: 'fermented',
    title: 'Fermented',
    badge: 'GUT FRIENDLY',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    description: 'Probiotic-rich ferments, kimchi, kombucha glazes, and cultured plant creams.'
  },
  {
    id: 'hydrated',
    title: 'Hydrated',
    badge: 'FRESH PICKS',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    description: 'Crisp spring herbs, botanical infusions, and mineral-packed greens in pure mountain spring water.'
  },
  {
    id: 'roasted',
    title: 'Roasted',
    badge: 'SLOW COOKED',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    description: 'Heirloom root vegetables roasted over alderwood embers with toasted ancient grains.'
  },
  {
    id: 'wild',
    title: 'Wild',
    badge: 'OCEAN & FIELD',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    description: 'Sustainably wild-caught Nordic fish, kelp oils, and sea botanicals.'
  }
];

export const signatureDishes: Dish[] = [
  {
    id: 'nordic-tied-bowl',
    title: 'Nordic Tied bowl',
    price: 12.50,
    tags: ['Vegan'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    description: 'Smoked fish, kelp, dill and rye crumbs with a lemon verbena dressing.',
    calories: 420,
    protein: '22g',
    fibre: '11g',
    carbs: '38g',
    fats: '14g',
    allergens: ['Gluten', 'Sesame'],
    category: 'bowls',
    isSignature: true
  },
  {
    id: 'nordic-tide-bowl',
    title: 'Nordic Tide Bowl',
    price: 18.95,
    tags: ['pescatarian', 'high-protein', 'gluten-free-option'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    description: 'Smoked fish, kelp, dill and rye crumbs with a lemon verbena dressing.',
    calories: 510,
    protein: '34g',
    fibre: '9g',
    carbs: '28g',
    fats: '18g',
    allergens: ['Fish', 'Rye'],
    category: 'bowls',
    isSignature: true
  },
  {
    id: 'golden-root-roast',
    title: 'Golden Root Roast',
    price: 16.50,
    tags: ['vegan', 'gluten-free', 'gut-friendly'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    description: 'Turmeric-glazed heritage carrots, toasted grains, hazelnuts and cultured cashew cream.',
    calories: 440,
    protein: '16g',
    fibre: '14g',
    carbs: '42g',
    fats: '16g',
    allergens: ['Tree Nuts (Hazelnuts, Cashews)'],
    category: 'roasted',
    isSignature: true
  }
];

export const featuredDish: Dish = {
  id: 'smoked-fish-favourite',
  title: 'Smoked Fish, Kelp & Rye Harvest Bowl',
  price: 17.50,
  tags: ['pescatarian', 'gut-friendly', 'high-fibre'],
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200',
  description: 'Every dish at Taste & Health is built around whole ingredients, transparent nutrition, and bold, Nordic-inspired flavor.',
  calories: 460,
  protein: '31g',
  fibre: '13g',
  carbs: '34g',
  fats: '15g',
  allergens: ['Fish', 'Rye'],
  category: 'featured',
  isFeatured: true
};

export const whyUsFeatures = [
  {
    id: 'sourcing',
    icon: 'leaf',
    title: 'Seasonal Sourcing',
    description: 'We partner with regional farms so our produce arrives within 48 hours of harvest.'
  },
  {
    id: 'nutrition',
    icon: 'utensils',
    title: 'Transparent Nutrition',
    description: 'Every dish shows full macros, allergens and sourcing notes before you order.'
  },
  {
    id: 'balance',
    icon: 'heart',
    title: 'Balanced by Design',
    description: 'Our chefs build plates with protein, fibre, healthy fats and complex carbs in harmony.'
  },
  {
    id: 'craft',
    icon: 'chef-hat',
    title: 'Crafted In-House',
    description: 'From ferments to sourdough, we make the staples ourselves so we control quality.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: '"The best kind of healthy — nothing feels like a compromise."',
    author: 'Elena R.',
    role: 'Regular guest',
    rating: 5
  },
  {
    id: '2',
    quote: '"I can finally see exactly what I\'m eating without sacrificing flavour."',
    author: 'Marcus T.',
    role: 'Nutrition coach',
    rating: 5
  },
  {
    id: '3',
    quote: '"Beautiful space, warm service, and food that genuinely restores you."',
    author: 'Sofia L.',
    role: 'Food writer',
    rating: 5
  }
];
