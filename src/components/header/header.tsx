import * as React from "react";
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" id="home-page-link">
                    <h1>unsky559</h1>
                </a>
                <nav>
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}