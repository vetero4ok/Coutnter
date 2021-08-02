import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type AppRootState =  typeof store