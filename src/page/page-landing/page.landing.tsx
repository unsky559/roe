import "../../shared/shared-styles/style.reset.scss";
import * as React from "react";
import "./page.landing.scss";

export function PageLanding () {
  return (
  <div>
    <div className="globe-container">

      <section id='bannerMain'>
        <div className="banner-main-foreground">
            <div className="top-content">
                <button>Язык</button>
            </div>
            <div className="banner-main">
                <div className="banner-main_horizontal">
                  <p className="banner-pretext">In the Web you could find me us</p>
                  <div className="banner-main_blockContainer">
                    <h1 className="bannerH1">unsky559</h1>
                  </div>
                  <div className="banner-main_links">
                    <a className="link small arrow block" href="#">See CV</a>
                    <a className="link small arrow block" href="#">Contact me</a>
                  </div>
                </div>
                <div className="banner-main_vertical">
                    <div className="content">
                        <h2>Front-end developer</h2>
                    </div>
                </div>
            </div>
          <div className="banner-main_footer-links">
            <a className="link big arrow block" href="#">About me</a>
            <a className="link big arrow block" href="#">Projects</a>
            <a className="link big arrow block" href="#">Blog</a>
            <a className="link big arrow block" href="#">Contact me</a>
          </div>
        </div>
        <div className="banner-main-background">
          
        </div>
      </section>
    </div>
  </div>
  )
}
