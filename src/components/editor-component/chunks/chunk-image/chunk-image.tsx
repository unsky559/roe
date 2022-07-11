import React, {useState} from 'react';
import {chunkType} from "../../chunkType";
import Button from "../../../button/button";
import "./chunk-image.scss";

type propsType = {
    chunk: chunkType
}

const ChunkImage = (props: propsType) => {
    const [imageURLState, imageURLUpdateState] = useState(props.chunk.val);
    const [imageALTState, imageALTUpdateState] = useState(props.chunk.imageALT ?? "Image with something cool");

    const [editState, updateEditState] = useState(true);

    const saveImage = () => {
        updateEditState(false);
        props.chunk.val = imageURLState;
        props.chunk.imageALT = imageALTState;
    }

    return (
        <div className="article_image">
            {editState && <div className="article_image-editor">
                <label htmlFor={"image-select-" + props.chunk.key}>InsertImageURL</label>
                <input
                    onChange={(e) => {
                        imageURLUpdateState(e.target.value);
                    }}
                    type="text"
                    id={"image-select-" + props.chunk.key}
                />
                <label htmlFor={"image-select-alt-" + props.chunk.key}>ImageALT</label>
                <input
                    onChange={(e) => {
                        imageALTUpdateState(e.target.value);
                    }}
                    type="text"
                    id={"image-select-alt-" + props.chunk.key}/>
                <br/>
                {imageURLState &&
                    <img className="image-preview" src={imageURLState} alt={imageALTState}/>
                }
                <Button onClick={saveImage}>
                    Save
                </Button>
            </div>}
            {!editState && <>
                <img src={imageURLState} alt={imageALTState}/>
            </>}
        </div>
    );
};

export default ChunkImage;