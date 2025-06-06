import productImg1 from "../assets/images/almond.png"

// Type definition (optional but good for TypeScript)
export interface Product {
  id:string;
  img: string;
  name: string;
  type: string;
  weight: string;
  price: string;
}

export const products: Product[] = [
  {
    id:'prod-1',
    img: productImg1,
    name: "Carmel Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "17.29$"
  },
  {
    id:'prod-2',
    img: productImg1,
    name: "Nonpareil Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "18.99$"
  },
  {
    id:'prod-3',
    img: productImg1,
    name: "California Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "19.49$"
  },
  {
    id:'prod-4',
    img: productImg1,
    name: "Mamra Almonds",
    type: "(Almond)",
    weight: "250 gm.",
    price: "22.79$"
  },
  {
    id:'prod-5',
    img: productImg1,
    name: "Gurbandi Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "20.99$"
  },
  {
    id:'prod-6',
    img: productImg1,
    name: "Sweet Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "15.49$"
  },
  {
    id:'prod-7',
    img: productImg1,
    name: "Peerless Almonds",
    type: "(Almond)",
    weight: "500 gm.",
    price: "16.99$"
  },
  {
    id:'prod-8',
    img: productImg1,
    name: "Italian Avocado",
    type: "(Local shop)",
    weight: "500 gm.",
    price: "12.29$"
  }
];
