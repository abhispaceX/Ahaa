import useRestuarantMenu from '../utils/useResturantmenu';
import {useParams } from 'react-router-dom'
import Shimmer from  '../shimmer/shimmer';
import { useState } from 'react';
import RestuarantCategory from "./RestuarantCategory"


const RestuarantMenu = ()=>{
    const { resid }= useParams()
    const restInfo= useRestuarantMenu(resid)
    const [showIndex,setShowIndex]=useState(null)
   
    if (restInfo===null)return <Shimmer/>; 

    const {name,city,areaName,cuisines,avgRating} =restInfo?.cards[2]?.card?.card?.info ;
    
    const{itemCards}=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category= restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (cat)=>{ return cat.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"}
    )
    
    // console.log(category)
    
    return (
         <div className=' text-center' >
        <div className=' font-bold text-xl p-2 m-2 ' >{name}</div> 
        <h2 className='font-bold m-2'>{city}</h2>
        <h2>{areaName}</h2>
        <h3>{cuisines}</h3>
        
            <ul>
                {category.map((item,index)=>(
                <RestuarantCategory
                 key={item?.card?.card.title}
                 categoryIndex={index}
                 data={item?.card?.card}
                 showIndex={showIndex}
                 setShowIndex={setShowIndex}
                 
                 />
       ))}
       
         </ul>
        </div>
    )
}
export default RestuarantMenu;