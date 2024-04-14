import React from 'react'
import './whyhow.scss';
import featured1 from '../../Images/Feature1.png';
import featured2 from '../../Images/Feature2.png';
import featured3 from '../../Images/Feature3.png';
import featured4 from '../../Images/Feature4.png';
import featured5 from '../../Images/Feature5.png';
import featured6 from '../../Images/Feature6.png';
import featured7 from '../../Images/Feature7.png';
import feat3img from '../../Images/Feature3img.svg';
import feat4img from '../../Images/Feature4img.svg';

const Whyhow = () => {
  return (
      <>
          <div className="whyMain">
              <div className="whyHead">
                  <h1>Why Choose AlphaSwap?</h1>
              </div>
              <div className="whyMainWork">
                  <div className="whyWorkone">
                      <div className="whyoneInner">
                          <img src={featured1} alt="" />
                      </div>
                      <div className="whyoneInner">
                          <img src={featured2} alt="" />
                      </div>
                      <div className="whyoneInner">
                          <img src={featured3} alt="" />
                      </div>
                      <div className="whyoneInner">
                          <img src={featured4} alt="" />
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
          </div>
      </>
  )
}

export default Whyhow
