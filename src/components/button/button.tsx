import * as React from "react";
import "./button.scss";
import {ButtonVariants} from "./buttonVariants";

type propsType = {
    iconURL?: string,
    children?: string,
    onClick?: (event: any) => any,
    variant?: ButtonVariants
}
//type stateType = {}

export default function Button(props: propsType) {

    const variant = props.variant ?? ButtonVariants.DEFAULT;

    return (
        <button className={variant} onClick={props.onClick}>
            {props.iconURL && <img className="btn_icon" src={props.iconURL} alt="icon" />}
            {props.children}
        </button>
    );
}
