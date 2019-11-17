import React from 'react'
import { List, Stepper } from 'antd-mobile';

export default class CommodityNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  onChange = (val) => {
      const { changeNum } = this.props
    this.setState({ val });
    changeNum(val)
  }
  
  render() {
    return (

        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100px', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />}
        >
        </List.Item>

    )
  }
}