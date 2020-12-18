import React from 'react'
import {Container} from '../style/styled-component'
import logolight from '../image/logo-footer.svg'
import { HoverStyle,ButtonVote } from '../style/styled-component'
import {faExclamation,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import{ThemeProvider} from 'styled-components'
import '../style/footer.css'
import { faFacebookF,faTwitter,faPinterestP,faInstagram,faLinkedin,faVk,faYahoo } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends React.Component{
    constructor(props){
        super()
        this.timer = null
        this.state= {
            email:"",
            subscribe: false
        }
    }
    componentDidUpdate(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=> {
            this.setState({subscribe:false})
        },1500)
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }
    render(){
        const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
            size: this.props.size
        }
        return(
            <div className="footer">
                <Container>
                    <div className="footer-wrap">
                        <div className="about">
                            <p className="footer-logo">
                                <img src={logolight}/>
                            </p>
                            <p className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="footer-ramdom">
                            <div className="title">RANDOM POSTS</div>
                            {this.props.randomPosts.map((value,key) => {
                               return(
                                    key<3&&<div className="footer-ramdom-item" key={key}>
                                        <img src={value.imgLink}></img>
                                        <ThemeProvider theme={theme}><HoverStyle>{value.description}</HoverStyle></ThemeProvider>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="footer-widget">
                            <div className="title">SOCIAL MEDIA</div>
                            <div className="social-media">
                                <a href="/" target="_blank" className="mobile-menu-social icon-facebook"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-twitter"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-pinterest"><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-vk"><FontAwesomeIcon icon={faVk}></FontAwesomeIcon></a>
                                <a href="/" target="_blank" className="mobile-menu-social icon-yahoo"><FontAwesomeIcon icon={faYahoo}></FontAwesomeIcon></a>
                            </div>
                            <div className="widget-newsletter">Subscribe here to get interesting stuff and updates!</div>
                            <div className="subscribe-input">
                                <input type="text" placeholder="Email Andress" onChange={(e) => this.setState({email:e.target.value})}></input>
                                <ThemeProvider theme={theme}><ButtonVote onClick={() => this.setState({subscribe:true})}>Subscribe</ButtonVote></ThemeProvider>
                                {this.state.subscribe&&!this.validateEmail(this.state.email)&&(
                                <div className="notification">
                                    <span class="icon"><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></span>
                                    <span>Vui lòng kiểm tra lại địa chỉ mail.</span>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>Copyright 2020 Varient - All Rights Reserved.</span>
                        <ThemeProvider theme={theme}>
                        <ul>
                            <li><HoverStyle>Terms & Conditions</HoverStyle></li>
                            <li><HoverStyle>Support</HoverStyle></li>
                            <li><HoverStyle>Privacy</HoverStyle></li>
                        </ul>
                        </ThemeProvider>
                    </div>
                </Container>
            </div>
        )
    }
}

const style ={
    
}
export default Footer