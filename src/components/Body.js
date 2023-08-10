import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);


  //if no dependency array ==> useEffect called everytime component renders
  //if dependency array is [ ] ==> useEffect is called on initial render(just once)
  //if dependency array is [ searchText ] ==> useEffect will be called everytime searchText changes 
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus()
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //higher order component
 

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    // console.log("useffect called");
    //use option chaining always===> ?.
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json?.data?.cards[2]?.data?.data?.cards
    );
    setFilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json?.data?.cards[2]?.data?.data?.cards
    );
  };
  //conditional rendering
  // if (resList.length === 0) return <Shimmer />;
  // console.log(filteredRes)
  if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection.</h1>
  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <button
            className="m-4 px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // let filteredList = resList.filter((e) => e.data.avgRating > 4);
              let filteredList = resList.filter((e) => e.info.avgRating > 4.1);
              console.log(filteredList);
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(resList);
              console.log(searchText);
              const filtered_res = resList.filter((res) => {
                console.log(res.info.name.includes(searchText));
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRes(filtered_res);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes?.map((res) => {
          {
            /* console.log(res); */
          }
          return (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              {res.info.avgRating > 4.1 ? (
                <RestaurantCardPromoted resData={res.info} />
              ) : (
                <RestaurantCard resData={res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
