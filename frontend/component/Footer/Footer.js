import React from 'react';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import styles from './footer.css';

const FootInfo = () => (
  <footer className={styles.footer_container}>
    <p>&#169; 2018 Creative Coaco, all rights reserved.</p>
    <Typography>
      <Icon className={styles.footer_icon}>favorite</Icon>BEING YOUNG IS TO
      WANT.
    </Typography>
  </footer>
);

export default FootInfo;
