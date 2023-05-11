import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import c from "../img/c.jpg"
const About = () => {
  return (
    <div>
        <div className='aboutpage'>
        <div class="container h-100">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-start py-2 text-center mt-5">
            <h1 style={{color:"#17cf97",fontSize:"5rem"}}>About Us</h1>
            <p className='mt-3 px-5' style={{fontSize:"1.5rem"}}>
            This Estate was established in 1998. This establishment was formed keeping in mind the growing desires of the people and the demand to owe own house. No one better than us could have capture the dreams and requirements of the people of Pakistan. In conclusion, Please allow our extensive knowledge of real estate and our experienced staff to assist you with whatever your needs may be. From rentals to property management, we are fully equipped to handle all of your real estate needs.

          </p>
          
          </div>
        </div>
      </div>
      
        </div>
        <section class="section-bg">
      

        <div class="d-flex width">
          <div className='col-md-8' style={{height:"100vh" }}>
            <div className='p-4 mx-3 border' style={{marginTop:"5%",color:"black"}}>
              
              <img src={c} width={"100%"} height={"100%"}/>
            </div>
          </div>
          <div className='col-md-4 text-start' style={{height:"100vh",marginTop:"10%"}}>
          <h1 style={{color:"#17cf97",fontSize:"3rem"}}>Founder | CEO</h1>
            <p className='mt-3' style={{fontSize:"1.3rem"}}>
            This Estate was established in 1998. This establishment was formed keeping in mind the growing desires of the people and the demand to owe own house. No one better than us could have capture the dreams and requirements of the people of Pakistan. In conclusion, Please allow our extensive knowledge of real estate and our experienced staff to assist you with whatever your needs may be. From rentals to property management, we are fully equipped to handle all of your real estate needs.

          </p>
        
                 </div>

        </div>

      
    </section>

    </div>
  )
}

export default About
