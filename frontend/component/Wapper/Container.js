import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Posts from '../Posts/index';
import ReactPaginate from 'react-paginate';
import { NavigateNext, NavigateBefore } from 'material-ui-icons';

import styles from './container.css';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  handlePageClick() {
    console.log(this);
  }

  render() {
    return (
      <div className={styles.container_main}>
        <div className={styles.container_box}>
          <Paper className={styles.container_context} elevation={5}>
            <Typography
              align="center"
              variant="button"
              color="inherit"
              className={styles.container_title}
            >
              LATEST POSTS
            </Typography>
            <Posts />
            <div className={styles.container_paginate}>
              <ReactPaginate
                previousLabel={
                  <NavigateBefore
                    viewBox={'0 0 25 25'}
                    className={styles.container_paginate_icon}
                  />
                }
                nextLabel={
                  <NavigateNext
                    viewBox={'0 0 25 25'}
                    className={styles.container_paginate_icon}
                  />
                }
                breakLabel={<a href="">...</a>}
                breakClassName={'break-me'}
                activeClassName={styles.container_paginate_active}
                pageCount={15}
                initialPage={0}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                disabledClassName={styles.container_paginate_disabled}
                subContainerClassName={'pages pagination'}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Container;
