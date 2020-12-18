import React from 'react'
import Featured from './homePage/Featured'
import {Container} from '../style/styled-component'
import Content from './homePage/Content'
import SlideBar from './homePage/SlideBar'
import NewTicker from '../components/homePage/NewTicker'
import Footer from './Footer'
import '../style/homePage.css'
import LazyLoad from 'react-lazyload'

const Loading = () => (
    <div class="animationload">
        <div class="osahanloading"></div>
    </div>
)

class HomePage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <LazyLoad height={200} offset={[-100, 100]} placeholder={<Loading />}>
                    <Featured {...this.props}/>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 100]} placeholder={<Loading />}>
                    <NewTicker {...this.props}/>
                </LazyLoad>
                <Container>
                    <div className="main">
                    {/* <LazyLoad height={200} once={true} offset={[-100, 100]} placeholder={<Loading />}> */}
                        <Content className="content" {...this.props}/>
                        {/* </LazyLoad> */}
                        <SlideBar className="slide-bar" {...this.props}/>
                    </div>
                </Container>
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default HomePage