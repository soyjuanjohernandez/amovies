import React from 'react';
import './tabItem.scss';

const TabItem = (props) => {
  const { name, id, onClick, children, appearance, submit, style, title } = props;
  return (
    <button
      id={id || null}
      type={submit ? 'submit' : 'button'}
      className={`tab-item__container btn__${appearance}`}
      style={style}
      onClick={onClick}
      title={title}
    >
      {name || 'Tab'}
      {children || null}

    </button>
  );
};

export default TabItem;
