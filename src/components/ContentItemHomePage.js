import React from 'react'
import PostItem from './homePage/PostItem'

class ContentItemHomePage extends React.Component{
    constructor(){
        super()
    }
    render(){
        let data
        if(typeof(this.props.dataPage)==="object"){
            data=this.props[this.props.dataPage[0]][this.props.dataPage[1]]
            // return ""
        }else{
            data=this.props[this.props.dataPage].all
        }
        console.log(data)
        // let a
        // a = data.map((value,key) => {
        //     return value
        // })
        // console.log(a)
        return(
            <div className="content content-item">
                <div className="content-left">
                    {data&&data.map((value,key) => {
                        if(!(key%2)){return<PostItem key={key} {...this.props}  data={value} type="block" size={"big"}/>}
                    })}
                </div>
                <div className="content-right">
                    {data&&data.map((value,key) => {
                        if(key%2)return<PostItem key={key} {...this.props}  data={value} type="block" size={"big"}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ContentItemHomePage