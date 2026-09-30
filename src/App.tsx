import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { ChefPicksSection } from './components/ChefPicksSection';
import { FeaturedDishSection } from './components/FeaturedDishSection';
import { WhyWeSection } from './components/WhyWeSection';
import { WhyUsGridSection } from './components/WhyUsGridSection';
import { NutritionSection } from './components/NutritionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { NutritionModal } from './components/NutritionModal';
import { DishDetailModal } from './components/DishDetailModal';

import { categories, signatureDishes } from './data/restaurantData';
import { CartItem, Dish } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Cart operations
  const handleAddToCart = (dish: Dish) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems(prev => prev.filter(item => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleScrollToMenu = () => {
    const el = document.getElementById('chef-picks');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#1C2621] font-sans antialiased selection:bg-[#3E5C49] selection:text-white">
      
      {/* Top Notification Announcement */}
      <AnnouncementBar />

      {/* Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Components extracted directly from the reference image */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onExploreMenu={handleScrollToMenu} />

        {/* 2. Explore by Category Section ("What we're cooking") */}
        <CategorySection
          categories={categories}
          onSelectCategory={(catId) => {
            const el = document.getElementById('chef-picks');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Chef's Picks Section ("Signature dishes") */}
        <ChefPicksSection
          dishes={signatureDishes}
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* 4. Featured Section ("Most Favourite") */}
        <FeaturedDishSection
          onOrderNow={(dish) => handleAddToCart(dish)}
        />

        {/* 5. Why We Intro Statement */}
        <WhyWeSection />

        {/* 6. Why Us Feature Grid (4 Feature Cards) */}
        <WhyUsGridSection />

        {/* 7. Nutrition Section ("Eat with full transparency.") */}
        <NutritionSection
          onOpenNutritionGuide={() => setIsNutritionOpen(true)}
        />

        {/* 8. Guest Stories ("What people say") */}
        <TestimonialsSection />

        {/* 9. Call to Action Banner ("Reserve your table or order for home.") */}
        <CtaBanner
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenOrder={() => setIsCartOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays / Drawers / Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <NutritionModal
        isOpen={isNutritionOpen}
        onClose={() => setIsNutritionOpen(false)}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
