import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Update() {
  const navigate=useNavigate()
  const {id}=useParams()
  const [val,setVal]=useState({
    id:id,
    city:'',
    location:'',
    size:'',
    price:'',
  })
  
  useEffect(()=>{
  axios.get(`http://127.0.0.1:4000/contrive/edit/${id}`)
    .then(res=>{
      setVal({...val,city:res.data.city,location:res.data.location,size:res.data.size,price:res.data.price})
    })
  },[])
const handlesubmit=(e)=>{
  e.preventDefault()
  axios.put(`http://127.0.0.1:4000/contrive/update/${id}`,val)
  .then(res=>{
    navigate('/admin')
  }).catch(
    console.log("error")
  )
}
  
  return (
    <div className='aboutpage'>


    <div className='container justify-content-center d-flex'>
      <form className='border rounded p-3 text-start w-50' onSubmit={handlesubmit}>
        <h3>Edit Property</h3>
        <label className='mt-5'>City</label>
        <input value={val.city}  name="city" onChange={e=>setVal({...val,city:e.target.value})} type='text' className='form-control'/>
        <label>Location</label>
        <input value={val.location} name="location" onChange={e=>setVal({...val,location:e.target.value})} type='text' className='form-control'/>

        <label>Size</label>
        <input value={val.size} name="size" onChange={e=>setVal({...val,size:e.target.value})} type='text' className='form-control'/>
        <label>Price</label>
        <input value={val.price} name="price" onChange={e=>setVal({...val,price:e.target.value})} type='text' className='form-control'/>


        <button    className='btn btn-primary mt-3'>Update Data</button>
      </form>
    </div>
    </div>
  )
}

export default Update
