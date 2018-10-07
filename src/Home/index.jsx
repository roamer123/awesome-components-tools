import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Page1 from './Page1';
import Footer from './Footer';
import './static/style';

class Home extends React.PureComponent {
  state = {
    noTop: true,
  };

  render() {
    const { noTop } = this.state;
    return (
      [
        <Header key="nav" noTop={noTop} />,
        <Page1 key="page1" />,
        <Footer key="footer" />,
        <DocumentTitle title="awesome website" key="title" />,
      ]
    );
  }
}
export default Home;

