// import { categories } from '@/data/categories';
// import React, { useState } from 'react';

// import ProductCard from '../products/ProductCard';
// import { dryfruitsData } from '@/data/dryfruits';
// import { seedsData } from '@/data/seed';
// import { nutsData } from '@/data/nuts';
// import { berrieData } from '@/data/Berries';
// import { datesData } from '@/data/date';

// interface Product {
//   id: string;
//   name: string;
//   img: string;
//   type: string;
// }

// const Filtertabs = () => {
//     const [currentTab, setCurrentTab] = useState<string>(categories[0].id);

//     const getCurrentData = (): Product[] => {
//         switch(currentTab) {
//             case 'category-one':
//                 return dryfruitsData;
//             case 'category-two':
//                 return seedsData;
//             case 'category-three':
//                 return nutsData;
//             case 'category-four':
//                 return berrieData;
//             case 'category-five':
//                 return datesData;
//             default:
//                 return dryfruitsData;
//         }
//     };

//     return (
//         <div className="container-fluid py-6 bg-amber-50">
//             <div className="container">
//                 {/* Tab Buttons */}
//                 <div className="flex justify-center mb-8">
//                     <div className="w-full md:w-3/5 lg:w-3/5 flex items-center justify-between bg-transparent gap-2">
//                         {categories.map((tab) => (
//                             <button 
//                                 className={`
//                                     relative py-3 px-4 sm:px-6 
//                                     text-sm sm:text-base font-medium 
//                                     transition-all duration-300 ease-in-out 
//                                     flex-1
//                                     border-2 border-green-500
//                                     ${currentTab === tab.id 
//                                         ? 'bg-green-500 text-white shadow-md' 
//                                         : 'bg-white text-green-600 hover:bg-green-50'
//                                     }
//                                 `}
//                                 style={{ borderRadius: '20px' }}
//                                 key={tab.id}
//                                 onClick={() => setCurrentTab(tab.id)}
//                             >
//                                 {tab.cName}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Product Cards Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//                     {getCurrentData().map((product: Product) => (
//                         <ProductCard 
//                             key={product.id}
//                             product={product}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Filtertabs;