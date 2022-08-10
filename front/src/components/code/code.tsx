import * as React from "react";
import styles from "./code.module.scss";
import CodeIcon from "../codeIcon/codeIcon";
import {iconType} from "../codeIcon/icon.type";

type propsType = {
    icon?: iconType,
    children: string
}
type stateType = {}

const Code = (props: propsType) => {
    return (
        <div className={styles.codeFragment}>
            {props.icon ?
                <CodeIcon icon={props.icon} tabbed/> :
                <></>
            }

            <div className={props.icon ? (styles.code + " " + styles.tabbed) : styles.code}>
                <div className={styles.line}>{`<h1>Hello world!</h1>`}</div>
                <div className={styles.line}>{`<p>`}</div>
                <div className={styles.tab}>
                    <div className={styles.line}>This is a tab test</div>
                </div>
                <div className={styles.line}>{`</p>`}</div>
            </div>
        </div>
    );
};

export default Code;
