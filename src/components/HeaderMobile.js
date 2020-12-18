import React from 'react'
import {withTranslation} from 'react-i18next'
import {Container} from 'react-bootstrap'
import {ThemeProvider} from 'styled-components'
import * as types from '../constant'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faSearch,faSignInAlt,faUserPlus,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faPinterestP,faInstagram,faLinkedin,faVk,faYahoo } from '@fortawesome/free-brands-svg-icons' 
import {HeaderMobileTheme,LiMobile,LanguageMobile,NavMobileFooter} from '../style/styled-component'
import logo from '../image/logo.svg'
import logoDark from '../image/logo-footer.svg'
import i18next from '../language'
import "../style/header-mobile.css"


class HeaderMobile extends React.Component{       
    constructor(){
        super()
        this.state= {
            language: "en",
            showNav: false,
            showItem:""
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    navItemCreate(name,data,t){
        let navInside=[]
        if(Object.keys(data).length!==0){
            for(const value in data){
                navInside.push(value)
            }
        }
        return(
            <LiMobile>
                <div className="nav-item" onClick={() => {this.state.showItem!==name? this.setState({showItem:name}) : this.setState({showItem:""})
            }
            }>
                    <a href={types.homePage + ""} target="_blank">
                        {t(name)}
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                    </a>
                </div>
                <ul className="ul-inside" style={{display: this.state.showItem===name? "block":"none" }}>
                    {
                        navInside.map((value,key)=>{
                            return(
                                <li key={key} className="li-inside">{this.capitalizeFirstLetter(value)}</li>
                            )
                        })
                    }
                </ul>
            </LiMobile>
        )
    }
    render(){
        const {t,i18n} = this.props
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
        }
        return(
            <ThemeProvider theme={theme}>
                <div className="header-mobile">
                    <HeaderMobileTheme>
                        <Container fluid className="container-header-mobile">
                            <div className="menu-icon" onClick = {() => this.setState({showNav:!this.state.showNav})}>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </div>
                            <div className="logo-moblie">
                                <a href={types.homePage + "/"} target="_blank" className={"logo-img-mobile"}>
                                    <img src={this.props.settingBox.themeMode=="#fff"? logo:logoDark}/>
                                </a>
                            </div>
                            <div className="search-icon-mobile">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </div>
                        </Container>
                            <div className="menu-mobile" style={{transform: !this.state.showNav? "translateX(-350px)":"translateX(0px)"}}>
                                <div className="nav-mobile-inner">
                                    <div className="login-mobile">
                                        <a href={types.homePage + "/"} target="_blank" className="buttom-right">
                                            <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                                            <span>Login</span>
                                        </a>
                                        <a href={types.homePage + "/"} target="_blank">
                                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                                            <span>Register</span>
                                        </a>
                                    </div>
                                    <div className="nav-menu-mobile">
                                        <ul className="">
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Home")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Contact")}</a></LiMobile>
                                            {
                                                this.navItemCreate("LifeStyle",this.props.lifeStyle,t)
                                            }
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Abount")}</a></LiMobile>
                                            {
                                                this.navItemCreate("Fashion",this.props.fashion,t)
                                            }
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Quizzes")}</a></LiMobile>
                                            {
                                                this.navItemCreate("Travel",this.props.travel,t)
                                            }
                                            {
                                                this.navItemCreate("Rss News",this.props.rssNews,t)
                                            }
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Video")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Gallery")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("BuyNow")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Sport")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("Page")}</a></LiMobile>
                                            <LiMobile><a href={types.homePage + ""} target="_blank" className="nav-item">{t("ExternalLinks")}</a></LiMobile>
                                            <LiMobile>
                                                <a href={types.homePage + ""} target="_blank" className="nav-item">{t("Language")}</a>
                                                <div className="language-mobile">
                                                    <LanguageMobile language={this.state.language=="en"?"active":"not-active"} onClick={()=>{
                                                        this.setState({language:"en"})
                                                        i18n.changeLanguage('en')
                                                    }}>
                                                        English
                                                    </LanguageMobile>
                                                    <LanguageMobile language={this.state.language=="vn"?"active":"not-active"} onClick={()=>{
                                                        this.setState({language:"vn"})
                                                        i18n.changeLanguage('vn')
                                                    }}>
                                                        Việt Nam
                                                    </LanguageMobile>
                                                </div>
                                            </LiMobile>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <NavMobileFooter className="nav-mobile-footer" style={{transform: !this.state.showNav? "translateX(-350px)":"translateX(0px)"}}>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-facebook"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-twitter"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-pinterest"><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-vk"><FontAwesomeIcon icon={faVk}></FontAwesomeIcon></a>
                                <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-yahoo"><FontAwesomeIcon icon={faYahoo}></FontAwesomeIcon></a>
                            </NavMobileFooter>
                    </HeaderMobileTheme>
                </div>
            </ThemeProvider>
        )
    }
}

export default withTranslation("translation")(HeaderMobile)