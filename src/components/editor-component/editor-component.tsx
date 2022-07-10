import React, {useEffect, useRef} from 'react';
import {componentTypes} from "./componentTypes";
import "./editor-component.scss";
import {chunkType} from "./chunkType";
import Button from "../button/button";
import {ButtonVariants} from "../button/buttonVariants";

type propsType = {
    className?: string,
    onChange: React.FormEventHandler<HTMLHeadingElement>
    chunk: chunkType
    removeCallback: (chunk:chunkType) => void
}
type stateType = {}

const EditorComponent = (props: propsType) => {
    const classNames = props.className ? `EditorComponent ${props.className}` : "EditorComponent";
    const componentRef = useRef(null);

    useEffect(() => {
        if(props.chunk.val){
            componentRef.current.innerText = props.chunk.val;
        }
    }, []);

    const componentProps = {
        ref: componentRef,
        onKeyUp: props.onChange,
        className: classNames,
        contentEditable: true
    }

    function Cmp(){
        switch (props.chunk.type) {
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
               <Button variant={ButtonVariants.SECONDARY} onClick={props.removeCallback.bind(null, props.chunk)}>
                   Remove
               </Button>
           </div>
           {Cmp()}
       </div>
    );

};

export default EditorComponent;
