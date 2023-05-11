
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Admin from './components/Admin';
import Houses from './components/Houses';
import Login from './components/Login';
import Update from './components/Update';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [check, setCheck]=useState(null)
  const [name,setname]=useState("")
  return (
    <div className="App">
      <ScrollToTop/>
      <BrowserRouter>
      <Navbar name={name}/>

        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/about' element={<About/>} />
          <Route path='/admin' element={<Admin value={check} func={setCheck}/>} />
          <Route path='/house' element={<Houses/>} />
          <Route path="/login" element={<Login func={setCheck} setname={setname}/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
     
      <Footer/>
   
      </BrowserRouter>
            </div>
  );
}

export default App;
