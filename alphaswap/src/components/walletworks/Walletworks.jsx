import React from "react";
import "./walletworks.scss";
import Wallogo1 from "../../Images/Wallogo1.png";
import Wallogo2 from "../../Images/Wallogo2.png";
import Wallogo3 from "../../Images/Wallogo3.png";

const Walletworks = () => {
  return (
    <>
      <div className="WalletWorksMain">
        <div className="walletworkshead">
          <h1>Here's how it works</h1>
        </div>
        <div className="walletworksInner">
          <div className="walletsContent">
            <div className="circleimg1">
              <img src={Wallogo1} alt="" />
            </div>
            <div className="walletsText">
              <h1>Connect Your Wallet</h1>
              <p>
                Add the private keys (of your sub-wallets) to be able to make
                swaps with up to 3 wallets and execute transactions instantly.
                Our platform ensures that your private keys are encrypted and
                secure.
              </p>
            </div>
          </div>

          <div className="walletsContent">
            <div className="circleimg2">
              <img src={Wallogo2} alt="" />
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

          <div className="walletsContent">
            <div className="circleimg3">
              <img src={Wallogo3} alt="" />
            </div>
            <div className="walletsText">
              <h1>Execute Trades!</h1>
              <p>
                Add the private keys (of your sub-wallets) to be able to make
                swaps with up to 3 wallets and execute transactions instantly.
                Our platform ensures that your private keys are encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Walletworks;
