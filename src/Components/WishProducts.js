import React from "react";
import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removefromwish } from "../redux/slices/WishListSlice";
import { toast } from "react-hot-toast";
import { add } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
const WishProducts = ({ item, isLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const addToCart = () => {
    if(isLoggedIn)
    {
       if (!cart.some((c) => c.id === item.id)) {
      dispatch(add(item));
      toast.success("Cart added successfully");
      navigate("/cart");
       } 
       else{
        
        navigate("/cart");
    }
    }
    else{ 

      navigate("/login");
      toast.error("Please Login First");

    }
   
    
  };

  const removeFromWish = () => {
    dispatch(removefromwish(item.id));
    toast.error("Removed from your Wishlist");
  };
  return (
    <div className="relative hover:scale-105 hover:shadow-[0px_0px_35px_10px_#4C0033,0px_3px_8px_0px_#00000024] transition-all duration-300 ease-in z-9 w-[90%] md:w-[250px] h-[400px] itembg border-b-4 border-green-950 flex flex-col justify-between items-center rounded-3xl p-4">
      <div className="mt-12">
        <img src={item.image} alt="" className="h-[180px]" />
      </div>
      <div className="my-2">
        <p className="text-start text-[1.1rem] font-bold mb-2">{`${item.title.substring(
          0,
          17
        )}...`}</p>
        <p className="text-start text-sm">{`${item.description.substring(
          0,
          51
        )}...`}</p>
      </div>
      <IconContext.Provider value={{ size: "24px", color: "brown" }}>
        <div
          onClick={removeFromWish}
          className="absolute top-4 right-4 cursor-pointer bg-red-300 p-1 rounded-full"
        >
          <MdDelete />
        </div>
      </IconContext.Provider>

      <button
        onClick={addToCart}
        className="w-full bg-[#0a4142] border-b-2 border-black text-white text-xl py-1 px-2 rounded-xl hover:bg-transparent hover:text-black  transition-all duration-200 ease-linear"
      >
        <p className="text-center">Buy Now</p>
      </button>
    </div>
  );
};

export default WishProducts;
