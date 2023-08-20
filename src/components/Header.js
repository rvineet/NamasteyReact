import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [buttonVaraible, setButtonVariable] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const contextData = useContext(UserContext);
  console.log(contextData); 
   
  //subscribing to tghe store
   const cartItems = useSelector((store) => store.cart.items)
   console.log(cartItems)

  return (
    <div className="flex justify-between bg-blue-50 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6">
          <li className="px-5">Online Status:- {onlineStatus? "✅" : "🔴"}</li>
          <li className="px-5"><Link to="/">Home</Link></li>
          <li className="px-5"><Link to="/about">About Us</Link></li>
          <li className="px-5"><Link to="/contact">Contact Us</Link></li>
          <li className="px-5"><Link to="/grocery">Grocery</Link></li>
          <li className="px-5 font-bold text-xl"><Link to ="/cart">Cart📦 - ({cartItems.length})</Link></li>
          <div> <button
            className="login px-5"
            onClick={() => {
              const currentState =
                buttonVaraible == "Login" ? "Logout" : "Login";
              setButtonVariable(currentState);
            }}
          >
            {buttonVaraible}
          </button>
          </div>
          <li className="px-5 font-bold">{contextData.loggedInUser}</li>
         
        </ul>
      </div>
    </div>
  );
};
export default Header;
