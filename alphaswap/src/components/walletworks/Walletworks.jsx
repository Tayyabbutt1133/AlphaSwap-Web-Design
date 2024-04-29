import React from "react";
import "./walletworks.scss";
import Wallogo1 from "../../Images/Wallogo1.png";
import Wallogo2 from "../../Images/Wallogo2.png";
import Wallogo3 from "../../Images/Wallogo3.png";
import rightArrow from "../../Images/rightArrow.svg";
import upArrow from "../../Images/upperArrow.svg";
import { Fade } from "react-awesome-reveal";

const Walletworks = () => {
  return (
    <>
      <div className="WalletWorksMain">
        <div className="walletworkshead">
          <Fade direction="down">
            <h1>Here's how it works</h1>
          </Fade>
        </div>
        <Fade direction="up">
          <div className="walletworksInner">
            <div className="walletsContent">
              <div className="circleimg1">
                <img src={Wallogo3} alt="" />
              </div>
              <div className="walletsText">
                <h1>Connect Your Wallet</h1>
                <p>Visit the dapp for ALPHASWAP Pro. </p>
              </div>
            </div>
            {/* <img className="arrow" src={rightArrow} alt="" /> */}
            <div className="walletsContent">
              <div className="circleimg2">
                <img src={Wallogo1} alt="" />
              </div>
              <div className="walletsText">
                <h1>Add Private Keys</h1>
                <p>
                  Add the private keys (of your sub-wallets) to be able to make
                  swaps with up to 3 wallets and execute transactions instantly.
                  Our platform ensures that your private keys are encrypted and
                  secure.
                </p>
              </div>
            </div>
            {/* <img className="arrow" src={upArrow} alt="" /> */}
            <div className="walletsContent">
              <div className="circleimg3">
                <img src={Wallogo2} alt="" />
              </div>
              <div className="walletsText">
                <h1>Execute Trades!</h1>
                <p>
                  Add the private keys (of your sub-wallets) to be able to make
                  swaps with up to 3 wallets and execute transactions instantly.
                  Our platform ensures that your private keys are encrypted and
                  secure.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Walletworks;
