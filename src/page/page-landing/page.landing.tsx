import * as React from "react";
import "./page.landing.scss";
import ArticlePreview from "../../components/article-preview/article-preview";

export function PageLanding() {
    return (
        <div className="page-landing">
            <section className="banner-type">
                <div className="container">
                    <div className="col">
                        <h1>Welcome to goog.men</h1>
                        <p>I have a lot of interesting ideas. And I also have this cute domain name. So why not combine this things?</p>
                    </div>
                </div>
            </section>
            <section className="last-articles">
                <div className="container">
                    <h2>Last articles</h2>
                    <div className="articles-list">
                        <ArticlePreview/>
                        <ArticlePreview/>
                        <ArticlePreview/>
                    </div>
                </div>
            </section>
        </div>
)
}
