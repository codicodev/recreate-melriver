import React, { useEffect, useState } from "react";
import gsap from "gsap";

import IntroOverlay from "../../components/IntroOverlay";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Cases from "../../components/Cases";

const homeAnimation = (completeAnimation) => {
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
      // stagger: {
      //   amount: 0.4,
      // },
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.4,
      stagger: {
        amount: 0.2,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    console.log("animationComplete");
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {!animationComplete ? <IntroOverlay /> : null}
      <Header />
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
