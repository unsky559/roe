import * as React from "react";
import styles from "./page-about.module.scss";
import container from "../../shared/shared-styles/style.container.module.scss";

export default function PageAbout(){
    return (
        <div className={styles.pageAbout}>
            <div className={container.container + " " + styles.container}>
                <aside className={styles.leftBlock}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/33353900?v=4" alt="" />
                </aside>
                <main className={styles.main}>
                    <h1>About me</h1>
                    <p>I’m a Front-end developer.</p>
                    <h2>How to reach me:</h2>
                    <p className="linklist">
                        <a href="https://t.me/unsky559">Telegram</a> 
                        <a href="https://join.skype.com/invite/JbXgTdwUHn7n">Skype</a> 
                        <a href="https://www.linkedin.com/in/unsky559">LinkedIn</a> 
                        <a href="https://www.work.ua/ru/resumes/6858932/">Work.ua</a> 
                        <a href="mailto:6kostya@gmail.com">6kostya@gmail.com</a>
                    </p>
                </main>
            </div>
        </div>
    )
}
