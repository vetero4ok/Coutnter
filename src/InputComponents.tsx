import React, {ChangeEvent} from 'react';

type  InputSettingsProps = {
    value: number
    setValueSettings: (value: number) => void
}
export const InputComponents = (props: InputSettingsProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueSettings(e.currentTarget.valueAsNumber)
    }
    return (
        <span className="input-container">
            <input
                type="number"
                min="0" max="100"
                value={props.value}
                className={'input'}
                onChange={onChangeHandler}
            />
        </span>
    );
}