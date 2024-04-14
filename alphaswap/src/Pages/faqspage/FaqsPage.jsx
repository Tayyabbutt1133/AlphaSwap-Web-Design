import React from 'react'
import './faqspage.scss';
import faqbig from "../../Images/faqsBigBox.png";
import faqsmall from "../../Images/faqssmallbox.png";
import faqrimg from "../../Images/faqrimg.svg";


const FaqsPage = () => {
  return (
      <>
     <div className="mainFaq">
        <div className="faqhead">
          <h1>FAQ Section</h1>
        </div>
        <div className="faqmainInner">
          <div className="Faqleft">
            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqbig} alt="" />
                <div className="faqcontent">
                  <h1>
                    <span>1.</span> What is AlphaSwap?
                  </h1>
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
                  <h1>
                    <span>2.</span> How do I use AlphaSwap?
                  </h1>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h1>
                    <span>3.</span> What are the transaction fees for AlphaSwap?
                  </h1>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h1>
                    <span>4.</span> Lorem Ipsum is simply dummy text of the
                    printing?
                  </h1>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h1>
                    <span>5.</span> Is my wallet and transaction information
                    secure on AlphaSwap?
                  </h1>
                </div>
              </div>
            </div>

            <div className="faqleftInner">
              <div className="faqimg">
                <img src={faqsmall} alt="" />
                <div className="faqcontent">
                  <h1>
                    <span>6.</span> What tokens are supported on AlphaSwap?
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="faqRight">
            <img src={faqrimg} alt="" />
          </div>
        </div>
      </div>
   
      
      </>
  )
}

export default FaqsPage
