import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const Landing_page = () => {
  let email = useRef();
  let pwd = useRef();
  let navigate = useNavigate();

  function click() {
    if (
      email.current.value === "Pankaj@gmail.com" &&
      pwd.current.value === "123"
    ) {
      navigate(`/adminportal`);
    } else {
      window.alert("Enter the correct details");
    }
  }
  return (
    <>
      <div id="mainbody">
        <div id="containerbody">
          <div id="loginheading" className="loginbox">
            <h3>Login details</h3>
          </div>
            <div id="email" className="loginbox">
              <input type="email" placeholder="Enter your email" ref={email} />
            </div>
            <div id="pwd" className="loginbox">
              <input
                type="password"
                placeholder="Enter your password"
                ref={pwd}
              />
            </div>
            <div id="loginbutton" className="loginbox">
              <button onClick={click}>Login</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Landing_page;
