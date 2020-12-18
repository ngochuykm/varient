import React from 'react'
import{ThemeProvider} from 'styled-components'
import * as types from '../../constant'
import {Container} from '../../style/styled-component'
import Carousel from 'react-bootstrap/Carousel'
import SlideFeature from './SlideFeature'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment,faEye,faMusic,faPlay} from '@fortawesome/free-solid-svg-icons'

import '../../style/featured.css'

class Featured extends React.Component{
    constructor(){
        super()
    }
    itemFeaturedRight(value,number){
        const typeColor = {
            Fashion: "#30b333",
            Photography: "#e44e4e",
            Videos: "#bf448e",
            Nature: "#00acd8",
            Design: "#e44e4e",
            Places: "#00acd8"
        }
        const typeIcon ={
            play: faPlay,
            music: faMusic
        }
        let featureBox = number%2==0? "feature-box": "feature-box box-1"
        if(value){
            return(
                <div className={featureBox}>
                    <div className="box-item">
                        <span className="category-label" style={{backgroundColor:typeColor[value.type]}}>{value.type}</span>
                        <a href={types.homePage+value.linkPage} className="img-link">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAADZAQMAAAAqtAZpAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAB5JREFUGBntwYEAAAAAw6D7U8/gBNUAAAAAAAAAgC8fXQABZRtuDQAAAABJRU5ErkJggg==" alt="bg" class="img-responsive img-bg"/>
                            <div className="img-container">
                                {value.typeIcon=="none" ? "":(<div class="meida-icon">
                                    <span>
                                        <FontAwesomeIcon icon={typeIcon[value.typeIcon]}></FontAwesomeIcon>
                                    </span>
                                </div>)}
                                <img className="main-img-right" src={value.imgLink}/>
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
        }else{
        return(
            <div className={featureBox}>
                <div className="box-item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAADZAQMAAAAqtAZpAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAB5JREFUGBntwYEAAAAAw6D7U8/gBNUAAAAAAAAAgC8fXQABZRtuDQAAAABJRU5ErkJggg==" alt="bg" class="img-responsive img-bg"/>
                </div>
            </div>
)}
    }
    render(){
        return(
            <Container className="container-featured">
                <div className="featured-left">
                    <SlideFeature {...this.props} className="slide-feature"/>
                </div>
                <div className="featured-right">
                    <div className="item-feature-right">
                        {this.itemFeaturedRight(this.props.featuredRight[0],1)}
                        {this.itemFeaturedRight(this.props.featuredRight[1],2)}
                    </div>
                    <div className="item-feature-right">
                        {this.itemFeaturedRight(this.props.featuredRight[2],3)}
                        {this.itemFeaturedRight(this.props.featuredRight[3],4)}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Featured