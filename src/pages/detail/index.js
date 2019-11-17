import React,{ Component } from 'react'
import request from '../../utils/request'

import DetailContent from './DetailContent'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            shopData:null,
            f:false
        }
    }

    componentDidMount(){
        const { match } = this.props
        console.log(this.props)
          request({
            url:`/index.php`,
            params:{
                r: 'class/cyajaxsub',
                cid:match.params.cid,
                page: 1,
                px: 't',
                cac_id:''
            }
        }).then(res =>{
            this.setState({
                shopData:res.data.data.content.filter(item => item.id == match.params.id)
            })
        })
       
    }

    render(){
       const {shopData} = this.state
        return (
            <div className = "comtent">
                { shopData&&<DetailContent shopData= { shopData }></DetailContent>||'' }
            </div>
        )      
        
    }
}
export default Detail