import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";

const App = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", 0, { css: { visibility: "visible" } });

    const tl = gsap.timeline();

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.8,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        delay: -0.6,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.4,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  return (
    <div>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
};

export default App;
