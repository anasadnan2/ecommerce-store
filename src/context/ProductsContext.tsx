// ProductContext.tsx
import { createContext } from "react";
import type { ReactNode } from "react";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpeg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  star: number;
  quantity: number;
  colors: string[];
};

type ProductContextType = {
  products: Product[];
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: 120,
      quantity: 10,
      colors: ["RED", "BLUE", "WHITE"],
      image: photo1,
      description:
        "The modern Apple Watch with advanced features and a stylish design.",
      star: 4,
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max",
      price: 180,
      quantity: 5,
      colors: ["BLACK", "RED"],
      image: photo2,
      description:
        "The latest iPhone with cutting-edge technology and a professional camera.",
      star: 5,
    },
    {
      id: 3,
      name: "iPad Air M3",
      price: 250,
      quantity: 8,
      colors: ["RED", "BLUE", "WHITE"],
      image: photo3,
      description:
        "The new iPad Air with a super-fast M3 chip and unparalleled performance.",
      star: 3,
    },
    {
      id: 4,
      name: "iPhone 11",
      price: 499,
      quantity: 12,
      colors: ["GOLD", "BLACK"],
      image: photo4,
      description: "iPhone 11, an excellent choice at a good price.",
      star: 4,
    },
    {
      id: 5,
      name: "Smart Watch Classic",
      price: 120,
      quantity: 10,
      colors: ["RED", "BLUE", "WHITE"],
      image: photo5,
      description:
        "A smart watch with a classic design and essential features.",
      star: 5,
    },
    {
      id: 6,
      name: "iPhone 12",
      price: 300,
      quantity: 6,
      colors: ["GOLD", "BLACK"],
      image: photo6,
      description: "iPhone 12, powerful performance and a distinctive design.",
      star: 3,
    },
    {
      id: 7,
      name: "AirPods Pro",
      price: 160,
      quantity: 9,
      colors: ["BLACK", "WHITE"],
      image: photo7,
      description:
        "AirPods Pro headphones, clear sound and effective noise cancellation.",
      star: 2,
    },
    {
      id: 8,
      name: "iPhone XS",
      price: 500,
      quantity: 6,
      colors: ["GOLD", "BLACK"],
      image: photo8,
      description: "iPhone XS, a reliable device with an excellent camera.",
      star: 4,
    },
    {
      id: 9,
      name: "Fitness Tracker Watch",
      price: 90,
      quantity: 15,
      colors: ["WHITE", "BLACK"],
      image: photo9,
      description:
        "A fitness tracker watch, ideal for monitoring daily activity.",
      star: 4,
    },
    {
      id: 10,
      name: "Budget Smartphone",
      price: 110,
      quantity: 11,
      colors: ["BLACK", "RED"],
      image: photo10,
      description:
        "An economical smartphone with good performance for daily tasks.",
      star: 4,
    },
  ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
