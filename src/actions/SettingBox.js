import * as types from '../constant'

export function changColor(payload){
    return {
        type: types.CHANGE_COLOR,
        payload
    }
}

export function changeThemeMode(payload){
    document.body.style.backgroundColor = payload
    document.body.style.color = (payload=="#fff"? "inherit":"#eee")
    return{
        type: types.CHANGE_THEME_MODE,
        payload
    }
}