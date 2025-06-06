import { title } from 'process'
import storeImg1 from '../assets/images/feature-store1.png'
import storeImg2 from '../assets/images/feature-store2.png'
import storeImg3 from '../assets/images/feature-store3.png'

export interface featureStore{
    id:string,
    color:string,
    title:string,
    storeImg : string,
}

export const featureStoreData = [
    {
        id: "store1",
        color : "FFA500",
        title: 'Crush grocery',
        storeImg : storeImg1,
    },
    {
        id: "store2",
        color : "0074b7",
        title: 'Delivery Market',
        storeImg : storeImg2,
    },
    {
        id: "store3",
        color : "80EF80",
        title: 'Quality product',
        storeImg : storeImg3,
    },

]