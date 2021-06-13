import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type  InputSettingsProps = {
    value: number
    setValueSettings: (value: number) => void
}

export const InputSettings = (props: InputSettingsProps) => {

    const [value, setValue] = useState<number>(props.value)
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(value)
            props.setValueSettings(value)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        let number = JSON.parse(value)
        setValue(number)

    }


    return (
        <input
            type="number"
            value={value}
            className={'input'}
            onKeyPress={onKeyPressEnter}
            onChange={onChangeHandler}


        />
    );
}