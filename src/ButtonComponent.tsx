import React from 'react';

type ButtonComponentPropsType = {
    title: string
    addItem: () => void
    disabled: boolean
}
export const ButtonComponent = (props: ButtonComponentPropsType) => {
    return (
        <button
            onClick={props.addItem}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    );
}