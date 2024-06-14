import ResturantCard from "./ResturantCard.";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);

  const [ searchText, setSearchText] = useState();

  //whnever state variable updates, react triggers a reconsiliation cycle(re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0225&lng=72.5714&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    //option chaining
    setListOfResturant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant( json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // Conditional rendering
  //if(listofresturant === 0){
  // return <shimmer/>}

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} />
            <button onClick={()=>{
                //filter the resturant cards and update the UI.
                //searchText

              const filteredResturant =  listOfResturants.filter((restaurants)=>restaurants?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
             setFilteredResturant(filteredResturant);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }> <ResturantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
