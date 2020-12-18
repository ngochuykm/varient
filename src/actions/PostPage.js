import * as types from '../constant'

export function getPostPage(payload){
    return({
        type: types.GET_POST_REQUEST,
        payload
    })
}