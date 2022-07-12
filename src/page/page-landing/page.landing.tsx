import * as React from "react";
import styles from "./page.landing.module.scss";
import container from "../../shared/shared-styles/style.container.module.scss";
import ArticlePreview from "../../components/article-preview/article-preview";

export function PageLanding() {
    return (
        <div className={styles.pageLanding}>
            <section className={styles.bannerType}>
                <div className={container.container}>
                    <div className={styles.col}>
                        <h1>Welcome to goog.men</h1>
                        <p>I have a lot of interesting ideas. And I also have this cute domain name. So why not combine this things?</p>
                    </div>
                </div>
            </section>
            <section>
                <div className={container.container}>
                    <h2>Last articles</h2>
                    <div>
                        <ArticlePreview/>
                        <ArticlePreview/>
                        <ArticlePreview/>
                    </div>
                </div>
            </section>
        </div>
)
}
