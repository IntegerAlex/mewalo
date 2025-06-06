// data/mostSelling.ts
import productImg1 from "../assets/images/almond.png"

export interface Product {
  id: string;
  img: string;
  name: string;
  type: string;
  weight: string;
  price: string;
  basePrice: number; // Add this for consistent pricing
}

export const mostSellingData: Product[] = [
  {
    id: "most-prod-1",
    img: productImg1,
    name: "Carmel Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "17.29$",
    basePrice: 870
  },
  {
    id: "most-prod-2", // Changed to unique ID
    img: productImg1,
    name: "Nonpareil Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "18.99$",
    basePrice: 950
  },
  {
    id: "most-prod-3", // Changed to unique ID
    img: productImg1,
    name: "California Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "19.49$",
    basePrice: 975
  },
  {
    id: "most-prod-4", // Changed to unique ID
    img: productImg1,
    name: "Mamra Almonds",
    type: "(Almond)",
    weight: "250 gm.",
    price: "22.79$",
    basePrice: 1140
  },
];