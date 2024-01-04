import React, {ChangeEvent, MouseEventHandler} from "react";


type SettingCounterPropsType = {
    settingsText: string
    nameButton: string
    setMinNumber: (value: number) => void
    setMaxNumber: (value: number) => void
    minNumber: number
    maxNumber: number
}


export const SettingCounter: React.FC<SettingCounterPropsType> = (props) => {


    // функция для первого input
    const settingsInput1 = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNumber(+event.currentTarget.value)
    }
    // функция для второго input
    const settingsInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMinNumber(+event.currentTarget.value)
    }
    // функция для button
    const setCounter = (event: MouseEventHandler<HTMLButtonElement>) => {

    }

    return (
        <div>
            <h1>{props.settingsText}</h1>
            <input value={props.maxNumber} onChange={settingsInput1}/>
            <input value={props.minNumber} onChange={settingsInput2}/>
            <button>{props.nameButton}</button>
        </div>
    )
}