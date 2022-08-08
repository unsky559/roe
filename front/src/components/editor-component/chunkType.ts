import {componentTypes} from "./componentTypes";

export type chunkType = {
    type: componentTypes,
    key: number,
    val?: string,
    imageALT?: string,
}
