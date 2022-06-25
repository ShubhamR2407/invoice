import React from "react";
import "./Title.css";
import Logo from "./TitleFiles/Logo";
import Address from "./TitleFiles/Address";
import Contact from "./TitleFiles/Contact";

function Title() {
  return (
    <div className="title">
      <div className="title__div">
        {" "}
        <Logo />
      </div>
      <div className="title__div">
        <Address />
      </div>
      <div className="title__div">
        <Contact />
      </div>
    </div>
  );
}

export default Title;
