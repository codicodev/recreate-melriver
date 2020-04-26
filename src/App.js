import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

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

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //prevent flash body on refresh
    gsap.to("body", 0, { css: { visibility: "visible" } });
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandlResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandlResize);

    return () => {
      window.removeEventListener("resize", debouncedHandlResize);
    };
  });
  console.log("app loaded");
  return (
    <>
      <Header dimensions={dimensions} />
      <main>
        <Switch>
          {routes.map(({ path, Component, name }) => (
            <Route key={name} exact path={path}>
              <Component />
            </Route>
          ))}
          <Route exact render={() => <div>Not found</div>} />
        </Switch>
      </main>
      <Navigation />
    </>
  );
};

export default App;
