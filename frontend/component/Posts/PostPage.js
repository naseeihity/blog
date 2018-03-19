import React from 'react';
import Paper from 'material-ui/Paper';
import Ribbon from '../Ribbon';
import Posts from './index';

import styles from '../Wapper/container.css';

const PostPage = props => (
  <div>
    <Ribbon hasSub={true} />
    <div className={styles.container_main}>
      <div className={styles.container_box}>
        <Paper className={styles.container_context} elevation={5}>
          <Posts total={props.total} match={props.match} />
        </Paper>
      </div>
    </div>
  </div>
);

export default PostPage;
