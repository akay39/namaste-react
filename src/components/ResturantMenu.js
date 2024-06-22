import useRestaurantMenu from "../utils/userestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {useState} from "react";

//import { MENU_API } from "../utils/constants";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null);

  

  // useEffect(()=>{
  //     fetchMenu();
  // },[])

  // const fetchMenu = async ()=> {
  //     const data = await fetch(MENU_API + resId );
  //     const json = await data.json();

  //     setResInfo(json.data)
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-8 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/*categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}

      {/* <h2>menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id || restaurants.info.id}>
            {" "}
            {item?.card?.info?.name} -{"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ResturantMenu;
