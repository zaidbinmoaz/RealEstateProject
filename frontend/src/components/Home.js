import React, { useRef } from "react";
import a from "../img/a.jpg";

import "../App.css";
import {HashLink as Link} from "react-router-hash-link"
import Quote from "./Quote";

const Home = () => {
  const quote_section = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
    <div className="hero">
      
        <div class="info d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h1 style={{color:"#17cf97"}}>Welcome to Contrive</h1>
            <h4>
            if you are looking to invest in real estate, you are at right place.
          </h4>
          
            <Link  onClick={()=>{scrollToSection(quote_section)}} class="btn-get-started">Get Started</Link>
          </div>
        </div>
      </div>
    </div>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide text"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} style={{height:"100vh"}} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={a} style={{height:"100vh"}} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={a} style={{height:"100vh"}} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div 
      ref={quote_section}
      >

      <Quote/>
      </div>

      </div>
    </>
  );
};

export default Home;
