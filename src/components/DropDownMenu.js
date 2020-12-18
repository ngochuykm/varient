import React from 'react'
import{ThemeProvider} from 'styled-components'
import {HoverStyle,DropDownMenuElement,UlMenuLeft,LiMenuLeft} from '../style/styled-component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment,faEye} from '@fortawesome/free-solid-svg-icons'
import '../style/dropdownmenu.css'

class DropDownMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showItem: ""
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    replaceTap(string){
        return string.replace(/[A-Z]/g, function(v) { return " "+v; }).substring(1); 
    }
    render(){
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode
        }
        let menuLeftArray = []
        let item = Object.keys(this.props.data).length==1? 5:4
        let showItem = this.state.showItem===""? this.props.itemIndex:this.state.showItem
        if(this.props.data){
            if(Object.keys(this.props.data).length!==0){
                for(const value in this.props.data){
                    menuLeftArray.push(value)
                }
            }
        }
        let menuLeft = menuLeftArray.map((value,key)=>{
            return <LiMenuLeft onMouseOver={()=>this.setState({showItem:value})}><a key={key} href={this.props.name + "/" + value}>{this.replaceTap(this.capitalizeFirstLetter(value))}</a></LiMenuLeft>
        })
        let menu
        let widthItemStyle = {
            width: Object.keys(this.props.data).length==1?"20%":"25%"
        }
        let widthMenuRight = {
            width: Object.keys(this.props.data).length==1?"100%":"80%"
        }
        if(this.props.data){
            if(Object.keys(this.props.data).length!==0){
                menu = (
                <DropDownMenuElement className="drop-down-menu">
                    {Object.keys(this.props.data).length!==1&&<div className="sub-menu-left">
                        <UlMenuLeft>
                            {menuLeft}
                        </UlMenuLeft>
                    </div>}
                    <div style={widthMenuRight} className="sub-menu-right">
                        {this.props.data[showItem].map((value,key)=>{
                            if(key<item){return(
                                <div style={widthItemStyle} className="card">
                                    <div className="menu-post-item">
                                        <div className="post-item-image">
                                            <a href={value.linkPage}>
                                                <img className="img-post-item" src={value.imgLink}/>
                                            </a>
                                        </div>
                                        <div className="post-item-title">
                                            <a href={value.linkPage}><HoverStyle>{value.title}</HoverStyle></a>
                                        </div>
                                        <p className="post-meta">
                                            <HoverStyle>{value.author}</HoverStyle>
                                            <HoverStyle>{value.date}</HoverStyle>
                                            <HoverStyle>
                                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                                {value.comment}
                                            </HoverStyle>
                                            <HoverStyle>
                                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                                {value.viewed}
                                            </HoverStyle>
                                        </p>
                                    </div>
                                </div>
                            )}
                        })}
                    </div>
                </DropDownMenuElement>
            )
            }
        }
        return(
            <div className="container-menu">
                <ThemeProvider theme={theme}>
                    {menu}
                </ThemeProvider>
            </div>
        )
    }
}
export default DropDownMenu