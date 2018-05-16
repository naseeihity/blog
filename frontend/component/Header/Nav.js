import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { AccountCircle, Edit } from 'material-ui-icons';
import GithubCircle from 'mdi-react/GithubCircleIcon';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

import styles from './header.css';

class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerFixed: false,
      auth: false,
      anchorEl: null,
      sideMenuOpen: false
    };
    this.changeHeader = this.changeHeader.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeader);
  }

  changeHeader() {
    const isFixed = window.scrollY > 250;
    this.setState({ headerFixed: isFixed });
  }

  handleDrawerOpen() {
    this.setState({ sideMenuOpen: true });
    this.props.changeSideMenu(true);
  }

  handleDrawerClose(close) {
    this.setState({ sideMenuOpen: close });
    this.props.changeSideMenu(false);
  }

  changePage() {
    this.setState({ sideMenuOpen: false });
    this.props.changeSideMenu(false);
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, anchorEl, sideMenuOpen, headerFixed } = this.state;
    const open = Boolean(anchorEl);

    const barClass = headerFixed ? styles.header_barFixed : styles.header_bar;
    const leftMargin = sideMenuOpen
      ? styles.header_shiftLeft
      : styles.header_shiftRight;
    const hide = sideMenuOpen ? styles.header_hideMenu : '';

    return (
      <React.Fragment>
        <div className={styles.header_root}>
          <AppBar className={`${barClass} ${leftMargin}`}>
            <Toolbar>
              <IconButton
                className={`${styles.header_menuButton} ${hide}`}
                color="inherit"
                onClick={this.handleDrawerOpen}
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={styles.header_typography}
              >
                <Link to="/">Coaco</Link>
              </Typography>
              <IconButton color="inherit">
                <a
                  href="https://github.com/naseeihity/blog"
                  className={styles.header_link}
                >
                  <GithubCircle className={styles.header_github} />
                </a>
              </IconButton>
              {auth && (
                <div>
                  <IconButton color="inherit">
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
        <SideMenu
          open={sideMenuOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
      </React.Fragment>
    );
  }
}

export default MenuAppBar;
