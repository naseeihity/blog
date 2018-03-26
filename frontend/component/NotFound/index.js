import React from 'react';
import Ribbon from '../Ribbon';
import styles from './notFound.css';

const NoMatch = ({ location, noRibbon }) => (
  <div>
    {!noRibbon && <Ribbon />}
    <h1 className={styles.notFound_title}>404</h1>
    <h3 className={styles.notFound_subTitle}>
      The Page{' '}
      <code>
        {' '}
        {(location && location.pathname) || window.location.pathname}{' '}
      </code>{' '}
      You're Looking For Was Not Found!
    </h3>
  </div>
);

export default NoMatch;
