import React,{ Fragment } from 'react'
import { Tabs } from 'antd-mobile';
import Content from './Content';

export default class Grouping extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:props.data
            
        }
    }
  renderContent = tab =>
    (<div style={{ 
        display: 'flex',
        height: '100%', 
        backgroundColor: '#fff' }}>
      <div>
          { tab.floors.map((item,index) => <Content key = {index}  { ...item}/>) }
      </div>
    </div>);

  render() {

    const { data } = this.props 
    return (
      <Fragment>

        <Tabs 
        tabs={data} 
        tabBarPosition='left'
        tabDirection = 'vertical'
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={9} />}>
          {this.renderContent}
        </Tabs>
        
      </Fragment>
    );
  }
}
