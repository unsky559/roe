import * as React from "react";
import "./article-card.scss";

type propsType = {
    cardData: {
        imgURL: string,
        title: string,
        author: string,
        date: Date,
        previewText: string
    }
}
type stateType = {}

export default function ArticleCard(props: propsType){
    return(
        <div className="article-card">
            <div className="article-card-image">
                <img src={props.cardData.imgURL} alt={props.cardData.title} />
            </div>
            <div className="article-card-content">
                <h2 className="article-card-title">{props.cardData.title}</h2>
                <p className="article-card-description">
                    {props.cardData.previewText}
                </p>
                <div className="article-card-autor">
                    <a href="">@{props.cardData.author}</a>
                    <time>{props.cardData.date.toLocaleDateString()}</time>
                </div>
            </div>
        </div>
    );
}