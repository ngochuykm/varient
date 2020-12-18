import React from 'react'
import PostItem from './PostItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HoverStyle} from '../../style/styled-component'
import {faComment,faEye,faMusic,faPlay} from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazyload'
import * as types from '../../constant'
import { faRProject } from '@fortawesome/free-brands-svg-icons'

const Loading = () => (
    <div class="animationload">
        <div class="osahanloading"></div>
    </div>
)

class SectionRight extends React.Component{
    constructor(props){
        super()
        this.state = {
            activeTab : 0
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    replaceTap(string){
        return string.replace(/[A-Z]/g, function(v) { return " "+v; }).substring(1); 
    }
    sectionRight1(data,type,tabItem,typeColor,typeIcon,name,props){
        return(
            <div className="section-wrap">
                    <div className="section-head" style={{borderBottom: "2px solid " + typeColor[type]}}>
                        <div className="section-title" style={{backgroundColor: typeColor[type]}}>{name}</div>
                        <div className="section-tab">{tabItem}</div>
                    </div>
                    <div className="section-tab-content">
                        <div className="content-left">
                            {data.all&&<PostItem {...props}  data={data.all[0]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[2]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[4]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[6]} type="block" size={"small"} description="none"/>}
                        </div>
                        <div className="content-right">
                            {data.all&&<PostItem {...props}  data={data.all[1]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[3]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[5]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[7]} type="block" size={"small"} description="none"/>}
                        </div>
                    </div>
                </div>
        )
    }
    sectionRight2(data,type,tabItem,typeColor,typeIcon,name,props){
        return(
            <div className="section-wrap">
                    <div className="section-head" style={{borderBottom: "2px solid " + typeColor[type]}}>
                        <div className="section-title" style={{backgroundColor: typeColor[type]}}>{name}</div>
                        <div className="section-tab">{tabItem}</div>
                    </div>
                    <div className="section-tab-content">
                        <div className="content-left">
                            {data.all&&<PostItem {...props}  data={data.all[0]} type="block" size={"big"}/>}
                        </div>
                        <div className="content-right">
                            {data.all&&<PostItem {...props}  data={data.all[1]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[2]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[3]} type="block" size={"small"} description="none"/>}
                            {data.all&&<PostItem {...props}  data={data.all[4]} type="block" size={"small"} description="none"/>}
                        </div>
                    </div>
                </div>
        )
    }
    sectionRight3(data,type,tabItem,typeColor,typeIcon,name,props){
        return(
            <div className="section-wrap">
                    <div className="section-head" style={{borderBottom: "2px solid " + typeColor[type]}}>
                        <div className="section-title" style={{backgroundColor: typeColor[type]}}>{name}</div>
                        <div className="section-tab">{tabItem}</div>
                    </div>
                    <div className="section-tab-content">
                        <div className="content-left">
                            {data.all&&<PostItem {...props}  data={data.all[0]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[2]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[4]} type="block" size={"big"}/>}
                        </div>
                        <div className="content-right">
                            {data.all&&<PostItem {...props}  data={data.all[1]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[3]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props}  data={data.all[5]} type="block" size={"big"}/>}
                        </div>
                    </div>
                </div>
        )
    }
    sectionRight4(data,type,tabItem,typeColor,typeIcon,name,props){
        return(
            <div className="section-wrap">
                    <div className="section-head" style={{borderBottom: "2px solid " + typeColor[type]}}>
                        <div className="section-title" style={{backgroundColor: typeColor[type]}}>{name}</div>
                        <div className="section-tab">{tabItem}</div>
                    </div>
                    <div className="section-tab-videos">
                        <div className="content-videos-top">
                            <div className="each-slide slide-item">
                                <div className="slide-item">
                                    <span className="category-label" style={{backgroundColor:typeColor[data.all[0].type]}}>{data.all[0].type}</span>
                                    <a href={types.homePage + data.all[0].linkPage} className="img-link">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAHMAQMAAAAzt0RXAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAADhJREFUGBntwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAXYiQAAEBSA5gAAAAAElFTkSuQmCC" alt="bg" class="img-responsive img-bg"/>
                                        <div className="img-container">
                                            {data.all[0].typeIcon=="none" ? "":(<div class="meida-icon">
                                                <span>
                                                    <FontAwesomeIcon icon={typeIcon[data.all[0].typeIcon]}></FontAwesomeIcon>
                                                </span>
                                            </div>)}
                                            <img src={data.all[0].imgLink}/>
                                        </div>
                                    </a>
                                    <div className="caption">
                                        <div class="title">{data.all[0].description}</div>
                                        <div class="post-meta">
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
                        <div className="content-videos-bottom">
                            {data.all&&<PostItem {...props} title="16px" margin="content-margin" data={data.all[1]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props} title="16px" margin="content-margin" data={data.all[2]} type="block" size={"big"}/>}
                            {data.all&&<PostItem {...props} title="16px"  data={data.all[3]} type="block" size={"big"}/>}
                        </div>
                    </div>
                </div>
        )
    }
    sectionRight5(data,type,tabItem,typeColor,typeIcon,name,props){
        const theme = {
            color: props.settingBox.color,
            themeMode: props.settingBox.themeMode,
            size: props.size
        }
        return(
            <div className="section-wrap">
                <div className="section-head" style={{borderBottom: "2px solid " + typeColor[type]}}>
                    <div className="section-title" style={{backgroundColor: typeColor[type]}}>{name}</div>
                    <div className="section-tab">{tabItem}</div>
                </div>
                <div className="section-last-post">
                    {data.all.map((value,key) =>{
                        return data.all&&<PostItem {...props}  data={value} type="block" size={"medium"}/>
                    })}
                </div>
                <div className="load-more" onClick={()=>props.getLastPost()}><HoverStyle border={"yes"} theme={theme}>Load More</HoverStyle></div>
            </div>
        )
    }
    render(){
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
            size: this.props.size
        }
        const typeColor = {
            FASHION: "#30b333",
            LIFE_STYLE: "#e44e4e",
            VIDEOS: "#bf448e",
            NATURE: "#00acd8",
            QUIZZES: "#f9ab00",
            TRAVEL: "#00acd8",
            RSS_NEWS: "#607d8b",
            LAST_POSTS:"#161616"
        }
        const typeTheme = {
            FASHION:this.sectionRight2,
            LIFE_STYLE:this.sectionRight1,
            QUIZZES:this.sectionRight3,
            TRAVEL:this.sectionRight3,
            RSS_NEWS:this.sectionRight1,
            VIDEOS:this.sectionRight4,
            LAST_POSTS:this.sectionRight5
        }
        const typeIcon ={
            play: faPlay,
            music: faMusic
        }
        let tab = []
        if(this.props.data){
            if(Object.keys(this.props.data).length>1){
                for (let property in this.props.data){
                    property = this.capitalizeFirstLetter(property) 
                    tab.push(this.replaceTap(property))
            }}
        let tabItem = tab.map((value,key) => {
            return <li onClick={()=>this.setState({activeTab:key})} className={key==this.state.activeTab? "active tab-item": "tab-item"} >{value}</li>
        })
        let content 
        if(this.props.data){
            if(this.props.data.all){
                console.log(typeTheme.FASHION)
                content= typeTheme[this.props.type](this.props.data,this.props.type,tabItem,typeColor,typeIcon,this.props.name,this.props)
            }
        }
        return(
            <div className = "section-right">
                <LazyLoad placeholder={<Loading/>}>
                    {content}
                </LazyLoad>
            </div>
        )
    }
}
}
export default SectionRight