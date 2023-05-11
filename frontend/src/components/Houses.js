import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Houses = () => {
    const navigate=useNavigate()
const [data,setData]= useState([]);
const fetchApi=async()=>{
    
    var value=await fetch("http://127.0.0.1:4000/contrive/read")
    value=await value.json()
    setData(value)
    
    
    }
    const del_data=async (id)=>{
      let a=await fetch(`http://127.0.0.1:4000/contrive/delete/${id}`,{method:"DELETE"});
      data=await a.json();
    
    }
    
    
    useEffect(()=>{
        fetchApi()
        
        
    },[del_data])
    

  return (
    <div className='aboutpage h-auto'>
      <div className='container'>
  
  <h2 className='text-center'>Available property</h2>
  <div className='row p-3'>

  {
    data.map((item)=>(
      <div class="col-md-6">
       <div class="thumbnail img-thumb-bg mb-4">
           <div class="overlay"></div>
           <div class="caption text-start">
               <div class="tag"><a href="#">{item.location}</a></div>
               <div class="title"><a href="#">{item.city}</a></div>
               <div class="clearfix">
                   <span class="meta-data"><a href="">{item.size}</a>{item.date}</span>
                   <span class="meta-data pull-right"><a href=""><i class="fa fa-heart-o"></i> 4</a></span>
               </div>
               <div class="content">
                   <p>This property is available.</p>
               </div>
           </div>
       </div>
    </div>))
  }
  </div>
    </div>
    </div>
  )
}

export default Houses
