import React from "react"

export const Image = (props) => (
    <div className="post-image">
        <img src={props.data.imgLink}></img>
        <span>{props.data.description}</span>
    </div>
) 