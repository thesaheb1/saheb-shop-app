import React from "react";
import { useSelector } from "react-redux";
import WishProducts from "../Components/WishProducts";
import { NavLink } from "react-router-dom";

const WishList = ({isLoggedIn}) => {
  const { wish } = useSelector((state) => state);
  return (
    <div className="w-full mt-10 md:mt-[80px] xl:w-[1152px] min-h-screen mx-auto">
     {wish.length > 0 && <div>
        <h1 className="text-white text-5xl font-bold p-8">Your WishList❤️</h1>
      </div>}
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto pb-12">
        {wish.length > 0 ? (
          wish.map((item, index) => {
            return <WishProducts item={item} key={index} isLoggedIn={isLoggedIn} />;
          })
        ) : (
          <div className="min-h-screen flex flex-col justify-center items-center">
            <p className="text-white text-2xl font-bold">
              Your WishList is empty
            </p>
            <NavLink to={"/"}>
              <button className="w-full my-4 bg-[#4C0033] hover:bg-[#6e074c] border-b-2 border-white text-white text-3xl py-2 px-4 rounded-xl transition-all duration-200 ease-linear">
                SHOP NOW
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
