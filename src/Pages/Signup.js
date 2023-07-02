import React from "react";
import Template from "../Components/Template";

function Signup({ SetisLoggedIn }) {
  return (
    <div className="mt-10 md:mt-[80px] bg-[#554f83] min-h-screen">
      <Template
        title="Latest trends in Fashion. Easy & Fast Delivery. Great Offers."
        desc1="Free shipping on any items. Get the best of Shopping and Entertainment with Ecomzy..."
        desc2="Enjoy low prices and great deals."
        formtype="signup"
        SetisLoggedIn={SetisLoggedIn}
      />
    </div>
  );
}

export default Signup;
