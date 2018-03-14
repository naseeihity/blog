import React from 'react';
import moment from 'moment';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import styles from './post.css';

const Post = props => {
  const { title, body, user, number, updated_at } = props.article;
  const content = body.slice(0, 300);
  const author = user.login;
  const year = moment(updated_at).year();
  const month = moment.monthsShort(moment(updated_at).month());
  const day = moment(updated_at).date();

  return (
    <article className={styles.post_wapper}>
      <div className={styles.post_detail}>
        <Typography
          align="left"
          variant="title"
          color="inherit"
          className={styles.post_titile}
        >
          <Link to={`/post/${number}`}>{title}</Link>
        </Typography>
        <div className={styles.post_info}>
          <div className={styles.post_author}>
            By&nbsp;
            <span className={styles.post_author_name}>{author}</span>
          </div>
        </div>
        <div className={styles.post_date}>
          <span className={styles.post_date_day}>{day}</span>
          <span className={styles.post_date_month}>{month}</span>
          &nbsp;-&nbsp;
          <span className={styles.post_date_year}>{year}</span>
        </div>
        <p className={styles.post_content}>{content}</p>
        <div className={styles.post_footer}>
          <Button
            color="secondary"
            size="large"
            className={styles.post_footer_btn}
          >
            <Link to={`/post/${number}`}>read more</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Post;
