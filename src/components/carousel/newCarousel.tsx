// @ts-nocheck
import React from 'react';
import ReactCoverCarousel from "react-cover-carousel"

import {ReactComponent as LeftArrow} from "../../assets/logo/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../assets/logo/rightArrow.svg";

import leftLogo from "../../assets/photo/logo8.png"
import centerLogo from "../../assets/photo/logo9.png"
import rightLogo from "../../assets/photo/logo10.png"
import Coverflow from "./cover";

function NewCarousel() {
    const allOfYourImages = [
        <img src={leftLogo} alt="leftLogo"/>,
        <img src={centerLogo} alt="centerLogo"/>,
        <img src={rightLogo} alt="rightLogo"/>
    ];
    /*    return (
          <ReactCoverCarousel
              navigation={true}
              enableHeading={true}
              PreviousButton={<LeftArrow/>}
              NextButton={<RightArrow/>}

          >
              {allOfYourImages}
          </ReactCoverCarousel>*/
    return (
        <Coverflow
            width="960"
            height="500"
            clickable={true}
            navigation
        >
            {allOfYourImages}
        </Coverflow>
    )

}

export default NewCarousel;