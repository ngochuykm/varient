import React from 'react'
import { Slide  } from 'react-slideshow-image';
import '../../style/styles-react-slideshow-image.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
        if(this.props.slideFeatured){
            slideItem = this.props.slideFeatured.map((value,key) =>{
                return(
                    <div className="each-slide slide-item">
                        <div className="slide-item">
                            <span className="category-label" style={{backgroundColor:typeColor[value.type]}}>{value.type}</span>
                            <a href={value.linkPage} className="img-link">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAHMAQMAAAAzt0RXAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAADhJREFUGBntwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAXYiQAAEBSA5gAAAAAElFTkSuQmCC" alt="bg" class="img-responsive img-bg"/>
                                <div className="img-container">
                                    {value.typeIcon=="none" ? "":(<div class="meida-icon">
                                        <span>
                                            <FontAwesomeIcon icon={typeIcon[value.typeIcon]}></FontAwesomeIcon>
                                        </span>
                                    </div>)}
                                    <img src={value.imgLink}/>
                                </div>
                            </a>
                            <div className="caption">
                                <div class="title">{value.title}</div>
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