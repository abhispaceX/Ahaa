import {useEffect, useState}from "react";
import "./cart.css"
const CartPage=()=>{
    const[cartItems,setCartItems]=useState([])
    useEffect(()=>{
        const storedResturant=JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedResturant);
      },[]);

    const handleRemove=(id)=>{
        const updatedcart=[...cartItems]
        updatedcart.splice(id,1)
        setCartItems(updatedcart);
        localStorage.setItem("cartItems", JSON.stringify(updatedcart));

    }
   
    
    return(
        <>
        <div className=""> 
            <h1>Cart Page</h1>

            <div className="rest-card" >
                {cartItems.map((item)=>(
                    <div key={item.info.id} className="card-item" >
                        <img className='res-logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
                        item.info.cloudinaryImageId} alt="Biryani" />
                            <h3>{item.info.name}</h3>
                            <h4>{item.info.cuisines.join(', ')}</h4>
                            <h4>Rating: {item.info.avgRating} stars </h4>
                            <h4>{item.info.costForTwo}</h4>
                            <h4>{item.info.sla.slaString}</h4>
                            <button onClick={handleRemove}>Remove </button>

                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export  default CartPage;