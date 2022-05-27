import * as React from "react";
import "./code.scss";
import CodeIcon from "../codeIcon/codeIcon";
import {iconType} from "../codeIcon/icon.type";

type propsType = {
    icon?: iconType,
    children: string
}
type stateType = {}

const Code = (props: propsType) => {
    return (
        <div className="code-fragment">
            {props.icon ?
                <CodeIcon icon={props.icon} tabbed/> :
                <></>
            }
            <div className={props.icon ? "code tabbed" : "code"}>
                <div className="line">{`<h1>Hello world!</h1>`}</div>
                <div className="line">{`<p>`}</div>
                <div className="tab">
                    <div className="line">This is a tab test</div>
                </div>
                <div className="line">{`</p>`}</div>
            </div>
        </div>
    );
};

export default Code;
