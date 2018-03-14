import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import JssWapper from './JssWapper';
import ScrollToTop from '../utils/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <JssWapper />
    </ScrollToTop>
  </Router>
);

export default App;
