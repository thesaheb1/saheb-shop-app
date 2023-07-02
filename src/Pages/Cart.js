import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartProducts from "../Components/CartProducts";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-full px-4 mt-10 md:mt-[80px] xl:w-[1152px] min-h-screen flex justify-center items-center mx-auto py-12">
      {cart.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-x-8">
          <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center">
            {cart.map((item, index) => {
              return <CartProducts item={item} key={index} />;
            })}
          </div>

          <div className="w-[90%] md:w-[50%] flex flex-col justify-between items-stretch">
            <div>
              <p className="text-white text-2xl font-bold">Your Cart</p>
              <p className="text-white text-5xl font-bold">Summary</p>
              <p className=" text-white mt-4 text-xl font-bold">Total Items : {cart.length}</p>
            </div>

            <div>
              <p className="text-white mt-4 text-xl font-bold">Total Amount : {`₹${totalAmount}`}</p>
              <button className="w-full my-4 border-b-2 border-white text-white text-3xl py-2 px-4 rounded-xl bg-[#4C0033] hover:bg-[#6e074c] transition-all duration-200 ease-linear">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-white text-2xl font-bold">Your cart is empty</p>
          <NavLink to={"/"}>
            <button className="w-full my-4 border-b-2 border-white text-white text-3xl py-2 px-4 rounded-xl bg-[#4C0033] hover:bg-[#6e074c] transition-all duration-200 ease-linear">SHOP NOW</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
