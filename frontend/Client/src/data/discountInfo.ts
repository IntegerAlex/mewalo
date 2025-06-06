import discountImg1 from '../assets/images/packagingImg1.jpg'
import discountImg2 from '../assets/images/packagingImg2.jpg'
import discountImg3 from '../assets/images/packagingImg3.jpg'
import discountImg4 from '../assets/images/packagingImg4.jpg'

export interface discount {
  id:string;
  img: string;
  title: string;
  percentage: string;
//   weight: string;
//   price: string;
  bgColor1 : string;
}

export const discountData: discount[] = [
    {
        id:'discount-1',
        img: discountImg1,
        title:'SAVE',
        percentage:"29%",
        bgColor1:"#4caf50"
    },
    {
        id:'discount-2',
        img: discountImg2,
        title:'DISCOUNT',
        percentage:"30%",
        bgColor1:"#006ee6"
    },
    {
        id:'discount-3',
        img: discountImg3,
        title:'Up to',
        percentage:"50%",
        bgColor1:"#2e712a"
    },  
    {
        id:'discount-4',
        img: discountImg4,
        title:'FREE',
        percentage:"SHIP",
        bgColor1:"#FFC0CB"
    },  

]