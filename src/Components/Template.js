import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="max-w-[1160px] flex w-11/12 py-12 mx-auto justify-between gap-x-12 gap-y-1">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-[1.875rem] leading-9 font-semibold text-[#a09d9d]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-[#6f6565]">{desc1}</span>
          <span className="text-blue-300 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full my-4 items-center gap-x-2">
          <div className="w-full h-[1px] bg-[#8f8a8a]"></div>
          <p className="leading-[1.375rem] text-[#8f8a8a] font-medium">OR</p>
          <div className="w-full h-[1px] bg-[#8f8a8a]"></div>
        </div>

        <button
          className="flex w-full justify-center font-medium text-[#8f8a8a] 
        items-center gap-x-2 border border-[#8f8a8a] rounded-lg mt-6 px-[12px] py-[8px]"
        >
          <FcGoogle />
          Sign Up with Google
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          alt="bg-frame"
          src={frameImage}
          width={558}
          height={504}
          loading="lazy"
        />
        <img alt="bg-img" className="-top-4 right-4 absolute rounded-lg" src={image} width={558} height={504} loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
