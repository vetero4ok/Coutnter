import React, {ChangeEvent, KeyboardEvent} from 'react';

type  InputSettingsProps = {
    value: number
    setValueSettings: (value: number) => void
}

export const InputSettings = (props: InputSettingsProps) => {


    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.setValueSettings(+e.currentTarget.value)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let string = e.currentTarget.value
        let number = JSON.parse(string)
        props.setValueSettings(number)
    }
    return (
        <span className="input-container">
            <input
                type="number"
                min="0" max="100"
                value={props.value}
                className={'input'}
                onKeyPress={onKeyPressEnter}
                onChange={onChangeHandler}
            />
        </span>

    );
}