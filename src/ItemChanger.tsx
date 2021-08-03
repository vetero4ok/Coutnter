import React from 'react';
import {ButtonComponent} from './ButtonComponent';


type ItemChangerPropsType = {
    resetCounts: () => void
    addInc: () => void
    count: number
    startValue: number
    maxValue: number
    error: boolean
}

export function ItemChanger(props: ItemChangerPropsType) {

    const disabledInc = props.count >= props.maxValue || props.error
    const disabledReset = props.count === props.startValue || props.error
    return (
        <div className={'settings-buttons'}>
            <ButtonComponent
                title={'Inc'}
                addItem={props.addInc}
                disabled={disabledInc}
            />
            <ButtonComponent
                title={'Reset'}
                addItem={props.resetCounts}
                disabled={disabledReset}
            />
        </div>
    );
}