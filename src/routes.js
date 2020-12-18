import React from 'react'
import * as page from './pages'
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'
import {RouteItem} from '../src/route/RouteItem'
let RouteItems = []
const RoutesItemRender = (pageItem,pageSource) => (
    pageItem.map((value,key) => {
        if(value.pageItem){
            console.log("/varient" + value.pageLink)
            RouteItems.push(<Route key={key} exact path={"/varient" + value.pageLink} component={() => <value.component pageSource={pageSource} name={value.name} pageLink={value.pageLink} dataPage={value.dataPage}/>}/>)
            RoutesItemRender(value.pageItem,pageSource.concat([{name:value.name, pageLink:value.pageLink}]))
        }else{
            RouteItems.push(<Route key={key} exact path={"/varient" + value.pageLink} component={() => <value.component pageSource={pageSource} name={value.name} pageLink={value.pageLink} dataPage={value.dataPage}/>}/>)
        }
    })
)
const Routes = () => {
    RoutesItemRender(RouteItem,[])
    console.log(RouteItems)
    return(
    <BrowserRouter>
        <Switch>
            {RouteItems}
            <Route exact path="/jjh" component={page.HomePage}/>
        </Switch>
    </BrowserRouter>
)}
export default Routes