import {Dispatch} from "redux";

export type appReducerType = {
    stateSample: string
}

const initialState: appReducerType = {
    stateSample: 'This is an initial state sample'
}

const SET_STATE = "SET-STATE"

const appReducer = (state = initialState, action: appReducerActionsType): appReducerType => {

    switch (action.type) {
        case SET_STATE:
            return {...state, stateSample: action.newState}
        default:
            return state
    }

}

type appReducerActionsType = setStateType

type setStateType = ReturnType<typeof setState>
export const setState = (newState: string) => {
    return {
        type: SET_STATE,
        newState
    } as const
}

/*export const initAppTC = () => async (dispatch: Dispatch<any>) => {
    await dispatch(setAuthDataThunkCreator())
    dispatch(setInit()) // setState
}*/

export default appReducer;