import { put, takeEvery } from 'redux-saga/effects'
import { select } from 'redux-saga/effects';
import getLifeStyle from '../fetchAPI/getLifeStyle'
import getFashion from '../fetchAPI/getFashion'
import getQuizzes from '../fetchAPI/getQuizzes'
import getTravel from '../fetchAPI/getTravel'
import getRssNews from '../fetchAPI/getRssNews'
import getVideos from '../fetchAPI/getVideos'
import getSlideFeatured from '../fetchAPI/getSlideFeatured'
import getFeaturedRight from '../fetchAPI/getFeaturedRight'
import getNewTicker from '../fetchAPI/getTicker'
import getLastPost from '../fetchAPI/getLastPost'
import getPopuarPosts from '../fetchAPI/getPopularPosts'
import getRecommendedPosts from '../fetchAPI/getRecommendedPosts'
import getRandomPosts from '../fetchAPI/getRandomPosts'
import getTags from '../fetchAPI/getTags'
import getVotingPoll from '../fetchAPI/getVotingPoll'
import * as types from '../constant'

export const getProject = (state) => state.homePage

function* getLifeStyleSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadLifeStyle){
            const res = yield getLifeStyle();
            yield put({
                type: types.GET_LIFESTYLE_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_LIFESTYLE_SUCCESS,
                    payload: checkData.lifeStyle
        })}

    } catch (error) {
        yield put({
            type: types.GET_LIFESTYLE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getFashionSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadFashion){
            const res = yield getFashion();
            yield put({
                type: types.GET_FASHION_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_FASHION_SUCCESS,
                    payload: checkData.fashion
        })}

    } catch (error) {
        yield put({
            type: types.GET_FASHION_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getQuizzesSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadQuizzes){
            const res = yield getQuizzes();
            yield put({
                type: types.GET_QUIZZES_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_QUIZZES_SUCCESS,
                    payload: checkData.quizzes
        })}

    } catch (error) {
        yield put({
            type: types.GET_RSSNEWS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getTravelSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadTravel){
            const res = yield getTravel();
            yield put({
                type: types.GET_TRAVEL_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_TRAVEL_SUCCESS,
                    payload: checkData.travel
        })}

    } catch (error) {
        yield put({
            type: types.GET_TRAVEL_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getRssNewsSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadRssNews){
            const res = yield getRssNews();
            yield put({
                type: types.GET_RSSNEWS_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_RSSNEWS_SUCCESS,
                    payload: checkData.rssNews
        })}

    } catch (error) {
        yield put({
            type: types.GET_RSSNEWS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getVideosSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadVideos){
            const res = yield getVideos();
            yield put({
                type: types.GET_VIDEOS_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_VIDEOS_SUCCESS,
                    payload: checkData.videos
        })}

    } catch (error) {
        yield put({
            type: types.GET_VIDEOS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* getSlideFeaturedSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadSlideFeatured){
            const res = yield getSlideFeatured();
            yield put({
                type: types.GET_SLIDEFEATURES_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_SLIDEFEATURES_SUCCESS,
                    payload: checkData.slideFearured
        })}

    } catch (error) {
        yield put({
            type: types.GET_SLIDEFEATURES_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getFeaturedRightSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadFeaturedRight){
            const res = yield getFeaturedRight();
            yield put({
                type: types.GET_FEATURES_RIGHT_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_FEATURES_RIGHT_SUCCESS,
                    payload: checkData.featuredRight
        })}

    } catch (error) {
        yield put({
            type: types.GET_FEATURES_RIGHT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getNewTickerSaga() {

    try {
        let checkData = yield select(getProject);
        if (!checkData.loadNewTicker){
            const res = yield getNewTicker();
            yield put({
                type: types.GET_NEWTICKER_SUCCESS,
                payload: res
            })
        }else{
                yield put({
                    type: types.GET_NEWTICKER_SUCCESS,
                    payload: checkData.newTicker
        })}

    } catch (error) {
        yield put({
            type: types.GET_NEWTICKER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* getLastPostSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getLastPost();
        if (!checkData.loadLastPost){
            yield put({
                type: types.GET_LASTPOST_SUCCESS,
                payload: res
            })
        }else{
            let data = {
                all:checkData.lastPost.all.concat(res.all)
            }
            yield put({
                type: types.GET_LASTPOST_SUCCESS,
                payload: data
        })}

    } catch (error) {
        yield put({
            type: types.GET_LASTPOST_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getPopuarPostsSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getPopuarPosts();
        if (!checkData.loadPopularPosts){
            yield put({
                type: types.GET_POPULAR_POSTS_SUCCESS,
                payload: res
            })
        }else{
            yield put({
                type: types.GET_POPULAR_POSTS_SUCCESS,
                payload: checkData.popularPosts
        })}

    } catch (error) {
        yield put({
            type: types.GET_POPULAR_POSTS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getRecommendedPostsSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getRecommendedPosts();
        if (!checkData.loadRecommendedPosts){
            yield put({
                type: types.GET_RECOMMENDED_POSTS_SUCCESS,
                payload: res
            })
        }else{
            yield put({
                type: types.GET_RECOMMENDED_POSTS_SUCCESS,
                payload: checkData.recommendedPosts
        })}

    } catch (error) {
        yield put({
            type: types.GET_RECOMMENDED_POSTS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getRandomPostsSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getRandomPosts();
        if (!checkData.loadRandomPosts){
            yield put({
                type: types.GET_RANDOM_POSTS_SUCCESS,
                payload: res
            })
        }else{
            yield put({
                type: types.GET_RANDOM_POSTS_SUCCESS,
                payload: checkData.randomPosts
        })}

    } catch (error) {
        yield put({
            type: types.GET_RANDOM_POSTS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getTagsSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getTags();
        if (!checkData.loadTags){
            yield put({
                type: types.GET_TAGS_SUCCESS,
                payload: res
            })
        }else{
            yield put({
                type: types.GET_TAGS_SUCCESS,
                payload: checkData.tags
        })}

    } catch (error) {
        yield put({
            type: types.GET_TAGS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* getVotingPollSaga() {

    try {
        let checkData = yield select(getProject);
        const res = yield getVotingPoll();
        if (!checkData.loadVotingPoll){
            yield put({
                type: types.GET_VOTING_POLL_SUCCESS,
                payload: res
            })
        }else{
            yield put({
                type: types.GET_VOTING_POLL_SUCCESS,
                payload: checkData.votingPoll
        })}

    } catch (error) {
        yield put({
            type: types.GET_VOTING_POLL_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const HomePage = [
    takeEvery(types.GET_LIFESTYLE_REQUEST, getLifeStyleSaga),
    takeEvery(types.GET_FASHION_REQUEST, getFashionSaga),
    takeEvery(types.GET_QUIZZES_REQUEST, getQuizzesSaga),
    takeEvery(types.GET_TRAVEL_REQUEST,getTravelSaga),
    takeEvery(types.GET_RSSNEWS_REQUEST,getRssNewsSaga),
    takeEvery(types.GET_VIDEOS_REQUEST,getVideosSaga),
    takeEvery(types.GET_SLIDEFEATURES_REQUEST,getSlideFeaturedSaga),
    takeEvery(types.GET_FEATURES_RIGHT_REQUEST,getFeaturedRightSaga),
    takeEvery(types.GET_NEWTICKER_REQUEST,getNewTickerSaga),
    takeEvery(types.GET_LASTPOST_REQUEST,getLastPostSaga),
    takeEvery(types.GET_POPULAR_POSTS_REQUEST,getPopuarPostsSaga),
    takeEvery(types.GET_RECOMMENDED_POSTS_REQUEST,getRecommendedPostsSaga),
    takeEvery(types.GET_RANDOM_POSTS_REQUEST,getRandomPostsSaga),
    takeEvery(types.GET_TAGS_REQUEST,getTagsSaga),
    takeEvery(types.GET_VOTING_POLL_REQUEST,getVotingPollSaga)
];