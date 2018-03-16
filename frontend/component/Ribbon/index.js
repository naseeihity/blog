import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import styles from './ribbon.css';

const TITLE = 'Coaco';
const SUB_TITILE = 'Life Is Short, Play More!';

class Ribbon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.curArticle ? props.curArticle.title : TITLE,
      hasSub: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.curArticle &&
      !Object.is(nextProps.curArticle, this.props.curArticle)
    ) {
      this.setState({ title: nextProps.curArticle.title, hasSub: false });
    }
  }

  render() {
    return (
      <div className={styles.ribbon}>
        <div className={styles.t_container}>
          <Typography variant="display2" align="right" color="inherit">
            <p className={styles.t_title}>{this.state.title}</p>
            {this.state.hasSub ? (
              <span className={styles.t_sub}>{SUB_TITILE}</span>
            ) : (
              ''
            )}
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ribbon;
