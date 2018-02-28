import React, { Component } from "react";
import "./container.css";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import styles from "./container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className={styles.container_main}>
        <div className={styles.container_box}>
          <Paper className={styles.container_context} elevation={5} />
        </div>
      </div>
    );
  }
}

export default Container;
