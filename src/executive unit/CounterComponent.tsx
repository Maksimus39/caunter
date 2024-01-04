import React from "react";
import {UniversalButton} from "../universalButton/UniversalButton";


type CounterComponentPropsType = {
    text: string
    number: number
    maxNumber: number
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
}

export const CounterComponent: React.FC<CounterComponentPropsType> = (props) => {
    return (
        <div className="CounterComponentStyle">
            <h1>{props.text}</h1>
            <div className="numberStyle">
                <span className={props.counter === props.maxNumber ? "error-message" : ""}>{props.counter}</span>
            </div>
            <div className="buttonStyle">
                <UniversalButton
                    disabled={props.counter === props.maxNumber}
                    name={"Add count"}
                    callback={props.incrementCounter}/>
                <UniversalButton
                    //disabled={props.counter === props.number}
                    name={"Reset counter"}
                    callback={props.resetCounter}/>
            </div>
        </div>
    )
}


