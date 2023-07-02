import React from "react";
import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/slices/CartSlice";

const CartProducts = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
      dispatch(remove(item.id));
  }
  return (
    <div className="w-full hover:scale-105 hover:shadow-[0px_0px_35px_10px_#4C0033,0px_3px_8px_0px_#00000024] transition-all duration-300 ease-in z-9 pt-4 flex-col md:flex-row itembg px-4 rounded-3xl border-b-4 border-green-950 flex justify-between items-center md:items-start gap-x-8 mb-8 pb-8">
      <div>
        <img src={item.image} alt="" className="max-w-[180px] mx-4" />
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="text-start text-[1.5rem] font-bold mb-2">{`${item.title}`}</p>
        <p className="text-start text-xl">{`${item.description.substring(0,60)}...`}</p>
        <div className="flex justify-between items-center">
          <p className="text-start text-green-700 text-xl font-bold">{`₹${item.price}`}</p>
          <IconContext.Provider value={{ size: "24px", color:"brown" }}>
            <div onClick={removeFromCart} className="cursor-pointer bg-red-300 p-1 rounded-full">
              <MdDelete />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
