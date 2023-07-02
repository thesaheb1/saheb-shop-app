import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";
import loginImg from "../assets/login.jpg";
import signupImg from "../assets/signup.jpg";

const Template = ({ title, desc1, desc2, formtype, SetisLoggedIn }) => {
  return (
    <div className="flex justify-center md:justify-between items-start text-black w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 z-9">
      <div className="w-11/12 max-w-[450px] mt-0 md:mt-auto">
        <div>
          <h1 className="font-semibold text-[1.2rem] md:text-[1.875rem] leading-[2.375rem]">{title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] leading-[1.625rem] mt-4"> 
            <span className="text-white">{desc1}</span>
            <br />
            <span className="text-blue-400 italic">{desc2}</span>
          </p>
         
        </div>
        {formtype === "login" ? (
          <LoginForm SetisLoggedIn={SetisLoggedIn} />
        ) : (
          <SignupForm SetisLoggedIn={SetisLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2 text-white">
          <div className="w-full h-[1px] bg-white"></div>
          <p>or</p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium border border-white px-[12px] py-[8px] gap-x-2 mt-5">
          <p>
            <FcGoogle />
          </p>
          <p className="text-white">Sign in with Google</p>
        </button>
      </div>

      <div className="hidden md:block relative w-11/12 max-w-[450px] z-9">
        <img width={558} height={504} src={frame} alt="background"/>
        {formtype==="login" ? ( <img className="absolute -top-4 right-4" width={558} height={504} src={loginImg} alt="background" />) : (<img className="absolute -top-4 right-4" width={558} height={504} src={signupImg} alt="background" />)}
      </div>
    </div>
  );
};
export default Template;
