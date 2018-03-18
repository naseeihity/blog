import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { NavigateNext, NavigateBefore } from 'material-ui-icons';
import ReactPaginate from 'react-paginate';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import PostList from './PostList';

import styles from './post.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      pageSize: 5,
      pageCount: props.total || 1
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total && !Object.is(nextProps.total, this.props.total)) {
      this.setState({
        pageCount: Math.ceil(nextProps.total / this.state.pageSize)
      });
    }
  }

  getArticles(page, pageSize) {
    // TODO: get page from url param
    const opts = {
      per_page: pageSize || this.state.pageSize,
      page: page || this.state.currentPage
    };

    fetch(
      `https://api.github.com/repos/naseeihity/LearnToLearn/issues?${qs.stringify(
        opts
      )}`
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          articles
        })
      );
  }

  handlePageClick(page) {
    // TODO
    this.setState({ currentPage: page.selected + 1 });
    this.getArticles(page.selected + 1);
    window.scrollTo(0, 0);
  }

  render() {
    // TODO: Rewrite ReactPaginate with a LinkComponent props
    const { articles, pageCount } = this.state;
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
          <Link to={`/pages/${this.state.currentPage}`}>
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
              pageCount={pageCount}
              initialPage={0}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              disabledClassName={styles.post_paginate_disabled}
              subContainerClassName={'pages pagination'}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Posts;
