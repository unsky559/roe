import * as React from "react";
import styles from "./page-article.module.scss";
import container from "../../shared/shared-styles/style.container.module.scss";
import Button from "../../components/button/button";
import Code from "../../components/code/code";

// @ts-ignore
import shareIcon from "/src/public/media/icons/share_white_24.svg";
// @ts-ignore
import html5icon from "/src/public/media/icons/html5.svg";

const PageArticle = () => {
    const ihtml5 = {
        url: html5icon,
        title: "HTML5"
    }
    return (
        <article className={styles.article + " " + container.container}>
            <div>
                <div className={styles.article_title}>
                    <h2>How to parse BigInt in JavaScript</h2>
                </div>
                <div className={styles.spacing}>
                    <time className={styles.article_date}>Apr 13, 2022</time>
                </div>
                <div className={styles.article_rowShare}>
                    <div className={styles.author}>
                        <div className={styles.author_image}>
                            <img src="https://avatars.githubusercontent.com/u/33353900?v=4" alt=""/>
                        </div>
                        <div className={styles.author_name}>unsky559</div>
                    </div>
                    <div>
                        <Button iconURL={shareIcon}>Share</Button>
                    </div>
                </div>
            </div>
            <div>
                <h3>Why you shoud care?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto atque blanditiis, earum ex harum in, incidunt itaque minima molestiae porro repellendus tempore? Aspernatur eligendi expedita nihil nisi, placeat repellendus repudiandae similique tenetur!</p>
                {/*// TODO: move article-subtitle to separate component*/}
                {/*{// TODO: actually all article chunks move to separate components}*/}
                <h3 className="article_subtitle">Hello</h3>
                <p>What are you looking for? <code>Maybe looking for some code?</code> I don`t care. Let`s do some lorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error fugit id nam nihil quia quos sapiente sequi similique vitae.</p>
                <Code icon={ihtml5}>s</Code>
                <h3 className="article_subtitle">More code examples</h3>
                <h4>Html looker</h4>
                <Code icon={ihtml5}>s</Code>
                <h4>Html pharser</h4>
                <Code icon={ihtml5}>s</Code>
                <h3 className="article_subtitle">Never use</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi asperiores consectetur, dicta eaque ex facere illo, laborum nobis odio placeat recusandae reprehenderit suscipit ut voluptates? Laborum, magnam, natus! Aspernatur beatae consectetur, cum cumque id ipsam iusto non quis repellat, sint voluptatibus voluptatum! Deleniti doloribus impedit itaque maiores reiciendis, totam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse in magnam minima rerum temporibus voluptate voluptates. Aliquid delectus esse, minima necessitatibus odio placeat quas quibusdam quidem ratione recusandae soluta, tempora veniam vero voluptas, voluptatum! Amet aperiam assumenda atque aut blanditiis commodi consectetur corporis cumque cupiditate deserunt dolore dolorem dolorum ea enim esse est, ex excepturi illo ipsa ipsum iure magnam magni neque nisi quasi sapiente sed sequi soluta tempore ut vel vero voluptate voluptatem! Aspernatur iste maxime unde voluptates!</p>
            </div>
        </article>
    );
};

export default PageArticle;
