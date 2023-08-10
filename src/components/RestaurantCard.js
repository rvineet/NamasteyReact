import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="p-4 w-[200px] m-6 rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-400">
    <div className="h-4/6">
      <img
        className="rounded-lg h-52"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      </div>
      <div className="">
      <h3 className="font-bold py-3 text-lg">{resData.name}</h3>
      <h4>{resData.cuisines.length >3 ? `${resData.cuisines.splice(-3).join(", ")}` : resData.cuisines.join(", ") }</h4>
      <h4>{resData.avgRating} Stars</h4>
      <h4>{resData.costForTwo}</h4>
      {/* <h4>{resData.sla.deliveryTime} minutes</h4> */}
      </div>
    </div>
  );
};

//higher order component
export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
      <label className="absolute bg-black ml-4 text-white rounded-sm">Promoted</label>
      <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;
