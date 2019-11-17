import React,{ Component } from 'react'
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'
import './index.scss'


import Home from '../pages/home'
import recommend from '../pages/recommend'
import Category from '../pages/category'
import ShopCar from '../pages/shopcar'
import Mine from '../pages/mine'
import List from '../pages/list'
import Detail from '../pages/detail'


import { Switch,Route,Redirect,withRouter } from 'react-router-dom'

class LayOut extends Component {

    constructor(props){
        super(props)
        this.state = {
            routertitle:{
                '/home':'首页',
                '/recommend':'推荐',
                '/category':'分类',
                '/shopcar':'购物车',
                '/mine':'我的',
                '/home/hot':'正在热映',
                '/home/comming':'即将上映',
                '/detail':'详情'
            },
            arrreturn:['/recommend','/category','/shopcar','/mine','/home/hot', '/home/comming','/detail'],
            returnFlag:false
        }
    }
    componentDidMount(){
        this.returnRoute()
        this.checkHomeToHot( )
    }

    componentWillReceiveProps(nextProps){

        this.returnRoute(nextProps)
        this.checkHomeToHot( nextProps )
        
    }

    returnRoute = nextProps =>{
        const  { pathname } = nextProps && nextProps.location || this.props.location
        const { arrreturn } = this.state
        const f = arrreturn.some( item => item===pathname)
        if(f){
            this.setState({
                returnFlag:true
            })
        }else{
            this.setState({
                returnFlag:false
            })
        }
    }
    checkHomeToHot = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location 
        const { push,replace } = nextProps && nextProps.history || this.props.history
        if ( pathname == '/home' ) {
          push('/home/hot')
        }
      }


    render(){
        const { routertitle,returnFlag } = this.state
      
        const { pathname } = this.props.location
        return(
            <div className = "layout">
                <Tab returnFlag = { returnFlag }  routertitle = {routertitle[ pathname ]} { ...this.props }/>
                <Switch>
                    <Redirect from = "/" to = "/home" exact></Redirect >
                    <Route path = "/home" component = { Home }></Route>
                    <Route path ="/recommend" component = { recommend }></Route>
                    <Route path = "/category" component = { Category }></Route>
                    <Route path = "/shopcar" component = { ShopCar }></Route>
                    <Route path = "/detail/:id/:cid" component = { Detail }></Route>
                    <Route path = "/mine" component = { Mine }></Route>
                    <Route path = "/list/:id" component = { List }></Route>
                </Switch>
                <TabBar/>
            </div>
        )
    }
}

export default withRouter( LayOut )