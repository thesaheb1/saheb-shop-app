import React from "react";
import Template from "../Components/Template";

function Login({ SetisLoggedIn }) {
  return (
    <div className="mt-10 md:mt-[80px] bg-[#116D6E] min-h-screen">
      <Template
        title="Welcome Back"
        desc1="Free shipping on any items. Get the best of Shopping and Entertainment with Ecomzy.."
        desc2="Enjoy low prices and great deals."
        formtype="login"
        SetisLoggedIn={SetisLoggedIn}
      />
    </div>
  );
}

export default Login;
