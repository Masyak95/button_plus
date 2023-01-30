import React from "react";
import s from "./App.module.css"
import {ReactComponent as AddIcon} from "./plus-square.svg";
import Post from "./Post";

type ButtonPropsType = {
    data: any
    callBack: () => void
    post: string
}
export const Buttons = (props: ButtonPropsType) => {
    return (
        <div>
            {props.data.item ? (
                <Post post={props.data.item} addBox={props.callBack}/>
            ) : (
                <div onClick={props.callBack}><AddIcon className={s.icon}/></div>
            )}
        </div>
    )
}