import { createBrowserRouter, RouteObject } from "react-router-dom";
import React from "react";
import App from "../App";
import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactUs from "../Pages/ContactUs";
import BlogPage from "../Pages/BlogPage";
import ShopPage from "../Pages/ShopPage";
import PageNotFound from "@/PageNotFound";
import CartPage from "@/components/CartPage/CartPage";
import LoginRegister from "@/components/LoginRegister/LoginRegister";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import OtpInput from "@/components/OtpInput/OtpInput";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <HomePage /> },  
      { path: 'about-us', element: <AboutUsPage /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'shop', element: <ShopPage /> }, 
      { path: 'cart', element: <CartPage /> }, 
      { path: 'login', element: <LoginRegister /> }, 
      { path: 'detail', element : <ProductDetailPage/>},
      { path: 'otp', element : <OtpInput/>},
      
    
    //   { path: '/cart', element: <Cart /> },
    //   { path: '/payment', element: <Payment /> },
    //   { path: '/singleproduct', element: <SingleProduct /> },
    //   { path: '/singleProductDetail', element: <SingleProductDetails /> },
    //   { path: '/cartFilter', element: <CartFilter /> },
    //   { path: '/shops/seeds', element: <Seed /> },
    //   { path: '/shops/nuts', element: <Nuts /> },
    //   { path: '/shops/dryfruits', element: <DryFruit /> },
    //   { path: '/shops/snacks', element: <Snacks /> },
    //   { path: '/category/dryfruit', element: <SingleProduct /> },
      { path: '*', element: <PageNotFound/> }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
