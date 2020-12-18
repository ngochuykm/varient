import React from 'react'
import {Container} from '../style/styled-component'
import logo from '../image/logo.svg'
import logoFooter from '../image/logo-footer.svg'
import * as types from '../../constant'
import bn1 from '../image/bn1.jpg'
import "../style/logo.css"

class Logo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className={"logo"}>
                <Container>
                    <a href={types.homePage + "/"} className={"logo-img"}>
                        <img src={this.props.settingBox.themeMode==="#fff"? logo:logoFooter}/>
                        <img src={bn1} className="img-right"/>
                    </a>
                </Container>
            </div>
        )
    }
}

export default Logo