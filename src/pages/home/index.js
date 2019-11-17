import React,{ Component } from 'react'

import './index.scss'
import Nav from './Nav'
import Hot from './Hot'
import Comming from './Comming'
import { Route } from 'react-router-dom'
class Home extends Component {
    render(){
        return (
            <div className = "comtent">
                <Nav/>
                <Route path = "/home/hot" component = { Hot }></Route>
                <Route path = "/home/comming" component = { Comming }></Route>
            </div>
        )
    }
}
export default Home