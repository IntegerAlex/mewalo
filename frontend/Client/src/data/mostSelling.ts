// data/mostSelling.ts
import productImg1 from "../assets/images/almond.png"

export interface Product {
  product_id: string;
  image: string;
  name: string;
  subcategory: string;
  price: string;
  isStock : boolean;
}

export const mostSellingData: Product[] = [
  {
    product_id: "most-prod-1",
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:true,
  },
  {
    product_id: "most-prod-2",
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:true,
  },
  {
    product_id: "most-prod-3",
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    price: "₹590", 
    isStock:true,
  },  
  { 
    product_id: "most-prod-4",  
    image: productImg1, 
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:false,
  },
  {
    product_id: "most-prod-5",
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:true,
  },
  {
    product_id: "most-prod-6",
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:true,
  },
  {
    product_id: "most-prod-7",
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:true,
  },
  {
    product_id: "most-prod-8",
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    price: "₹590",
    isStock:false,
  },
];
