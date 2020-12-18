import React from 'react'
import '../style/settingbox.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCog,faCheck } from '@fortawesome/free-solid-svg-icons'
import {withTranslation} from 'react-i18next'
import light from "../image/theme_light_front.jpg"
import dark from "../image/theme_dark_front.jpg"


class SettingBox extends React.Component{
    constructor(){
        super()
        this.state = {
            left_position: "-256px",
            check_color: 3,
            theme_mode: "light"
        }
    }

    change_left_position() {
        if(this.state.left_position=="-256px"){
            this.setState({left_position: "0px"})
        }else{
            this.setState({left_position: "-256px"})
        }
    }

    render(){
        const {t} = this.props
        let mystyle = {
            left: this.state.left_position
        }
        let backgroundOpenSettingBox ={
            backgroundColor:this.props.settingBox.color
        }
        return(
            <div className="setting-box" style={mystyle}>
                <div className="open-setting-box" style={backgroundOpenSettingBox} onClick={() => this.change_left_position()}>
                    <FontAwesomeIcon icon={faCog}>
                    </FontAwesomeIcon>
                </div>
                <h4>{t("Color")}</h4>
                <div className="wrap_color_box">
                    <div className="color_box" style={{backgroundColor:"#1abc9c"}} onClick={()=>{
                        this.props.changeColor("#1abc9c") 
                        this.setState({check_color:0})}}>
                        {this.state.check_color===0? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#6770B7"}} onClick={()=>{
                        this.props.changeColor("#6770B7") 
                        this.setState({check_color:1})}}>
                        {this.state.check_color===1? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#1da7da"}} onClick={()=>{
                        this.props.changeColor("#1da7da") 
                        this.setState({check_color:2})}}>
                        {this.state.check_color===2? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#0494b1"}} onClick={()=>{
                        this.props.changeColor("#0494b1") 
                        this.setState({check_color:3})}}>
                        {this.state.check_color===3? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#e91e63",marginRight:"0px"}} onClick={()=>{
                        this.props.changeColor("#e91e63") 
                        this.setState({check_color:4})}}>
                        {this.state.check_color===4? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#e74c3c"}} onClick={()=>{
                        this.props.changeColor("#e74c3c") 
                        this.setState({check_color:5})}}>
                        {this.state.check_color===5? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#f86923"}} onClick={()=>{
                        this.props.changeColor("#f86923") 
                        this.setState({check_color:6})}}>
                        {this.state.check_color===6? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#f2d438"}} onClick={()=>{
                        this.props.changeColor("#f2d438") 
                        this.setState({check_color:7})}}>
                        {this.state.check_color===7? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#34495e"}} onClick={()=>{
                        this.props.changeColor("#34495e") 
                        this.setState({check_color:8})}}>
                        {this.state.check_color===8? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                    <div className="color_box" style={{backgroundColor:"#95a5a6",marginRight:"0px"}} onClick={()=>{
                        this.props.changeColor("#95a5a6") 
                        this.setState({check_color:9})}}>
                        {this.state.check_color===9? (<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>):""}
                    </div>
                </div>
                <div className="warp_theme_mode">
                    <div style={{marginRight:"12px"}} className={this.state.theme_mode==="light"? "active theme_mode":"theme_mode"} onClick={()=>{
                        this.props.changeThemeMode("#fff")
                        this.setState({theme_mode:"light"})}}>
                        <h4>{t("LightMode")}</h4>
                        <img src={light}/>
                    </div>
                    <div className={this.state.theme_mode==="dark"? "active theme_mode":"theme_mode"} onClick={()=>{
                        this.props.changeThemeMode("#1c1c1c")
                        this.setState({theme_mode:"dark"})}}>
                        <h4>{t("DarkMode")}</h4>
                        <img src={dark} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation("translation")(SettingBox)