import ResturantCard from "./ResturantCard.";
import { useState } from "react";
//import resList from "../utils/mockData";

const Body = () => {

    // local state variable - super powerful variable

    const [listOfResturants, setListOfResturant] = useState([  {info: {
        id: "36658",
        name: "Dominos",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        locality: "Panjra Pole",
        areaName: "Ambawadi",
        costForTwo: "₹200 for two",
        deliveryTime: 30,
        cuisines: [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        avgRating: 4.5,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.5",
        }
    },
      {
        info: {
          id: "36657",
          name: "The Belgian Waffle Co.",
          cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
          locality: "Panjra Pole",
          areaName: "Ambawadi",
          costForTwo: "₹200 for two",
          deliveryTime: 30,
          cuisines: [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
          avgRating: 3.9,
          veg: true,
          parentId: "2233",
          avgRatingString: "4.5",
          
      }
    },
      {
        info: {
          id: "52630",
          name: "McDonald's",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_52630.JPG",
          locality: "Ellis Bridge",
          areaName: "Ashram Road",
          costForTwo: "₹400 for two",
          deliveryTime: 21,
          cuisines: [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
      }
    },]);

// Normal JS Variable
// let listOfResturants2 = [
//     {info: {
//         id: "36658",
//         name: "Dominos",
//         cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
//         locality: "Panjra Pole",
//         areaName: "Ambawadi",
//         costForTwo: "₹200 for two",
//         deliveryTime: 30,
//         cuisines: [
//           "Waffle",
//           "Desserts",
//           "Ice Cream",
//           "Beverages"
//         ],
//         avgRating: 4.5,
//         veg: true,
//         parentId: "2233",
//         avgRatingString: "4.5",
//         }
//     },
//       {
//         info: {
//           id: "36657",
//           name: "The Belgian Waffle Co.",
//           cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
//           locality: "Panjra Pole",
//           areaName: "Ambawadi",
//           costForTwo: "₹200 for two",
//           deliveryTime: 30,
//           cuisines: [
//             "Waffle",
//             "Desserts",
//             "Ice Cream",
//             "Beverages"
//           ],
//           avgRating: 3.9,
//           veg: true,
//           parentId: "2233",
//           avgRatingString: "4.5",
          
//       }
//     },
//       {
//         info: {
//           id: "52630",
//           name: "McDonald's",
//           cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_52630.JPG",
//           locality: "Ellis Bridge",
//           areaName: "Ashram Road",
//           costForTwo: "₹400 for two",
//           deliveryTime: 21,
//           cuisines: [
//             "Burgers",
//             "Beverages",
//             "Cafe",
//             "Desserts"
//           ],
//           avgRating: 4.4,
//           parentId: "630",
//           avgRatingString: "4.4",
//       }
//     },
// ];

// if this was the normal function then the data will not sink automatically with the UI.

    return (
      <div className="body">
        <div className="filter">
            <button 
            className="filter-btn"
            onClick={()=>{
               const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
               );
               setListOfResturant(filteredList)
            }}
            >
             Top Rated Resturants     
        </button>
        </div>
        <div  className= "res-container">

        
        
          {
            listOfResturants.map(restaurant =>(
               <ResturantCard key = {restaurant.info.id} resData={restaurant}/>))
          }
        </div>
        </div >
      
    );
  };

  export default Body;