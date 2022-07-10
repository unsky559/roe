import * as React from "react";
import {useEffect, useRef, useState} from "react";
import "./page-article-editor.scss";
import Button from "../../components/button/button";
import EditorComponent from "../../components/editor-component/editor-component";
import {componentTypes} from "../../components/editor-component/componentTypes";
import EditorFormatter from "../../components/editor-formatter/editor-formatter";
import {editorFormatterButtons} from "../../components/editor-formatter/editor-formatter-buttonsTpees";
import Select from "../../shared/modules/select";

const PageArticleEditor = () => {
    const [titleState, updateTitleState] = useState("Your awesome title");
    const [timeState, updateTimeState] = useState(Date.now());

    /* editor-formatter logic */
    /*
    const isSelected = useState(true);
    const selectedCoords = useState({x: 0, y: 0});

    const handleEditorFormatterClick = (data: Record<string, string>) => {
        console.log(data.type);

        const slt = new Select();
        switch (data.type){
            case editorFormatterButtons.BOLD:
                slt.frameAt("strong");
                break;
            case editorFormatterButtons.ITALIC:
                slt.frameAt("em");
                break;
        }

    }

    useEffect(() => {
        // TODO: remove event listener
        document.addEventListener("selectionchange", () => {
            const selection = document.getSelection();
            if(selection.type === "Range"){
                if(selection.anchorNode.parentElement.attributes.getNamedItem("data-selectable")){
                    selectedCoords[1]({
                        x: document.getSelection().anchorNode.parentElement.offsetTop,
                        y: document.getSelection().anchorNode.parentElement.offsetLeft
                    });
                    isSelected[1](true);
                }
            }else {
                isSelected[1](false);
            }
        });
    }, []);
    */
    /* end editor-formatter logic */


    const handleEditorChange = (index: number, e: any) => {
        let data = [...articleState];
        data[index]["val"] = e.target.innerHTML;
        updateTimeState(Date.now());
        console.log(data);
    }

    const [articleState, updateArticleState] = useState([]);

    const removeChunk = (chunk: any) => {
        updateArticleState(articleState.filter((element) => element !== chunk));
    }

    return (
        <>
            {/*<EditorFormatter isFocus={isSelected[0]} coords={selectedCoords[0]} callback={handleEditorFormatterClick} />*/}
            <div className="article-editor container">
                <div className="article-editor_header">
                    <input
                        className="article-editor_title"
                        type="text"
                        value={titleState}
                        onChange={event => updateTitleState(event.target.value)}
                    />
                    <div className="spacing">
                        <time className="article_date">13:22 Apr 13, 2022 {timeState}</time>
                    </div>
                    <div className="article_row-share">
                        <div className="article_author author">
                            <div className="author_image">
                                <img src="https://avatars.githubusercontent.com/u/33353900?v=4" alt=""/>
                            </div>
                            <div className="author_name">unsky559</div>
                        </div>
                        <div className="article_controls">
                            <Button>Publish</Button>
                        </div>
                    </div>
                </div>
                <div className="article-editor_controls">
                    <button className="btnEditor" onClick={() => {
                        updateArticleState((prev) => {
                            return prev.concat({
                                type: componentTypes.HEADER,
                                key: Math.random(),
                                val: "test",
                            });
                        });
                    }}>
                        Header 1
                    </button>
                    <button className="btnEditor" onClick={() => {
                        updateArticleState((prev) => {
                            return prev.concat({
                                type: componentTypes.PARAGRAPH,
                                key: Math.random(),
                                val: "test",
                            });
                        });
                    }}>
                        Paragraph
                    </button>
                    <button className="btnEditor" onClick={() => {
                        updateArticleState((prev) => {
                            return prev.concat({
                                type: componentTypes.HEADER_COUNTER,
                                key: Math.random(),
                                val: "test"
                            })
                        })
                    }}>
                        Counter header
                    </button>
                    <button className="btnEditor" onClick={() => {
                        console.log(articleState);
                    }}>
                        get state
                    </button>
                </div>
                <div className="article-editor_edit">
                    {
                        articleState.map((art, index) => {
                            // @ts-ignore
                            return (
                                <EditorComponent
                                    key={art.key}
                                    componentType={art.type}
                                    val={art.val}
                                    removeCallBack={removeChunk.bind(null, art)}
                                    onChange={(e: React.FormEvent<any>) => {
                                        handleEditorChange(index, e)
                                    }

                                    }
                                />
                            )
                        })
                    }

                </div>



            </div>
        </>
    );
};

export default PageArticleEditor;
