import image1 from '../assets/images/almond.png'

export interface dryfruit {
  product_id: string;
  name: string;
  image: string;
  price: string;
  dPrice: string;
  dDiscount: string;
  dIsStock: boolean;
}

export const dryfruitsData: dryfruit[] = [
  {
    product_id: "dryfruit1",
    name: "Almond",
    image: image1,
    price: "Carmel",
    dPrice: "700",
    dDiscount: "10%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit2",
    name: "Cashew",
    image: image1,
    price: "W320",
    dPrice: "850",
    dDiscount: "15%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit3",
    name: "Anjir",
    image:image1,
    price: "Dried",
    dPrice: "950",
    dDiscount: "5%",
    dIsStock: false,
  },
  {
    product_id: "dryfruit4",
    name: "Kishmish",
    image: image1,
    price: "Golden",
    dPrice: "400",
    dDiscount: "12%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit5",
    name: "Walnuts",
    image: image1,
    price: "Akhrot Giri",
    dPrice: "1000",
    dDiscount: "20%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit6",
    name: "Pistachios",
    image: image1,
    price: "Roasted",
    dPrice: "1200",
    dDiscount: "18%",
    dIsStock: false,
  },
  {
    product_id: "dryfruit7",
    name: "Elaichi",
    image: image1,
    price: "Green",
    dPrice: "1600",
    dDiscount: "7%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit8",
    name: "Dried Fruits",
    image:image1,
    price: "Mixed Pack",
    dPrice: "950",
    dDiscount: "10%",
    dIsStock: true,
  },
  {
    product_id: "dryfruit9",
    name: "Mix Dryfruits",
    image: image1,
    price: "Premium Mix",
    dPrice: "1300",
    dDiscount: "15%",
    dIsStock: true,
  },
];
