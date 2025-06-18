import React from "react";
import ProductCard from "./products/ProductCard";
import useFetchApi from "@/customHooks/useFetchApi";
import { Product } from "@/types/product";
import Loading from "./Loading/Loading";
import { products } from "@/data/productData";

interface ApiResponse {
  products?: Product[];
  data?: Product[]; // Some APIs use 'data' instead
  items?: Product[]; // Or 'items'
}

const HomePageProducts = () => {
  // const apiPath = `${import.meta.env.VITE_API_URL}/product?page=1&limit=8`;
  // const { data: response, loading, error } = useFetchApi<ApiResponse>(apiPath);
  // console.log(response);
  // Handle different API response structures
  // const products = response?.[0]?.data || []; 

  // Debug logging
  // console.log("Current products:", {
  //   rawResponse: response,
  //   extractedProducts: products,
  //   count: products.length
  // });

  // if (loading) {
  //   return (
  //     <div className="container-fluid">
  //       <div className="container">
  //         <h2 className="text-center">Our Products</h2>
  //         <Loading />
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="container-fluid">
  //       <div className="container">
  //         <h2 className="text-center">Our Products</h2>
  //         <div className="text-center py-5 text-red-500">
  //           Error loading products: {error.message}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center">Our Products</h2>
        {products.length > 0 ? (
          <ProductCard data={products} />
        ) : (
          <div className="text-center py-5">
            No products available at the moment
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageProducts;