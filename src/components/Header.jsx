import React from "react";
import TrollFace from "../media/Troll Face.svg";

const Header = function () {
  return (
    <header>
      <div className="main-heading">
        <img src={TrollFace} alt="Troll Face" />
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
};

export default Header;
