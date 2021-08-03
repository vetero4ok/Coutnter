import React, {useEffect, useState} from 'react';

type DisplayPropsType = {
    count: number
    maxValue: number
    startValue: number
    error: boolean
}

export const Display = (props: DisplayPropsType) => {
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {

        if (props.startValue < props.maxValue) {
            setErrorMessage(`enter values and press "set"`)
        } else if (props.startValue >= props.maxValue) {
            setErrorMessage('max value can not be less or equal to start value')
        }

        // setErrorMessage(props.startValue < props.maxValue
        //     ? `enter values and press "set"`
        //     : 'max value can not be less or equal to start value')

    }, [props.error, props.maxValue, props.startValue])

    return (
        <div className={props.count === props.maxValue ? 'text' : 'massageBlackColor'}>
            {props.error
                ?
                <h5 className={props.startValue >= props.maxValue ? 'massageErrorRed' : 'massageBlackColor'}>
                    {errorMessage}
                </h5>
                : <h2>{props.count}</h2>}
        </div>
    );
}
