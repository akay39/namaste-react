import{LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    
   const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between shadow-lg bg-orange-200">
        <div className="logo-container">
          <img
            className="w-32 h-[100%] rounded-lg"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 m-2 ">
            <li className="p-4">Status:{onlineStatus ? " Online" : " Offline"}</li>
            <li className="p-4"><Link to="/">Home</Link></li>
            <li className="p-4"><Link to="/about">About Us</Link></li>
            <li className="p-4"><Link to="/contact">Contact Us</Link></li>
            <li className="p-4"><Link to="/cart">Cart</Link></li>
            <li className="p-4"><Link to="/grocery">Grocery</Link></li>
            <button className="login-btn" onClick={()=>{
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
               
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;