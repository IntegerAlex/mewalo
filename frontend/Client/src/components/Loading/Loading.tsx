import React from 'react'
import { Image } from 'react-bootstrap'
import './Loading.css'
import LOGO from '../../assets/images/LOGO.svg'

const Loading = () => {
  return (
    <>
        <div className="container-fluid" id='loading'>
            <Image src={LOGO} className='loading-logo-img' fluid/>
        </div>
    </>
  )
}

export default Loading