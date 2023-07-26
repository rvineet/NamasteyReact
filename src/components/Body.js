import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

  const [resList, setResList] = useState(resObj)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           let filteredList = resList.filter(e => e.info.avgRating>4)
           console.log(filteredList)
           setResList(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          console.log(res);
          return <RestaurantCard key={res.info.id} resData={res.info} />;
        })}

        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
      </div>
    </div>
  );
};
export default Body;
