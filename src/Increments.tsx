import React from 'react';


type propsIncCountsType = {
    resetCounts: () => void
    addInc: (count: number) => void
    count: number
    startValue:number
    maxValue:number
}

export function Increments(props: propsIncCountsType) {
    const Increments = () => props.addInc(props.count)
    const Reset = () => props.resetCounts()
    return (
        <div>
            {/*<Button*/}
            {/*    value={props.count}*/}
            {/*    addItem={}*/}
            {/*/>*/}
            <button onClick={Increments}
                    disabled={props.count >= props.maxValue}>inc
            </button>
            <div>
                <button onClick={Reset}
                        disabled={props.count === props.startValue}>reset
                </button>
            </div>
        </div>
    );
}