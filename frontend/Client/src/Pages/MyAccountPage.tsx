import React, { useState } from "react";
import './MyAccountPage.css'
import MyAccountBg from "@/components/MyAccount/MyAccountBg";
import ManageAddress from "@/components/MyAccount/ManageAddress";
import MyProfile from "@/components/MyAccount/MyProfile";
import MyOrder from "@/components/MyAccount/MyOrder";
import LogoutComp from "@/components/MyAccount/LogoutComp";

type AccountTab = 'profile' | 'address' | 'order' | 'logout';

const MyAccountPage = () => {
  const [activeTab , setActiveTab] = useState<AccountTab>('profile');

  return (
    <>
    <MyAccountBg/>
      <div className="container-fluid" id="MyAccountPage">
        <div className="myaccount-section-div">
            <div
              className={`tab-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={()=> setActiveTab('profile')}
            >
              MY PROFILE
            </div>
            <div
              className={`tab-item ${activeTab === 'address' ? 'active' : ''}`}
              onClick={()=> setActiveTab('address')}
            >
              MANAGE ADDRESS
            </div>
            <div
             className={`tab-item ${activeTab === 'order' ? 'active' : ''}`}
              onClick={()=> setActiveTab('order')}
            >
              ORDER
            </div>
            <div
               className={`tab-item ${activeTab === 'logout' ? 'active' : ''}`}
              onClick={()=> setActiveTab('logout')}
            >
              LOGOUT
            </div>
        </div>
        <div className="myaccount-form-div">
            {activeTab === 'profile' && <MyProfile/>}
            {activeTab === 'address' && <ManageAddress/>}
            {activeTab === 'order' && <MyOrder/>}
            {activeTab === 'logout' &&  <LogoutComp/>}
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
