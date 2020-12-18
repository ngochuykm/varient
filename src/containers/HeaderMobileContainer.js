import React from 'react'
import { connect } from 'react-redux'
import HeaderMobile from '../components/HeaderMobile'

class HeaderMobileContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
        <HeaderMobile {...this.props}/>
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
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMobileContainer)