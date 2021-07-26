import React from 'react';

type PropsDisplayProps = {
    count?: number
    numberBold: boolean
    title?: string
}

export const Display = (props: PropsDisplayProps) => {
    return (

        <div className={props.title? 'info':''}>
           <div className={props.numberBold ? 'text' : ''} > {props.count}</div>
            {props.title}
        </div>

    );
}
