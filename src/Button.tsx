import React from 'react';

type PropsButtonType = {
    title: string
    addItem: (value?: number) => void
    value?: number
    disabled: boolean
}


export const Button = (props: PropsButtonType) => {
    const Items = () => props.addItem(props.value)
    return (

        <button onClick={Items}
                className = {'buttons'}
                disabled={props.disabled}
                >{props.title}
        </button>


    );
}