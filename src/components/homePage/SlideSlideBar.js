import React from 'react'
import { Slide  } from 'react-slideshow-image';
import '../../style/styles-react-slideshow-image.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as types from '../../constant'
import{ThemeProvider} from 'styled-components'
import {HoverStyle} from '../../style/styled-component'
import {faComment,faEye,faMusic,faPlay} from '@fortawesome/free-solid-svg-icons'

class SlideFeature extends React.Component{
    constructor(){
        super()
    }
    render(){
        let slideItem 
        const typeColor = {
            Fashion: "#30b333",
            Photography: "#e44e4e",
            Videos: "#bf448e",
            Nature: "#00acd8"
        }
        const typeIcon ={
            play: faPlay,
            music: faMusic
        }
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode
        }
        if(this.props.randomPosts){
            slideItem = this.props.randomPosts.map((value,key) =>{
                return(
                    <div className="each-slide slide-item">
                        <div className="slide-item">
                            <span className="category-label" style={{backgroundColor:typeColor[value.type]}}>{value.type}</span>
                            <a href={types.homePage + value.linkPage} className="img-link-small">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAHMAQMAAAAzt0RXAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAADhJREFUGBntwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAXYiQAAEBSA5gAAAAAElFTkSuQmCC" alt="bg" class="img-responsive img-bg"/>
                                <div className="img-container-small">
                                    <div className="img-wrap">
                                        {value.typeIcon=="none" ? "":(<div class="meida-icon">
                                            <span>
                                                <FontAwesomeIcon icon={typeIcon[value.typeIcon]}></FontAwesomeIcon>
                                            </span>
                                        </div>)}
                                        <img src={value.imgLink}/>
                                    </div>
                                </div>
                            </a>
                            <div className="caption caption-small-ramdom">
                                <ThemeProvider theme={theme}>
                                    <div class="title"><HoverStyle>{value.title}</HoverStyle></div>
                                    <div class="post-meta">
                                        <span>{value.author}</span>
                                        <span>{value.date}</span>
                                        <span>
                                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                            {value.comment}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                            {value.viewed}
                                        </span>
                                    </div>
                <div className="description">{value.description}</div>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return(
            <div className="slide-feature">
                <Slide duration={500000} transitionDuration={200}>
                    {slideItem}
                </Slide>
            </div>
        )
    }
}

export default SlideFeature