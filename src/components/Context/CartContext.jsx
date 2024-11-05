import { createContext, useContext, useReducer } from "react";

// create context
const CartContext = createContext();

// action type
const initialState = {
  cartItems: [],
  wishListItems: [],
};

// type
const ADD_PRODUCET = "ADD_PRODUCET";
const ADD_WISHLIST = "ADD_WISHLIST";
const EMPTY_CART = "EMPTY_CART";

// reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCET:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case ADD_WISHLIST:
      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload],
      };
    case EMPTY_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// context provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useProduct = () => {
  const context = useContext(CartContext);
  return context;
};
