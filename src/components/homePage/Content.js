import React from 'react'
import SectionRight from './SectionRight'
import LazyLoad from 'react-lazyload'

const Loading = () => (
    <div className="post loading">
    </div>
  )

class Content extends React.Component{
    constructor(props){
        super()
    }

    render(){
        const offset = [-100,100]
        return(
            <div className="content">
                <LazyLoad height={100}  key={1} offset={offset} placeholder={<Loading />}>
                    <SectionRight key={1} {...this.props} name="LIFE STYLE" type = "LIFE_STYLE" data = {this.props.lifeStyle}/>
                </LazyLoad>
                <LazyLoad height={100}  key={2} offset={offset} placeholder={<Loading />}>
                <SectionRight key={2} {...this.props} name="FASHION" type = "FASHION" data = {this.props.fashion}/>
                </LazyLoad>
                <LazyLoad height={100}  key={3} offset={offset} placeholder={<Loading />}>
                <SectionRight key={3} {...this.props} name="QUIZZES" type = "QUIZZES" data = {this.props.quizzes}/>
                </LazyLoad>
                <LazyLoad height={100}  key={4} offset={offset} placeholder={<Loading />}>
                <SectionRight key={4} {...this.props} name="TRAVEL" type = "TRAVEL" data = {this.props.travel}/>
                </LazyLoad>
                <LazyLoad height={100}  key={5} offset={offset} placeholder={<Loading />}>
                <SectionRight key={5}{...this.props} name="RSS NEWS" type = "RSS_NEWS" data = {this.props.rssNews}/>
                </LazyLoad>
                <LazyLoad height={100}  key={5} offset={offset} placeholder={<Loading />}>
                <SectionRight key={6} {...this.props} name="VIDEOS" type = "VIDEOS" data = {this.props.videos}/>
                </LazyLoad>
                <LazyLoad height={100}  key={6} offset={offset} placeholder={<Loading />}>
                <SectionRight key={7} {...this.props} name="LAST POSTS" type = "LAST_POSTS" data={this.props.lastPost}/>
                </LazyLoad>
            </div>
        )
    }
}

export default Content