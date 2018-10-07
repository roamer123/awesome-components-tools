import React from 'react';
import { Col, Row, Pagination } from 'antd';
import * as pageData from './data';
import Card from './Card';

const { reactComponents } = pageData;
const pageSize = 16;
const total = reactComponents.length;

export default class ReactComponentsPage extends React.PureComponent {
  state = {
    current: 1,
    dataSource: reactComponents.slice(0, pageSize),
  }

  onChange = (pageNumber) => {
    this.setState({
      current: pageNumber,
      dataSource: reactComponents.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
    });
  }

  generator = (items) => {
    let temp = [];
    const result = [];
    for (let i = 0, len = items.length; i < len; i++) {
      temp.push(<Col span={6} key={i}><Card
        title={items[i].title}
        desc={items[i].desc}
        tags={items[i].tags}
        link={items[i].link}
        stars={items[i].stars}
      />
                </Col>);

      if ((i !== 0 && (i + 1) % 4 === 0) || (i + 1) === len) {
        result.push(<Row className="row" gutter={16} key={i}>{temp}</Row>);
        temp = [];
      }
    }
    return result;
  }

  render() {
    return (<div>
      {this.generator(this.state.dataSource)}
      <Pagination
        className="pageNation"
        showQuickJumper
        defaultCurrent={1}
        current={this.state.current}
        pageSize={pageSize}
        total={total}
        onChange={this.onChange}
      />
      </div>);
  }
}
