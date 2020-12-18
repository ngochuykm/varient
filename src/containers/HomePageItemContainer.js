import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import HomePageItem from '../components/HomePageItem'

class HomePageItemContainer extends React.Component{
    constructor(props){
        super()
    }
    componentDidMount(){
        this.props.getSlideFeatured()
        this.props.getFeaturedRight()
        this.props.getNewTicKer()
        this.props.getLastPost()
        this.props.getPopularPosts()
        this.props.getRecommendedPosts()
        this.props.getRandomPosts()
        this.props.getTags()
        this.props.getVotingPoll()
    }
    render(){
        return(
            <HomePageItem {...this.props}/>
        )
    }    
}

const mapStateToProps = (state) => {
    return{
        settingBox: state.settingbox,
        lifeStyle: state.homePage.lifeStyle,
        fashion: state.homePage.fashion,
        quizzes: state.homePage.quizzes,
        travel: state.homePage.travel,
        rssNews: state.homePage.rssNews,
        videos: state.homePage.videos,
        slideFeatured: state.homePage.slideFeatured,
        featuredRight: state.homePage.featuredRight,
        newTicker: state.homePage.newTicker,
        lastPost: state.homePage.lastPost,
        popularPosts: state.homePage.popularPosts,
        recommendedPosts: state.homePage.recommendedPosts,
        randomPosts: state.homePage.randomPosts,
        tags: state.homePage.tags,
        votingPoll: state.homePage.votingPoll
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageItemContainer)
