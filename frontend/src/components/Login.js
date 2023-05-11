import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const send=createContext()

const Login = (props) => {
  const {func,setname}=props
  const navigate = useNavigate();
  const empty = {
    name: "",
    email: "",
    password: "",
  };
  //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  // function for creating the Api data

  const createApi = async () => {
    if (handle.email === "" || handle.password === "") {
      alert("complete the form to login");
      
    } else {
      let record = await fetch("http://127.0.0.1:4000/contrive/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      if (record.message == "login successful") {
        sessionStorage.setItem("userEmail", record.match.email);
        sessionStorage.setItem("userPass", record.match.password);
        
        setname(record.match.name)
        func(true);
        navigate("/admin");
        
      } else {
        alert("username or password is invalid");
      }
      setHandle(empty);
    }
  };
  const auth = sessionStorage.getItem("userEmail");
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
    <>
    
      
    <div className="aboutpage align-content-center">
      <h3 style={{ color: "#17cf97" }}>Please Login</h3>
      <div className="container d-flex justify-content-center">
        <form
          className="col-md-6 text-start p-4 mx-3 border rounded"
          style={{ backgroundColor: "transparent", marginTop: "0%" }}
          onSubmit={(e) => {
            e.preventDefault();
            createApi();
          }}
        >
          <label>Enter Email</label>
          <input
            value={handle.email}
            name="email"
            onChange={handler}
            type="email"
            className="form-control"
          />

          <label>Enter password</label>
          <input
            value={handle.password}
            name="password"
            onChange={handler}
            type="text"
            className="form-control"
          />

          <button className="btn logout mt-2">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
