import React, {useState} from 'react';
import './App.css';
import {CounterComponent} from "./executive unit/CounterComponent";
import {SettingCounter} from "./settingCounter/SettingCounter";

function App() {
    // title counter
    const text = "COUNTER REACT"


    // title settingCounter
    const settingsText = "SETTINGS COUNTER"

    // title button
    const nameButton = "Set"

    // блок переменных
    const [minNumber, setMinNumber] = useState(0)
    const [maxNumber, setMaxNumber] = useState( 5)


    // хранилище state useState
    const [counter, setCounter] = useState(minNumber)

    // state для улучшенного счётчика
    const [newCount, setNewCount] = useState(counter)


    // function increment
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    // function  resetCounter
    const resetCounter = () => {
        setCounter(minNumber)
    }

    // function settingsCounter



    // jsx выполнение
    return (
        <div className="App">
            <CounterComponent
                text={text}
                number={minNumber}
                maxNumber={maxNumber}
                counter={counter}
                incrementCounter={incrementCounter}
                resetCounter={resetCounter}
            />
            <div className="App">
                <SettingCounter
                    settingsText={settingsText}
                    nameButton={nameButton}
                    setMinNumber={setMinNumber}
                    setMaxNumber={setMaxNumber}
                    minNumber={minNumber}
                    maxNumber={maxNumber}
                />
            </div>
        </div>
    );
}

export default App;
