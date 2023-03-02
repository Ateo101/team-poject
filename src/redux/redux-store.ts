import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMuddleWare from "redux-thunk";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMuddleWare));