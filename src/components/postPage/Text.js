import React from 'react'
import {SpanItem} from '../../style/styled-component'
export const Text = (props) =>{
    return (
        <div className="post-text">
            {props.data.map((value,key) => {
                return(
                    <p key={key} className="post-text-item"><SpanItem theme={props.theme}>{value}</SpanItem></p>
                )
            })}
        </div>
    )
}