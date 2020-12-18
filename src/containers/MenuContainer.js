import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Menu from '../components/Menu'

class MenuContainer extends React.Component{
    constructor(props){
        super()
    }
    componentDidMount(){
        this.props.getLifeStyle()
        this.props.getTravel()
        this.props.getFashion()
        this.props.getRssNews()
        this.props.getVideos()
        this.props.getQuizzes()
    }
    render(){
        return(
        <Menu {...this.props}/>
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
        videos: state.homePage.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getLifeStyle: ()=> {
            dispatch(actions.getLifeStyle())
        },
        getFashion: () => {
            dispatch(actions.getFashion())
        },
        getTravel: () => {
            dispatch(actions.getTravel())
        },
        getQuizzes: () =>{
            dispatch(actions.getQuizzes())
        },
        getRssNews: () => {
            dispatch(actions.getRssnews())
        },
        getVideos: () =>{
            dispatch(actions.getVideos())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer)