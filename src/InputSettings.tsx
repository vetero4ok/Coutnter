import React from 'react';
import {InputComponents} from './InputComponents';

type InputSettingsPropsType = {
    value: number
    title: string
    addValue: (value: number) => void

}

export const InputSettings = (props: InputSettingsPropsType) => {

    return (
        <div className={'settingsDisplay'}>
            <span className={'title'}>
                {props.title}
            </span>
            <InputComponents
                value={props.value}
                setValueSettings={props.addValue}
            />
        </div>
    );
}