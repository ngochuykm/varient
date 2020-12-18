import { all } from 'redux-saga/effects'
import { HomePage } from './HomePage'
import {PostPage} from './PostPage'

function* rootSaga() {
    yield all([
        ...HomePage,
        ...PostPage
    ])
}

export default rootSaga;