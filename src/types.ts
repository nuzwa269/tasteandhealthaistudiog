export interface Dish {
  id: string;
  title: string;
  price: number;
  tags: string[];
  image: string;
  description: string;
  calories: number;
  protein: string;
  fibre: string;
  carbs: string;
  fats: string;
  allergens: string[];
  category: string;
  isSignature?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}
