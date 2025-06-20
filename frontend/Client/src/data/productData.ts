import productImg1 from "../assets/images/almond.png"

// subcategory definition (optional but good for TypeScript)
export interface Product {
  product_id: string;
  image: string;
  name: string;
  subcategory: string;
  price: string;
  isStock : boolean;
}

export const products: Product[] = [
  {
    product_id:'prod-1',
    image: productImg1,
    name: "Carmel Almonds",
    subcategory: "(Almond)",
    price: "300",
    isStock:true,
  },
  {
    product_id:'prod2',
    image: productImg1,
    name: "Nonpareil Almonds",
    subcategory: "(Almond)",
    price: "900",
    isStock:false,
  },
  {
    product_id:'prod-3',
    image: productImg1,
    name: "California Almonds",
    subcategory: "(Almond)",
    price: "700",
    isStock:false
  },
  {
    product_id:'prod-4',
    image: productImg1,
    name: "Mamra Almonds",
    subcategory: "(Almond)",
    price: "1200",
    isStock:true,
  },
  {
    product_id:'prod-5',
    image: productImg1,
    name: "Gurbandi Almonds",
    subcategory: "(Almond)",
    price: "1500",
    isStock:true,
  },
  {
    product_id:'prod-6',
    image: productImg1,
    name: "Sweet Almonds",
    subcategory: "(Almond)",
    price: "1500",
    isStock:false,
  },
  {
    product_id:'prod-7',
    image: productImg1,
    name: "Peerless Almonds",
    subcategory: "(Almond)",
    price: "1500",
    isStock:true,
  },
  {
    product_id:'prod-8',
    image: productImg1,
    name: "Italian Avocado",
    subcategory: "(Local shop)",
    price: "1400",
    isStock:true,
  }
];
