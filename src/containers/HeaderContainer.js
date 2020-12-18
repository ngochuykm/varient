import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Header from '../components/Header'

class HeaderContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
        <Header/>
        )
    }    
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
