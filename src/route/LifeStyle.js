import *  as page from '../pages'
import {Business} from './LifeStyle/Business'

export const LifeStyle = [
    {
        pageLink:"/life-style/design",
        component:page.HomePageItem,
        pageItem:[],
        name: "Design",
        dataPage:["lifeStyle","design"]
    },
    {
        pageLink:"/life-style/all",
        component:page.HomePageItem,
        pageItem:[],
        name: "All",
        dataPage:["lifeStyle","all"]
    },
    {
        pageLink:"/life-style/photography",
        component:page.HomePageItem,
        pageItem:[],
        name: "Photography",
        dataPage:["lifeStyle","photography"]
    },
    {
        pageLink:"/life-style/business",
        component:page.HomePageItem,
        pageItem: Business,
        name: "Business",
        dataPage:["lifeStyle","business"]
    },
]