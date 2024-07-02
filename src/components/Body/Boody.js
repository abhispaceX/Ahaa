                   import React, { useState, } from "react";
                    import { Link } from "react-router-dom";
                    import { useQuery } from "@tanstack/react-query";
                    import Resturant from "../restarunts/Restuarant";
                    import Shimmer from "../../shimmer/shimmer";
                    import fetchRestaurants from "../../utils/api"
                    import useOnline from "../../utils/Data/useOnline";
                    
                    const Body = () => {
                        const [searchText, setSearchText] = useState("");
                        const [search, setSearch] = useState(true);
                        const [isTopRated, setIsTopRated] = useState(false);
                        const { data: listOfRestaurants = [], isLoading, error } = useQuery({
                            queryKey: ['restaurants'],
                            queryFn: fetchRestaurants,
                        });
                    
                        const online = useOnline();
                        if (!online) {
                            return <div className="offline">offline</div>;
                        }
                    
                        const handleSearch = () => {
                            setSearchText('')
                              // Reset top-rated filter when searching
                        };
                    
                        const handleRes = () => {
                            setIsTopRated(!isTopRated); // Set top-rated filter
                        };
                    
                        const filteredData = (() => {
                            let filteredList = listOfRestaurants;
                          
                            if (search) {
                              filteredList = filteredList.filter((item) =>
                                item.info.name.toLowerCase().includes(searchText.toLowerCase())
                              );
                            }
                          
                            if (isTopRated) {
                              filteredList = filteredList.filter((item) => item.info.avgRating > 4.0);
                            }
                          
                            return filteredList;
                          })();
                    
                        if (isLoading) {
                            return <Shimmer />;
                        }
                    
                        if (error) {
                            return <div>Error fetching data</div>;
                        }
                    
                       return (
                            <div className="container-body">
                            <div className="flex w-80 items-center rounded-full  bg-gray-150 dark:bg-gray-800 p-2 my-3 shadow-md">
                                <input
                                    className="flex-1 rounded-full py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
                                    type="text"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search..."
                                />
                                
                                <button className="w-5 h-5 text-gray-800 dark:text-white" onClick={handleSearch}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /> </svg> </button> 
                                </div>
                                 <button className="px-3" onClick={handleRes}>{isTopRated?  'Show All' : 'Top Rated'}</button>
                                 { filteredData.length===0?(
                            <div className="no-restaurants mt-6 mx-6 p-4 bg-red-100 text-red-700 rounded-md">
                              No restaurants found. Please try a different search or filter.
                            </div>
                          ):(
                                <div className="flex flex-row flex-wrap gap-7 mt-6 mx-6">
                                    
                                    {filteredData.map((eachRes) => (
                                        <Link to={"/restuarent/"+eachRes.info.id} style={{textDecoration:'none'}} key={eachRes.info.id}>
                                        <Resturant resList={eachRes}  />
                                        </Link>
                                    ))}
                                    
                                </div>
                            )}
                            </div>
                        );
                    };
                    
                    export default Body;
                    