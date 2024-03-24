import {UniversalButton} from "./UniversalButton";

type PropsCounterComponent = {
    title: string
    minScore: number
    maxScore: number
    calcCounter: () => void
    getCounter: () => void
    counter: number
}

export function CounterComponent(props: PropsCounterComponent) {
    return (
        <div>
            <div className='Counter'>
                <h1>{props.title}</h1>
            </div>

            <div className='DisplayCounter'>
                <span className={props.counter === props.maxScore ? 'error-message' : ''}>
                {props.counter}
            </span>
            </div>


            <div className='ButtonSettings'>
                <UniversalButton name={'Add counter'}
                                 callback={props.calcCounter}
                                 disabled={props.counter === props.maxScore}/>
                <UniversalButton name={'Reset'}
                                 callback={props.getCounter}
                                 disabled={props.counter === props.minScore}/>
            </div>

        </div>
    )
}