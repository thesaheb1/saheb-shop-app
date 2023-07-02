import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {BiShow, BiHide} from "react-icons/bi";


function SignupForm({ SetisLoggedIn }) {
  const navigate = useNavigate();
  
  const [isPasswordVisible, SetisPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, SetisConfirmPasswordVisible] =
  useState(true);
  const [accountType, SetaccountType] = useState("student");

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  function Formhandler(event) {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  const FinalData = {
    ...FormData,
    accountType
  }

  function submitHandler(event) {
    if (FormData.password !== FormData.ConfirmPassword) {
      event.preventDefault();
      toast.error("Passwords does not match");
    } else {
      event.preventDefault();
      SetisLoggedIn(true);
      navigate("/");
      toast.success("Account Created");

      console.log(FinalData);
    }
  }

  return (

    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6"
    >
      <div className="p-1 bg-slate-900 w-fit rounded-full flex justify-between items-center gap-2">
        <div onClick={()=>SetaccountType("student")} className={`text-md text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-linear ${accountType==="student"?("bg-gray-700"):("bg-transparent text-white")}`}>General-user</div>
        <div onClick={()=>SetaccountType("instructor")} className={`text-md text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-linear ${accountType==="instructor"?("bg-gray-700"):("bg-transparent text-white")}`}>Prime-user</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            First Name <sup className="text-pink-600">*</sup>
          </p>
          <input
            type="text"
            name="firstname" 
            value={FormData.firstname}
            onChange={Formhandler}
            required
            placeholder="Enter first name"
            className="bg-[rgba(255,255,255,0.2)] border-b-2 border-black  rounded-[0.5rem] text-white placeholder:text-black placeholder:text-opacity-80 w-full p-[12px]"
          />
        </label>
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Last Name <sup className="text-pink-600">*</sup>
          </p>
          <input
            type="text"
            name="lastname"
            value={FormData.lastname}
            onChange={Formhandler}
            required
            placeholder="Enter last name"

            className="bg-[rgba(255,255,255,0.2)] border-b-2 border-black placeholder:text-black placeholder:text-opacity-80  rounded-[0.5rem] text-white w-full  p-[12px]"
          />
        </label>
      </div>
      <div>
        <label className="w-full"> 
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-600">*</sup>
          </p>
          <input
            type="email"
            name="email"
            value={FormData.email}
            onChange={Formhandler}
            required
            placeholder="Enter email address"

            className="bg-[rgba(255,255,255,0.2)] placeholder:text-black placeholder:text-opacity-80 border-b-2 border-black   rounded-[0.5rem] text-white w-full p-[12px]"
          />
        </label>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <label className="w-full relative">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Create Password <sup className="text-pink-600">*</sup>
          </p>
          <input
            type={isPasswordVisible ? "password" : "text"}
            name="password"
            value={FormData.password}
            onChange={Formhandler}
            required
            placeholder="Enter Password"
            className="bg-[rgba(255,255,255,0.2)] placeholder:text-black placeholder:text-opacity-80 border-b-2 border-black  rounded-[0.5rem] text-white w-full p-[12px]"
          />
          <div className="cursor-pointer absolute top-10 right-2 text-2xl text-gray-400"
            onClick={() => {
              SetisPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? <BiShow /> : <BiHide />}
          </div>
        </label>
        <label className="w-full relative">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Confirm Password <sup className="text-pink-600">*</sup>
          </p>
          <input
            type={isConfirmPasswordVisible ? "password" : "text"}
            name="ConfirmPassword"
            value={FormData.ConfirmPassword}
            onChange={Formhandler}
            required
            placeholder="Confirm Password"
            className="bg-[rgba(255,255,255,0.2)] placeholder:text-black placeholder:text-opacity-80 border-b-2 border-black rounded-[0.5rem] text-white w-full p-[12px]"
          />
          <div className="cursor-pointer absolute top-10 right-2 text-2xl text-gray-400"
            onClick={() => {
              SetisConfirmPasswordVisible(!isConfirmPasswordVisible);
            }}
          >
            {isConfirmPasswordVisible ? <BiShow /> : <BiHide />}
          </div>
        </label>
      </div>
      <button className="bg-yellow-500 rounded-[8px]  text-black font-bold p-[8px] mt-4">Create Account</button>
    </form>
  );
}

export default SignupForm;
