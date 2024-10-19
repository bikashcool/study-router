import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center max-w-[1160px] w-11/12 py-4 mx-auto">
      <Link to="/">
        <img alt="nav-logo" src={logo} width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="border border-[#3e3c3c8f] rounded-[8px] bg-[#1c2129] px-[12px] py-[8px] text-[#8c8686]">
              Log In
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="border border-[#3e3c3c8f] rounded-[8px] bg-[#1c2129] px-[12px] py-[8px] text-[#8c8686]">
              Dashboard
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="border border-[#3e3c3c8f] rounded-[8px] bg-[#1c2129] px-[12px] py-[8px] text-[#8c8686]"
            >
              Log Out
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="border border-[#3e3c3c8f] rounded-[8px] bg-[#1c2129] px-[12px] py-[8px] text-[#8c8686]">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
