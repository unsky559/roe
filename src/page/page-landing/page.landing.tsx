import "../../shared/shared-styles/style.reset.scss";
import * as React from "react";
import "./page.landing.scss";

export function PageLanding() {
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
                                    <a className="link" href="#">See CV</a>
                                </div>
                            </div>
                            <div className="banner-main_vertical">
                                <div className="content">
                                    <h2>Front-end developer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="banner-main_footer-links">
                            <a className="link" href="#">About me</a>
                            <a className="link" href="#">Projects</a>
                            <a className="link" href="#">Contact me</a>
                        </div>
                    </div>
                    <div className="banner-main-background">

                    </div>
                </section>
                <section id="aboutMe">
                    <div className="container">
                        <div className="centerBlock">
                            <div className="row">
                                <div className="title">
                                    <h1 className="name">Kostya Koslyansky</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="photo">

                                </div>
                                <div className="column">
                                    <div className="aboutMe">
                                        <h3 className="heading">About me</h3>
                                        <p>I am a web developer specializing in front end development. I position myself as a responsible person, capable of performing non-standard tasks. In my free time I like to create a web design mokpas. In addition I have expirience of the full-stack web development cycle, including backend development (node.js, PHP) and also setuping the server side (apache, nginx, java server). Also I have experience in creating and using RESTful API.
                                        </p>
                                    </div>
                                    <div className="summary">
                                        <p>Age: 19</p>
                                        <p>Location: Chernigiv, Ukraine</p>
                                        <p>Languages: <br/>
                                            Russian - native <br/>
                                            Ukrainian - native <br/>
                                            English - A2</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
