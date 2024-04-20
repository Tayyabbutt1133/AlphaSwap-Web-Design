import React from "react";
import "./wallets.scss";
import walletImg from '../../Images/wallet.png';
import { Fade } from "react-awesome-reveal";

const Wallets = () => {
  return (
    <>
      <div className="walletsMain">
        <Fade delay={900} >
        <div className="walletMainInner">
          <div className="leftWallet">
            <h1>ALPHA SWAP PRO</h1>
            <h2>Multi Wallets</h2> 
            <p>Experience the next level of decentralized trading with ALPHASWAP Pro (Multi-wallet trading). Our platform allows you to purchase tokens with up to 3 wallets at once, making it easier and more convenient to execute trades. With the Multi-Wallet trading functionality of ALPHASWAP Pro, you can swap tokens faster, safer, and with more efficiency.
</p>
          </div>
          <div className="rightWallet">
            <img src={walletImg} alt="" />
          </div>
          </div>
          </Fade>
      </div>
      
    </>
  );
};

export default Wallets;
