import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'


const Admin = (props) => {
  const {value,func}=props
  const navigate=useNavigate()
const [data,setData]= useState([]);
const [sessionData, setSessionData]=useState(null)
const getsession=()=>{
  setSessionData(sessionStorage.getItem("userEmail"))
  setSessionData(sessionStorage.getItem("userPass"))

}
const logout=()=>{

    sessionStorage.clear()
    
  
}
const fetchApi=async()=>{
    
var value=await fetch("http://127.0.0.1:4000/contrive/read")
value=await value.json()
setData(value)


}
const del_data=async (id)=>{
  let a=await fetch(`http://127.0.0.1:4000/contrive/delete/${id}`,{method:"DELETE"});
  data=await a.json();

}
const auth=sessionStorage.getItem("userEmail")
useEffect(()=>{
  fetchApi()
  getsession()
  
    if (!auth) {
       navigate("/login");
    }
    
},[del_data])
    
    const empty={
        city:"",
        location:"",
        size:"",
        price:""
      }
      //state for handling input
      const [handle, setHandle]=useState(empty)
    
    // function for handle the input fields
    const handler=(e)=>{
     const {name,value}=e.target;
     setHandle({...handle,[name]:value})
     console.log(handle)
    
    }
    const createApi=()=>{
        if(handle.city==""||handle.location==""||handle.size==""||handle.price=="")
        {
            alert("Incomplete form")
        }
        else{

            fetch("http://127.0.0.1:4000/contrive/create",{
              method:'POST',
              headers:{
               "content-Type": "application/json",
              },
              body:JSON.stringify(handle)
              
            })
            setHandle(empty)
            navigate('/house')
          }
        }
        
        return (
          
    
    <div>
      <div className='aboutpage'>
        {value==true?<div className="alert alert-dismissible fade show" style={{backgroundColor:"#17cf97",color:"black",marginTop:"-30px"}} role="alert">
  <strong>Login successful!</strong> Welcome to Admin panel :)
  <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={()=>{func(false)}} aria-label="Close"></button>
</div>:(null)}
      
     
      <div className='col-md-6 container align-content-center form'>

<h1>Add new property</h1>
<form className='text-start p-4 mx-3 border rounded' onSubmit={(e)=>{
  e.preventDefault()
  createApi();
  
}}>
  <h3>Admin Panel</h3>
          <label >Enter City</label>
          <input value={handle.city}  name="city" onChange={handler} type='text' className='form-control'/>
          <label>Location</label>
          <input value={handle.location}  name="location" onChange={handler} type='text' className='form-control'/>
        <label>Size</label>
        <input value={handle.size} name="size" onChange={handler} type='text' className='form-control'/>

        <label>Price</label>
        <input value={handle.email} name="price" onChange={handler} type='text' className='form-control'/>


        <button    className='btn mt-3'>Post</button>
      </form>

  </div>
      </div>
      <section className="section-bg">
      <div >

        <div className="d-flex width">
          <div className='col-md-12' style={{height:"auto" }}>
            <div className='text-center p-4 mx-3 border font' style={{marginTop:"5%"}}>

              <h3 style={{color:"#073b4c"}}>Properties (public)</h3>
              <table className='table table-bordered mt-5'>
          <tr>
              <th>City</th>
              <th>Location</th>
              <th>Size</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
              
          </tr>
          {
              data.map((item)=>(
                  <tr>
                      <td>{item.city}</td>
                      <td>{item.location}</td>
                      <td>{item.size}</td>
                      <td>{item.price}</td>
                      <td>
                        
                        <Link className='btn' style={{backgroundColor:"#073b4c",color:"white"}} to={`/update/${item._id}`}>Edit</Link>
                       
                        </td>
                      <td>
                        
                        <button className='btn' style={{backgroundColor:"#073b4c",color:"white"}} onClick={()=>del_data(item._id)}>Delete</button>
                       
                        </td>
                  </tr>
              ))
          }
        </table>
            </div>
          </div>
          

        </div>

      </div>
    </section>
      </div>
 
    )

  }
export default Admin
