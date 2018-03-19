import React from 'react';
import { Link } from 'react-router-dom';

const PageView = props => {
  let cssClassName = props.pageClassName;
  const linkClassName = props.pageLinkClassName;
  const { onClick, href, to, page } = props;
  const url = `${to}/${page}` || href;

  let ariaLabel = `Page ${props.page}${
    props.extraAriaContext ? ` ${props.extraAriaContext}` : ''
  }`;
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = `Page ${props.page} is your current page`;
    if (typeof cssClassName !== 'undefined') {
      cssClassName = `${cssClassName} ${props.activeClassName}`;
    } else {
      cssClassName = props.activeClassName;
    }
  }

  return (
    <li className={cssClassName}>
      <Link
        to={url}
        onClick={onClick}
        className={linkClassName}
        tabIndex="0"
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
        onKeyPress={onClick}
      >
        {props.page}
      </Link>
    </li>
  );
};

export default PageView;
