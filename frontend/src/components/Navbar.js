import React, { useEffect, useState } from "react";
import "../App.css";

import logo from "../img/logo.png";

import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const { name } = props;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sessionData, setSessionData] = useState(null);
  const getsession = () => {
    setSessionData(sessionStorage.getItem("userEmail"));
    setSessionData(sessionStorage.getItem("userPass"));
  };
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    getsession();
  });
  return (
    <div>
      <nav className="my-nav navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <div className="navbar-brand d-flex">
            <img
              src={logo}
              alt="logo"
              width={"50%"}
              height={"70%"}
              className="d-inline-block align-text-center"
            />
            <h3
              className="my-auto"
              style={{ color: "#17cf97", fontWeight: "800" }}
            >
              Contrive
            </h3>
          </div>
          <button
            className="navbar-toggler"
            id="toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar navbar-nav me-auto mb-2 mb-lg-0" id="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Contact</Link>
              </li>
              <li>
                <Link to="/house">Properties</Link>
              </li>

              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
            {sessionData == null ? (
              <div className="d-flex" role="search">
                <button
                  className="btn me-5 login"
                  style={{ border: "2px solid #17cf97" }}
                >
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sign Up
                  </Link>
                </button>
                <button
                  className="btn me-5 login px-3 py-2"
                  style={{ border: "2px solid #17cf97" }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </button>
              </div>
            ) : (
              <div className="d-flex text-center">
                <div className="px-3">
                <button className="btn me-3 logout">
                  <Link to={"/admin"}> 
                  
                  <strong>

                  {name}
                  </strong>
                  </Link>
                </button>
                </div>
                <button onClick={logout} className="btn me-3 logout">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
