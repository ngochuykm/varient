import React from 'react'
import {HoverStyle,SpanAuthorItem} from '../../style/styled-component'
import{ThemeProvider} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment,faEye} from '@fortawesome/free-solid-svg-icons'


export const Meta =  (props) => (
    <div className="post-meta post-meta-content">
        <div className="left">
            <ThemeProvider theme={props.theme}>
                <HoverStyle className="author">
                    <img src={props.data.imgLink}/>
                    <SpanAuthorItem theme={props.theme}>{props.data.author}</SpanAuthorItem>
                </HoverStyle>
            </ThemeProvider>
            <span className="date">
                {props.data.date}
            </span>
        </div>
        <div className="right">
            <span className="comment">
                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                {props.data.comment}
            </span>
            <span className="view">
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                {props.data.view}
            </span>
        </div>
    </div>
)