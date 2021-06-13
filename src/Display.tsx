import React from 'react';

type PropsDisplayProps = {
    count: number
    numberBold:boolean
}

export const Display = (props:PropsDisplayProps) => {
    return(
        <div className={'display'}>
            <div className={props.numberBold? 'text' : ''}>
                {props.count}
            </div>
        </div>
    );
}
