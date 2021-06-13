import React from 'react';
import {InputSettings} from './InputSettings';
import {Button} from './Button';

type PropsSettingsType = {
    maxValue: number
    startValue: number
    addMaxValue: (value: number) => void
    addStartValue: (value: number) => void
   // setValues:(valueStart:number,valueMax:number)=>void

}

export const Settings = (props: PropsSettingsType) => {
    // const setValues = () => {
    //     props.addStartValue(props.startValue)
    //     props.addMaxValue(props.maxValue)
    //
    // }

    const DisabledSet = props.maxValue === props.startValue
    return (
        <div className={'main'}>
            <div>
                max value <InputSettings value={props.maxValue} setValueSettings={props.addMaxValue}/>
                start value <InputSettings value={props.startValue} setValueSettings={props.addStartValue}/>
            </div>
            <Button
                title={'Set'}
                addItem={()=>{}}
                //addItem={setValues}
                disabled={DisabledSet}
            />
        </div>
    );
}