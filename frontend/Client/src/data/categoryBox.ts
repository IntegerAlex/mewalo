import category1 from '../assets/images/CatrgoryDryfruit.png';
import category2 from '../assets/images/CatrgorySeeds.jpg';
import category3 from '../assets/images/CatrgoryNuts.jpg';
import category4 from '../assets/images/snacks.jpg';

// Define type for category item
interface CategoryItem {
  img: string;
  category: string;
}

// Corrected data with string values
export const categoryBoxData: CategoryItem[] = [
  {
    img: category1,
    category: 'Dry Fruits',
  },
  {
    img: category2,
    category: 'Nuts',
  },
  {
    img: category3,
    category: 'Seeds',
  },
  {
    img: category4,
    category: 'Snacks',
  },

];
