import React from 'react';
import './button.scss';

const Button = (props) => {
  const { name, id, onClick, children, appearance, submit, style, title } = props;
  return (
    <button
      id={id || null}
      type={submit ? 'submit' : 'button'}
      className={`btn__container btn__${appearance}`}
      style={style}
      onClick={onClick}
      title={title}
    >
      {name || 'Button'}
      {children || null}

    </button>
  );
};

export default Button;
