import React from 'react';
import Container from './Container';
import Nav from '../Header/Nav';
import FootInfo from '../Footer/Footer';
import BackToTop from '../utils/backToTop/BackToTop';

const Wapper = () => (
  <div>
    <Nav />
    <Container />
    <FootInfo />
    <BackToTop />
  </div>
);

export default Wapper;
