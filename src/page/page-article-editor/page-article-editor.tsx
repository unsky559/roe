import * as React from "react";
import {useState} from "react";
import "./page-article-editor.scss";
import Button from "../../components/button/button";
import EditorComponent from "../../components/editor-component/editor-component";
import {componentTypes} from "../../components/editor-component/componentTypes";
import {chunkType} from "../../components/editor-component/chunkType";
import {ButtonVariants} from "../../components/button/buttonVariants";
import dateToString from "../../shared/modules/dateToString";

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

    const newChunk = (type: componentTypes, value: string = "Input here"): chunkType => {
        return {
            type,
            key: Math.random(),
            val: value
        };
    }

    const removeChunk = (chunk: chunkType):void => {
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
                        <time className="article_date">{dateToString(timeState)}</time>
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
                    <Button variant={ButtonVariants.EDITOR}
                            onClick={() => {
                                updateArticleState((prev) => {
                                    return prev.concat(newChunk(componentTypes.HEADER_COUNTER));
                                });
                            }}>
                        H3 counter
                    </Button>
                    <Button variant={ButtonVariants.EDITOR}
                            onClick={() => {
                                updateArticleState((prev) => {
                                    return prev.concat(newChunk(componentTypes.HEADER));
                                });
                            }}>
                        H3
                    </Button>
                    <Button variant={ButtonVariants.EDITOR}
                            onClick={() => {
                            updateArticleState((prev) => {
                                return prev.concat(newChunk(componentTypes.PARAGRAPH));
                            });
                        }}>
                        p
                    </Button>
                    <Button variant={ButtonVariants.EDITOR}
                            onClick={() => {
                                updateArticleState((prev) => {
                                    return prev.concat(newChunk(componentTypes.IMAGE));
                                });
                            }}>
                        img
                    </Button>

                    {/*<button className="btn-editor" onClick={() => {*/}
                    {/*    console.log(articleState);*/}
                    {/*}}>*/}
                    {/*    get state*/}
                    {/*</button>*/}
                </div>
                <div className="article-editor_edit">
                    {
                        articleState.map((art, index) => {
                            // @ts-ignore
                            return (
                                <EditorComponent
                                    key={art.key}
                                    chunk={art}
                                    removeCallback={removeChunk}
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
