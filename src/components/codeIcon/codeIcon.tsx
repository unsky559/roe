import React from 'react';
import styles from "./codeIcon.module.scss";
import {iconType} from "./icon.type";

type propsType = {
    icon: iconType,
    tabbed? : boolean
}
type stateType = {}

const CodeIcon = (props: propsType) => {
    return (
        <figure className={props.tabbed ? (styles.codeIcon + " " + styles.tabbed) : styles.codeIcon}>
            <img src={props.icon.url} alt={props.icon.title}/>
            <span>{props.icon.title}</span>
        </figure>
    );
};

export default CodeIcon;
