import * as React from "react";
import styles from "./footer.module.scss";
import container from "../../shared/shared-styles/style.container.module.scss";
// @ts-ignore
import img from "/src/public/media/logo/goog-purple.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={container.container}>
                <img src={img} alt=""/>
            </div>
        </footer>
    );
};

export default Footer;
