import React, { Component } from 'react';
import styles from './lazyImg.css';

require('intersection-observer');

const IMG_S = '?imageView2/2/w/30/h/20/interlace/0/q/100';

if (!('MutationObserver' in window)) {
  IntersectionObserver.prototype.POLL_INTERVAL =
    IntersectionObserver.prototype.THROTTLE_TIMEOUT || 100;
}

class LazyImg extends Component {
  constructor(props) {
    super(props);

    this.bigImg = React.createRef();
    this.imgContainer = React.createRef();

    this.state = {
      loadSmall: false,
      loadLarge: false,
      bigSrc: '',
      divStyle: {},
      iStyle: {},
      lineHeight: 300 || props.lineHeight
    };
    this.loadSmallImg = this.loadSmallImg.bind(this);
    this.loadBigImg = this.loadBigImg.bind(this);
    this.lazyObserver = this.lazyObserver.bind(this);
  }

  componentDidMount() {
    const { lineHeight } = this.state;
    const { img } = this.props;
    const { width, height } = img;

    this.setState({
      divStyle: {
        width: `${width * lineHeight / height}px`,
        flexGrow: width * lineHeight / height
      },
      iStyle: {
        paddingBottom: `${height / width * 100}%`
      }
    });

    this.lazyObserver();
  }

  loadSmallImg() {
    this.setState({ loadSmall: true });
  }

  lazyObserver() {
    const { src } = this.props;
    const placeholder = this.imgContainer.current;
    const bigImg = this.bigImg.current;

    const observer = new IntersectionObserver(
      () => {
        this.setState({ bigSrc: src });
      },
      {
        root: null,
        rootMargin: '200px'
      }
    );
    observer.observe(placeholder);

    bigImg.addEventListener('load', () => {
      this.loadBigImg(observer);
    });
  }

  loadBigImg(observer) {
    const placeholder = this.imgContainer.current;
    this.setState({ loadBigImg: true });
    observer.unobserve(placeholder);
  }

  componentWillUnmount() {
    const bigImg = this.bigImg.current;
    bigImg.removeEventListener('load', this.loadBigImg);
  }

  render() {
    const { src } = this.props;
    const { alt } = this.props || 'Coaco';
    const { bigSrc } = this.state;
    const smallClass = this.state.loadSmall ? styles.loaded : '';
    const largeClass = this.state.loadBigImg
      ? `${styles.img_large} ${styles.loaded}`
      : '';
    return (
      <picture
        ref={this.imgContainer}
        className={styles.placeholder}
        style={this.state.divStyle}
      >
        <i style={this.state.iStyle} />
        <img
          src={src + IMG_S}
          alt={alt}
          onLoad={this.loadSmallImg}
          className={`${styles.img_small} ${smallClass}`}
        />
        <img src={bigSrc} alt={alt} ref={this.bigImg} className={largeClass} />
        <span>{alt}</span>
      </picture>
    );
  }
}

export default LazyImg;
