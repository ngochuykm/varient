import *  as page from '../pages'
import {LifeStyle} from './LifeStyle'
import {Fashion} from './Fashion'
import {Gallery} from './Gallery'
import {Quizzes} from './Quizzes'
import {RssNews} from './RssNews'
import {Travel} from './Travel'
import {Videos} from './Videos'
export  const HomePageItem = [
    {
        pageLink:"/life-style",
        component:page.HomePageItem,
        pageItem:LifeStyle,
        name: "Life Style",
        dataPage:"lifeStyle"

    },
    {
        pageLink:"/fashion",
        component:page.HomePageItem,
        pageItem:Fashion,
        name: "Fashion",
        dataPage:"fashion"

    },
    {
        pageLink:"/quizzes",
        component:page.HomePageItem,
        pageItem:Quizzes,
        name: "Quizzes",
        dataPage:"quizzes"

    },
    {
        pageLink:"/travel",
        component:page.HomePageItem,
        pageItem:Travel,
        name: "Travel",
        dataPage:"travel"

    },
    {
        pageLink:"/rssNews",
        component:page.HomePageItem,
        pageItem:RssNews,
        name: "Rss News",
        dataPage:"rssNews"

    },
    {
        pageLink:"/videos",
        component:page.HomePageItem,
        pageItem:Videos,
        name: "Videos",
        dataPage:"videos"

    },
    {
        pageLink:"/gallery",
        component:page.HomePageItem,
        pageItem:Gallery,
        name: "Gallery",
        dataPage:"gallery"

    },
]