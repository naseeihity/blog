import React from 'react';
import Typography from 'material-ui/Typography';

import styles from './post.css';

const Post = (props) => {
  const { title, content, author } = props.article;
  return (
    <article className={styles.post_wapper}>
      <div className={styles.post_detail}>
        <Typography
          align="left"
          variant="title"
          color="inherit"
          className={styles.post_titile}
        >
          {title}
        </Typography>
        <div className={styles.post_info}>
          <div className={styles.post_author}>
            By&nbsp;
            <span className={styles.post_author_name}>{author}</span>
          </div>
        </div>
        <p>{content}</p>
        <div className={styles.post_date}>
          <span className={styles.post_date_day}>27</span>
          <span className={styles.post_date_month}>jul</span>
          &nbsp;-&nbsp;
          <span className={styles.post_date_year}>2018</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
