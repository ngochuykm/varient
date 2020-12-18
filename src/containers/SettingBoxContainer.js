import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import SettingBox from '../components/SettingBox'

class SettingBoxContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
        <SettingBox {...this.props}/>
        )
    }    
}

const mapStateToProps = (state) => {
    return{
        settingBox: state.settingbox
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeColor: (payload) => {
            dispatch(actions.changColor(payload))
        },
        changeThemeMode: (payload) => {
            dispatch(actions.changeThemeMode(payload))
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingBoxContainer)
