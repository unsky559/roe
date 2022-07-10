import React, {useEffect, useRef, useState} from 'react';
import {componentTypes} from "./componentTypes";
import "./editor-component.scss";

type propsType = {
    componentType: componentTypes,
    className?: string,
    onChange: React.FormEventHandler<HTMLHeadingElement>
    val?: string,
    removeCallBack: any
}
type stateType = {}

const EditorComponent = (props: propsType) => {
    const classNames = props.className ? `EditorComponent ${props.className}` : "EditorComponent";
    const componentRef = useRef(null);

    useEffect(() => {
        if(props.val){
            componentRef.current.innerText = props.val;
        }
    }, []);

    const componentProps = {
        ref: componentRef,
        onKeyUp: props.onChange,
        className: classNames,
        contentEditable: true
    }

    function Cmp(){
        switch (props.componentType) {
            case componentTypes.HEADER:
                return <h3 {...componentProps} />;
            case componentTypes.PARAGRAPH:
                return <p data-selectable="true" {...componentProps} />
            case componentTypes.HEADER_COUNTER:
                return <h3  {...componentProps} className="article_subtitle"/>
            case componentTypes.CODE:
                return <p {...componentProps} />
        }
    }


    return (
       <div className="editor-component">
           <div className="sideControls">
               <button onClick={props.removeCallBack}>Remove</button>
           </div>
           {Cmp()}
       </div>
    );

};

export default EditorComponent;
