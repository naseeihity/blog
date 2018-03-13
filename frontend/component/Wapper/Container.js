import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Route } from 'react-router-dom';
import Ribbon from '../Ribbon';
import Posts from '../Posts/index';

import styles from './container.css';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Ribbon />
        <div className={styles.container_main}>
          <div className={styles.container_box}>
            <Paper className={styles.container_context} elevation={5}>
              <Route exact path="/" component={Posts} />
              <Route path="/post/:id" render={() => <div>Test</div>} />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
