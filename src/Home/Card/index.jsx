import React from 'react';
import { Icon } from 'antd';
// import styles from './index.less';

export default function Card(props) {
  return (<div className="card">
    <p key="Title" className="title" >{props.title}</p>
    <p key="Desc" className="desc" >{props.desc}</p>
    <p key="other" >
      <span key="Tags" className="tags" >{props.tags && props.tags.length > 0 && props.tags.map(item => <span key={`${item}tag`} className="tag">{item}</span>)}</span>
      <span key="Stars" className="stars">{props.stars}</span>
      <a key="github" href={props.link}><Icon type="github" className="iconfont icon-github" /></a>
    </p>
  </div>);
}
