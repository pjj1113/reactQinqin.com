import React,{ Component } from 'react'

import request from '../../utils/request'
import { Link } from 'react-router-dom'
import './index.scss'
class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            listData:null
        }
    }

    componentDidMount(){
        const { match } = this.props
          request({
            url:`/index.php`,
            params:{
                r: 'class/cyajaxsub',
                cid:match.params.id,
                page: 1,
                px: 't',
                cac_id:''
            }
        }).then(res =>{
            if(res){
                this.setState({
                    listData:res.data.data.content
                })
                console.log(456,this.state.listData)
            }
        })
       
    }

    listRender = () =>{
        const { match } = this.props
        const { listData } = this.state
        if(listData){
            return listData.map( item =>(
            <li key = {item.id }>
                <Link
                to = {{
                    pathname:`/detail/${ item.id }/${match.params.id}`
                    
                }}
                >
                    <div className = "details-list-img"><img src = { item.pic }/></div>
                    <div className = "cdetails-list-content">
                        <div className = "details-list-content-title">
                            <span>天猫</span>
                            <h3>{ item.d_title }</h3>
                        </div>
                        <div className = "details-list-content-price">
                            <p>券后<span className = "details-jiage">￥{ item.jiage }</span></p>
                            <p>券<span>{ item.quan_jine }</span></p>
                            <p>
                                <span className ="details-xiaoliang">已售{ item.xiaoliang }万</span>
                                <span className = "details-comment">评论{ item.comment }</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </li>
            ) )
        }else{
            return
        }
         
    }

    componentWillReceiveProps(){
        console.log(this.state.listData)
    }
    render(){
        return (
            <div className = "comtent details-list">
                <ul>
                   { this.listRender() }
                </ul>
            </div>
        )
    }
}
export default List