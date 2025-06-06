import blogImg1 from '../assets/images/blogContent2.webp'
// import blogImg2 from '../assets/images/blogContent1.jpg'
import blogImg3 from '../assets/images/blogContent4.jpg'

export interface blog {
  id: string;
  img: string;
  title: string;
  info: string;
  date: string;
  place: string;
  article: string;
}

export const blogData: blog[] = [
  {
    id: "blog-1",
    img: blogImg1,
    title: "Exploring the Spices of Kerala",
    info: "A flavorful journey into the heart of Indian spices.",
    date: "2025-05-10",
    place: "Kerala, India",
    article:
      "Kerala, known as the 'Land of Spices', offers a mesmerizing variety of flavors and aromas. From cardamom plantations to pepper trails, this blog explores how the spice trade has shaped Kerala's history and cuisine."
  },
  {
    id: "blog-2",
    img: blogImg3,
    title: "Street Food Chronicles: Mumbai",
    info: "Uncover the chaos and charm of Mumbai’s street food scene.",
    date: "2025-04-22",
    place: "Mumbai, India",
    article:
      "Vada pav, pav bhaji, and spicy chaats dominate the streets of Mumbai. This blog dives into the lives of vendors, the evolution of popular snacks, and the cultural pulse of India’s financial capital."
  },
  {
    id: "blog-3",
    img: blogImg3,
    title: "A Tea Lover’s Guide to Darjeeling",
    info: "Experience the world’s finest teas in the Himalayan foothills.",
    date: "2025-03-15",
    place: "Darjeeling, India",
    article:
      "Darjeeling is not just about scenic views—its tea estates produce globally acclaimed brews. Learn about the harvesting process, tea tastings, and the people who bring this beverage to life."
  },
  {
    id: "blog-4",
    img:blogImg1,
    title: "Goa Beyond Beaches",
    info: "Discover hidden gems, heritage, and flavors of inland Goa.",
    date: "2025-02-08",
    place: "Goa, India",
    article:
      "While Goa is famed for its beaches, the true essence lies in its inland villages, spice farms, and old Portuguese mansions. This blog invites you to explore Goa’s lesser-known cultural tapestry."
  },
  {
    id: "blog-5",
    img: blogImg3,
    title: "Farm-to-Table in Punjab",
    info: "How Punjab’s farmlands feed the nation—and your soul.",
    date: "2025-01-20",
    place: "Amritsar, Punjab",
    article:
      "With lush wheat fields and fresh dairy, Punjab is India’s food bowl. Visit local farms, meet families who’ve farmed for generations, and taste dishes straight from the source."
  },
  {
    id: "blog-6",
    img: blogImg3,
    title: "The Cultural Tapestry of Rajasthan",
    info: "Colors, cuisine, and camel fairs in the Thar Desert.",
    date: "2024-12-05",
    place: "Jaipur, Rajasthan",
    article:
      "From the pink palaces of Jaipur to spicy dal baati churma, Rajasthan is a feast for the senses. Explore its rich history, colorful festivals, and royal flavors."
  },
  {
    id: "blog-7",
    img:blogImg1,
    title: "Coconut Trails in Tamil Nadu",
    info: "A look into Tamil Nadu’s love for coconuts and coastal flavors.",
    date: "2024-11-12",
    place: "Chennai, Tamil Nadu",
    article:
      "Coconut oil, chutneys, and curries—Tamil Nadu’s culinary identity is tied to this versatile nut. Walk through coastal villages and enjoy traditional meals served on banana leaves."
  },
  {
    id: "blog-8",
    img: blogImg3,
    title: "Bengal’s Sweet Secrets",
    info: "Unwrapping the magic behind mishti and Bengali desserts.",
    date: "2024-10-25",
    place: "Kolkata, West Bengal",
    article:
      "From rasgulla to sandesh, Bengal’s desserts have fans across the globe. Visit age-old sweet shops, learn traditional recipes, and understand how sweets play a role in every celebration."
  }
];
