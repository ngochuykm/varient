import React from 'react'
import {TagsItem} from '../../style/styled-component'

import like from '../../image/like.png'
import dislike from '../../image/dislike.png'
import love from '../../image/love.png'
import funny from '../../image/funny.png'
import angry from '../../image/angry.png'
import sad from '../../image/sad.png'
import wow from '../../image/wow.png'

export const Reaction =  (props) => (
    <div className="post-reaction">
        {Object.keys(props.data).map((key,index) => {
            let a
            switch (key) {
                case "like":
                    a = (<div>
                        <img className="img-reaction" src={like}></img>
                    </div>)
                    break;
                case "dislike":
                    a = (<div>
                        <img className="img-reaction" src={dislike}></img>
                    </div>)
                    break; 
                case "love":
                    a = (<div>
                        <img className="img-reaction" src={love}></img>
                    </div>)
                    break;
                case "funny":
                    a = (<div>
                        <img className="img-reaction" src={funny}></img>
                    </div>)
                    break;
                case "angry":
                    a = (<div>
                        <img className="img-reaction" src={angry}></img>
                    </div>)
                    break; 
                case "sad":
                    a = (<div>
                        <img className="img-reaction" src={sad}></img>
                    </div>)
                    break;
                case "wow":
                    a = (<div>
                        <img className="img-reaction" src={wow}></img>
                    </div>)
                    break;                     
                default:
                    break;
            }
            return(
                <div key={index} className="card-box">
                    {a}
                    <div className="progress">
                        <span className="span-vote">{props.data[key]}</span>
                        <div style={{backgroundColor:props.theme.color, height:props.data[key]}} className="progress-bar"></div> 
                    </div>
                    <button className="reaction-name">
                        <TagsItem theme={props.theme} className="reaction-tags">{key}</TagsItem>
                    </button>
                </div>
            )
        })}
    </div>
)