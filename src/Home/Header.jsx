import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { TweenOneGroup } from 'rc-tween-one';
import HeaderSearch from './HeaderSearch';

const { Link } = ScrollAnim;

export default class Header extends React.PureComponent {
  getHeaderChildToRender = () => (
    [
      <Link className="iconfont icon-react logo" to="screen0" toHash={false} key="logo" />,
      <span className="title" key="Title">AwsomeReact</span>,
      <span className="sub-title" key="Name">好用好玩的react插件</span>,
      // <HeaderSearch key="Search" />,
      <span key="Commit">加入社区</span>,
      <nav key="nav" />,
    ]);
  render() {
    const { noTop } = this.props;
    const header = this.getHeaderChildToRender();
    const headerFix = this.getHeaderChildToRender();
    return (
      <header key="nav" >
        <div className="site-top">
          {header}
        </div>
        <TweenOneGroup
          component=""
          enter={{ y: -80, opacity: 0, type: 'from' }}
          leave={{ y: -80, opacity: 0 }}
        >
          {!noTop && (
            <div className="site-top no-banner" key="nav">
              {headerFix}
            </div>)}
        </TweenOneGroup>
      </header>
    );
  }
}
