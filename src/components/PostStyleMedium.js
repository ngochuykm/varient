import React from 'react'
import {Container} from '../style/styled-component'
import ContentItemPost from './ContentItemPost'
import SlideBar from './homePage/SlideBar'
import Footer from './Footer'
import * as types from '../constant'
import {typeColors} from './../constant'
import '../style/post-style.css'

class PostStyleMedium extends React.Component{
    constructor(props){
        super(props)
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render(){
        let title
        let data = this.props.dataPage
        let typeColor
        if(typeof(data)==="object"){
            title=data[data.length-1]
            typeColor = data[0].replace(/[A-Z]/g, function(v) { return "_"+v;}).toUpperCase()
        }else{
            title=this.props.dataPage
        }
        return (
            <div>
                <Container>
                    <div className="post-container">
                        <div className="name-page">
                            {this.props.pageSource.map((value,key) => {
                                return <span key={key}><a href={types.homePage + value.pageLink}>{(key>0? " / ": "") + value.name}</a></span>
                            })}
                            <span><a href={types.homePage + this.props.pageLink}>{" / " + this.props.name}</a></span>
                        </div>
                        <div className="main-post">
                            <ContentItemPost typeColor={typeColor} title = {title} {...this.props}/>
                            <SlideBar {...this.props}/>
                        </div>
                    </div>
                </Container>
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default PostStyleMedium