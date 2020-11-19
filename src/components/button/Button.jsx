import React from 'react';
import './button.scss';

const Button = (props) => {
  const { name, id, onClick, children, appearance, submit, style, title } = props;
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn__container btn__${appearance}`}
      id={id || null}
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
