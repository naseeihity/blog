import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { NavigateNext, NavigateBefore } from 'material-ui-icons';
import { CircularProgress } from 'material-ui/Progress';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import PaginationBoxView from '../utils/paginate';
import PostList from './PostList';

import styles from './post.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      pageSize: 4,
      pageCount: 1,
      finish: false
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    const { articles, pageSize } = this.state;
    const { total } = this.props;
    const page = this.props.match && this.props.match.params.page;
    if (
      articles.length === 0 &&
      (!page || page <= Math.ceil(total / pageSize))
    ) {
      this.getArticles(page);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total && !Object.is(nextProps.total, this.props.total)) {
      this.setState({
        pageCount: Math.ceil(nextProps.total / this.state.pageSize)
      });
    }

    if (nextProps.match && !Object.is(nextProps.match, this.props.match)) {
      this.setState({ finish: false });
      this.getArticles(nextProps.match.params.page);
    }
  }

  getArticles(page = 1, pageSize) {
    const opts = {
      per_page: pageSize || this.state.pageSize,
      page: page || this.props.match.params.page
    };

    fetch(
      `https://api.github.com/repos/naseeihity/LearnToLearn/issues?${qs.stringify(
        opts
      )}`
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          articles,
          pageCount: Math.ceil(this.props.total / this.state.pageSize),
          currentPage: opts.page,
          finish: true
        })
      );
  }

  render() {
    const { articles, pageCount, currentPage, finish } = this.state;
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
        {finish ? (
          <div>
            <PostList articles={articles} />
            <div className={styles.post_paginate}>
              <PaginationBoxView
                to="/pages"
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
                breakLabel={<Link to="/pages">...</Link>}
                breakClassName={'break-me'}
                activeClassName={styles.post_paginate_active}
                pageCount={pageCount}
                initialPage={0}
                forcePage={currentPage - 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                containerClassName={'pagination'}
                disabledClassName={styles.post_paginate_disabled}
                subContainerClassName={'pages pagination'}
              />
            </div>
          </div>
        ) : (
          <div className={styles.post_progress}>
            <CircularProgress size={70} color="secondary" />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
