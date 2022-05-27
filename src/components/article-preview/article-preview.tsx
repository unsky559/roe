import * as React from "react";
import "./article-preview.scss";

const ArticlePreview = () => {
    return (
        <div className="article-preview">
            <time className="article-preview_date">Feb 13 2020</time>
            <h3 className="article-preview_title">Title</h3>
        </div>
    );
};

export default ArticlePreview;
