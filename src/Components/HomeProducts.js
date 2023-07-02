import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { addtowish, removefromwish } from "../redux/slices/WishListSlice";
import { useNavigate } from "react-router-dom";

const HomeProducts = ({ data , isLoggedIn }) => {
  const { cart } = useSelector((state) => state);
  const { wish } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const removeFromCart = () => {
    dispatch(remove(data.id));
    toast.error("Removed from Cart");
  };
  const addToCart = () => {
    if(isLoggedIn)
    {
      dispatch(add(data));
      toast.success("Added to Cart");
    }
    else{
      toast.error("Please Login First");
      navigate("/login");
    }
  };
  const likedHandler = () => {
    if(isLoggedIn)
    {
       if (wish.some((c) => c.id === data.id)) {
      dispatch(removefromwish(data.id));
      toast.error("Removed from your Wishlist");
    } else {
      dispatch(addtowish(data));
      toast.success("Added to your Wishlist");
    }
    }
    else{
      toast.error("Please Login First");
      navigate("/login");
    }
   
  };
  return (
    <div className="relative hover:scale-105 hover:shadow-[0px_0px_35px_10px_#4C0033,0px_3px_8px_0px_#00000024] transition-all duration-300 ease-in cursor-pointer group z-9 w-[90%] md:w-[250px] h-[400px] itembg border-b-4 border-green-950 flex flex-col justify-center gap-y-2 items-center rounded-3xl p-4">
      <div className="mt-12">
        <img src={data.image} alt="" className="h-[180px]" />
      </div>
      <div className="my-2">
        <p className="text-start text-[1.1rem] font-bold mb-2">{`${data.title.substring(
          0,
          17
        )}...`}</p>
        <p className="text-start text-sm">{`${data.description.substring(
          0,
          51
        )}...`}</p>
      </div>

      <div className="w-full flex justify-between items-center gap-x-8 my-1">
        <p className="text-start text-green-900 font-bold">{`₹${data.price}`}</p>
        {cart.some((c) => c.id === data.id) ? (
          <button
            onClick={removeFromCart}
            className="border-2 text-xs font-bold bg-transparent rounded-3xl py-1 px-2 imp text-white border-white transition-all duration-200 ease-linear"
          >
            {" "}
            REMOVE ITEM{" "}
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="border-2 text-xs font-bold rounded-3xl py-1 px-2 bg-[#B73E3E] text-white border-white transition-all duration-200 ease-linear"
          >
            ADD TO CART
          </button>
        )}
      </div>

      <IconContext.Provider value={{ size: "24px" }}>
        <div
          onClick={likedHandler}
          className="absolute top-4 right-4 cursor-pointer bg-slate-500 p-1 rounded-full"
        >
          {wish.some((c) => c.id === data.id) ? (
            <FcLike />
          ) : (
            <FcLikePlaceholder />
          )}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default HomeProducts;
