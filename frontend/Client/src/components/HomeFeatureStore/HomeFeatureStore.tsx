import React from 'react'
import { Image } from 'react-bootstrap'
import { MdElectricBolt } from "react-icons/md"
import './HomeFeatureStore.css'
import { Button } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import { featureStoreData } from '../../data/featureStore'

const HomeFeatureStore = () => {
  return (
    <>
      <div className="container-fluid" id="feature-store">
        <div className="container">
           
          <div className='mostSelling-heading d-flex justify-content-between align-items-center mb-4'>
                  <h2 className="mostSelling-title m-0">
                    Feature Store
                  </h2>
                  <div className="mostSelliing-seeMore d-flex align-items-center gap-2">
                    <Button variant="link" className='mostSelliing-seeMore-btn p-0'>
                      See More
                    </Button>
                    <FaArrowRightLong style={{color: "red", fontSize: "22px"}} />
                  </div>
                </div>
        
          <div className="feature-stores row g-4">
            {featureStoreData.map((store) => (
              <div className="col-12 col-sm-6 col-md-4" key={store.id}>
                <div className="feature-store">
                  <div
                    className="feature-store-upper"
                    style={{ backgroundColor: `#${store.color}` }}
                  ></div>
                  <div className="feature-store-bottom">
                    <span className="feature-store-title">{store.title}</span>
                    <div className="feature-store-icon">
                      <MdElectricBolt />
                      <div className="feature-store-text">
                        Delivery in 12 minutes
                      </div>
                    </div>
                  </div>
                  <div className="feature-store-circle">
                    <Image src={store.storeImg} fluid />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatureStore
