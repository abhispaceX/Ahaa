import { useSelector } from "react-redux";
import "./cart.css"
import ListItems from "../ListItems";
const CartPage=()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
        <>
        <div className="text-center m-5 p-5">
            <h1 className=" text-2xl font-bold">Cart</h1>
        <div className="w-7/12 my-20 mx-auto"> 
            <ListItems items={cartItems}/>
        </div>
        </div>
        </>
    )
}
export  default CartPage;