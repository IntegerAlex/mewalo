// import category1 from '../../../assets/images/CategoryDryFruits.jpg';
// import category2 from '../../../assets/images/CatrgorySeeds.jpg';
// import category3 from '../../../assets/images/CatrgoryNuts.jpg';
// import category4 from '../../../assets/images/CategoryBerries.jpg';
// import category5 from '../../../assets/images/CategoryDates.jpg';
import category2 from '../assets/images/CatrgoryNuts.jpg'
import category3 from '../assets/images/CatrgorySeeds.jpg'

export interface category {
  id: string;
  cName: string;
  cImg: string;
}

export const categories: category[] = [
  {
    id: "category-one",
    cName: "Dry Fruits",
    cImg: category2,
  },
  {
    id: "category-two",
    cName: "Seeds",
    cImg: category2,
  },
  {
    id: "category-three",
    cName: "Nuts",
    cImg: category3,
  },
  {
    id: "category-four",
    cName: "BERRIES",
    cImg: category2,
  },
  {
    id: "category-five",
    cName: "Dates",
    cImg: category3,
  },
];
