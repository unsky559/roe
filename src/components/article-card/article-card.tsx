import * as React from "react";
import "./article-card.scss";

export default function ArticleCard(){
    return(
        <div className="article-card">
            <div className="article-card-image">
                <img src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80" alt="" />
            </div>
            <div className="article-card-content">
                <h2 className="article-card-title">Test</h2>
                <div className="article-card-autor">
                    <a href="">@unsky559</a>
                    <time>28.10.2021</time>
                </div>
                <p className="article-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nemo suscipit atque molestias est id totam distinctio enim sed accusamus? Lorem elit. Nisi quis natus blanditiis ut vel similique.</p>
            </div>
        </div>
    );
}