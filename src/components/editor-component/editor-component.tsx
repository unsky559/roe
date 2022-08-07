import React, {useEffect, useRef, useState} from 'react';
import styles from "./editor-component.module.scss";
import {componentTypes} from "./componentTypes";
import Button from "../button/button";
import {ButtonVariants} from "../button/buttonVariants";
import ChunkImage from "./chunks/chunk-image/chunk-image";
import {chunkType} from "./chunkType";

type propsType = {
    className?: string,
    onChange: React.FormEventHandler<HTMLHeadingElement>
    chunk: chunkType
    removeCallback: (chunk:chunkType) => void
}
type stateType = {}

const EditorComponent = (props: propsType) => {
    const ref = useRef();
    const [focusState, updateFocusState] = useState(false);
    const classNames = props.className ? `${styles.editorComponent} ${props.className}` : styles.editorComponent;

    function Cmp(){
        switch (props.chunk.type) {
            case componentTypes.HEADER:{
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

                return <h3 {...componentProps} />;
            }
            case componentTypes.PARAGRAPH:{
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

                return <p data-selectable="true" {...componentProps} />
            }
            case componentTypes.HEADER_COUNTER:{
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
                return <h3  {...componentProps} className="article_subtitle"/>
            }
            case componentTypes.IMAGE:
                return <ChunkImage chunk={props.chunk} />
        }
    }


    const onFocus = () => {
        updateFocusState(true);
    }

    const onBlur = () => {
        updateFocusState(false);
    }

    useEffect(() => {
        window.addEventListener("click", onBlur);
        return () => {
            window.removeEventListener("click", onBlur);
        }
    }, []);

    return (
       <div ref={ref} onClick={onFocus} className={styles.editorComponent}>
           <div className={styles.sideControls}>
               <Button variant={ButtonVariants.SECONDARY} onClick={props.removeCallback.bind(null, props.chunk)}>
                   Remove
               </Button>
           </div>
           {Cmp()}
       </div>
    );

};

export default EditorComponent;
