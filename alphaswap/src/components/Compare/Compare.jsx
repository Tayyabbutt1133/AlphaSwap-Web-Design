import React from "react";
import "./Compare.scss";
import alphaswap from "../../Images/swap.png";
import uniSwap from "../../Images/horse.png";
import kibaSwap from "../../Images/fire.png";
import maestro from "../../Images/Mrgb.svg";

const Compare = () => {
  return (
    <>
      <div className="compareMain">
      <div className="compareMain-head">
          <h2>Comparison of AlphaSwap with others</h2>
        </div>
        <div className="compareMain-inner">
          <div className="compare-row">
            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>

            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>

            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>

            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>

            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>

            <div className="compare-row-inner">
              <div className="compare-inner-row-text">
                <h3>Ease of use</h3>
                <h3>Fast</h3>
                <h3>Slow</h3>
                <h3>Mid</h3>
                <h3>Fast</h3>
              </div>
            </div>
          </div>
          <div className="compare-coln">
            <div className="compare-column-inner">
              <div className="compare-column-head">
                <div className="compare-column-img1">
                  <img src={alphaswap} alt="" />
                </div>
                <div className="compare-column-innerhead">
                  <h2>Alpha Swap</h2>
                </div>
              </div>

              <div className="compare-inner-column-text"></div>
            </div>
            <div className="compare-column-inner">
              <div className="compare-column-head">
                <div className="compare-column-img2">
                  <img src={uniSwap} alt="" />
                </div>
                <div className="compare-column-innerhead">
                  <h2>Alpha Swap</h2>
                </div>
              </div>

              <div className="compare-inner-column-text"></div>
            </div>
            <div className="compare-column-inner">
              <div className="compare-column-head">
                <div className="compare-column-img3">
                  <img src={kibaSwap} alt="" />
                </div>
                <div className="compare-column-innerhead">
                  <h2>Alpha Swap</h2>
                </div>
              </div>

              <div className="compare-inner-column-text"></div>
            </div>
            <div className="compare-column-inner">
              <div className="compare-column-head">
                <div className="compare-column-img4">
                  <img src={maestro} alt="" />
                </div>
                <div className="compare-column-innerhead">
                  <h2>Alpha Swap</h2>
                </div>
              </div>

              <div className="compare-inner-column-text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
