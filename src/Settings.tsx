import React from 'react';
import {InputSettings} from './InputSettings';

type PropsSettingsType = {
    value: number
    title: string
    addValue: (value: number) => void
}

export const Settings = (props: PropsSettingsType) => {

    return (

        <div className={'settingsDisplay'}>
            <span className={'title'}>
                {props.title}
            </span>

            <InputSettings
                value={props.value}
                setValueSettings={props.addValue}
            />
        </div>

    );
}