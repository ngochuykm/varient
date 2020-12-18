import React from 'react'
import {SpanItem} from '../style/styled-component'
import {Summary} from './postPage/Summary'
import {Meta} from './postPage/Meta'
import {ShareBox} from './postPage/ShareBox'
import {typeColors} from './../constant'
import {Image} from './postPage/Image'
import {Text} from './postPage/Text'
import {Tags} from './postPage/Tags'
import {Reaction} from './postPage/Reaction'

class ContentItemPost extends React.Component{
    constructor(){
        super()
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render(){
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
            size: this.props.size
            }
        let postPage
        if(this.props.postPage){
            postPage = this.props.postPage.map((value,key) => {
                switch(value.type){
                    case "summary":
                        return <Summary key={key} data={value} theme={theme}/>
                    case "meta":
                        return <Meta data={value.value} theme={theme}/>
                    case "share-box":
                        return <ShareBox/>
                    case "image":
                        return <Image data={value.value}/>
                    case "text":
                        return <Text data={value.value} theme={theme}/>
                    case "tags":
                        return <Tags data={value.value} theme={theme}/>
                    case "reaction":
                        return <Reaction data={value.value} theme={theme}/>
                }
            })
        }
        return(
            <div className="content post-content">
                <div style={{backgroundColor:typeColors[this.props.typeColor]}} className="category-label-post">{this.capitalizeFirstLetter(this.props.title.replace(/[A-Z]/g, function(v) { return " "+v; }))}</div>
                <div className="post-title"><SpanItem theme={theme}>{this.props.name}</SpanItem></div>
                {postPage}
            </div>
        )
    }
}

export default ContentItemPost