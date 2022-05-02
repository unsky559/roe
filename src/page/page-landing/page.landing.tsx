import * as React from "react";
import Button from "../../components/button/button";
import "./page.landing.scss";

export function PageLanding() {
    return (
        <div className="page-landing">
            <section className="banner-type">
                <div className="container">
                    <h1>My name is UNSKY559</h1>
                    <div className="btn-links">
                        <Button>Go to blog</Button>
                        <Button>Contact me</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
