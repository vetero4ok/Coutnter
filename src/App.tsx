import React from 'react';
import './App.css';
import {Increments} from './Increments';
import {Display} from './Display';
import {Settings} from './Settings';
import {Button} from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './Redux/store';
import {
    incCountAC,
    InitialStateType,
    setCountsAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC
} from './Redux/counter-reducer';


function App() {
    const {count, maxValue, startValue, error} =
        useSelector<AppStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    // const [count, setCount] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState(0)
    // const [startValue, setStartValue] = useState(0)
    //
    // const [error, setError] = useState<boolean>(false)
    //
    // function restoreState<T>(key: string, defaultState: T) {
    //     let state = defaultState
    //     const stateAsString = localStorage.getItem(key)
    //     if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    //     return state
    // }
    //
    // useEffect(() => {
    //     setCount(restoreState<number>('count', 0))
    //     setMaxValue(restoreState<number>('maxValue', 0))
    //     setStartValue(restoreState<number>('startValue', 0))
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])
    // useEffect(() => {
    //     localStorage.setItem('count', JSON.stringify(count))
    // }, [count])

    function addMaxValue(value: number) {
        dispatch(setMaxValueAC(value))
        dispatch(setErrorAC(true))

    }

    function addStartValue(value: number) {
        dispatch(setStartValueAC(value))
        dispatch(setErrorAC(true))
    }

    function addInc() {
        dispatch(incCountAC())
    }

    function resetCounts() {
        dispatch(setCountsAC(startValue))
    }

    const setCounterToStart = () => {
        dispatch(setCountsAC(startValue))
        dispatch(setErrorAC(false))
      }


    return (
        <div className={'app'}>
            <div className={'counter-wrapper'}>
                <div className={'display'}>

                    <Display
                        count={count}
                        maxValue={maxValue}
                        startValue={startValue}
                        error={error}
                    />


                </div>
                <div className={'display-buttons'}>
                    <Increments
                        addInc={addInc}
                        resetCounts={resetCounts}
                        count={count}
                        maxValue={maxValue}
                        startValue={startValue}
                        error={error}


                    />
                </div>

            </div>
            <div className={'settings-wrapper'}>
                <div className="settings-displays">
                    <Settings
                        value={startValue}
                        addValue={addStartValue}
                        title={'start value:'}
                    />
                    <Settings
                        value={maxValue}
                        addValue={addMaxValue}
                        title={'max value:'}
                    />
                </div>
                <div className={'settings-buttons'}>
                    <Button
                        title={'Set'}
                        addItem={setCounterToStart}
                        disabled={startValue >= maxValue}
                    />
                </div>
            </div>

        </div>


    );
}

export default App;
