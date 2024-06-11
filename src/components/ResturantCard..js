
import {CDN_URL} from "../utils/constants"

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
  const ResturantCard = (props) => {
    const {resData} = props;
  
    const{cloudinaryImageId, name, avgRating, costForTwo, cuisines, deliveryTime } = resData?.info;
    
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          src={ CDN_URL+ cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h5 >{cuisines}</h5>
        <h4>{avgRating} stars </h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
            </div>
    );
  };
  export default ResturantCard;