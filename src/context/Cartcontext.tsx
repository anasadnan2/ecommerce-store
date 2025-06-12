// import { createContext, useState } from "react";
// import type { Product } from "./ProductsContext";
// import type { ReactNode } from "react";

// type CartItem = Product & { quantityInCart: number };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: number) => void;
//   clearCart: () => void;
// };

// export const CartContext = createContext<CartContextType>({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
//   clearCart: () => {},
// });

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (exists) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantityInCart: item.quantityInCart + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantityInCart: 1 }];
//     });
//   };

//   const removeFromCart = (productId: number) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== productId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
