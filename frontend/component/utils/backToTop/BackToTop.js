import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import styles from './backtotop.css';

const Param = {
  scrollY: 850,
  totalTime: 700
};

const easeInOutQuint = t =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showOrHide = this.showOrHide.bind(this);
    this.backToTop = this.backToTop.bind(this);
    this.setPos = this.setPos.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showOrHide);
  }

  showOrHide() {
    const scrollY = this.props.scrollY || Param.scrollY;
    const show = window.scrollY > scrollY;
    this.setState({ show });
  }

  setPos(scroll) {
    document.body.scrollTop = scroll;
    document.documentElement.scrollTop = scroll;
  }

  backToTop(e) {
    const scrollTop = window.pageYOffset || document.body.scrollTop;
    const raf = window.requestAnimationFrame;
    const start = Date.now();
    const step = () => {
      const now = Date.now();
      const time = now - start;
      const t = time / Param.totalTime;
      const pos = scrollTop * (1 - easeInOutQuint(t));
      this.setPos(pos);
      if (time < Param.totalTime) {
        raf(step);
      }
    };
    raf(step);
    this.props.onClick && this.props.onClick(e);
  }

  render() {
    const { show } = this.state;
    const isShow = show ? styles.container_show : styles.container_hide;
    return (
      <div className={`${isShow} ${styles.container}`} onClick={this.backToTop}>
        <Button variant="fab" color="secondary" className={styles.btn}>
          <Icon>arrow_upward</Icon>
        </Button>
      </div>
    );
  }
}

export default BackToTop;
