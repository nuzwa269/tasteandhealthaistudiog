import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 2.50 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F5F0] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E3E1D7] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3E5C49]" />
              <h3 className="font-serif text-xl font-medium text-[#1C2621]">Your Order</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#4E5C54] hover:bg-[#EFECE3] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl text-[#1C2621]">Order Confirmed!</h4>
                <p className="text-sm text-[#4E5C49]">
                  Thank you! Your fresh Nordic bowls are being prepared. Estimated arrival in 25–35 minutes.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#3E5C49] text-white rounded-lg text-sm font-medium"
                >
                  Done
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4 text-[#5E6D62]">
                <ShoppingBag className="w-12 h-12 stroke-1 mx-auto text-[#A5B2A9]" />
                <p className="text-base font-medium">Your basket is currently empty.</p>
                <p className="text-xs text-[#627267]">
                  Explore our signature dishes or menu categories to add items.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.dish.id} 
                    className="bg-white p-4 rounded-xl border border-[#E0DCD0] flex items-center gap-4 shadow-2xs"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-[#1C2621] truncate">{item.dish.title}</h4>
                      <p className="text-xs text-[#3E5C49] font-semibold mt-0.5">
                        £{item.dish.price.toFixed(2)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="inline-flex items-center border border-[#D8D4C7] rounded-md bg-[#F6F5F0]">
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, -1)}
                            className="p-1 hover:bg-[#E2DFD4] text-[#1C2621] transition-colors rounded-l-md"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-[#1C2621]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, 1)}
                            className="p-1 hover:bg-[#E2DFD4] text-[#1C2621] transition-colors rounded-r-md"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="text-red-600/70 hover:text-red-700 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E3E1D7] space-y-4">
              <div className="space-y-2 text-sm text-[#4E5C54]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco-Delivery</span>
                  <span>£{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-serif text-lg font-bold text-[#1C2621] pt-2 border-t border-[#EFECE3]">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCheckingOut ? 'Processing Order...' : `Checkout (£${total.toFixed(2)})`}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
