import * as React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../header-nav/header-nav";
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" id="home-page-link">
                    <h1>unsky559</h1>
                </Link>
                <HeaderNav />
            </div>
        </header>
    );
}