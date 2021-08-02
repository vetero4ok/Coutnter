export enum ACTION_TYPE {
    INC_COUNT_ACTION = 'Counter/INC-COUNT',
    SET_MAX_VALUE = 'Counter/SET-MAX-VALUE',
    SET_START_VALUE = 'Counter/SET-START-VALUE',
    SET_ERROR = 'Counter/SET-ERROR',
    SET_COUNTS = 'Counter/SET-COUNTS',



}

const InitialState = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    error: false,
}
export type InitialStateType = typeof InitialState

export const counterReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.INC_COUNT_ACTION:
            return {
                ...state,
                count: state.count + 1,
            }
        case ACTION_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue,
            }
        case ACTION_TYPE.SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue,
            }
        case ACTION_TYPE.SET_ERROR :
            return {
                ...state,
                error: action.error,
            }
        case ACTION_TYPE.SET_COUNTS:
            return {
                ...state,
                count: action.value,
            }

        default:
            return state
    }

}
type ActionType = IncCountActionType
    | SetMaxValueActionType
    | SetStartValueActionType
    | SetErrorActionType
    | SetCountsActionType



export const incCountAC = () => {
    return {type: ACTION_TYPE.INC_COUNT_ACTION} as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {type: ACTION_TYPE.SET_MAX_VALUE, maxValue} as const
}
export const setStartValueAC = (startValue: number) => {
    return {type: ACTION_TYPE.SET_START_VALUE, startValue} as const
}
export const setErrorAC = (error: boolean) => {
    return {type: ACTION_TYPE.SET_ERROR, error} as const
}
export const setCountsAC = (value: number) => {
    return {type: ACTION_TYPE.SET_COUNTS, value} as const
}

type IncCountActionType = ReturnType<typeof incCountAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetStartValueActionType = ReturnType<typeof setStartValueAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>
type SetCountsActionType = ReturnType<typeof setCountsAC>
