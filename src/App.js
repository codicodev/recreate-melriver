import React, { useEffect } from "react";
import "./styles/App.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";

const App = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Cases />
    </div>
  );
};

export default App;
