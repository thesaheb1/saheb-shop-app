import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>
  {
        navigate("/");
  },[]);

  return (<div className="bg-[#B73E3E]">
  <Navbar isLoggedIn={isLoggedIn} SetisLoggedIn={SetisLoggedIn}/>
  <Routes>
    <Route path="/" element = {<Home isLoggedIn={isLoggedIn}/>} />
    <Route path="/wishlist" element = {<WishList isLoggedIn={isLoggedIn}/>} />
    <Route path="/cart" element = {<Cart/>} />
    <Route path="/login" element = {<Login SetisLoggedIn={SetisLoggedIn}/>} />
    <Route path="/signup" element = {<Signup SetisLoggedIn={SetisLoggedIn}/>} />
  </Routes>
  <Toaster />
  </div>
  )
};

export default App;
