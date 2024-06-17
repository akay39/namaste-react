
import useRestaurantMenu from "../utils/userestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

//import { MENU_API } from "../utils/constants";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h2>menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id || restaurants.info.id}>
            {" "}
            {item?.card?.info?.name} -{"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
