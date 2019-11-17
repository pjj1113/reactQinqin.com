import React,{ Component } from 'react'
import './index.scss'
class ShopCar extends Component {
    constructor(props){
        super(props)
        this.state = {
            shopData:JSON.parse(localStorage.getItem('shopCar'))
        }
    }
    
    shopCarList = ()=>{
        return this.state.shopData.map((item, index) =><li key = {index}>
            <a>
                <img src = { item.pic }/>
                <div className = "shopcar-info">
                    <span>价格:<strong>{ item.jiage }</strong></span>
                    <span>数量:<strong>{ item.num }</strong></span>
                    <span>销量:<strong>{item.xiaoliang}</strong> </span>
                </div>
            </a>
        </li>)
    }

    render(){
        console.log(this.state.shopData)
        return (
            <div className = "comtent shopcar-box">
               <ul>
                   { this.shopCarList() }
               </ul>
            </div>
        )
           
            
        
    }
}
export default ShopCar