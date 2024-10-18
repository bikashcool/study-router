import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign Up with Google</button>
      </div>

      <div>
        <img
          alt="bg-frame"
          src={frameImage}
          width={558}
          height={504}
          loading="lazy"
        />
        <img alt="bg-img" src={image} width={558} height={504} loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
