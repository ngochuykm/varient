import * as types from '../constant'

const  DEFAULT_STATE = {
    color: "#0494b1",
    themeMode:"#fff"
}

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case types.CHANGE_COLOR :
            return{
                ...state,
                color: action.payload
            }
        case types.CHANGE_THEME_MODE :
            return{
                ...state,
                themeMode: action.payload
            }
        default: return {...state} 
    }
}