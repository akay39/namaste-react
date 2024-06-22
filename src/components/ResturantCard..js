
import {CDN_URL} from "../utils/constants"


  
  const ResturantCard = (props) => {
    const {resData} = props;
  
    const{cloudinaryImageId, name, avgRating, costForTwo, cuisines } = resData?.info;
    
    return (
      <div className="m-6 p-2 w-[250px] rounded-lg bg-white " >
        <img
          className="rounded-md hover:w-[240px] h-[90%] "
          src={ CDN_URL+ cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h5 className="font-light text-sm" >{cuisines.join(", ")}</h5>
        <h4 className="font-semibold">{avgRating} stars </h4>
        <h4 className="font-extrabold">{costForTwo}</h4>
        <h4>{resData?.info?.sla.deliveryTime} minutes</h4>
            </div>
    );
  };
  export default ResturantCard;