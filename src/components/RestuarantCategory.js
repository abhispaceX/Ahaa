import ListItems from "./ListItems"
import { useState } from "react"

const RestuarantCategory = ({ data, showIndex ,setShowIndex,categoryIndex})=> {
    console.log(showIndex)
    const handleShow=()=>{
     setShowIndex(showIndex==categoryIndex?null:categoryIndex)
     
    }
    const isOpen=showIndex===categoryIndex?true:false; 
  
   
   
    return(
        <div className=" w-7/12 mx-auto bg-gray-50">
        <div className="p-3 m-3 rounded-lg shadow-sm flex justify-between" onClick={handleShow} >  
         <span>{data.title} ({data.itemCards.length})</span>
         <span>{isOpen ? '⬆️' : '⬇️'}</span>
        </div>
        
        <div>
           {isOpen && <ListItems  items={data.itemCards}/>}
        </div>
        </div>
    )
}
export default RestuarantCategory;