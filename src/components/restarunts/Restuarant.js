import React from 'react';


 const Resturant = ({resList,addToCart}) => {
  const {
    cloudinaryImageId,
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resList.info;
  // const handleCart=()=>{
  //   addToCart(resList)
  // }
     return(
        <>
        
        <div className=' border-2 w-60  rounded-lg h-80 my-4 p-3 mx-5 bg-gray-100 shadow-lg' key={id} >
            <img className=' w-60 ' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId} alt="Biryani" />
           
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>Rating: {avgRating} stars </h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            {/* <button className=' bg-blue-950 text-white' onClick={handleCart} >Add to Cart</button> */}
        </div>
        </>
     )
 }
 export default Resturant;