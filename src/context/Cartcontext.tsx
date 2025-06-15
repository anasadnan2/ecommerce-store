import { createContext, useState, type ReactNode } from "react";
import type { Product } from "./ProductsContext";

type ItemCart = {
  item: Product;
  count: number;
};

type ProductContextType = {
  products: ItemCart[];
  addCart: (item: ItemCart) => void;
  removeCart: (item: ItemCart) => void;
};

const CartContext = createContext<ProductContextType>({
  products: [],
  addCart: () => {},
  removeCart: () => {},
});


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ItemCart[]>([]);

  const addCart = (item: ItemCart) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.item.id === item.item.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count += item.count;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeCart = (item: ItemCart) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.item.id === item.item.id
            ? { ...cartItem, count: cartItem.count - item.count }
            : cartItem
        )
        .filter((cartItem) => cartItem.count > 0)
    );
  };

  return (
    <CartContext.Provider value={{ products: cartItems, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
