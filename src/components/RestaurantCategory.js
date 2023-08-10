import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);
  const handleClick = () => {
    // setShowIndex(24);
  };
//   data= []
  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
