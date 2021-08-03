import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './Redux/store';
import {incCountAC, setCountsAC, setErrorAC, setMaxValueAC, setStartValueAC} from './Redux/counter-reducer';
import {DisplaySettings} from './DisplaySettings';
import {Settings} from './Settings';


function App() {
    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)

    const dispatch = useDispatch()

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
            <DisplaySettings
                error={error}
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                addInc={addInc}
                resetCounts={resetCounts}
            />
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
                setCounterToStart={setCounterToStart}
            />
        </div>
    );
}

export default App;
