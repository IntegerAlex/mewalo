import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  img: string;
  type: string;
  quantity: number;
  price: number;
  selectedQuantity: number;
  totalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      updateCartCount(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateCartCount = (currentCart: CartItem[]) => {
    setCartCount(currentCart.reduce((sum, item) => sum + item.quantity, 0));
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        const newCart = prevCart.map((cartItem) =>
          cartItem.id === item.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: cartItem.price * cartItem.selectedQuantity * (cartItem.quantity + 1)
          } : cartItem
        );
        updateCartCount(newCart);
        return newCart;
      } else {
        const newCart = [...prevCart, item];
        updateCartCount(newCart);
        return newCart;
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      updateCartCount(newCart);
      return newCart;
    });
  };

  const updateCartItem = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) =>
        cartItem.id === id ? {
          ...cartItem,
          quantity: quantity,
          totalPrice: cartItem.price * cartItem.selectedQuantity * quantity
        } : cartItem
      );
      updateCartCount(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};