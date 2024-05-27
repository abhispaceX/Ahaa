import { useDispatch } from "react-redux"
import { addProduct } from "../utils/cartSlice"

const ListItems=({items})=>{
    const dispatch=useDispatch()
    const handleClick=(item)=>{
        dispatch(addProduct(item))
        console.log(item)
      }
    
    return(
        <div>
        {items.map((item)=>{
            return(<div key={item.card.info.id} className=" border-b-2 border-gray-200 flex  justify-between" >
               
              <div>
               <span className=" font-semibold " >{item.card.info.name}- </span> 
               <span className=" font-semibold " >₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    <p className=" mt-9  text-xs" >{item.card.info.description}</p>
                </div>
                <div className=" w-6/12 p-4 ">
                    <div className=" relative overflow-hidden">

                    <img className="w-full" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
                               item.card.info.imageId} alt="" />
                     <div className=" absolute bottom-0 ">
                    <button className=" text-green-600 bg-white rounded-md mx-10 h-7 w-16 " onClick={()=>handleClick(item)}>
                        Add
                    </button>
                    </div>           
                    </div>
              
              </div>
                </div>
                
            )
        })}
        </div>
    )
}
export default ListItems