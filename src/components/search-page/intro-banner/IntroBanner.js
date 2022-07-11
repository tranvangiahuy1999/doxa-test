import React from "react";
import "./index.css";
function IntroBanner() {
  return (
    <div className="intro-banner">
      <div className="intro-banner__image-wrapper">
        <img src="https://styles.redditmedia.com/t5_2s580/styles/mobileBannerImage_jctxlph7u9c81.png"></img>
      </div>
      <div className="d-flex intro-banner__info">
        <div className="intro-banner__avatar">
          <img src="https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&s=7cf7106da701c2fe71cf4917f429ccf16d84066a"></img>
        </div>
        <div className="intro-banner__title">
          <h1>Dota 2 on Reddit</h1>
          <p className="small-text">r/DotA2</p>
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;
