import React from 'react'
import {SpanItem} from '../../style/styled-component'
export const Summary =  (props) => (
    <div className="post-summary">
        <h2><SpanItem theme={props.theme}>{props.data.value}</SpanItem></h2>
    </div>
)