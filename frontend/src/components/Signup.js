import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()
    const empty={
        name:"",
        email:"",
        password:"",
      }
      //state for handling input
      const [handle, setHandle]=useState(empty)
    
    // function for handle the input fields
    const handler=(e)=>{
     const {name,value}=e.target;
     setHandle({...handle,[name]:value})
     console.log(handle)
    
    }
    
    
    
    
    
    
    // function for creating the Api data
    
    const createApi=async()=>{
        if(handle.name===''||handle.email===''||handle.password==='')
        {
            alert("complete the form to signup")
        }
        else{

         let record=await   fetch("http://127.0.0.1:4000/contrive/signup",{
              method:'POST',
              headers:{
               "content-Type": "application/json",
              },
              body:JSON.stringify(handle)
              
            })
              record=await record.json()
                if(record=="email already exist")
                {
                    alert("email already exist")
                }else{
                  alert("sign up successful")
                  navigate('/login')
                }
            setHandle(empty)
        }
        
    }
  return (
    <div className='aboutpage'>
      <div className='container d-flex justify-content-center'>
      <form className='col-md-6 text-start p-4 mx-3 border rounded' onSubmit={(e)=>{

e.preventDefault()
createApi();

      }}>
        <h3 style={{color:"#17cf97"}}>Signup</h3>
        <label  className='mt-3'>Enter Name</label>
        <input value={handle.name} name="name" onChange={handler} type='text' className='form-control'/>

        <label>Enter Email</label>
        <input value={handle.email} name="email" onChange={handler} type='email' className='form-control'/>

        <label>Enter password</label>
        <input value={handle.password}  name="password" onChange={handler} type='text' className='form-control'/>

        <button    className='btn btn-primary mt-3'>Sign up</button>
      </form>
    </div>
    </div>
  )
}

export default Signup
