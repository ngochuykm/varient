import React from 'react'
import {Container,HoverStyle} from '../../style/styled-component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import{ThemeProvider} from 'styled-components'

class NewTicker extends React.Component{
    constructor(props){
        super()
        
        this.newTicketElenment = React.createRef()
        this.state = {
            data :[],
            setProps: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        if(props.newTicker.length!==0&&!state.setProps){
            return {
                data:props.newTicker,
                setProps: true,
            }
        }else{
            return null
        }
        
    }
    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
       this.setNewtTicker(0)
    }
    setNewtTicker(a){
        let move = 0
        let tickerMove = ()=> { 
            this.newTicketElenment.current.style.transform = "translateY(-" + move  + "px)"
            if(move!==30){
            setTimeout(() => {
                tickerMove()
                move = move + 3
            },30)
            }

        }
        // tao hieu ung chuyen dong moi khi set lai newTicker
        tickerMove()
        if(this.state.setProps){
            let newTicker = this.state.data
            if(a<0){
                let lastItem = newTicker.pop()
                newTicker.unshift(lastItem)
            }else{
            let firstItem = newTicker.shift()
            newTicker.push(firstItem)
            }
            this.setState({
                data:newTicker
            })
        }
        if(a==0){            
            setTimeout(() => {
            this.setNewtTicker(0)
        },3000)
        }
    }
    render(){
        let newTicker = this.state.data.map((value,key) =>{
            return(
                <li>
                    <a href={value.linkPage}>
                        <HoverStyle>{value.title}</HoverStyle>
                    </a>
                </li>
            )
        })
        return(
            <Container>
                <div className="container-ticker">
                    <div className="ticker-left">
                        <span>Breaking News</span>
                    </div>
                    <div className="ticker-right">
                        <ul ref={this.newTicketElenment} >
                            {newTicker}
                        </ul>
                    </div>
                    {/* <div className="ticker-icon-btn">
                        <div className="ticker-bnt-next" onClick={() => this.setNewtTicker(-1)}>
                            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                        </div>
                        <div className = "ticker-bnt-prev">
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </div> */}
                    {/* </div> */}
                </div>
            </Container>
        )
    }
}

export default NewTicker