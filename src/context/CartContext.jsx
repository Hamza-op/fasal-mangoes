import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const loadCartItems = () => {
  try {
    const storedCart = localStorage.getItem('cart');
    if (!storedCart) return [];

    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    localStorage.removeItem('cart');
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Create unique ID combining product ID and variant ID for variant tracking
      const existingItemIndex = state.items.findIndex(item =>
        item.productId === action.payload.productId && item.variantId === action.payload.variantId
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (action.payload.quantity || 1)
        };
        return { ...state, items: updatedItems };
      } else {
        // New item, add to cart
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
        };
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item =>
          !(item.productId === action.payload.productId && item.variantId === action.payload.variantId)
        )
      };

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          (item.productId === action.payload.productId && item.variantId === action.payload.variantId)
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, undefined, () => ({
    items: loadCartItems()
  }));

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state.items));
    } catch {
      // Ignore storage failures; the in-memory cart should continue to work.
    }
  }, [state.items]);

  // Calculate total price
  const totalPrice = state.items.reduce(
    (total, item) => total + (parseFloat(item.price) * item.quantity),
    0
  );

  // Calculate total items
  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{
      cart: state.items,
      totalPrice,
      totalItems,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
      removeItem: (productId, variantId) => dispatch({
        type: 'REMOVE_ITEM',
        payload: { productId, variantId }
      }),
      updateQuantity: (productId, variantId, quantity) => dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { productId, variantId, quantity }
      }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' })
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
