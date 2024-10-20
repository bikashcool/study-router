import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };



  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-500">*</sup>
          </p>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email"
          name="email"
          required
          className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
        />
        <label className="w-full relative">
          <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
            Password <sup className="text-red-500">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            required
            className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <FaEyeSlash fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
