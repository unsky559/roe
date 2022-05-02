import * as React from "react";
import "./page-about.scss";

export default function PageAbout(){
    return (
        <div className="page-about">
            <div className="container">
                <aside className="left-block">
                    <img className="avatar" src="https://avatars.githubusercontent.com/u/33353900?v=4" alt="" />
                </aside>
                <main className="main">
                    <h1>About me</h1>
                    <p>I’m a Front-end developer seeking an entry-level position to start IT career and delve deeper into web development.</p>
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