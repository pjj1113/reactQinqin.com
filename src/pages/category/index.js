import React,{ Component } from 'react'

import Grouping from './Grouping'
import request from '../../utils/request'

class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        request({
            url:'/index.php',
            params:{
                r: "class/category",
                type: 1
            }   
        }).then(res=>{
                res.data.data.data.map(item => {
                item.title = item.name
             })
            this.setState({
                data: res.data.data.data
            })
            console.log( 123, this.state.data)
        })
        
        
    }

    render(){
        const { data } = this.state
        return (
            <div className = "comtent">
                <Grouping { ...this.state }></Grouping>
            </div>
        )
    }
}
export default Category