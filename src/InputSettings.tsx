import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type  InputSettingsProps = {
    value: number
    setValueSettings: (value: number) => void
}

export const InputSettings = (props: InputSettingsProps) => {
    const [value, setValue] = useState<number>(props.value)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(value)
            props.setValueSettings(value)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let string = e.currentTarget.value
        let number = JSON.parse(string)
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