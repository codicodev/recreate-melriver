import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";

import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //prevent flash body on refresh
    gsap.to("body", 0, { css: { visibility: "visible" } });
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
