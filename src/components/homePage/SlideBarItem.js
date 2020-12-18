import React from 'react'
import {HoverStyle,TabsItem,NavTabs,TagsItem,ButtonVote,IconCheck} from '../../style/styled-component'
import PostItem from './PostItem'
import{ThemeProvider} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SlideSlideBar from './SlideSlideBar'
import ModalVote from './ModaVote'
import { faFacebookF,faTwitter,faPinterestP,faInstagram,faLinkedin,faVk } from '@fortawesome/free-brands-svg-icons'
import {faComment,faEye,faMusic,faPlay,faCheck} from '@fortawesome/free-solid-svg-icons'
import Checkbox from './CheckBox'  

class SlideBarItem extends React.Component{
    constructor(){
        super()
        this.state = {
            activeTab: "thisWeek",
            question1: "",
            question2:"",
            openModal: false
        }
    }
    popularPosts(data,activeTab,props){
        return(
            <div className="popular-posts">
                <NavTabs className="nav-tabs">
                    <ul>
                        <li><TabsItem active={activeTab=="thisWeek" ? "yes" : "not"}>This Week</TabsItem></li>
                        <li><TabsItem active={activeTab=="thisMouth"? "yes" : "not"}>This Month</TabsItem></li>
                        <li><TabsItem active={activeTab=="allTime"? "yes" : "not"}>All Time</TabsItem></li>
                    </ul>
                </NavTabs>
                <div className="nav-content">
                    {data&&data.map((value,key) => {
                        if(key<5){
                        return(
                            <PostItem {...props}  data={value} type="block" size={"small"} description="none"/>
                        )}
                    })}
                </div>
            </div>
        )
    }

    followUs(){
        
        return (
            <div className="follow-us">
                <a href="/" target="_blank" className="mobile-menu-social icon-facebook icon-left">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <span>Facebook</span>
                </a>
                <a href="/" target="_blank" className="mobile-menu-social icon-twitter">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    <span>Twitter</span>
                </a>
                <a href="/" target="_blank" className="mobile-menu-social icon-pinterest icon-left">
                    <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon>
                    <span>Instagram</span>
                </a>
                <a href="/" target="_blank" className="mobile-menu-social icon-instagram">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <span>Pinteress</span>
                </a>
                <a href="/" target="_blank" className="mobile-menu-social icon-linkedin icon-left">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <span>Linkedin</span>
                </a>
                <a href="/" target="_blank" className="mobile-menu-social icon-vk">
                    <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
                    <span>Vk</span>
                </a>
            </div>
        )
    }

    recommendedPosts(data,props,typeColor){
        return(
            <div>
                <div className="content-videos-top content-videos-top-small">
                    <div className="each-slide slide-item slide-item-small">
                        <div className="slide-item">
                            <span className="category-label" style={{backgroundColor:typeColor[data.all[0].type]}}>{data.all[0].type}</span>
                            <a href={data.all[0].linkPage} className="img-link">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAHMAQMAAAAzt0RXAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAADhJREFUGBntwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAXYiQAAEBSA5gAAAAAElFTkSuQmCC" alt="bg" class="img-responsive img-bg"/>
                                <div className="img-container">
                                    <img src={data.all[0].imgLink}/>
                                </div>
                            </a>
                            <div className="caption caption-small">
                                <div class="title">{data.all[0].description}</div>
                                <div class="post-meta post-meta-small">
                                    <span>{data.all[0].author}</span>
                                    <span>{data.all[0].date}</span>
                                    <span>
                                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                        {data.all[0].comment}
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                        {data.all[0].viewed}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-content">
                        {data&&data.all.map((value,key) => {
                            if(0<key&&key<5){
                            return(
                                <PostItem {...props} typeIcon="small" data={value} type="block" size={"small"} description="none"/>
                            )}
                        })}
                    </div>
            </div>
        )
    }
    randomPosts(props){
        return (
            <div className="random-posts">
                <SlideSlideBar {...props}/>
            </div>
        )
    }
    tags(tags,theme){
        console.log(tags)
        return(
        <div className="tags">
            <ThemeProvider theme={theme}>
                {tags.map((value,key) => {
                    return <TagsItem key={key} className="tags-item">{value}</TagsItem>
                })}
            </ThemeProvider>
        </div>
        )
    }
    votingPoll(theme){
        return(
            <div className="voting-poll">
                {this.props.votingPoll.map((value,key) => {
                    return(
                        <div key={key} className="voting-poll-item">
                            <ThemeProvider theme={theme}>
                                <div className="question">{value.question}</div>
                                <ul className="answer">
                                    {value.answer.map((value1,key1) =>  {
                                        return (
                                            <Checkbox theme={theme} className={"check-box"} onChange={()=>this.setState({["question" + (key + 1)]:value1})} key={key1} label={value1} checked={this.state["question" + (key + 1)]===value1}/>
                                        )
                                    })}
                                </ul>
                                <ButtonVote onClick={() => this.setState({openModal:true})} type="submit">Vote</ButtonVote>
                                <a className="a-view-results"><HoverStyle>View results</HoverStyle></a>
                            </ThemeProvider>
                        </div>
                    )
                })}
                <ModalVote {...this.props} openModal={this.state.openModal} closeModal={()=>this.setState({openModal:false})}/>
            </div>
        )
    }
    render(){
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
            activeTab: this.state.activeTab
        }
        const typeIcon = {
            play: faPlay,
            music: faMusic
        }
        const typeColor = {
            FASHION: "#30b333",
            Photography: "#e44e4e",
            VIDEOS: "#bf448e",
            NATURE: "#00acd8",
            QUIZZES: "#f9ab00",
            TRAVEL: "#00acd8",
            RSS_NEWS: "#607d8b",
            LAST_POSTS:"#161616"
        }
        const type = {
            POPULAR_POSTS: this.props.data&&this.popularPosts(this.props.data[this.state.activeTab],this.state.activeTab,this.props),
            FOLLOW_US: this.props.type==="FOLLOW_US"&&this.followUs(),
            RECOMMENDED_POSTS: this.props.data&&this.props.data.all&&this.recommendedPosts(this.props.data,this.props,typeColor,typeIcon),
            RANDOM_POSTS: this.props.type==="RANDOM_POSTS"&&this.randomPosts(this.props),
            TAGS: this.props.type==="TAGS"&&this.props.tags&&this.tags(this.props.tags,theme),
            VOTING_POLL: this.props.type==="VOTING_POLL"&&this.votingPoll(theme)
        }
        return(
            <ThemeProvider theme={theme}>
                <div className="slide-bar-item">
                    <div className="slide-bar-header">
                        <div class="title">
                            {this.props.name}
                        </div>
                    </div>
                    <div className="slide-bar-content">
                        {type[this.props.type]}
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default SlideBarItem