import React from "react";

const RestaurantCard = ({ resData }) => {  
  return (
    <div>
      <h2>{resData.info.name}</h2>
      <p>{resData.info.cuisines.join(", ")}</p>
      <p>Rating: {resData.info.avgRating}</p>
      <p>Delivery Time: {resData.info.deliveryTime} minutes</p>
    </div>
    
  );
};

export default RestaurantCard;