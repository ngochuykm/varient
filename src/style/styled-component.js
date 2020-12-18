import styled from 'styled-components'
export const Container = styled.div`
    min-width:768px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    @media only screen and (min-width: 768px){
        width: 100%;
        padding-right: 0px;
        padding-left: 0px;
    }
    @media only screen and (min-width: 992px){
        width: 100%;
        padding-right: 0px;
        padding-left: 0px;
    }
    @media only screen and (min-width: 1200px){
        width: 1170px;
    }
`
export const LiMenu = styled.li`
    list-style : none;
    padding: 0 15px;
    line-height: 50px;
    text-transform: uppercase;
    color: ${props => props.theme.themeMode=="#fff"? "#222":"#fbfbfb"}!important;
    font-size: 14px;
    font-weight: 600;
    box-sizing: border-box;
    height: 42px;
    :hover{
        border-bottom: 3px solid ${props => props.theme.color};
    }
    @media only screen and (min-width: 768px){
        padding: 0 10px;
    }
    @media only screen and (min-width: 992px){
        padding: 0 10px;
    }
    @media only screen and (min-width: 1200px){
        padding: 0 15px;
    }
`
export const MenuAll = styled.div`
    background-color: ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
    border-top: 1px solid ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
`
export const HeaderMobileTheme = styled.div`
    background-color: ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
    border-bottom: 1px solid ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
    color: ${props => props.theme.themeMode=="#fff"? "#231e1e":"#fbfbfb"}!important;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 1000;
`
export const LiMobile = styled.li`
    color: ${props => props.theme.themeMode=="#fff"? "#222":"#fbfbfb"}!important;
    font-size: 16px;
    cursor: pointer;
    color: #434343;
    text-align: left;
    list-style: none;
    text-transform: none;
    font-weight: normal;
    display: block;
    width: 100%;
    background-color: transparent!important;
    transition: all .2s ease-in-out 0s;
    word-break: break-word;
    border-bottom: 1px solid rgba(0,0,0,.05);
`
export const LanguageMobile = styled.div`
    display: inline-block;
    font-size: 13px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    padding: 5px 10px;
    margin-right: 15px;
    color: ${props => props.language=="active"? props.theme.color:props.theme.themeMode=="#fff"? "#434343":"#ebebeb"};
    border: 1px solid ${props =>props.language=="active"? props.theme.color:"#ebebeb"};
    &:hover{
        color: ${props => props.theme.color}!important;
        border: 1px solid ${props => props.theme.color}!important;
    }

`
export const NavMobileFooter = styled.div`
    background-color: ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
    border-top: 1px solid ${props => props.theme.themeMode=="#fff"? "#fff":"#161616"};
`
export const HoverStyle = styled.span`
    font-size: ${props => props.title?props.title:""};
    &:hover{
        color: ${props => props.theme.color}!important;
        border: ${props => props.border=="yes"? "1px solid " + props.theme.color:""}
    }
`;
export const DropDownMenuElement = styled.div`
    background-color: ${ props => props.theme.themeMode=="#fff"? "#fafafa":"#161616"};
    color:  ${ props => props.theme.themeMode=="#fff"? "#222;":"#eee"};
`
export const UlMenuLeft = styled.ul`
    width: 100%;
    text-align: left;
`
export const LiMenuLeft = styled.li`
    border-bottom: 1px solid ${props => props.theme.themeMode=="#fff"? "rgb(239, 239, 239)":"rgba(0,0,0,.15)"}!important;
    padding: 4px 25px;
    line-height: 24px;
    &:hover{
        background-color:${ props => props.theme.themeMode=="#fff"? "#fff":"#1c1c1c"};
    }
`
export const PostItemWap = styled.div`
    font-size: ${props=>props.theme.size=="big"? "20px": "14px"};
    display : ${props=>props.theme.size=="big"? "block": "flex"};
`
export const PostItemImage = styled.div`
    width:  ${props => props.theme.size=="big"? "100%":props.theme.size=="medium"? "48.6667%":"106px"};
    margin-right: ${props => props.theme.size=="big"? "0px":"10px"}; ;
`

export const PostItemRight = styled.div`
    width: ${props => props.theme.size==="big"? "auto":props.theme.size=="medium"?"51%":"calc(100% - 106px);"};
`
export const PostItemTitle = styled.div`
    line-height: ${props=> props.theme.size=="big"?"25px":"22px"};
    height: ${props=> props.theme.size=="big"?"50px":"44px"};
    color: ${props => props.theme.themeMode==="#fff"? "rgb(34,34,34)":"#eee"};
    cursor: pointer;
`
export const TabsItem = styled.span`
    color: ${props => props.theme.themeMode==="#fff"? props.active==="yes"?"#333":"#888":props.active==="yes"?"#fbfbfb":"#a0a0a0"};
    font-size: 13px;
    padding: 0;
    padding-bottom: 10px;
    font-weight: 400;
    text-align: center;
    width: 100%;
    display: inline-block;
    border-bottom: ${props => props.active==='yes'? "2px":"0px"} solid ${props => props.theme.themeMode==="#fff"?"#555":"#777"}
`
export const NavTabs = styled.div`
    border-bottom: 1px solid ${props => props.theme.themeMode==="#fff"? "#eee":"#373737"};
`
export const TagsItem = styled.div`
    background-color: ${props => props.theme.themeMode==="#fff"? "#f4f4f4":"#272727"};
    color: ${props => props.theme.themeMode==="#fff"? "#888":"#a0a0a0"};
    &:hover{
        color: #fff!important;
        background-color: ${props => props.theme.color}!important;
    }
        
`
export const ButtonVote = styled.button`
    background-color: ${props => props.theme.color};
    opacity: 0.8;
    padding: .6rem 1.4rem;
    border: 0px;
    border-radius: 4px;
    color: #eee;
    &:hover{
        opacity: 1;
    }
`

export const IconCheck = styled.span`
    background-color: ${props => props.theme.color};
`
export const SpanItem = styled.span`
    color: ${props => props.theme.themeMode==="#fff"? "#222":"#b7a9a9"};
`
export const SpanAuthorItem = styled.span`
    color: ${props => props.theme.themeMode==="#fff"? "#222!important":"#fff!important"};
`