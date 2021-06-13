import React, {useEffect, useState} from 'react';
import './App.css';
import {Increments} from './Increments';
import {Display} from './Display';
import {Settings} from './Settings';


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

    function addStartValue(value: number) {
        setStartValue(value)
        localStorage.setItem('startValue', JSON.stringify(value))
        setCount(value)
    }

    // function setValues(valueStart:number,valueMax:number) {
    //     setMaxValue(valueMax)
    //     localStorage.setItem('maxValue', JSON.stringify(valueMax))
    //     setStartValue(valueStart)
    //     localStorage.setItem('startValue', JSON.stringify(valueStart))
    //
    //
    // }

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    function addInc(count: number) {
        setCount(count + 1)
    }

    function resetCounts() {
        setCount(startValue)
    }

    const numberBold = count === maxValue
    return (
        <div className={'main_block'}>
            <div className={'main'}>
                <Display
                    count={count}
                    numberBold={numberBold}
                />
                <Increments
                    addInc={addInc}
                    resetCounts={resetCounts}
                    count={count}
                    maxValue={maxValue}
                    startValue={startValue}

                />

            </div>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
                // setValues={setValues}

            />
        </div>


    );
}

export default App;
