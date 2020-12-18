import React from 'react'
import { connect } from 'react-redux'
import Logo from '../components/Logo'

class LogoContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
        <Logo {...this.props}/>
        )
    }    
}

const mapStateToProps = (state) => {
    return{
        settingBox: state.settingbox
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoContainer)