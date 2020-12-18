import * as types from '../constant'

const  DEFAULT_STATE = {
    postData:[],
    errorMessenger:"",
    isLoadding: false
}

export default(state=DEFAULT_STATE,action) => {
    switch(action.type){
        case types.GET_POST_REQUEST:
            return{
                ...state,
                isLoadding: true
            }
        case types.GET_POST_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                postData: action.payload
            }
        case types.GET_POST_FAILURE:
            return{
                ...state,
                isLoadding:false,
                errorMessenger: action.payload
            }
        default: return {...state}
    }
}