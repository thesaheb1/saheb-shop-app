import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/sitelogo.png";

const Navbar = ({ isLoggedIn, SetisLoggedIn }) => {
  const { cart, wish } = useSelector((state) => state);
  const navigate = useNavigate();

  function loginHandler() {
    navigate("/login");
  }
  function signupHandler() {
    navigate("/signup");
  }

  function logoutHandler() {
    navigate("/");
    SetisLoggedIn(false);
  }
  return (
    <div className="bg-[#4C0033] fixed top-0 left-0 right-0 z-10">
      <div className="w-full xl:w-[1152px] h-[60px] md:h-[80px] flex justify-between items-center mx-auto px-4">
        <div >
          <NavLink to={"/"}>
            <img src={logo} className="w-[40px] md:w-[60px]" alt="" />
          </NavLink>
        </div>
        <div className="relative flex justify-center items-center gap-4">
          <ul className="flex gap-x-4">
            {!isLoggedIn && (
              <li
                onClick={loginHandler}
                className="border-b-2 cursor-pointer text-white text-[0.9rem] md:text-[1rem] flex justify-center items-center border-white w-[70px] h-[40px] md:w-fit md:h-fit md:py-2 md:px-4 rounded-xl bg-[#FF0060]  hover:bg-[#a30542] transition-all duration-200 ease-linear"
              >
                Login
              </li>
            )}
            {!isLoggedIn && (
              <li
                onClick={signupHandler}
                className="border-b-2 cursor-pointer text-white text-[0.9rem] md:text-[1rem] flex justify-center items-center border-white w-[70px] h-[40px] md:w-fit md:h-fit md:py-2 md:px-4 rounded-xl bg-[#FF0060] hover:bg-[#a30542] transition-all duration-200 ease-linear"
              >
                SignUp
              </li>
            )}
            {isLoggedIn && (
              <li
                onClick={logoutHandler}
                className="border-b-2 cursor-pointer text-white text-[0.9rem] md:text-[1rem] flex justify-center items-center border-white w-[70px] h-[40px] md:w-fit md:h-fit md:py-2 md:px-4 rounded-xl bg-[#FF0060] hover:bg-[#a30542] transition-all duration-200 ease-linear"
              >
                Logout
              </li>
            )}
          </ul>
          {isLoggedIn && (
            <IconContext.Provider value={{ color: "white", size: "24px" }}>
              <NavLink to={"/wishlist"}>
                <div className="cursor-pointer">
                  {wish.length > 0 ? <FcLike /> : <FcLikePlaceholder />}
                </div>
              </NavLink>
            </IconContext.Provider>
          )}

          {cart.length > 0
            ? isLoggedIn && (
                <IconContext.Provider
                  value={{ color: "#9376E0", size: "24px" }}
                >
                  <NavLink to={"/cart"}>
                    <div className="cursor-pointer">
                      <FaShoppingCart />
                    </div>
                  </NavLink>
                </IconContext.Provider>
              )
            : isLoggedIn && (
                <IconContext.Provider value={{ color: "white", size: "24px" }}>
                  <NavLink to={"/cart"}>
                    <div className="cursor-pointer">
                      <FaShoppingCart />
                    </div>
                  </NavLink>
                </IconContext.Provider>
              )}
          <NavLink to={"/cart"}>
            {cart.length > 0 && isLoggedIn && (
              <p className="text-white text-[0.8rem] font-bold flex justify-center items-center bg-green-700 w-6 h-6 rounded-full absolute top-0 right-1 animate-bounce">
                {cart.length}
              </p>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
