import * as types from '../constant'
export function getLifeStyle(payload){
    return ({
        type: types.GET_LIFESTYLE_REQUEST,
        payload
    })
}

export function getFashion(payload){
    return({
        type: types.GET_FASHION_REQUEST,
        payload
    })
}

export function getQuizzes(payload){
    return({
        type: types.GET_QUIZZES_REQUEST,
        payload
    })
}

export function getTravel(payload){
    return({
        type: types.GET_TRAVEL_REQUEST,
        payload
    })
}

export function getRssnews(payload){
    return({
        type: types.GET_RSSNEWS_REQUEST,
        payload
    })
}

export function getVideos(payload){
    return({
        type: types.GET_VIDEOS_REQUEST,
        payload
    })
}

export function getSlideFeatured(payload){
    return({
        type: types.GET_SLIDEFEATURES_REQUEST,
        payload
    })
}

export function getFeaturedRight(payload){
    return({
        type: types.GET_FEATURES_RIGHT_REQUEST,
        payload
    })
}

export function getNewTicker(payload){
    return({
        type: types.GET_NEWTICKER_REQUEST,
        payload
    })
}

export function getLastPost(payload){
    return({
        type: types.GET_LASTPOST_REQUEST,
        payload
    })
}

export function getPopularPosts(payload){
    return({
        type:types.GET_POPULAR_POSTS_REQUEST,
        payload
    })
}

export function getRecommendedPosts(payload){
    return({
        type:types.GET_RECOMMENDED_POSTS_REQUEST,
        payload
    })
}

export function getRamdomPosts(payload){
    return({
        type:types.GET_RANDOM_POSTS_REQUEST,
        payload
    })
}

export function getTags(payload){
    return({
        type: types.GET_TAGS_REQUEST,
        payload
    })
}

export function getVotingPoll(payload){
    return({
        type: types.GET_VOTING_POLL_REQUEST,
        payload
    })
}
