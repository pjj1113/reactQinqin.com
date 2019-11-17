import React,{ Component } from 'react'
import './index.scss'
class Tab extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    componentDidMount(){
        
    }
    render(){
        const { routertitle,returnFlag } = this.props
        const { goBack } = this.props.history
        return (
            <div className = "tab-box">
                {returnFlag&&<i className = "fas fa-angle-left"  onClick = { goBack }></i>}
                <span> { routertitle } </span>
            </div>
        )
    }
}

export default Tab