import React from 'react'
import "../App.css";
const Quote = () => {
  return (
    <div>
      <section class="section-bg">
      <div class="container">

        <div class="d-flex width">
          <div className='col-md-6' style={{height:"100vh" }}>
            <div className='text-start p-4 mx-3 border font' style={{marginTop:"25%"}}>

              <h3 style={{color:"#073b4c"}}>What do you want to know about property?</h3>
              <p >We have been working in real estate industry for more than twenty-years and have experienced team for survey and keeping an eye on the market
              </p><p>If you have any query please feel free to ask us using this form or check our contact section</p>
            
            </div>
          </div>
          <div className='col-md-6' style={{height:"100vh"}}>
          <form onSubmit={(e)=>{e.preventDefault()}} className='text-start p-4 mx-3 border rounded' style={{backgroundColor:"whitesmoke",marginTop:"20%"}}>
  <div className="mb-3">
    <label for="exampleInputname" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputname" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="phone" class="form-label">Phone no.</label>
    <input type="tel" class="form-control" id="phone"/>
    <div id="emailHelp" class="form-text">We'll never share this information with anyone else.</div>
  </div>
  <div class="mb-3">
  <textarea class="form-control" name="message" rows="3" placeholder="What do you want to know?" required=""></textarea>
  </div>
  
  <button type="submit" class="btn" style={{backgroundColor:"#073b4c",color:"white"}}>Submit</button>
</form>          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Quote
