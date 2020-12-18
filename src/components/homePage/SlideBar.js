import React from 'react'
import SlideBarItem from './SlideBarItem'

class SlideBar extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div className = "slide-bar">
                <SlideBarItem {...this.props} name="POPULAR POSTS" type="POPULAR_POSTS" data={this.props.popularPosts}/>
                <SlideBarItem {...this.props} name="FOLLOW US" type="FOLLOW_US"/>
                <SlideBarItem {...this.props} name="RECOMMENDED POSTS" type="RECOMMENDED_POSTS" data={this.props.recommendedPosts}/>
                <SlideBarItem {...this.props} name="RANDOM POSTS" type="RANDOM_POSTS" data={this.props.recommendedPosts}/>
                <SlideBarItem {...this.props} name="TAGS" type="TAGS" data={this.props.tags}/>
                <SlideBarItem {...this.props} name="VOTING POLL" type="VOTING_POLL" data={this.props.votingPoll}/>
            </div>
        )
    }
}

export default SlideBar