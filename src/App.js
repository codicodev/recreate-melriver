import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
  {
    path: "/",
    Component: Home,
    name: "Home",
  },
  {
    path: "/about",
    Component: About,
    name: "About",
  },
];

const App = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //prevent flash body on refresh
    gsap.to("body", 0, { css: { visibility: "visible" } });
  }, []);

  return (
    <>
      <Header />
      <main>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} exact path={path}>
            <Component />
          </Route>
        ))}
      </main>
    </>
  );
};

export default App;
