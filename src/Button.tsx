import React from 'react';

type PropsButtonType = {
    title: string
    addItem: (value?: number) => void
    value?: number
    disabled?: boolean
}


export const Button = (props: PropsButtonType) => {
    const Items = () => props.addItem(props.value)
    return (
        <div className={'buttons'}>
            <button onClick={Items} disabled={props.disabled}>{props.title} </button>
        </div>

    );
}