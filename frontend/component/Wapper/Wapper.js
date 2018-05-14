import React, { Component } from 'react';
import Container from './Container';
import Nav from '../Header/Nav';
import FootInfo from '../Footer/Footer';
import BackToTop from '../utils/backToTop/BackToTop';
import styles from './container.css';

class Wapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false
    };

    this.changeSideMenu = this.changeSideMenu.bind(this);
  }

  changeSideMenu(open) {
    this.setState({ sideMenuOpen: open });
  }

  render() {
    const { sideMenuOpen } = this.state;
    const leftMargin = sideMenuOpen
      ? styles.container_shiftLeft
      : styles.container_shiftRight;
    return (
      <div>
        <Nav changeSideMenu={this.changeSideMenu} />
        <div className={leftMargin}>
          <Container />
          <FootInfo />
          <BackToTop />
        </div>
      </div>
    );
  }
}

export default Wapper;
