import React from 'react'
import './works.scss';
import life from '../../Images/Lifecycle.svg';
import worklifecycle from '../../Images/WorkImage.svg';
import { Fade } from "react-awesome-reveal";


const Works = () => {
  return (
      <>
      <div className="worksMain">
      
          <div className="workshead">
          <Fade direction='down'>
            <h1>How it Works </h1>
            </Fade>
          </div>
       
        <div className="lifemain">
        
          <div className="lifeInner">
          <Fade direction='down'>
              <img src="https://alphaswap-1cc1d.web.app/static/media/WorkImage.72a81fea140726541bedbb6fbc89ac82.svg" alt="" />
              </Fade>
            </div>
          </div>
         
      </div>
      </>
  )
}

export default Works
