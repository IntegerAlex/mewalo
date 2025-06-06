
import teamImg1 from '../assets/images/profile2.jpg'
import teamImg2 from '../assets/images/profile3.jpg'
import teamImg3 from '../assets/images/profile4.jpg'
import teamImg4 from '../assets/images/profile5.jpg'

export interface team{
    id:string,
    img:string,
    name:string,
    position:string,
    detail:string
}

export const teamData = [
    {
        id: "member1",
        img: teamImg1,
        name: "UTTKARSH TIWARI",
        position: "Founder & CEO",
    },
    {
        id: "member2",
        img: teamImg2,
        name: "ARADHYA TIWARI",
        position: "Chief Operating Officer",
    },
    {
        id: "member3",
        img: teamImg3,
        name: "VIVAAN TIWARI",
        position: "Warehouse Manager",
    },
    {
        id: "member4",
        img: teamImg4,
        name: "ANANYA TIWARI",
        position: "Inventory Manager",
    },
    {
        id: "member5",
        img: teamImg1,
        name: "ADVAIT TIWARI",
        position: "Operations Manager",
    },
    {
        id: "member6",
        img: teamImg2,
        name: "ISHANI TIWARI",
        position: "Supply Chain Manager",
    },
    {
        id: "member7",
        img: teamImg3,
        name: "REYANSH TIWARI",
        position: "Quality Control Manager",
    },
    {
        id: "member8",
        img: teamImg4,
        name: "MYRA TIWARI",
        position: "Customer Relations Manager",
    }
];