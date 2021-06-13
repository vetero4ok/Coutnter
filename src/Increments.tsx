import React from 'react';
import {Button} from './Button';


type propsIncCountsType = {
    resetCounts: () => void
    addInc: (count: number) => void
    count: number
    startValue: number
    maxValue: number
}

export function Increments(props: propsIncCountsType) {
    const Increments = () => {
        props.addInc(props.count)
    }
    const disabledInc = props.count >= props.maxValue
    const disabledReset = props.count === props.startValue

    return (
        <div className={'keyboard'}>
            <Button
                title={'Inc'}
                addItem={Increments}
                disabled={disabledInc}
            />
            <Button
                title={'Reset'}
                value={props.count}
                addItem={props.resetCounts}
                disabled={disabledReset}
            />

        </div>
    );
}