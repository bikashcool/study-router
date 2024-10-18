import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly gap-4 text-2xl">
      <Link to="/">
        <img alt="nav-logo" src={logo} width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-5">
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
      <div className="flex gap-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>dashboard</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
