import React from 'react'
import {withTranslation} from 'react-i18next'
import{ThemeProvider} from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as types from '../constant'
import {faEllipsisH,faAngleDown,faSearch} from '@fortawesome/free-solid-svg-icons'
import {Container,LiMenu,MenuAll} from '../style/styled-component'
import '../style/menu.css'
import DropDownMenu from './DropDownMenu'

class Menu extends React.Component{
    constructor(){
        super()
        this.state= {
            showDropDownMenu: "rssNews",
            show: false
        }
    }
    
    render(){
        const {t} = this.props
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode
        }
        return(
            <ThemeProvider theme={theme}>
                <MenuAll className="menu">
                    <Container>
                        <ul className="menu-all">
                            <LiMenu>
                                <a href={types.homePage+"/"}>{t("Home")}</a>
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"lifeStyle",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/life-style"}>{t("LifeStyle")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="lifeStyle")&&<DropDownMenu {...this.props} name="/life-style" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"fashion",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/fashion"}>{t("Fashion")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="fashion")&&<DropDownMenu {...this.props} name="/fashion" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"quizzes",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/quizzes"}>{t("Quizzes")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="quizzes")&&<DropDownMenu {...this.props} name="/quizzes" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"travel",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/travel"}>{t("Travel")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="travel")&&<DropDownMenu {...this.props} name="/travel" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"rssNews",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/rssNews"}>{t("RssNews")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="rssNews")&&<DropDownMenu {...this.props} name="/rssNews" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu onMouseOver={()=>{this.setState({showDropDownMenu:"videos",show:"true"})}} onMouseLeave={()=>{this.setState({show:false})}}>
                                <a href={types.homePage+"/videos"}>{t("Videos")}</a>
                                <FontAwesomeIcon icon={faAngleDown} className="icon-menu"></FontAwesomeIcon>
                                {this.state.show&&(this.state.showDropDownMenu==="videos")&&<DropDownMenu {...this.props} name="/videos" data={this.props[this.state.showDropDownMenu]} itemIndex={Object.keys(this.props.lifeStyle)[0]}/>}
                            </LiMenu>
                            <LiMenu><a href={types.homePage+"/gallery"}>{t("Gallery")}</a></LiMenu>
                            <LiMenu><a href={types.homePage+"/life-style"}>{t("BuyNow")}</a></LiMenu>
                            <LiMenu className="menu-more"><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></LiMenu>
                            <LiMenu className="search-icon"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></LiMenu>
                        </ul>
                    </Container>
                </MenuAll>
            </ThemeProvider>
        )
    }
}

export default withTranslation("translation")(Menu)