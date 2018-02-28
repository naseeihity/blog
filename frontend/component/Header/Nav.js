import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import Menu, { MenuItem } from "material-ui/Menu";

const styles = {
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  bar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  barFixed: {
    backgroundColor: "#47717F",
    position: "fixed",
    top: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

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
    window.addEventListener("scroll", this.changeHeader);
  }

  changeHeader() {
    const isFixed = window.scrollY > 50;
    this.setState({ headerFixed: isFixed });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const barClass = this.state.headerFixed ? classes.barFixed : classes.bar;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={barClass}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Coaco
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
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
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
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

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
