import * as React from "react";
import { Link } from "react-router-dom";
import './header.scss';
import Logo from "../logo/logo";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" id="home-page-link">
                    <Logo/>
                </Link>
            </div>
        </header>
    );
}
