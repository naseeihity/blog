import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { NavigateNext, NavigateBefore } from 'material-ui-icons';
import ReactPaginate from 'react-paginate';
import PostList from './PostList';

import styles from './post.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handlePageClick() {
    console.log(this);
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <Typography
          align="center"
          variant="button"
          color="inherit"
          className={styles.post_title}
        >
          LATEST POSTS
        </Typography>
        <PostList articles={articles} />
        <div className={styles.post_paginate}>
          <ReactPaginate
            previousLabel={
              <NavigateBefore
                viewBox={'0 0 25 25'}
                className={styles.post_paginate_icon}
              />
            }
            nextLabel={
              <NavigateNext
                viewBox={'0 0 25 25'}
                className={styles.post_paginate_icon}
              />
            }
            breakLabel={<a href="">...</a>}
            breakClassName={'break-me'}
            activeClassName={styles.post_paginate_active}
            pageCount={15}
            initialPage={0}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            disabledClassName={styles.post_paginate_disabled}
            subContainerClassName={'pages pagination'}
          />
        </div>
      </div>
    );
  }
}

export default Posts;
