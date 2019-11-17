import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Content = props =>{
    let list = ()=>{
        return props.list.map(item=>(
            <li key = { item.api_cid }>
                <Link
                to = {{
                    pathname:`/list/${ item.api_cid }`,
                    search:`cid=${item.api_cid}`
                }}
                >
                    <img src = { item.img }/>
                    <span>{ item.name }</span>
                </Link>
            </li>
        ))
    }
    return(
        <div className = "cate-content">
            <h3>{ props.name }</h3>
            <ul>
                { list() }
            </ul>
        </div>
    )
}
export default Content