import React from "react";
import "./footer.scss";
import foot1 from "../../Images/foot1img.svg";
import govern from "../../Images/Govern.png";
import handfree from "../../Images/Handfree.png";
import devimg from "../../Images/Dev.svg";
import subs from "../../Images/Subscribe.svg";
import {
  FaMedium,
  FaReddit,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";




const Footer = () => {
  return (
    <>
      
      <hr className="spacefooter" />

      {/* footer  */}
      <div className="footer"> 
       
       
        <div className="sb_footer">
          {/* sb_footer-links */}
          <Fade direction="left">
          <div className="sb_footer-links">

            {/* sb_footer-links-div */}
            <div className="sb_footer-links-div ">
              <div className="footerhead">
                <img src={foot1} alt="" />
                <h4>Protocols</h4>
              </div>

              <div className="footer-inner-link-div">
              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
                </a>
                </div>
            </div>

            <div className="sb_footer-links-div ">
              <div className="footerhead">
                <img src={govern} alt="" />
                <h4>Governance</h4>
              </div>
      
              <div className="footer-inner-link-div">
              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
                </a>
                </div>
            </div>

            <div className="sb_footer-links-div">
              <div className="footerhead">
                <img src={handfree} alt="" />
                <h4>Support</h4>
              </div>
              <div className="footer-inner-link-div">
              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
                </a>
                </div>
            </div>

            <div className="sb_footer-links-div ">
              <div className="footerhead">
                <img src={devimg} alt="" />
                <h4>Developers</h4>
              </div>
              <div className="footer-inner-link-div">
              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
              </a>

              <a href="#">
                <p className="aligned">Liquidity Protocol 1</p>
                </a>
                </div>
            </div>

            <div className="footer-subscribe">
              <div className="footer-subs-Head">
                <img src={subs} alt="" />
                <h1>Subscribe to Alpha Swap Newsletter</h1>
              </div>
              <div className="footerPara">
                <h4>Get the latest news and update</h4>
              </div>
              <div className="footer-subs-btn">
                <button>
                  Subscribe
                </button>
                </div>
               
              {/* sb_footer-below-links */}
              <div className="sb_footer-below-links">
                <FaMedium className="icons" size={18} />
                <FaDiscord className="icons" size={18}  />
                <FaLinkedinIn className="icons" size={18}  />
                <FaReddit className="icons" size={18}  />
                <FaTwitter className="icons" size={18}  />
                <FaYoutube className="icons" size={18}  />
                <FaGithub className="icons" size={18}  />
              </div>
            </div>
          </div>
          </Fade>
          <hr className="spacefooter" />
          {/* sb_footer-below */}

          <div className="sb_footer-below ">
            <Fade direction="right">
            <p>@2022 Alpha Swap, All Righs Reserved.</p>
            <p>ENS: Alpha Swap.eth</p>
              <p>BUIDL@ETHNewYork 2019</p>
              </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
