import * as React from "react";
import styles from "./article-preview.module.scss";

const ArticlePreview = () => {
    return (
        <div className={styles.articlePreview}>
            <time className={styles.articlePreviewDate}>Feb 13 2020</time>
            <h3 className={styles.articlePreviewTitle}>Title</h3>
        </div>
    );
};

export default ArticlePreview;
