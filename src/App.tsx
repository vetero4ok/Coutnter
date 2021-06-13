import React, {useEffect, useState} from 'react';
import './App.css';
import {Increments} from './Increments';
import {InputSettings} from './InputSettings';


// type CountsType = {
//     count: number
//     maxValue: number
//     startValue: number
//
// }


function App() {
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    function restoreState<T>(key: string, defaultState: T) {

        let state = defaultState
        const stateAsString = localStorage.getItem(key)
        if (stateAsString !== null) state = JSON.parse(stateAsString) as T
        return state
    }

    useEffect(() => {
        setCount(restoreState<number>('count', 0))
        setMaxValue(restoreState<number>('maxValue', 0))
        setStartValue(restoreState<number>('startValue', 0))
    }, [])

    function addMaxValue(value: number) {
        setMaxValue(value)
        localStorage.setItem('maxValue', JSON.stringify(value))
    }

    useEffect(()=>{

    },[])
    function addStartValue(value: number) {
        setStartValue(value)
        localStorage.setItem('startValue', JSON.stringify(value))
        setCount(value)
    }

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    function addInc(count: number) {
        setCount(count + 1)
    }

    function resetCounts() {
        setCount(startValue)
    }

    return (
        <div className={'main_block'}>
            <div className={'main'}>
                <div className={'display'}>
                    <div className={count === maxValue ? 'text' : ''}>
                        {count}
                    </div>
                </div>

                <div className={'keyboard'}>
                    <Increments
                        addInc={addInc}
                        resetCounts={resetCounts}
                        count={count}
                        maxValue={maxValue}
                        startValue={startValue}

                    />
                </div>

            </div>
            <div className={'main'}>
                <div>
                    max value <InputSettings value={maxValue} setValueSettings={addMaxValue}/>
                    start value <InputSettings value={startValue} setValueSettings={addStartValue}/>
                </div>
                <button>set</button>
            </div>
        </div>


    );
}

export default App;
