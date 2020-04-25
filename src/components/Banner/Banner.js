import React from "react";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Front End Development</span>
            </div>
            <div className="line">
              <span>is what i do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about me <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
