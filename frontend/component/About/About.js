import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ResumeIcon from '@material-ui/icons/Portrait';
import GridList from '@material-ui/core/GridList';
import GithubCircle from 'mdi-react/GithubCircleIcon';
import Tooltip from '@material-ui/core/Tooltip';
import Ribbon from '../Ribbon';

import styles from '../Wapper/container.css';

class About extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Ribbon hasSub={false} />
        <div className={styles.container_main}>
          <div className={styles.container_box}>
            <Paper className={styles.container_context} elevation={5}>
              <GridList
                cellHeight={160}
                cols={2}
                className={styles.about_center}
              >
                <Button aria-label="resume" onClick={this.handleOpen}>
                  <Tooltip id="tooltip-fab" title="Rusume" placement="left">
                    <ResumeIcon variant="fab" />
                  </Tooltip>
                </Button>
                <Button aria-label="github">
                  <Tooltip title="github" placement="right">
                    <a href="https://github.com/naseeihity/">
                      <GithubCircle />
                    </a>
                  </Tooltip>
                </Button>
              </GridList>

              <Modal open={this.state.open} onClose={this.handleClose}>
                <iframe
                  className={styles.iframe}
                  title="resume"
                  src="https://hacknical.com/naseeihity/resume?locale=zh"
                />
              </Modal>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
