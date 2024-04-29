import React from "react";
import "./whyhow.scss";
import featured1 from "../../Images/Feature1.png";
import featured2 from "../../Images/Feature2.png";
import featured3 from "../../Images/Feature3.png";
import featured4 from "../../Images/Feature4.png";
import featured5 from "../../Images/Feature5.png";
import featured6 from "../../Images/Feature6.png";
import featured7 from "../../Images/Feature7.png";
import hand from "../../Images/hand.svg";
import idea from "../../Images/idea.svg";
import { Fade } from "react-awesome-reveal";

const Whyhow = () => {
  return (
    <>
      <div className="whyMain">
        <div className="whyHead">
          <h1>Why Choose AlphaSwap?</h1>
        </div>
        <Fade direction="down">
          <div className="whyMainWork">
            <div className="whyWorkone">
              <div className="whyoneInner">
                <img src={featured1} alt="" />
              </div>
              <div className="whyoneInner">
                <img src={featured2} alt="" />
              </div>
              <div className="whyoneInner">
                <img className="img3-main" src={featured3} alt="" />
                <div className="overlay-image">
                  <img className="img3-sep" src={hand} alt="" />
                </div>
              </div>
              <div className="whyoneInner">
                <img className="img4-main" src={featured4} alt="" />
                <div className="overlay-image">
                  <img className="img4-sep" src={idea} alt="" />
                </div>
              </div>
            </div>
            <div className="whyWorktwo">
              <div className="whytwoInner">
                <img src={featured5} alt="" />
              </div>
              <div className="whytwoInner">
                <img src={featured6} alt="" />
              </div>
              <div className="whytwoInner">
                <img src={featured7} alt="" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Whyhow;
