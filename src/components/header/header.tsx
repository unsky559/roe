import * as React from "react";
import HeaderNav from "../header-nav/header-nav";
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" id="home-page-link">
                    <h1>unsky559</h1>
                </a>
                <HeaderNav />
            </div>
        </header>
    );
}