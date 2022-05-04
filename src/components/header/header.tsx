import * as React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../header-nav/header-nav";
import './header.scss';
import Logo from "../logo/logo";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" id="home-page-link">
                    <Logo/>
                </Link>
                <HeaderNav />
            </div>
        </header>
    );
}
