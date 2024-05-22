import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavBar=()=>{
  const[btnName, setBtnName]=useState("login")
    return(
    <>
    <div className="flex justify-between bg-blue-950 h-50">
    <div className="">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="w-20"
        />
        </div>
        <div  className="flex justify-end gap-5 pt-5 pr-3 text-white">
        <Link to="/" >Home</Link> 
        <Link to="/about" >About Us</Link>
        <Link to="/contact">contact Us</Link>
        <Link to="/cart">cart</Link>
        <Link to="/fruit">fruit</Link>
        <Link to="/login"onClick={()=> btnName==="login"? setBtnName("logout"):setBtnName("login")}>{btnName}</Link>
        <Link to="/grocery" >Grocery</Link> 
        
        </div>
    </div>
    </>
    )
}
export default NavBar;