import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password not matching");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Signed In Succesfully");
    navigate("/dashboard");
  }
  return (
    <div>
      {/* student - instructor tab */}
      <div className="flex bg-[#3834348e] p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-[#6356568e] text-[#d5c6c68e]"
              : "bg-transparent text-[#d5c6c68e]"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-[#6356568e] text-[#d5c6c68e]"
              : "bg-transparent text-[#d5c6c68e]"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first and last name */}
        <div className="flex flex-col md:flex-row gap-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
              First name<sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              required
              className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
              Last Name<sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              required
              className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
            />
          </label>
        </div>
        <div className="mt-[20px]">
          {/* email */}
          <label>
            <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
              Email Address<sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              placeholder="Enter Email address"
              onChange={changeHandler}
              value={formData.email}
              name="email"
              required
              className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
            />
          </label>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-[20px]">
          {/* create Password and Confirm Password */}
          <label className="w-full relative">
            <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Pasword"
              onChange={changeHandler}
              value={formData.password}
              name="password"
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
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-[#767373] mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Pasword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              required
              className="bg-[#3834348e] rounded-[0.5rem] text-[white] w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {setShowConfirmPassword ? (
                <FaEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
