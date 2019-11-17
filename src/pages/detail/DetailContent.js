import React, { Component,Fragment } from 'react'
import './index.scss'
import CommodityNum from './CommodityNum'
import { Button, WhiteSpace } from 'antd-mobile';
import { stringify } from 'querystring';
export default class DetailContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            num:1
        }
    }
    changeNum = val =>{
        this.setState({
            num:val
        })
    }

    addShopCar(pic,jiage,xiaoliang,num){
        console.log(pic,jiage,xiaoliang,num)
        let shopCar = localStorage.getItem('shopCar')
        var shopCarData = []
        if(shopCar){
            shopCarData = JSON.parse(shopCar)
        }
        shopCarData.push({
            pic:pic,
            jiage:jiage,
            xiaoliang:xiaoliang,
            num:num
        })
        console.log(shopCarData)

        let addShopData = JSON.stringify(shopCarData)
        window.localStorage.setItem('shopCar',addShopData)
        alert('添加购物车成功')
    }

    render() {
        const { shopData } = this.props&&this.props
        const { num } = this.state
        console.log(123457896,shopData)
    
        return (
            <Fragment>
                <div className = "detail-content">
                    <img src = { shopData[0].pic }/>
                    <h2>{ shopData[0].d_title }</h2>
                    <div className = "detail-content-info">
                        <div className = "detail-content-jiage">
                            <span>券后价<b>￥{ shopData[0].jiage }</b></span>
                            <strong>天猫价<b>￥{ shopData[0].yuanjia }</b></strong>
                        </div>
                        <div>
                            <span>已售{ shopData[0].xiaoliang }</span>
                        </div>
                    </div>
                    <CommodityNum changeNum = { this.changeNum }></CommodityNum>
                    <Button type="primary" onClick = { ()=>{ this.addShopCar(shopData[0].pic,shopData[0].jiage,shopData[0].xiaoliang,num)  }}>添加到购物车</Button><WhiteSpace />
                </div>
            </Fragment>
        )
    }
}
