import React, {useState} from 'react';
import './App.css';
import {CounterComponent} from "./CounterComponent";

function App() {
    // блок данных
    const title = 'COUNTER REACT'
    const MINVALUE = 0
    const MAXVALUE = 5

    // useState
    const [counter, setCounter] = useState(MINVALUE)

    // Функции подсчёта чисел
    function calcCounter() {
        setCounter(counter + 1)
    }
    // функция сброса значения счётчика
    function getCounter() {
        setCounter(MINVALUE)
    }


    return (
        <div className="App">
            <CounterComponent
                title={title}
                minScore={MINVALUE}
                maxScore={MAXVALUE}
                calcCounter={calcCounter}
                getCounter={getCounter}
                counter={counter}
            />
            <CounterComponent
                title={title}
                minScore={MINVALUE}
                maxScore={MAXVALUE}
                calcCounter={calcCounter}
                getCounter={getCounter}
                counter={counter}
            />
        </div>
    );
}

export default App;
