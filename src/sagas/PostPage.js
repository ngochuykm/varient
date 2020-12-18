import { put, takeEvery } from 'redux-saga/effects'
import getPostApi from '../fetchAPI/getPostApi'
import * as types from '../constant'

function* getPostSaga() {

    try {
        const res = yield getPostApi();
        console.log("get post ApI")
        yield put({
            type: types.GET_POST_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_POST_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const PostPage = [
    takeEvery(types.GET_POST_REQUEST, getPostSaga)
]