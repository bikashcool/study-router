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
      <form onSubmit={submitHandler}>
        <label>
          Email Address <sup>*</sup>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email"
          name="email"
          required
        />
        <label>
          Password <sup>*</sup>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          placeholder="Enter Password"
          name="password"
          onChange={changeHandler}
          required
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
