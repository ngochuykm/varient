import React from 'react'
import {Container} from '../style/styled-component'
import ContentItemHomePage from './ContentItemHomePage'
import SlideBar from './homePage/SlideBar'
import Footer from './Footer'
import * as types from '../constant'
import '../style/homePage.css'

const Loading = () => (
    <div class="animationload">
        <div class="osahanloading"></div>
    </div>
)

class HomePageItem extends React.Component{
    constructor(){
        super()
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render(){
        let title
        let data = this.props.dataPage
        if(typeof(data)==="object"){
            title=data[data.length-1]
            console.log(typeof(title))
            console.log(title)
            console.log(this.props.pageSource)
            // return ""
        }else{
            title=this.props.dataPage
        }
        return(
            <div>
                <Container>
                    <div className="name-page">
                        {this.props.pageSource.map((value,key) => {
                            return <span key={key}><a href={types.homePage + value.pageLink}>{(key>0? " / ": "") + value.name}</a></span>
                        })}
                        <span><a href={types.homePage + this.props.pageLink}>{" / " + this.props.name}</a></span>
                    </div>
                    <div className="page-title">{this.capitalizeFirstLetter(title.replace(/[A-Z]/g, function(v) { return " "+v; }))}</div>
                    <div className="main">
                    {/* <LazyLoad height={200} once={true} offset={[-100, 100]} placeholder={<Loading />}> */}
                        <ContentItemHomePage className="content" {...this.props}/>
                        {/* </LazyLoad> */}
                        <SlideBar className="slide-bar" {...this.props}/>
                    </div>
                </Container>
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default HomePageItem