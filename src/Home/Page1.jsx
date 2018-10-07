import React from 'react';
import { Tabs } from 'antd';
import ReactComponents from './ReactComponets';
import * as pageData from './data';

const { page1 } = pageData;
const { TabPane } = Tabs;

export default function Page1(props) {
  return (
    <div className="page page1" {...props} >
      <Tabs defaultActiveKey="1" >
        <TabPane tab={page1.tabs[0]} key="1">{React.createElement(ReactComponents)}</TabPane>
        <TabPane tab={page1.tabs[1]} key="2">Content of Tab Pane 2</TabPane>
      </Tabs>
    </div>
  );
}
