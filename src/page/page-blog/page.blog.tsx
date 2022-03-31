import * as React from "react";
import ArticleCard from "../../components/article-card/article-card";
import Searchbar from "../../components/searchbar/searchbar";
import "./page.blog.scss";

export default function PageBlog(){
    return (
        <div className="page-blog">
            <section className="search-area">
                <div className="container">
                    <Searchbar />
                </div>
            </section>
            <section className="articles">
                <div className="container">
                    <h1>Articles</h1>
                    <div className="articles">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />

                    </div>
                </div>
            </section>
        </div>
    )
}