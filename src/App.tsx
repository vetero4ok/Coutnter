import React, {useState} from 'react';
import './App.css';
import {Increments} from './Increments';
import { InputSettings } from './InputSettings';



type CountsType = {
    count: number
    maxValue:number
    startValue:number

}


function App() {
    const [count, setCount] = useState<number>(0)
    const [maxValue,setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    function addMaxValue(value:number) {
        
        setMaxValue(value)
    }
    function addStartValue(value:number) {
        setStartValue(value)
    }

    function addInc(count: number) {
      setCount(count +1)
    }
    function resetCounts() {
        setCount(0)
    }


    return (
        <div className={'main_block'}>
            <div className={'main'}>
                <div className={'display'}>
                    <div className={count === 5 ? 'text' : ''}>
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
