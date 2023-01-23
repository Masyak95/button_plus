import React from "react";
import s from "./App.module.css"
import {ReactComponent as AddIcon} from "./plus-square.svg";

type ButtonPropsType = {
    data: any
    callBack: () => void
}
export const Buttons = ({data: {item}, callBack}: ButtonPropsType) => {

    return (
        <div>
                {item?.name ? (
                    <div data-icon={item?.id}>
                        <img src={item.filename} alt={"ikona"}/>
                        <h4>{item.name}</h4>
                    </div>
                ) : (
                    <div onClick={callBack}><AddIcon className={s.icon} /></div>
                )}
        </div>

    )
}