import React, { Component } from "react";
import Typography from "material-ui/Typography";

import styles from "./ribbon.css";

class Title extends Component {
  render() {
    return (
      <div className={styles.t_container}>
        <Typography variant="display2" align="right" color="inherit">
          <h1>Coaco</h1>
          <p className={styles.t_sub}>A Single Blog with Material Design</p>
        </Typography>
      </div>
    );
  }
}

export default Title;
