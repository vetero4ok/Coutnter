import {InputSettings} from './InputSettings';
import {ButtonComponent} from './ButtonComponent';
import React from 'react';

type SettingsPropsType = {
    maxValue: number
    startValue: number
    addMaxValue: (value: number) => void
    setCounterToStart: () => void
    addStartValue: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={'settings-wrapper'}>
            <div className={'settings-displays'}>
                <InputSettings
                    value={props.startValue}
                    addValue={props.addStartValue}
                    title={'start value:'}
                />
                <InputSettings
                    value={props.maxValue}
                    addValue={props.addMaxValue}
                    title={'max value:'}
                />
            </div>
            <div className={'settings-buttons'}>
                <ButtonComponent
                    title={'Set'}
                    addItem={props.setCounterToStart}
                    disabled={props.startValue >= props.maxValue}
                />
            </div>
        </div>
    );
}