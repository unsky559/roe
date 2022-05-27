import React from 'react';
import "./codeIcon.scss";
import {iconType} from "./icon.type";

type propsType = {
    icon: iconType,
    tabbed? : boolean
}
type stateType = {}

const CodeIcon = (props: propsType) => {
    return (
        <figure className={props.tabbed ? "codeIcon tabbed" : "codeIcon"}>
            <img src={props.icon.url} alt={props.icon.title}/>
            <span>{props.icon.title}</span>
        </figure>
    );
};

export default CodeIcon;
