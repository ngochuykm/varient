import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostStyleMedium from '../components/PostStyleMedium'

class PostStyleMediumContainer extends React.Component{
    constructor(props){
        super()
    }
    componentDidMount(){
        this.props.getFeaturedRight()
        this.props.getLastPost()
        this.props.getPopularPosts()
        this.props.getRecommendedPosts()
        this.props.getRandomPosts()
        this.props.getTags()
        this.props.getVotingPoll()
        this.props.getPostPage()
    }
    render(){
        return(
        <PostStyleMedium {...this.props}/>
        )
    }    
}

const mapStateToProps = (state) => {
    return{
        settingBox: state.settingbox,
        featuredRight: state.homePage.featuredRight,
        newTicker: state.homePage.newTicker,
        lastPost: state.homePage.lastPost,
        popularPosts: state.homePage.popularPosts,
        recommendedPosts: state.homePage.recommendedPosts,
        randomPosts: state.homePage.randomPosts,
        tags: state.homePage.tags,
        votingPoll: state.homePage.votingPoll,
        postPage: state.postPage.postData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSlideFeatured: () => {
            dispatch(actions.getSlideFeatured())
        },
        getFeaturedRight: () => {
            dispatch(actions.getFeaturedRight())
        },
        getNewTicKer: () =>{
            dispatch(actions.getNewTicker())
        },
        getLastPost: () =>{
            dispatch(actions.getLastPost())
        },
        getPopularPosts: () =>{
            dispatch(actions.getPopularPosts())
        },
        getRecommendedPosts: () => {
            dispatch(actions.getRecommendedPosts())
        },
        getRandomPosts: () => {
            dispatch(actions.getRamdomPosts())
        },
        getTags: () => {
            dispatch(actions.getTags())
        },
        getVotingPoll: () => {
            dispatch(actions.getVotingPoll())
        },
        getPostPage: () => {
            dispatch(actions.getPostPage())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostStyleMediumContainer)