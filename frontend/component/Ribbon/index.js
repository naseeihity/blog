import React, { Component } from "react";
import Title from "./Title";

import styles from "./ribbon.css";

class Ribbon extends Component {
  render() {
    return (
      <div>
        <div className={styles.ribbon}>
          <Title />
        </div>
      </div>
    );
  }
}

export default Ribbon;
