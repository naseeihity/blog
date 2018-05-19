import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Ribbon from '../Ribbon';
import tileData from './mock';
import LazyImg from '../utils/lazyImg/LazyImg';

import styles from '../Wapper/container.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Ribbon hasSub={false} />
        <div className={styles.container_main}>
          <div className={styles.container_box}>
            <Paper className={styles.container_context} elevation={5}>
              <div className={styles.img_box}>
                {tileData.map(tile => (
                  <LazyImg
                    src={tile.src}
                    alt={tile.alt}
                    img={tile}
                    key={tile.src}
                  />
                ))}
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
