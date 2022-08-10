import * as React from "react";
import styles from "./logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.goog}>
                <h1 className={styles.hiddenTitle}>goog</h1>
                <div className={styles.g}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.o}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.o}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.g}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Logo;
