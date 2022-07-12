import * as React from "react";
import {buttonClassMap, ButtonVariants} from "./buttonVariants";

type propsType = {
    iconURL?: string,
    children?: string,
    onClick?: (event: any) => any,
    variant?: ButtonVariants
}

export default function Button(props: propsType) {

    return (
        <button className={(buttonClassMap.get(props.variant ?? ButtonVariants.DEFAULT))} onClick={props.onClick}>
            {props.iconURL && <img className="btn_icon" src={props.iconURL} alt="icon" />}
            {props.children}
        </button>
    );
}
