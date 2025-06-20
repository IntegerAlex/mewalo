import productImg1 from "../assets/images/almond.png"

// subcategory definition (optional but good for TypeScript)
export interface Product {
  product_id:string;
  image: string;
  name: string;
  subcategory: string;
  weight: string;
  price: string;
  isStock:Boolean;
}

export const products: Product[] = [
  {
    product_id:'prod-1',
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "300",
    isStock:true,
  },
  {
    product_id:'prod2',
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "900",
    isStock:false,
  },
  {
    product_id:'prod-3',
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "700",
    isStock:false
  },
  {
    product_id:'prod-4',
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    weight: "250 gm.",
    price: "1200",
    isStock:true,
  },
  {
    product_id:'prod-5',
    image: productImg1,
    name: "Gurbandi Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "1500",
    isStock:true,
  },
  {
    product_id:'prod-6',
    image: productImg1,
    name: "Sweet Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "1500",
    isStock:false,
  },
  {
    product_id:'prod-7',
    image: productImg1,
    name: "Peerless Almonds",
    subcategory: "(Almond)",
    weight: "500 gm.",
    price: "1500",
    isStock:true,
  },
  {
    product_id:'prod-8',
    image: productImg1,
    name: "Italian Avocado",
    subcategory: "(Local shop)",
    weight: "500 gm.",
    price: "1400",
    isStock:true,
  }
];
