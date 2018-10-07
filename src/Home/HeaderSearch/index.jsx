import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input, Icon } from 'antd';

export default class HeaderSearch extends React.PureComponent {
  static defaultProps = {
    className: '',
    placeholder: '',
    // onSearch: () => {},
    onPressEnter: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    // onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
  }

  state = {
    searchMode: this.props.defaultOpen,
    value: '',
  };

  // onSearch = (e) => {
  //   console.log(e);
  // }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.timeout = setTimeout(() => {
        this.props.onPressEnter(this.state.value); // Fix duplicate onPressEnter
      }, 0);
    }
  }

  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.focus();
      }
    });
  };
  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  };

  render() {
    const { className, placeholder } = this.props;
    const inputClass = classNames('input', {
      show: this.state.searchMode,
    });
    return (
      <span className={classNames(className, 'headerSearch')} onClick={this.enterSearchMode} >
        <Icon type="search" key="Icon" />
        <span className={inputClass} key="Input" >
          <Input
            onKeyDown={this.onKeyDown}
            placeholder={placeholder}
            onBlur={this.leaveSearchMode}
          />
        </span>
      </span>
    );
  }
}
