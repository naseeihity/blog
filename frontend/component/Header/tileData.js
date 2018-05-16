import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';

import styles from './header.css';

const mailFolderListItems = (
  <div className={styles.header_hoverLink}>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ImageIcon />
      </ListItemIcon>
      <ListItemText primary="Gallery" />
    </ListItem>
    <Link to="/about">
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="About Me" />
      </ListItem>
    </Link>
  </div>
);

export default mailFolderListItems;
