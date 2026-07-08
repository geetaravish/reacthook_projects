import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {  

  const [searchText, setSearchText] = useState("");
//original
const [listOfRestaurant, setListOfRestaurant] = useState([]);
//copy
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
      const data = await fetch(targetUrl);
      const json = await data.json();
      
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    fetchData();
  }, []);
  
  const handleSearch = () => {
    // logic to filter the restaurant list based on user input
    const filterList = listOfRestaurant
    .filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurant(filterList);
  };

  const handleTopRating = () => {
    // logic to filter the restaurant list based on user input
    const filterList = listOfRestaurant
    .filter(item => item.info.avgRating > 4.5);
    setFilteredRestaurant(filterList);
  };

  const handleSortingAsc = () => {
    // logic to filter the restaurant list based on user input
    // const filterList = listOfRestaurant
    // .sort((a, b) => a.name.localeCompare(b.name));
    const filterList = listOfRestaurant.toSorted((a, b) => a.info.name.localeCompare(b.info.name));

    setFilteredRestaurant(filterList);
  };

  const handleSortingDesc = () => {
    const filterList = listOfRestaurant.toSorted((a, b) => b.info.name.localeCompare(a.info.name));

    setFilteredRestaurant(filterList);
  };

  return listOfRestaurant.length === 0 ? ( <Shimmer/> ) : (
    <div>
      <input
        type="text"
        value={searchText} 
        onChange={(e) => {setSearchText(e.target.value)}}
        />
        <button onClick={handleSearch}>Search Food Items</button>
        <button onClick={handleTopRating}>Top Rated Items</button>
        <button onClick={handleSortingAsc}>Sorting Asc</button>
        <button onClick={handleSortingDesc}>Sorting Desc</button>

      <p>
        {filteredRestaurant.map(item => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </p>
    </div>
  );
};

export default Body;