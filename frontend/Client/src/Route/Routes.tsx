import { createBrowserRouter, RouteObject } from "react-router-dom";
import React from "react";
import App from "../App";
import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactUs from "../Pages/ContactUs";
import BlogPage from "../Pages/BlogPage";
import ShopPage from "../Pages/ShopPage";
import CartPage from "@/components/CartPage/CartPage";
// import LoginRegister from "@/components/LoginRegister/LoginRegister";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import OtpInput from "@/components/OtpInput/OtpInput";
import WishlistPage from "@/components/whishlist/WishlistPage";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import SearchComp from "@/components/SearchComp/SearchComp";
import MyAccountPage from "@/Pages/MyAccountPage";
import PageNotFound from "@/PageNotFound";

// import SignupSignin from "@/components/SIgnUp&SingIn/SignupSignin";


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
      { path: 'myaccount', element : <MyAccountPage/>},
      // { path: 'login', element: <LoginRegister /> }, 
      { path: 'detail', element : <ProductDetailPage/>},
      { path: 'otp', element : <OtpInput/>},
      { path: 'wishlist', element : <WishlistPage/>},
      { path: 'login', element : <Login/>},
      { path: 'register', element : <Register/>},
      { path: 'search', element : <SearchComp/>},
      { path: '*', element : <PageNotFound/>},
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
