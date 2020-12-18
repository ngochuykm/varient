import * as types from '../constant'

const  DEFAULT_STATE = {
    lifeStyle:{},
    loadLifeStyle: false,
    fashion:{},
    loadFashion: false,
    quizzes:{},
    loadQuizzes: false,
    travel:{},
    loadTravel: false,
    rssNews:{},
    loadRssNews: false,
    videos:{},
    slideFeatured:[],
    loadSlideFeatured:false,
    loadVideos: false,
    featuredRight:[],
    loadFeaturedRight:false,
    newTicker:[],
    loadNewTicker:false,
    isLoadding: false,
    loadLastPost: false,
    lastPost: [],
    loadPopularPosts: false,
    popularPosts:[],
    loadRecommendedPosts: false,
    recommendedPosts: [],
    loadRandomPosts: false,
    randomPosts: [],
    loadTags: false,
    tags: [],
    loadVotingPoll: false,
    votingPoll: [],
    errorMessenger:"",
}

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case types.GET_LIFESTYLE_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_LIFESTYLE_SUCCESS :
            return{
                ...state,
                isLoadding: false,
                loadLifeStyle: true,
                lifeStyle: action.payload
            }
        case types.GET_LIFESTYLE_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_FASHION_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_FASHION_SUCCESS :
            return{
                ...state,
                isLoadding: false,
                loadFashion: true,
                fashion: action.payload
            }
        case types.GET_FASHION_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_QUIZZES_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_QUIZZES_SUCCESS :
            return{
                ...state,
                isLoadding: false,
                loadQuizzes: true,
                quizzes: action.payload
            }
        case types.GET_QUIZZES_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_TRAVEL_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_TRAVEL_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                loadTravel: true,
                travel: action.payload
            }
        case types.GET_TRAVEL_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_RSSNEWS_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_RSSNEWS_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                loadRssNews: true,
                rssNews: action.payload
            }
        case types.GET_QUIZZES_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_VIDEOS_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_VIDEOS_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                loadVideos: true,
                videos: action.payload
            }
        case types.GET_VIDEOS_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_SLIDEFEATURES_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_SLIDEFEATURES_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                loadSlideFeatured: true,
                slideFeatured: action.payload

            }
        case types.GET_SLIDEFEATURES_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
        case types.GET_FEATURES_RIGHT_REQUEST:
            return{
                ...state,
                isLoadding:true
            }
        case types.GET_FEATURES_RIGHT_SUCCESS:
            return{
                ...state,
                isLoadding: false,
                loadFeaturedRight: true,
                featuredRight: action.payload

            }
        case types.GET_FEATURES_RIGHT_FAILURE:
            return{
                ...state,
                isLoadding: false,
                errorMessenger: action.payload
            }
            case types.GET_NEWTICKER_REQUEST:
                return{
                    ...state,
                    isLoadding:true
                }
            case types.GET_NEWTICKER_SUCCESS:
                return{
                    ...state,
                    isLoadding: false,
                    loadNewTicker: true,
                    newTicker: action.payload
    
                }
            case types.GET_NEWTICKER_FAILURE:
                return{
                    ...state,
                    isLoadding: false,
                    errorMessenger: action.payload
                }
                case types.GET_LASTPOST_REQUEST:
                    return{
                        ...state,
                        isLoadding:true
                    }
                case types.GET_LASTPOST_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadLastPost: true,
                        lastPost: action.payload
        
                    }
                case types.GET_LASTPOST_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
                case types.GET_POPULAR_POSTS_REQUEST:
                    return{
                        ...state,
                        isLoadding: true,
                    }
                case types.GET_POPULAR_POSTS_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadPopularPosts: true,
                        popularPosts: action.payload
                    }
                case types.GET_POPULAR_POSTS_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
                case types.GET_RECOMMENDED_POSTS_REQUEST:
                    return{
                        ...state,
                        isLoadding: true,
                    }
                case types.GET_RECOMMENDED_POSTS_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadRecommendedPosts: true,
                        recommendedPosts: action.payload
                    }
                case types.GET_RECOMMENDED_POSTS_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
                case types.GET_RANDOM_POSTS_REQUEST:
                    return{
                        ...state,
                        isLoadding: true,
                    }
                case types.GET_RANDOM_POSTS_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadRandomPosts: true,
                        randomPosts: action.payload
                    }
                case types.GET_RANDOM_POSTS_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
                case types.GET_TAGS_REQUEST:
                    return{
                        ...state,
                        isLoadding: true,
                    }
                case types.GET_TAGS_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadTags: true,
                        tags: action.payload
                    }
                case types.GET_TAGS_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
                case types.GET_VOTING_POLL_REQUEST:
                    return{
                        ...state,
                        isLoadding: true,
                    }
                case types.GET_VOTING_POLL_SUCCESS:
                    return{
                        ...state,
                        isLoadding: false,
                        loadTags: true,
                        votingPoll: action.payload
                    }
                case types.GET_VOTING_POLL_FAILURE:
                    return{
                        ...state,
                        isLoadding: false,
                        errorMessenger: action.payload
                    }
        default: return {...state} 
    }
}