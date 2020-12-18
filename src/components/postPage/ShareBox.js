import React from 'react'
import * as types from '../../constant'
import { faFacebookF,faTwitter,faPinterestP,faInstagram,faLinkedin,faVk } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ShareBox =  () => (
    <div className="share-box">
        <a href={types.homePage + "/"}  target="_blank" className="mobile-menu-social mobile-menu-social-post icon-facebook icon-left">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            <span>Facebook</span>
        </a>
        <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social mobile-menu-social-post icon-twitter icon-left">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            <span>Twitter</span>
        </a>
        <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-pinterest icon-left">
            <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon>
        </a>
        <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-instagram icon-left">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-linkedin icon-left">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href={types.homePage + "/"} target="_blank" className="mobile-menu-social icon-vk icon-left">
            <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
        </a>
    </div>
)