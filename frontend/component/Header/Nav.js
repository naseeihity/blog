import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { AccountCircle, Edit } from 'material-ui-icons';
import GithubCircle from 'mdi-react/GithubCircleIcon';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';

import styles from './header.css';

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerFixed: false,
      auth: true,
      anchorEl: null
    };
    this.changeHeader = this.changeHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeader);
  }

  changeHeader() {
    const isFixed = window.scrollY > 250;
    this.setState({ headerFixed: isFixed });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const barClass = this.state.headerFixed
      ? styles.header_barFixed
      : styles.header_bar;

    return (
      <div className={styles.header_root}>
        <AppBar className={barClass}>
          <Toolbar>
            <IconButton
              className={styles.header_menuButton}
              color="inherit"
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
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
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
    );
  }
}

export default MenuAppBar;
