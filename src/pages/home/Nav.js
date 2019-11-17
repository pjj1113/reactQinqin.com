import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
class Nav extends Component {
    render(){
        return (
            <div className = "home-title">
                <NavLink to= '/home/hot'>正在热映</NavLink>
                <NavLink to = '/home/comming'>即将上映</NavLink>
            </div>
        )
    }
}
export default Nav