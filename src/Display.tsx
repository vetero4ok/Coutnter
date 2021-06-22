import React from 'react';

type PropsDisplayProps = {
    count?: number
    numberBold: boolean
    title?: string
}

export const Display = (props: PropsDisplayProps) => {
    return (

        <div className={(props.numberBold ? 'text' : '')||(props.title? 'info':'')}>
            {props.count}
            {props.title}
        </div>

    );
}
