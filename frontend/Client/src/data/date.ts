import dates from '../assets/images/date.jpg'

export interface date {
  product_id: string;
  name: string;
  image: string;
  price: string;
  dateDiscount: string;
  dateIsStock: boolean;
}

export const datesData: date[] = [
  {
    product_id: "date1",
    name: "Medjool",
    image: dates,
    price: "600",
    dateDiscount: "15%",
    dateIsStock: true,
  },
  {
    product_id: "date2",
    name: "Piarom",
    image: dates,
    price: "750",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date3",
    name: "Amber Deglet Nyoor",
    image: dates,
    price: "580",
    dateDiscount: "12%",
    dateIsStock: true,
  },
  {
    product_id: "date4",
    name: "Mazafati",
    image:dates,
    price: "650",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date5",
    name: "Barhi",
    image:dates,
    price: "500",
    dateDiscount: "8%",
    dateIsStock: true,
  },
  {
    product_id: "date6",
    name: "Rabbi",
    image: dates,
    price: "560",
    dateDiscount: "9%",
    dateIsStock: true,
  },
  {
    product_id: "date7",
    name: "Thoory",
    image:dates,
    price: "520",
    dateDiscount: "6%",
    dateIsStock: false,
  },
  {
    product_id: "date8",
    name: "Sayer",
    image: dates,
    price: "480",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date9",
    name: "Dayri",
    image: dates,
    price: "590",
    dateDiscount: "11%",
    dateIsStock: true,
  },
  {
    product_id: "date10",
    name: "Halawy",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Halawy_Dates.jpg",
    price: "530",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date11",
    name: "Sukkary",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sukkary_dates.jpg",
    price: "620",
    dateDiscount: "13%",
    dateIsStock: true,
  },
  {
    product_id: "date12",
    name: "Khudri",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Khudri_Dates.jpg",
    price: "490",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date13",
    name: "Zahproduct_idi",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Zahproduct_idi_dates.jpg",
    price: "470",
    dateDiscount: "9%",
    dateIsStock: true,
  },
  {
    product_id: "date14",
    name: "Safavproduct_id",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Safavproduct_id_dates.jpg",
    price: "600",
    dateDiscount: "7%",
    dateIsStock: false,
  },
  {
    product_id: "date15",
    name: "Mebroom",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mabroom_Dates.jpg",
    price: "680",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    product_id: "date16",
    name: "Sufri",
    image: dates,
    price: "500",
    dateDiscount: "6%",
    dateIsStock: true,
  },
  {
    product_id: "date17",
    name: "Ajwa",
    image: dates,
    price: "800",
    dateDiscount: "15%",
    dateIsStock: true,
  }
];
