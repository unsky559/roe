import * as React from "react";
import HeaderNavLink from "./header-nav-link/header-nav-link";
import "./header-nav.scss";

export default function HeaderNav(){
    return (
        <nav className="header-nav">
            <ul>
                <HeaderNavLink label="Home" to="/"></HeaderNavLink>
                <HeaderNavLink label="Blog" to="/blog"></HeaderNavLink>
                <HeaderNavLink label="About me" to="/about"></HeaderNavLink>
                <HeaderNavLink label="Contacts" to="/contacts"></HeaderNavLink>
            </ul>
        </nav>
    );
}