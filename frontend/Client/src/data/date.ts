import dates from '../assets/images/date.jpg'

export interface date {
  id: string;
  name: string;
  img: string;
  price: string;
  dateDiscount: string;
  dateIsStock: boolean;
}

export const datesData: date[] = [
  {
    id: "date1",
    name: "Medjool",
    img: dates,
    price: "600",
    dateDiscount: "15%",
    dateIsStock: true,
  },
  {
    id: "date2",
    name: "Piarom",
    img: dates,
    price: "750",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date3",
    name: "Amber Deglet Nyoor",
    img: dates,
    price: "580",
    dateDiscount: "12%",
    dateIsStock: true,
  },
  {
    id: "date4",
    name: "Mazafati",
    img:dates,
    price: "650",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date5",
    name: "Barhi",
    img:dates,
    price: "500",
    dateDiscount: "8%",
    dateIsStock: true,
  },
  {
    id: "date6",
    name: "Rabbi",
    img: dates,
    price: "560",
    dateDiscount: "9%",
    dateIsStock: true,
  },
  {
    id: "date7",
    name: "Thoory",
    img:dates,
    price: "520",
    dateDiscount: "6%",
    dateIsStock: false,
  },
  {
    id: "date8",
    name: "Sayer",
    img: dates,
    price: "480",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date9",
    name: "Dayri",
    img: dates,
    price: "590",
    dateDiscount: "11%",
    dateIsStock: true,
  },
  {
    id: "date10",
    name: "Halawy",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Halawy_Dates.jpg",
    price: "530",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date11",
    name: "Sukkary",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sukkary_dates.jpg",
    price: "620",
    dateDiscount: "13%",
    dateIsStock: true,
  },
  {
    id: "date12",
    name: "Khudri",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Khudri_Dates.jpg",
    price: "490",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date13",
    name: "Zahidi",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Zahidi_dates.jpg",
    price: "470",
    dateDiscount: "9%",
    dateIsStock: true,
  },
  {
    id: "date14",
    name: "Safavid",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Safavid_dates.jpg",
    price: "600",
    dateDiscount: "7%",
    dateIsStock: false,
  },
  {
    id: "date15",
    name: "Mebroom",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mabroom_Dates.jpg",
    price: "680",
    dateDiscount: "10%",
    dateIsStock: true,
  },
  {
    id: "date16",
    name: "Sufri",
    img: dates,
    price: "500",
    dateDiscount: "6%",
    dateIsStock: true,
  },
  {
    id: "date17",
    name: "Ajwa",
    img: dates,
    price: "800",
    dateDiscount: "15%",
    dateIsStock: true,
  }
];
