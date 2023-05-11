import React from 'react'

import { Link } from 'react-router-dom'
import "../App.css";

const Footer = () => {
  return (
    <div className='footer' >
      
  
  <div
          className="text-center text-lg-start text-white"
          
          >
 
    <div className="p-4 pb-0">
   
      <section className="">

        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Contrive
            </h6>
            <p>
              Real Estate Consultants.
            </p>
            <p>
            Working since 1998
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-white">Houses</a>
            </p>
            <p>
              <a className="text-white">Plots</a>
            </p>
            <p>
              <a className="text-white">Files</a>
            </p>
            <p>
              <a className="text-white">Stocks</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a className="text-white">Commision Rates</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="mr-3"></i> Lahore, LHR 54000, PK</p>
            <p><i className="mr-3"></i> info@gmail.com</p>
            <p><i className="mr-3"></i> + 01 234 567 88</p>
            <p><i className="mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr className="my-3"/>

      <div className="p-3 pt-0">
        
      </div>
    </div>
  </div>
  <div className="text-center text-white">
      <div className="container" >
  
       
          © Copyright <strong><span>Contrive</span></strong>. All Rights Reserved
       
      

          Designed by <Link to="https://github.com/zaidbinmoaz">ZaidBinMoaz</Link>
       
      </div>
    </div>
</div>
  
  )
}

export default Footer
