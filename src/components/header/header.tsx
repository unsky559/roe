import * as React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import container from "../../shared/shared-styles/style.container.module.scss"
import Logo from "../logo/logo";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={container.container + " " + styles.container}>
                <Link to="/" className={styles.homePageLink}>
                    <Logo/>
                </Link>
            </div>
        </header>
    );
}
