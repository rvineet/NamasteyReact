import RestaurantCard from "./RestaurantCard";
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
 

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    console.log("useffect called");
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
  console.log(filteredRes)
  if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection.</h1>
  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // let filteredList = resList.filter((e) => e.data.avgRating > 4);
            let filteredList = resList.filter((e) => e.info.avgRating > 4.1);
            console.log(filteredList);
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
      <div className="res-container">
        {filteredRes.map((res) => {
          {
            /* console.log(res); */
          }
          return <Link key={res.info.id} to={`/restaurant/${res.info.id}`}><RestaurantCard  resData={res.info}/></Link>;
          {
            /* return <RestaurantCard key={res.data.id} resData={res.data} />; */
          }
        })}

        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
      </div>
    </div>
  );
};
export default Body;
