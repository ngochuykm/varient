import React from 'react'
import { Container } from '../style/styled-component'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLanguage,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import i18next from '../language'
import {withTranslation} from 'react-i18next'
import '../style/header.css'


class Header extends React.Component{
    constructor(props){
        super()
        this.state={
            language: "English",
            showMenu: false,
            home: i18next.t('home')
        }
    }

    render(){
        const {t,i18n} = this.props
        return(
            <div className="top-bar">
                <Container className="top-menu">
                    <ul className="top-bar-left">
                        <a href="#"><li className={"top-menu-li"}>{t("Contact")}</li></a>
                        <a href="#"><li className={"top-menu-li"}>{t("About")}</li></a>
                    </ul>
                    <ul className="top-bar-right">
                        <a href="#"><li className={"top-menu-li"}>{t("Login")}</li></a>
                        <li className="seperate top-menu-li">/</li>
                        <a href="#"><li className={"top-menu-li"}>{t("Register")}</li></a>
                        <li className="language top-menu-li" onClick={()=>this.setState({showMenu:!this.state.showMenu})}>
                            <FontAwesomeIcon icon={faLanguage} className={"icon-menu"}></FontAwesomeIcon>
                            {this.state.language}
                            <FontAwesomeIcon icon={faAngleDown} className={"icon-menu"}></FontAwesomeIcon>
                        </li>
                        <div className="list-language" style={{display:this.state.showMenu? "block":"none"}}>
                            <ul>
                                <li onClick={() => {
                                        i18n.changeLanguage('en')
                                        this.setState({language:"English"})
                                    }}>English</li>
                                <li onClick={() => {
                                        i18n.changeLanguage('vn')
                                        this.setState({language:"Việt"})
                                    }}>Việt Nam</li>
                            </ul>
                        </div>
                    </ul>
                </Container>
            </div>
        )
    }
}



export default withTranslation("translation")(Header)