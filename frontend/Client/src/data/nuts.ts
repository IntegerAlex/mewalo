import nuts from '../assets/images/nuts.jpg'

export interface nut {
  product_id: string;
  name: string;
  image: string;
  price: string;
  nDiscount: string;
  nIsStock: boolean;
}

export const nutsData: nut[] = [
  {
    product_id: "nut1",
    name: "Brazil",
    image: nuts,
    price: "950",
    nDiscount: "10%",
    nIsStock: true,
  },
  {
    product_id: "nut2",
    name: "Hazel",
    image: nuts,
    price: "880",
    nDiscount: "12%",
    nIsStock: true,
  },
  {
    product_id: "nut3",
    name: "Macadamia",
    image: nuts,
    price: "1350",
    nDiscount: "15%",
    nIsStock: false,
  },
  {
    product_id: "nut4",
    name: "Pecans",
    image: nuts,
    price: "1100",
    nDiscount: "8%",
    nIsStock: true,
  },
  {
    product_id: "nut5",
    name: "Pine",
    image: nuts,
    price: "1400",
    nDiscount: "10%",
    nIsStock: true,
  },
  {
    product_id: "nut6",
    name: "Walnuts",
    image: nuts,
    price: "1000",
    nDiscount: "20%",
    nIsStock: true,
  },
];
