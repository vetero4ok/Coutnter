import {Display} from './Display';
import {ItemChanger} from './ItemChanger';
import React from 'react';

type DisplaySettingsPropsType = {
    count: number
    maxValue: number
    startValue: number
    error: boolean
    addInc: () => void
    resetCounts: () => void
}
export const DisplaySettings = (props: DisplaySettingsPropsType) => {
    return (
        <div className={'counter-wrapper'}>
            <div className={'display'}>
                <Display
                    count={props.count}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    error={props.error}
                />
            </div>
            <div className={'display-buttons'}>
                <ItemChanger
                    addInc={props.addInc}
                    resetCounts={props.resetCounts}
                    count={props.count}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    error={props.error}
                />
            </div>
        </div>
    );
}