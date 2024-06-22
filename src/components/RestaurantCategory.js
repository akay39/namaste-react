//import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory = ({ data, showItems, setShowIndex, }) => {
//   const [showItems, setShowItems] = useState(false);
 
  const handleClick = () => {
   setShowIndex();
  };
  //console.log(data);
  return (
    <div>
      {/* {header} */}
      <div className="w-6/12 mx-auto my-8 bg-gray-150 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
           onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* {accordions} */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
