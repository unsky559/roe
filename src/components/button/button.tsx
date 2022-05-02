import * as React from "react";
import "./button.scss";

export default function Button(props: any) {
    //TODO: add props type
    return (
        <button className="btn">
            {props.children}
        </button>
    );
}