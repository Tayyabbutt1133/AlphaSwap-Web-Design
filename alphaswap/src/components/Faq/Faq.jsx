import React from "react";
import "./Faq.scss";
import faqbig from "../../Images/faqsBigBox.png";
import faqsmall from "../../Images/faqssmallbox.png";
import faqrimg from "../../Images/faqrimg.svg";
import { Fade } from "react-awesome-reveal";


const Faq = () => {
  return (
    <>
      <div className="mainFaq">
        <div className="faqhead">
          <Fade direction="down">
            <h1>FAQ Section</h1>
            </Fade>
        </div>
        <div className="faqmainInner">
          <Fade direction="left">
          <div className="Faqleft">
            <div className="faqleftInner">
              <div className="faqimg">
                <img  className="faqbigimg" src={faqbig} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>1.</span> What is AlphaSwap?
                  </h2>
                  <p>
                    Welcome to AlphaSwap, your one-stop-shop for all things
                    blockchain. We are a team of experts dedicated to bringing
                    you the latest news, insights, and solutions for your
                    blockchain needs. Blockchain technology is revolutionizing
                    the world, and we want to make sure that you're ahead of the
                    game.
                  </p>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>2.</span> How do I use AlphaSwap?
                  </h2>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>3.</span> What are the transaction fees for AlphaSwap?
                  </h2>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>4.</span> Lorem Ipsum is simply dummy text of the
                    printing?
                  </h2>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>5.</span> Is my wallet and transaction information
                    secure on AlphaSwap?
                  </h2>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h2 className="faqcontenthead">
                    <span>6.</span> What tokens are supported on AlphaSwap?
                  </h2>
                </div>
              </div>
            </div>
            </div>
            </Fade>
          <div className="faqRight">
            <Fade direction="right">
              <img src={faqrimg} alt="" />
              </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
