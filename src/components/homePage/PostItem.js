import React from 'react'
import {HoverStyle,PostItemWap,PostItemImage,PostItemRight,PostItemTitle} from '../../style/styled-component'
import{ThemeProvider} from 'styled-components'
import * as types from '../../constant'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment,faEye} from '@fortawesome/free-solid-svg-icons'
import {faMusic,faPlay} from '@fortawesome/free-solid-svg-icons'

class PostItem extends React.Component{
    constructor(props){
        super()
    }

    render(){
        const theme = {
        color: this.props.settingBox.color,
        themeMode: this.props.settingBox.themeMode,
        size: this.props.size
        }
        const typeIcon ={
            play: faPlay,
            music: faMusic
        }
        return(
            <ThemeProvider theme={theme}>
                <PostItemWap className = {this.props.margin? "post-item "+this.props.margin:"post-item"}>
                    <PostItemImage className="img-post-item img-post-item-small">
                    {this.props.data.typeIcon?
                    (<div class="meida-icon">
                        <span className={this.props.typeIcon=="small"? "small":""}>
                            <FontAwesomeIcon icon={typeIcon[this.props.data.typeIcon]}>
                            </FontAwesomeIcon>
                        </span>
                    </div>):""}
                        <img src={this.props.data.imgLink}></img>
                    </PostItemImage>
                    <PostItemRight className="post-item-right">
                        <PostItemTitle className="title-post-item">
                            <HoverStyle title={this.props.title}><a href={types.homePage+this.props.data.linkPage}>{this.props.data.title}</a></HoverStyle>
                        </PostItemTitle>
                        <div className="post-meta-item post-meta">
                            <HoverStyle>{this.props.data.author}</HoverStyle>
                            <HoverStyle>{this.props.data.date}</HoverStyle>
                            <HoverStyle>
                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                {this.props.data.comment}
                            </HoverStyle>
                            <HoverStyle>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                {this.props.data.viewed}
                            </HoverStyle>
                        </div>
                        {this.props.description!=="none"&&<div className="description">{this.props.data.description}</div>}
                    </PostItemRight>
                </PostItemWap>
            </ThemeProvider>
        )
    }
}
  
export default PostItem