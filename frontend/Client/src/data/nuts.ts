import nuts from '../assets/images/nuts.jpg'

export interface nut {
  id: string;
  name: string;
  img: string;
  price: string;
  nDiscount: string;
  nIsStock: boolean;
}

export const nutsData: nut[] = [
  {
    id: "nut1",
    name: "Brazil",
    img: nuts,
    price: "950",
    nDiscount: "10%",
    nIsStock: true,
  },
  {
    id: "nut2",
    name: "Hazel",
    img: nuts,
    price: "880",
    nDiscount: "12%",
    nIsStock: true,
  },
  {
    id: "nut3",
    name: "Macadamia",
    img: nuts,
    price: "1350",
    nDiscount: "15%",
    nIsStock: false,
  },
  {
    id: "nut4",
    name: "Pecans",
    img: nuts,
    price: "1100",
    nDiscount: "8%",
    nIsStock: true,
  },
  {
    id: "nut5",
    name: "Pine",
    img: nuts,
    price: "1400",
    nDiscount: "10%",
    nIsStock: true,
  },
  {
    id: "nut6",
    name: "Walnuts",
    img: nuts,
    price: "1000",
    nDiscount: "20%",
    nIsStock: true,
  },
];
