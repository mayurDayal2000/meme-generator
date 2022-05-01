import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./css/main.css";
import "./css/app.scss";

const App = function () {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
};

export default App;
