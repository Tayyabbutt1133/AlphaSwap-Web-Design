import React from 'react'
import './works.scss';
import life from '../../Images/Lifecycle.svg';

const Works = () => {
  return (
      <>
          <div className="worksMain">
              <div className="workshead">
                <h1>How it Works </h1>
              </div>
              <div className="lifemain">
                  <div className="lifeInner">
                      <img src={life} alt="" />
                  </div>
              </div>
      </div>
      </>
  )
}

export default Works
