import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} Stars</h4>
      <h4>{resData.costForTwo}</h4>
      {/* <h4>{resData.sla.deliveryTime} minutes</h4> */}
    </div>
  );
};
export default RestaurantCard;
