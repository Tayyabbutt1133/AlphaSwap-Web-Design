import React from "react";
import "./main.scss";
import mainAnima from "../../Images/MainAnimation.svg";
import numspace from "../../Images/numspace.png";

const Main = () => {
  return (
    <>
      <div className="outsideMain">
        <div className="main">
          <div className="leftmain">
            <div className="leftmainhead">
              <h1>DeFi Swap - Reimagined</h1>
            </div>
            <div className="leftmainpara">
              <p>
                Swap smarter, not harder - with the most advanced and
                user-friendly DeFi Swap platform
              </p>
            </div>
            <div className="leftmainbtn">
              <button>
                <a href="">Start Swapping Now</a>
              </button>
            </div>
          </div>
          <div className="rightmain">
            <img  src={mainAnima} alt="" />
          </div>
        </div>
        <div className="statistics">
          <div className="statsNum">
            <div className="statsNumChild">
              <h1>345</h1>
              <p>Liquidity sources</p>
            </div>
            <div className="statsNumChild">
              <h1>$281B+</h1>
              <p>Total volume</p>
            </div>
            <div className="statsNumChild">
              <h1>4.4M+</h1>
              <p>Total wallets</p>
            </div>
            <div className="statsNumChild">
              <h1>28.7M+</h1>
              <p>Total trades</p>
            </div>
                  </div>
                  <div className="statsImg">
            <img src={numspace} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
