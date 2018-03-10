import React, { Component } from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Posts from "../Posts/index";

import styles from "./container.css";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container_main}>
        <div className={styles.container_box}>
          <Paper className={styles.container_context} elevation={5}>
            <Typography
              align="center"
              variant="button"
              color="inherit"
              className={styles.container_title}
            >
              LATEST POSTS
            </Typography>
            <Posts />
          </Paper>
        </div>
      </div>
    );
  }
}

export default Container;
