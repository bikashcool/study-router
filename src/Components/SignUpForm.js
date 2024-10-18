import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      {/* student - instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        {/* first and last name */}
        <div>
          <label>
            <p>
              First name<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              required
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              required
            />
          </label>
        </div>
        {/* email */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter Email address"
            onChange={changeHandler}
            value={formData.email}
            name="email"
            required
          />
        </label>

        <div>
          {/* create Password and Confirm Password */}
          <label>
            <p>
              Create Password
              <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Pasword"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              required
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password
              <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Pasword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              required
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
