import React from 'react';

const BreakView = props => {
  const label = props.breakLabel;
  const className = props.breakClassName || 'break';

  return (
    <li className={className} data-index={props.index}>
      {React.cloneElement(label, { to: `${props.to}/${props.index + 1}` })}
    </li>
  );
};

export default BreakView;
