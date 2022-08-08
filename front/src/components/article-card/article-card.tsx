import * as React from "react";
import styles from "./article-card.module.scss";

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
        <div className={styles.articleCard}>
            <div className={styles.articleCardImage}>
                <img src={props.cardData.imgURL} alt={props.cardData.title} />
            </div>
            <div className={styles.articleCardContent}>
                <h2 className={styles.articleCardTitle}>{props.cardData.title}</h2>
                <p className={styles.articleCardDescription}>
                    {props.cardData.previewText}
                </p>
                <div className={styles.articleCardAuthor}>
                    <a href="">@{props.cardData.author}</a>
                    <time>{props.cardData.date.toLocaleDateString()}</time>
                </div>
            </div>
        </div>
    );
}
