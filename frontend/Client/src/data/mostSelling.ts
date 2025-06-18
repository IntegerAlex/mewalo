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
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-2",
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-3",
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "₹590",  
    basePrice: 590  
  },  
  { 
    product_id: "most-prod-4",  
    image: productImg1, 
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    weight: "250 gm.",
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-5",
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-6",
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-7",
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "₹590",
    basePrice: 590
  },
  {
    product_id: "most-prod-8",
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    weight: "250 gm.",
    price: "₹590",
    basePrice: 590
  },
];
