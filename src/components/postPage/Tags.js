import React from 'react'
import {TagsItem} from '../../style/styled-component'
import {SpanItem} from '../../style/styled-component'
import{ThemeProvider} from 'styled-components'
export const Tags = (props) =>{
    return (
        <div className="post-tags">
            <span className="tags-title"><SpanItem theme={props.theme}>Tags : </SpanItem></span>
            <ThemeProvider theme={props.theme}>
                {props.data.map((value,key) => {
                    return <TagsItem key={key} className="tags-item tags-item-post">{value}</TagsItem>
                })}
            </ThemeProvider>
        </div>
    )
}