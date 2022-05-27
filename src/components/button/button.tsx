import * as React from "react";
import "./button.scss";

type propsType = {
    iconURL?: string,
    children?: string
}
type stateType = {}

export default function Button(props: propsType) {
    return (
        <button className="btn">
            {props.iconURL ? <img className="btn_icon" src={props.iconURL} alt="icon" /> : <></>}
            {props.children}
        </button>
    );
}
