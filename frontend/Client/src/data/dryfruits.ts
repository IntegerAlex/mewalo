import img from '../assets/images/almond.png'

export interface dryfruit {
  id: string;
  name: string;
  img: string;
  price: string;
  dPrice: string;
  dDiscount: string;
  dIsStock: boolean;
}

export const dryfruitsData: dryfruit[] = [
  {
    id: "dryfruit1",
    name: "Almond",
    img: img,
    price: "Carmel",
    dPrice: "700",
    dDiscount: "10%",
    dIsStock: true,
  },
  {
    id: "dryfruit2",
    name: "Cashew",
    img: img,
    price: "W320",
    dPrice: "850",
    dDiscount: "15%",
    dIsStock: true,
  },
  {
    id: "dryfruit3",
    name: "Anjir",
    img:img,
    price: "Dried",
    dPrice: "950",
    dDiscount: "5%",
    dIsStock: false,
  },
  {
    id: "dryfruit4",
    name: "Kishmish",
    img: img,
    price: "Golden",
    dPrice: "400",
    dDiscount: "12%",
    dIsStock: true,
  },
  {
    id: "dryfruit5",
    name: "Walnuts",
    img: img,
    price: "Akhrot Giri",
    dPrice: "1000",
    dDiscount: "20%",
    dIsStock: true,
  },
  {
    id: "dryfruit6",
    name: "Pistachios",
    img: img,
    price: "Roasted",
    dPrice: "1200",
    dDiscount: "18%",
    dIsStock: false,
  },
  {
    id: "dryfruit7",
    name: "Elaichi",
    img: img,
    price: "Green",
    dPrice: "1600",
    dDiscount: "7%",
    dIsStock: true,
  },
  {
    id: "dryfruit8",
    name: "Dried Fruits",
    img:img,
    price: "Mixed Pack",
    dPrice: "950",
    dDiscount: "10%",
    dIsStock: true,
  },
  {
    id: "dryfruit9",
    name: "Mix Dryfruits",
    img: img,
    price: "Premium Mix",
    dPrice: "1300",
    dDiscount: "15%",
    dIsStock: true,
  },
];
