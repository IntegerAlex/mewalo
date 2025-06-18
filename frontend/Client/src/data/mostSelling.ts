// data/mostSelling.ts
import productImg1 from "../assets/images/almond.png"

export interface Product {
  product_id: string;
  image: string;
  name: string;
  subcategory: string;
  weight: string;
  price: string;
  basePrice: number; // Add this for consistent pricing
}

export const mostSellingData: Product[] = [
  {
    product_id: "most-prod-1",
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "17.29$",
    basePrice: 870
  },
  {
    product_id: "most-prod-2", // Changed to unique product_id
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "18.99$",
    basePrice: 950
  },
  {
    product_id: "most-prod-3", // Changed to unique product_id
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "19.49$",
    basePrice: 975
  },
  {
    product_id: "most-prod-4", // Changed to unique product_id
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    weight: "250 gm.",
    price: "22.79$",
    basePrice: 1140
  },
   {
    product_id: "most-prod-1",
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "17.29$",
    basePrice: 870
  },
  {
    product_id: "most-prod-2", // Changed to unique product_id
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "18.99$",
    basePrice: 950
  },
  {
    product_id: "most-prod-3", // Changed to unique product_id
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "19.49$",
    basePrice: 975
  },
  {
    product_id: "most-prod-4", // Changed to unique product_id
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    weight: "250 gm.",
    price: "22.79$",
    basePrice: 1140
  },
];