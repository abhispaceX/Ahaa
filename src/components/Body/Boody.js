import React, { useState, useEffect} from "react";

import { Link } from "react-router-dom";
import Resturant from "../restarunts/Restuarant";
import Shimmer from "../../shimmer/shimmer";
import { RestaurantLink } from "../../utils/Data/data";
import useOnline from "../../utils/Data/useOnline";

const Body = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
   
    // State to track loading status

    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData = async () =>{
        const data = await fetch (RestaurantLink)
        const json=await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    

    const handleRes = () => {
        const filteredres = listOfRestaurants.filter(item => item.info.avgRating > 4.5);
        setFilteredData(filteredres);
    };
  
     

  

    const handleSearch = () => {
        const searched = listOfRestaurants.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
       setFilteredData(searched);
    };
    const online=useOnline();
   if (online=== false){
       return <div className="offline">offline</div>
   }

   return filteredData.length===0 ? (
       <>
      <Shimmer/>
      </> 
   ):(
        <div className="container-body">
        <div className="flex w-80 items-center rounded-full  bg-gray-150 dark:bg-gray-800 p-2 my-3 shadow-md">
            <input
                className="flex-1 rounded-full py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
            />
            <button className="w-5 h-5 text-gray-800 dark:text-white" onClick={handleSearch}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                </svg>
            </button>
            </div>
             <button className="px-3" onClick={handleRes}>Top Rated Restaurant</button>
            <div className="flex flex-row flex-wrap gap-7 mt-6 mx-6">
                
                {filteredData.map((eachRes) => (
                    <Link to={"/restuarent/"+eachRes.info.id} style={{textDecoration:'none'}} key={eachRes.info.id}>
                    <Resturant resList={eachRes}  />
                    </Link>
                ))}
                
            </div>
        </div>
    );
};

export default Body;
