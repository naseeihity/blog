import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import mailFolderListItems from './tileData';
import styles from './header.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
    this.sideMenuClose = this.sideMenuClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  sideMenuClose() {
    this.props.handleDrawerClose(false);
  }

  render() {
    const { open } = this.state;
    return (
      <Drawer
        variant="persistent"
        open={open}
        className={styles.header_drawerPaper}
      >
        <div className={styles.header_drawerHeader}>
          <IconButton onClick={this.sideMenuClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
      </Drawer>
    );
  }
}

export default SideMenu;
